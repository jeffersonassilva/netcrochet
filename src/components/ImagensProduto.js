import React, { useState } from "react";

const ImagensProduto = ({ images }) => {
  const [imagemPrincipal, setImagemPrincipal] = useState(images[0]);

  const alterarImagemPrincipal = (imagem) => {
    setImagemPrincipal(imagem);
  };

  return (
    <div className="mb-4 md:grid md:grid-cols-[1fr_120px] md:gap-3 lg:grid-cols-1 lg:row-start-1 lg:row-span-5 lg:flex lg:flex-col">
      <div
        className="flex-1 flex items-center justify-center mb-4 p-2
      bg-white border-2 border-[#f9ecd8] rounded-sm md:mb-0"
      >
        <img
          src={`/img/produtos/${imagemPrincipal}`}
          alt="Bolsa"
          className="w-10/12"
        />
      </div>
      <div className="grid grid-cols-5 gap-2 mb-4 md:mb-0 md:grid-cols-[120px] md:grid-rows-5 lg:grid-rows-1 lg:grid-cols-5 lg:flex-1 lg:items-start">
      {/* <div className="grid grid-cols-5 gap-2 mb-4 md:mb-0 md:grid-cols-[120px] md:grid-rows-5 lg:grid-cols-5 lg:flex-1 lg:items-start"> */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`max-w-[120px] border-2 p-1 bg-white rounded-sm cursor-pointer md:flex md:justify-center md:items-center ${
              imagemPrincipal === image ? "border-[#ecdac9]" : "border-white"
            }`}
            onClick={() => alterarImagemPrincipal(image)}
          >
            <img
              src={`/img/produtos/${image}`}
              alt={`imagem do produto ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagensProduto;
