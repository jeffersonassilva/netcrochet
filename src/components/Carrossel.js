import Link from "next/link";
import React from "react";

const list = [
  {
    descricao: "Bolsas",
    link: "/produto/bolsa",
    image: "/img/produtos/bolsa1.webp",
  },
  {
    descricao: "Necessaires",
    link: "/produto/necessaire",
    image: "/img/produtos/necessaire1.webp",
  },
  {
    descricao: "Luvas",
    link: "/produto/luva",
    image: "/img/produtos/luva1.webp",
  },
  {
    descricao: "Bolsas",
    link: "/produto/bolsa",
    image: "/img/produtos/bolsa1.webp",
  },
  {
    descricao: "Necessaires",
    link: "/produto/necessaire",
    image: "/img/produtos/necessaire1.webp",
  },
  {
    descricao: "Luvas",
    link: "/produto/luva",
    image: "/img/produtos/luva1.webp",
  },
  {
    descricao: "Bolsas",
    link: "/produto/bolsa",
    image: "/img/produtos/bolsa1.webp",
  },
  {
    descricao: "Necessaires",
    link: "/produto/necessaire",
    image: "/img/produtos/necessaire1.webp",
  },
  {
    descricao: "Luvas",
    link: "/produto/luva",
    image: "/img/produtos/luva1.webp",
  },
  {
    descricao: "Bolsas",
    link: "/produto/bolsa",
    image: "/img/produtos/bolsa1.webp",
  },
  {
    descricao: "Necessaires",
    link: "/produto/necessaire",
    image: "/img/produtos/necessaire1.webp",
  },
  {
    descricao: "Luvas",
    link: "/produto/luva",
    image: "/img/produtos/luva1.webp",
  },
  {
    descricao: "Bolsas",
    link: "/produto/bolsa",
    image: "/img/produtos/bolsa1.webp",
  },
  {
    descricao: "Necessaires",
    link: "/produto/necessaire",
    image: "/img/produtos/necessaire1.webp",
  },
  {
    descricao: "Luvas",
    link: "/produto/luva",
    image: "/img/produtos/luva1.webp",
  },
];

const Carrossel = () => {
  return (
    <div
      className="flex gap-2 overscroll-contain overflow-x-auto
      px-4 sm:px-6 md:px-8 md:gap-x-4 lg:px-16 lg:gap-x-6"
    >
      {list.map((item, index) => (
        <Link key={index} href={item.link}>
          <div
            className="media-element flex flex-col items-center w-[100px] h-[140px] pb-[20px]
            sm:w-[176px] sm:h-[260px] sm:pb-[60px]"
          >
            <img
              src={item.image}
              alt={item.descricao}
              className="aspect-video bg-white p-3 md:p-6 object-contain border border-[#ecdac9] rounded-md w-full h-full"
            />
            <div className="text-sm md:text-base md:font-medium">
              {item.descricao}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Carrossel;
