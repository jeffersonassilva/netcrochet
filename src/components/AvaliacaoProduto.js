import React from "react";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";

const AvaliacaoProduto = ({ stars, quantidade }) => {
  const estrelasCompletas = Math.floor(stars); // Número inteiro de estrelas completas
  const temMeiaEstrela = stars % 1 !== 0; // Verifica se há meia estrela

  // Renderiza as estrelas completas
  const estrelasCompletasIcons = Array.from({ length: estrelasCompletas }).map(
    (_, index) => <IoIosStar key={index} className="text-yellow-500" />
  );

  // Renderiza meia estrela se necessário
  const meiaEstrelaIcon = temMeiaEstrela ? (
    <IoIosStarHalf className="text-yellow-500" />
  ) : null;

  return (
    <div className="flex gap-2 items-center">
      <div className="flex">
        {estrelasCompletasIcons} {meiaEstrelaIcon}
      </div>
      <span className="text-sm text-gray-900">
        {stars} / 5.0 <span className="text-gray-500"></span>
      </span>
    </div>
  );
};

export default AvaliacaoProduto;
