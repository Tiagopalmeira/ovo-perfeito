import "../css/main.css"; //css principal contendo classes desse arquivo.
import button from "../assets/button_start.png"; //imagem do botão
import logo from "../assets/ovo_sorriso.gif"; //imagem do logo


export default function Home() {
    function handleClick() {
        window.location.href = "/typeegg"; 
    }



  return (
    <div className="container">
      <img src={logo} alt="Ovo sorrindo / Egg smiling" />
      <h1> Seu ovo perfeito </h1>
          <button onClick={handleClick} className="button-start">
              
        <img src={button}
                  alt="Botão iniciar / Start button" className="button" />
              
      </button>
    </div>
  );
}
