import { Link } from "react-router-dom";
import { useState } from "react";
import './login.scss'
import OpenEye from "../../imgs/icons/olho.png"
import ClosedEye from "../../imgs/icons/olho fechado.png"
import Logo from "../../imgs/logo_color.png"
import Auth from "./script"

function Login() {
  const userLog = localStorage.getItem("userLog");
  if (userLog === "1") {
    window.location.href = "/";
  }

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
              <input type={showPassword ? 'text' : 'password'} name="password" id="pass-Login-Input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password">
              </input>
              <span
                className="EyeIcon"
                onClick={togglePasswordVisibility}
              >{showPassword ? (
                <img src={ClosedEye} alt="Fechar olho" />
              ) : (
                <img src={OpenEye} alt="Abrir olho" />
              )}</span>
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