import { Link } from "react-router-dom";
import "./signup.scss";
import { useEffect, useState } from "react";
import Logo from "../../imgs/logo_color.png"
import signUp from "./script"
import OpenEye from '../../imgs/icons/olho.png';
import ClosedEye from '../../imgs/icons/olho fechado.png';

function SignUp() {
  useEffect(() => {
    alert('Nao use cadastros reais, apenas ficticios para teste');
  }, []);

  const userLog = localStorage.getItem("userLog");
  if (userLog === "1") {
    window.location.href = "/";
  }

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="SignUpPage">
      <div className="LoginContainer">
        <figure className="LogoIMG">
          <Link to="/"><img
            src={Logo}
            alt="Galo Weather Logo"></img></Link>
        </figure>
        <div className="SignUpContainer">
          <h1>Cadastro</h1>
          <form className="SignUpForm" onSubmit={signUp}>
            <span className="SignUpAlert" id="SignUpAlert">Alerta!</span>
            <label className="SignUpInputs">
              <span>Email</span>
              <input type="text" name="email" id="login-Input" placeholder="Nome@email.com"></input>
            </label>
            <label className="SignUpInputs">
              <span>Nome</span>
              <input type="text" name="name" id="login-Name-Input" placeholder="Nome e sobrenome"></input>
            </label>
            <label className="SignUpInputs">
              <span>Senha</span>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="pass-SignUp-Input"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <span
                className="EyeIcon"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <img src={ClosedEye} alt="Fechar olho" />
                ) : (
                  <img src={OpenEye} alt="Abrir olho" />
                )}
              </span>
            </label>
            <label className="SignUpInputs">
              <span>Confirmar Senha </span>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="passwordConfirm"
                id="confirmPass-SignUp-Input"
                placeholder="Confirme senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
              <span
                className="EyeIcon"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? (
                  <img src={ClosedEye} alt="Fechar olho" />
                ) : (
                  <img src={OpenEye} alt="Abrir olho" />
                )}
              </span>
            </label>
            <button>Cadastrar</button>
          </form>
          <div className="RedirectSignin">
            <p>Ja possui uma conta?</p>
            <Link to="/Sign-in">Faça login</Link>
          </div>
          <div className="RedirectHome">
            <Link to="/">Voltar a página inicial</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp