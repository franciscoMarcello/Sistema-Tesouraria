import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GICAT from "../../Assets/GICAT.png";
import "./login.css";
import Axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  function logar() {
    if (email === "" || senha === "") {
      setMensagem("Usuário/senha não informados!!");
    } else {
      Axios.post("http://localhost:3001/api/login", {
        nome: email,
        senha: senha,
      }).then(response => {
        setMensagem(response.data.message);
        if (response.data.message === "Logado!") {
          dispatch({
            type: "LOG_IN",
            usuarioName: email,
          });
          history.push("/Home");
        }
      });
    }
  }

  return (
    <div class="wrapper fadeInDown">
      {useSelector(state => state.usuarioLogado) > 0
        ? history.push("/Home")
        : null}
      <div id="formContent">
        <div class="fadeIn first">
          <div className="my-3 pt-2">
            <img src={GICAT} alt="Logo" width="150" height="100" />
          </div>
        </div>
        <form className="style">
          <input
            type="email"
            id="Login"
            class="fadeIn second"
            name="login"
            placeholder="Usuário"
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type="password"
            id="Senha"
            class="fadeIn third"
            name="senha"
            placeholder="Senha"
            onChange={e => setSenha(e.target.value)}
          />
        </form>
        <div id="formFooter">
          <input
            type="button"
            onClick={logar}
            class="fadeIn fourth "
            value="Logar"
          />
          <div className="mensagem-login">
            <p>{mensagem}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
