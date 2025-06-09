import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#E2B9FF] py-4 px-8 flex flex-col md:flex-row items-center justify-between text-[#4a4848] text-sm">
      {/* Social Media Icons */}
      <div className="flex space-x-4 mb-4 md:mb-0">
        <a href="#" className="hover:text-gray-900">X</a>
        <a href="#" className="hover:text-gray-900">📸</a>
        <a href="#" className="hover:text-gray-900">▶️</a>
        <a href="#" className="hover:text-gray-900">🔗</a>
      </div>

      {/* Copyright Information */}
      <div className="text-center md:text-left mb-4 md:mb-0">
        <span>Copyright Bem Mental - @2025. Todos os direitos reservados</span>
      </div>

      {/* Privacy and Terms Links */}
      <div className="flex space-x-4">
        <a href="#" className="hover:text-gray-900">Política de Privacidade</a>
        <a href="#" className="hover:text-gray-900">Termos de Uso</a>
      </div>
    </footer>
  );
};

export default Footer; 