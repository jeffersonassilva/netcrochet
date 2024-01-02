import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center text-yellow-900 text-lg">
      <div className="text-6xl mb-4">404</div>
      <div className="mb-4">Página não encontrada!</div>
      <Link href="/">
        <div
          className="border border-yellow-900 rounded-md bg-yellow-900 text-white px-6 py-1
        hover:bg-yellow-800 transition-all duration-300"
        >
          Voltar
        </div>
      </Link>
    </div>
  );
};

export default Custom404;
