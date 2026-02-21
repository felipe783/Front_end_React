import "./style.css";
import { Animated, Botao } from "../animacao/animacao";

function Login() {
  return (
    <div className="container">

      <Animated className="Felipe">
        <h1>Felipe</h1>
      </Animated>

      <div className="formulario">
        <form>
          <input placeholder="Nome" name="nome" type="text" />
          <input placeholder="Idade" name="idade" type="number" />
          <input placeholder="Email" name="email" type="email" />
        </form>
      </div>

      <Botao className="btnCadas">
        <button >Cadastro</button>
      </Botao>
    </div>
  );
}

export default Login;
