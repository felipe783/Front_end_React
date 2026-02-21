import "./style.css";
import { useNavigate } from "react-router-dom";
import * as animacao from "../animacao/animacao.jsx";

function Home() {
  let navigate = useNavigate();

  return (
    <div className="container">

      <div className="btn">
        <button onClick={() => window.open("https://github.com/felipe783?tab=repositories", "_blank")}>
          Github
        </button>
        <button onClick={() => navigate('/login')}>Login</button>
      </div>

      <div className="container_titulo">
        <h1>WorkSpace</h1>
        <h2>Workspace desenvolvido como projeto de portfólio, com foco em organização e produtividade.A proposta é apresentar uma solução simples e funcional para gerenciamento de tarefas e ideias, demonstrando habilidades técnicas e boas práticas de desenvolvimento.</h2>
      </div>

      <div className="container_lista">
        <animacao.Lista_ul className="lista_link">
          <animacao.Lista_li className="lista_item"/>
        </animacao.Lista_ul>
      </div>

      <div className="container_apresenta">
        <h1 id="projeto"></h1>
        <h1 id="funcionalidade"></h1>  
        <h1 id="stack"></h1>
      </div>
    </div>
  );
}

export default Home;