import { useEffect } from "react";
import Produto from "../../components/Produto";

const Necessaire = ({ stateChangeColor, ...props }) => {
  const produto = {
    nome: "Necessaire Unissex",
    avaliacao: 4.7,
    dias_entrega: 7,
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis malesuada quam, quis tincidunt nibh rhoncus ut. Donec commodo fermentum ante sed ullamcorper. Fusce vestibulum ornare nisi id sagittis. Aliquam sagittis tincidunt rutrum.",
    images: ["necessaire1.webp", "necessaire2.webp", "necessaire3.webp"],
    breadcrumb: ["Moda criativa", "Necessaires"],
    tamanhos: [
      { descricao: "P", valor: "25,00" },
      { descricao: "M", valor: "30,00" },
      { descricao: "G", valor: "35,00" },
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

export default Necessaire;
