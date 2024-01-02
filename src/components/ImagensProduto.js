import React, { useState } from "react";

const ImagensProduto = ({ images }) => {
  const [imagemPrincipal, setImagemPrincipal] = useState(images[0]);

  const alterarImagemPrincipal = (imagem) => {
    setImagemPrincipal(imagem);
  };

  return (
    <div className="py-4">
      <div
        className="flex-1 flex items-center justify-center mb-4 mx-4 p-2
      bg-white border-2 border-[#f9ecd8] rounded-sm"
      >
        <img
          src={`/img/produtos/${imagemPrincipal}`}
          alt="Bolsa"
          className="w-4/5"
        />
      </div>
      <div className="flex gap-2 w-full mx-auto px-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-[65px] border-2 p-1 bg-white rounded-sm cursor-pointer ${
              imagemPrincipal === image ? "border-yellow-500" : "border-white"
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
