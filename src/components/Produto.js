import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import AvaliacaoProduto from "./AvaliacaoProduto";
import Breadcrumb from "./Breadcrumb";
import ImagensProduto from "./ImagensProduto";
import Menu from "./Menu";
import RedesSociais from "./RedesSociais";
import Link from "next/link";

const Produto = ({ data }) => {
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(
    data.tamanhos[0]
  );
  const [valorSelecionado, setValorSelecionado] = useState(
    data.tamanhos[0].valor
  );

  const alterarTamanho = (tamanho) => {
    setTamanhoSelecionado(tamanho);
    setValorSelecionado(tamanho.valor);
  };

  return (
    <>
      <Menu backButton={true} />
      <div className="flex-1 flex flex-col">
        <div className="p-4 text-sm flex justify-between">
          {data.breadcrumb ? (
            <Breadcrumb items={data.breadcrumb} />
          ) : (
            <div>&nbsp;</div>
          )}
          <div className="hidden sm:flex bg-white px-2 rounded-md">
            <Link href="/" className="flex items-center gap-1">
              <IoIosArrowRoundBack size={25} className="text-yellow-800" />{" "}
              Voltar
            </Link>
          </div>
        </div>

        <div className="px-4">
          <div className="text-2xl font-bold flex items-center justify-between mb-2">
            {data.nome}
          </div>
          <div className="flex justify-between mb-2">
            <div className="font-bold text-3xl">R${valorSelecionado}</div>
            <div className="flex gap-2 text-sm justify-center items-center">
              {data.tamanhos.map((tamanho, index) => (
                <div
                  key={index}
                  className={`flex justify-center items-center w-7 h-7 rounded-full cursor-pointer border border-yellow-500 ${
                    tamanhoSelecionado.descricao === tamanho.descricao
                      ? "bg-[#f3d7ab]"
                      : "bg-transparent"
                  }`}
                  onClick={() => alterarTamanho(tamanho)}
                >
                  {tamanho.descricao}
                </div>
              ))}
            </div>
          </div>
          <div className="text-gray-500">
            <AvaliacaoProduto
              stars={data.avaliacao}
              quantidade={data.vendas}
            ></AvaliacaoProduto>
          </div>
        </div>

        <ImagensProduto images={data.images} />

        <div className="flex-1 p-4">
          <div className="text-gray-500 mb-6">{data.descricao}</div>
          <div className="text-gray-500">
            <span className="text-red-500 font-semibold">* </span>
            Entrega estimada em {data.dias_entrega} dias.
          </div>
        </div>

        <div className="p-4 text-gray-500 mb-6">
          <div>Ficou com dúvidas?</div>
          <div>
            Entre em contato comigo{" "}
            <a
              href="https://api.whatsapp.com/send/?phone=5561998576920"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-black underline-offset-1"
            >
              clicando aqui
            </a>
            .
          </div>
        </div>

        {/* <div className="flex px-4 py-4 bg-black justify-between">
          <RedesSociais iconSize={16} />
          <div className="text-white text-xs">
            &copy; Todos os direitos reservados.
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Produto;
