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
      <div className="flex-1 flex flex-col p-4 sm:px-6">
        <div className="mb-4 text-sm flex justify-between">
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

        <div className="text-xl font-bold flex items-center justify-between mb-2 tracking-tight">
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

        <AvaliacaoProduto stars={data.avaliacao} quantidade={data.vendas}></AvaliacaoProduto>

        <ImagensProduto images={data.images} />

        <div className="text-gray-500 mb-6">{data.descricao}</div>
        <div className="text-gray-500 mb-6">
          <span className="text-red-500 font-semibold">* </span>
          Entrega estimada em {data.dias_entrega} dias.
        </div>

        <div className="text-gray-500 mb-2">
          <div>Ficou com dúvidas?</div>
          <div>
            Entre em contato comigo{" "}
            <a
              href="https://api.whatsapp.com/send/?phone=5561998576920"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-black underline underline-offset-2"
            >
              clicando aqui
            </a>
            .
          </div>
        </div>
      </div>
      <div className="flex p-4 sm:px-6 justify-between border-t border-t-[#ecdac9]">
        <RedesSociais iconSize={25} color={"#000"} />
      </div>
    </>
  );
};

export default Produto;
