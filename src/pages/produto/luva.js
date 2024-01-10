import { useEffect } from "react";
import Produto from "../../components/Produto";

const Luva = ({ stateChangeColor, ...props }) => {
  const produto = {
    nome: "Kit Cozinha Luva e Descanso",
    avaliacao: 4.8,
    dias_entrega: 7,
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis malesuada quam, quis tincidunt nibh rhoncus ut. Donec commodo fermentum ante sed ullamcorper. Fusce vestibulum ornare nisi id sagittis. Aliquam sagittis tincidunt rutrum.",
    images: ["luva1.webp", "luva2.webp", "luva3.webp", "luva4.webp"],
    breadcrumb: ["Moda criativa", "Luvas"],
    tamanhos: [
      { descricao: "P", valor: "20,00" },
      { descricao: "M", valor: "25,00" },
      { descricao: "G", valor: "30,00" },
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

export default Luva;
