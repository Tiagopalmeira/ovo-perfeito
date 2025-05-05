import React from "react";
import { useNavigate } from "react-router-dom";
import start from "../assets/button_start.png";
import ovoCozido from "../assets/ovo_cozido.gif";
import ovoMeioMole from "../assets/ovo_meioMole.gif";
import ovoMole from "../assets/ovo_mole.gif";
import ovoPonto from "../assets/ovo_ponto.gif";

const eggTimes = {
  cozido: 600, // 10 min
  mole: 300, // 5 min
  meioMole: 420, // 7 min
  ponto: 540, // 9 min
};

export default function TypeEgg() {
  const navigate = useNavigate();

  const handleClick = (tipo) => {
    console.log(`Iniciar preparo do ovo: ${tipo}`);
    navigate(`/cronometro/${tipo}`); // Redireciona para a página do cronômetro com o tipo de ovo
  };

  return (
    <div className="container">
      <h1>Escolha o seu tipo: </h1>
      <div className="container-egg">
        <div className="egg-block">
          <img src={ovoMole} alt="Ovo mole / Soft egg" />
          <button onClick={() => handleClick("mole")} className="button-start">
            <img
              src={start}
              alt="Botão iniciar / Start button"
              className="button"
            />
          </button>
        </div>

        <div className="egg-block">
          <img src={ovoMeioMole} alt="Ovo meio mole / Soft-boiled egg" />
          <button
            onClick={() => handleClick("meioMole")}
            className="button-start"
          >
            <img
              src={start}
              alt="Botão iniciar / Start button"
              className="button"
            />
          </button>
        </div>

        <div className="egg-block">
          <img src={ovoPonto} alt="Ovo no ponto / Medium egg" />
          <button onClick={() => handleClick("ponto")} className="button-start">
            <img
              src={start}
              alt="Botão iniciar / Start button"
              className="button"
            />
          </button>
        </div>

        <div className="egg-block">
          <img src={ovoCozido} alt="Ovo cozido / Boiled egg" />
          <button
            onClick={() => handleClick("cozido")}
            className="button-start"
          >
            <img
              src={start}
              alt="Botão iniciar / Start button"
              className="button"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
