 {/* import logo from "../assets/logo.png";*/}

const Header = () => {
  return (
    <div className="w-full h-20 px-8 py-4 relative bg-purple-100 border-b border-Border-Default-Default flex flex-row justify-between items-center">
                       {/* logo imagem*/}
      <div className="flex items-center gap-2">
        {/*<img src={logo} alt="Logo Bem Mental" className="w-10 h-10" />*/}
        <span className="text-xl font-bold text-[#4a4848]">BEM MENTAL</span>
      </div>

      {/* Botões Entrar/Registrar */}
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-white text-[#4a4848] rounded-md shadow hover:bg-gray-100">Entrar</button>
        <button className="px-4 py-2 bg-[#E2B9FF] text-[#4a4848] rounded-md shadow hover:bg-purple-200">Registrar</button>
      </div>
    </div>
  );
};

export default Header; 