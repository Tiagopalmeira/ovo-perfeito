import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/main.css";
import ovoCozido from "../assets/ovo_cozido.gif";
import ovoMeioMole from "../assets/ovo_meioMole.gif";
import ovoMole from "../assets/ovo_mole.gif";
import ovoPonto from "../assets/ovo_ponto.gif";
import reiniciar from "../assets/button_restart.gif";
import start from "../assets/button_start.png";
import parar from "../assets/button_parar.gif";
import curiosidades from "../utils/curiosidades.js";
import alarme from "../assets/notif.mp3"; // Som de alarme

const eggTimes = {
  cozido: 600,
  mole: 300,
  meioMole: 420,
  ponto: 540,
};

const eggImages = {
  cozido: ovoCozido,
  mole: ovoMole,
  meioMole: ovoMeioMole,
  ponto: ovoPonto,
};

const CronometroPage = () => {
  const { tipo } = useParams();
  const navigate = useNavigate();

  const [tempoRestante, setTempoRestante] = useState(eggTimes[tipo]);
  const [isActive, setIsActive] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [curiosidade, setCuriosidade] = useState("");

   
  useEffect(() => {
    if ("Notification" in window && Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  // Mostra curiosidades
  useEffect(() => {
    const curiosidadeInterval = setInterval(() => {
      const total = Object.keys(curiosidades).length;
      const randomKey = Math.floor(Math.random() * total) + 1;
      setCuriosidade(curiosidades[randomKey]);

      const timeout = setTimeout(() => setCuriosidade(""), 5000);
      return () => clearTimeout(timeout);
    }, 10000);

    return () => clearInterval(curiosidadeInterval);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${minutes}:${sec < 10 ? "0" : ""}${sec}`;
  };

  const notificarFinalizacao = () => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("⏲️ Ovo pronto!", {
        body: "Seu ovo já está no ponto! 🥚✨",
        icon: eggImages[tipo],
      });
    }

    const audio = new Audio(alarme);
    audio.play().catch((err) => console.warn("Erro ao tocar áudio:", err));
  };

  const startTimer = () => {
    if (!isActive) {
      setIsActive(true);
      const id = setInterval(() => {
        setTempoRestante((prev) => {
          if (prev <= 1) {
            clearInterval(id);
            setIsActive(false);
            notificarFinalizacao();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      setIntervalId(id);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIsActive(false);
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setIsActive(false);
    setTempoRestante(eggTimes[tipo]);
  };

  return (
    <div className="cronometro-page">
      <h1>Aguarde até que o ovo esteja pronto!</h1>
      <img src={eggImages[tipo]} alt={`Animação do ovo ${tipo}`} />

      <div className="cronometro-background">
        <h3>{formatTime(tempoRestante)}</h3>
      </div>

      <div className="botoes-timer">
        <button onClick={startTimer} disabled={isActive}>
          <img src={start} alt="Iniciar timer" />
        </button>
        <button onClick={stopTimer} disabled={!isActive}>
          <img src={parar} alt="Parar timer" />
        </button>
        <button onClick={resetTimer}>
          <img src={reiniciar} alt="Reiniciar timer" />
        </button>
      </div>

      {curiosidade && <h4 className="curiosidade-box">{curiosidade}</h4>}

      <button onClick={() => navigate("/")}>
        <h2>Voltar para a seleção</h2>
      </button>
    </div>
  );
};

export default CronometroPage;
