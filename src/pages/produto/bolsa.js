import { useEffect } from "react";
import Produto from "../../components/Produto";

const Bolsa = ({ stateChangeColor, ...props }) => {
  const produto = {
    nome: "Bolsa com alça ajustável",
    avaliacao: 4.6,
    dias_entrega: 14,
    descricao:
      "Nulla eu dignissim justo aenean eget mi ullam corper, aliquet sapien at, luctus ex. Phasellus justo neque, rutrum placerat tellus sit amet, sagittis bibendum magna. Sed eleifend non magna vitae iaculis.",
    images: [
      "bolsa1.webp",
      "bolsa2.webp",
      "bolsa3.webp",
      "bolsa4.webp",
      "bolsa5.webp",
    ],
    breadcrumb: ["Moda criativa", "Bolsas"],
    tamanhos: [
      { descricao: "P", valor: "40,00" },
      { descricao: "M", valor: "55,00" },
      { descricao: "G", valor: "70,00" },
    ],
  };

  useEffect(() => {
    //   stateChangeColor("#edf4e6");
    //   return () => {
    //     stateChangeColor("#fbf4ea");
    //   };
  }, []);

  return <Produto data={produto} />;
};

export default Bolsa;
