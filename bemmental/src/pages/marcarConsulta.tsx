import "../styles/marcarConsulta.css";
import "../firebase/firebaseConfig";
import Header from "../components/Header";

export default function MarcarConsulta() {
  return (
    <>
      <Header />

      <div className="consulta-container">
        <h1>Encontre seu psicólogo aqui!</h1>
        <form className="consulta-form">
          <div className="form-group">
            <label>Especialidade</label>
            <input type="text" placeholder="Selecione a especialidade" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Data Início</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Data Fim</label>
              <input type="date" />
            </div>
          </div>
          <div className="form-group">
            <label>Período</label>
            <div className="periodo-group">
              <button type="button" className="periodo-btn">Manhã</button>
              <button type="button" className="periodo-btn selected">Tarde</button>
              <button type="button" className="periodo-btn">Noite</button>
            </div>
          </div>
          <div className="form-group">
            <label>Dia da semana</label>
            <input type="text" placeholder="Selecione o dia" />
          </div>
          {/* Adicione outros campos conforme necessário */}
        </form>
      </div>
    </>
  );
}
