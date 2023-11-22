import { Link } from "react-router-dom";
import './login.scss'
import Logo from "../../imgs/logo_color.png"
import Auth from "./script"

function Login() {
  const userLog = localStorage.getItem("userLog");
  if (userLog === "1") {
    window.location.href = "/";
  }
  
  return (
    <section className="LoginPage">
      <div className="LoginContainer">
        <figure className="LogoIMG">
          <Link to="/"><img
            src={Logo}
            alt="Galo Weather Logo"></img></Link>
        </figure>
        <div className="LogContainer">
          <h1>Login</h1>
          <form className="LoginForm" onSubmit={Auth}>
            <span className="LoginAlert" id="loginAlert">Alerta!</span>
            <label className="LoginInputs">
              <span>Email</span>
              <input type="text" name="email" id="loginBaseInput" placeholder="Nome@email.com"></input>
            </label>
            <label className="LoginInputs">
              <span>Senha</span>
              <input type="password" name="password" id="pass-Login-Input" placeholder="password">
              </input>
            </label>
            <button>Entrar</button>
          </form>
          <div className="RedirectSignup">
            <p>Nao possui uma conta?</p>
            <Link to="/Sign-up" id="redirectSignup">Cadastre-se</Link>
          </div>
          <div className="RedirectHome">
            <Link to="/">Voltar a página inicial</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login