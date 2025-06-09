import Header from "../components/Header";
import Footer from "../components/Footer";

// Importar as imagens necessárias para o design
import meditando from "../assets/home.png";
import meditando2 from "../assets/mentalbem.png";
import meditando3 from "../assets/home 2.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5D4FF] flex flex-col">
      <Header />

      <main className="flex flex-col p-4">
        <div className="flex flex-col lg:flex-row justify-between w-full max-w-6xl items-start">
          {/* Seção de Imagens à Esquerda */}
          <div className="grid grid-cols-2 gap-4 p-8 bg-[#E2B9FF] rounded-lg shadow-lg mb-8 lg:mb-0 lg:mr-8">
            <img src={meditando} alt="Pessoa Meditando" className="w-full h-auto rounded-md" />
            <img src={meditando2} alt="Pessoa Abraçando a Si Mesma" className="w-full h-auto rounded-md" />
            <img src={meditando3} alt="Terapia Sentada" className="w-full h-auto rounded-md" />
          </div>

          {/* Seção de Texto e Call to Action */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#4a4848] mb-6">
              SUA MENTE REFLETE O SEU EU ATUAL, CUIDE DELA.
            </h1>
            <p className="text-xl text-[#4a4848] mb-8 max-w-2xl">
              Cadastre-se gratuitamente e faça sua terapia sem sair de casa!
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4a4848] mt-12 mb-6">
              ENCONTRE O PSICÓLOGO IDEAL!
            </h2>
            <p className="text-lg text-[#4a4848] max-w-xl">
              Buscando um profissional que te entenda e deixe a conversa leve?
              Aqui você alinha o seu perfil ao do psicólogo!
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
