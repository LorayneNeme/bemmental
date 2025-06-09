import "../firebase/firebaseConfig";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "../styles/login.css";
import logo from "../assets/logo.png";

function Login() {
  const [tipoUsuario, setTipoUsuario] = useState("paciente");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, usuario, senha);
      console.log("Login realizado com sucesso!");
      navigate("/marcar-consulta");
    } catch {
      alert("Usuário ou senha inválidos!");
    }
  };

  const irParaCadastro = () => {
    navigate(
      tipoUsuario === "paciente"
        ? "/cadastro-paciente"
        : "/cadastro-psicologo"
    );
  };

  const handleBoxClick = () => {
    if (!isLoginOpen) setIsLoginOpen(true);
  };

  return (
    <div className="login-container">
      <header className="header-logo">
        <img src={logo} alt="Logo Bem Mental" className="logo" />
      </header>

      <div
        className={`login-box ${isLoginOpen ? "open" : ""}`}
        onClick={handleBoxClick}
      >
        {!isLoginOpen ? (
          <span style={{ fontWeight: "bold" }}>Entrar</span>
          
        ) : (
          <div className="login-form">
            <h2>Conecte-se</h2>

            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="paciente"
                  checked={tipoUsuario === "paciente"}
                  onChange={() => setTipoUsuario("paciente")}
                />
                Paciente
              </label>
              <label>
                <input
                  type="radio"
                  value="psicologo"
                  checked={tipoUsuario === "psicologo"}
                  onChange={() => setTipoUsuario("psicologo")}
                />
                Psicólogo
              </label>
            </div>

            <form onSubmit={handleLogin} className="form">
              <input
                type="text"
                placeholder={tipoUsuario === "paciente" ? "E-mail" : "CRP"}
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
              <button type="submit">Entrar</button>
            </form>

            <div className="cadastro-link">
              <button onClick={irParaCadastro}>
                Cadastrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;

