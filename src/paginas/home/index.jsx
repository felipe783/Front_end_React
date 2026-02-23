import "./style.css";
import { useNavigate } from "react-router-dom";
import * as animacao from "../animacao/animacao.jsx";

function Home() {
  let navigate = useNavigate();

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

      <div className="container_titulo" >
        <h1 class="card">WorkSpace</h1>
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

      <h1 className="titulo_projeto" id="projeto" >
        Sobre o Projeto
      </h1>

      <h2 className="projeto_descricao">
        Este projeto foi desenvolvido com o objetivo de aplicar conceitos
        modernos de desenvolvimento, organização de código e boas práticas de
        arquitetura. A proposta é oferecer uma solução funcional, intuitiva e
        eficiente, focando tanto na experiência do usuário quanto na performance
        da aplicação. Durante o desenvolvimento, foram utilizadas tecnologias
        atuais do mercado, priorizando escalabilidade, manutenibilidade e
        clareza na estrutura do código. O projeto também serviu como forma de
        aprofundar conhecimentos técnicos, explorar novas abordagens e colocar
        em prática conceitos aprendidos em estudos e experiências anteriores.
        Além disso, a organização do projeto foi pensada para facilitar futuras
        melhorias e expansões, permitindo que novas funcionalidades sejam
        adicionadas de forma simples e estruturada. O resultado é uma aplicação
        sólida, bem estruturada e preparada para evoluções futuras.
      </h2>

      <h1 className="titulo_funcionalidades" id="funcionalidade">
        Projeto Funcionalidades
      </h1>
      <h2 className="projeto_funcionalidades">
        O sistema oferece um conjunto completo de funcionalidades desenvolvidas
        para proporcionar uma experiência intuitiva, eficiente e segura ao
        usuário. A plataforma permite cadastro e autenticação de usuários,
        gerenciamento de perfis, controle de permissões e personalização de
        configurações individuais. Além disso, conta com recursos de
        gerenciamento de dados, possibilitando criar, visualizar, editar e
        excluir informações de forma prática. A navegação foi projetada para ser
        simples e organizada, garantindo fácil acesso às principais áreas e
        ferramentas disponíveis.
      </h2>

      <h1 className="titulo_stack" id="stack">
        Stack
      </h1>
      <h2 className="projeto_stack">
        A stack técnica do projeto foi definida com foco em desempenho,
        escalabilidade e facilidade de manutenção. No front-end, são utilizadas
        tecnologias modernas para construção de interfaces responsivas e
        interativas, garantindo uma experiência fluida ao usuário em diferentes
        dispositivos. No back-end, a aplicação conta com uma arquitetura
        estruturada e organizada, responsável pelo processamento das regras de
        negócio, autenticação, controle de permissões e integração com serviços
        externos. A comunicação entre cliente e servidor é realizada por meio de
        APIs, seguindo boas práticas de desenvolvimento.
      </h2>
    </div>
  );
}

export default Home;
