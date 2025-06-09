import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import MarcarConsulta from "./pages/marcarConsulta";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/marcar-consulta" element={<MarcarConsulta />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
