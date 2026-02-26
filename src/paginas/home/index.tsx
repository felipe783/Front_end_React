import "./style.css";
import { useNavigate } from "react-router-dom";
import * as animacao from "../animacao/animacao.js";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="btn">
        <button
          onClick={() =>
            window.open(
              "https://github.com/felipe783?tab=repositories",
              "_blank",
            )
          }
        >
          Github
        </button>
        <button onClick={() => navigate("/login")}>Login</button>
      </div>

      <div className="container_titulo">
        <h1 className="card">WorkSpace</h1>
        <h2>
          Workspace desenvolvido como projeto de portfólio, com foco em
          organização e produtividade.A proposta é apresentar uma solução
          simples e funcional para gerenciamento de tarefas e ideias,
          demonstrando habilidades técnicas e boas práticas de desenvolvimento.
        </h2>
      </div>

      <div className="container_lista">
        <animacao.Lista_ul className="lista_link">
          <animacao.Lista_li className="lista_item" />
        </animacao.Lista_ul>
      </div>

      <div className="container_descricao">
        <h1 className="card  card_titulo titulo1" id="projeto">
          Sobre o Projeto
        </h1>
        <h2 className="card_descricao descricao1" >
          O projeto foi desenvolvido para aplicar práticas modernas de
          desenvolvimento e organização de código, com foco em performance,
          escalabilidade e boa experiência do usuário. A estrutura foi planejada
          para garantir clareza, manutenibilidade e facilitar futuras melhorias
          e expansões.
        </h2>

        <h1 className="card card_titulo titulo2" id="funcionalidade">
          Funcionalidades
        </h1>
        <h2 className="card_descricao descricao2">
          Sistema intuitivo e seguro, com cadastro e login de usuários,
          gerenciamento de perfis e permissões, personalização de configurações
          e controle completo de dados (criar, editar, visualizar e excluir).
          Navegação simples e organizada para fácil acesso às principais
          funcionalidades.
        </h2>

        <h1 className="card card_titulo titulo3" id="stack">
          Stack
        </h1>
        <h2 className="card_descricao descricao3">
          Projeto com front-end moderno e responsivo, back-end estruturado para
          regras de negócio, autenticação e integrações. Comunicação via APIs,
          garantindo desempenho, escalabilidade e manutenção fácil.
        </h2>
      </div>
    </div>
  );
}

export default Home;
