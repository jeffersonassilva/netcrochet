import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";

const Menu = ({ backButton }) => {
  return (
    <div
      className="flex items-center border-b border-b-1 border-b-[#ecdac9] px-4
      sm:flex sm:justify-between sm:items-center sm:px-6
      md:px-8 md:py-6
      lg:px-16"
    >
      <div className="flex-1 text-yellow-900 sm:text-lg lg:text-2xl 2xl:text-3xl font-thin">
        <Link href="/">
          <span className="font-ubuntu">net</span>
          <span className="font-ubuntu font-medium">Crochet</span>
        </Link>
      </div>

      {backButton && (
        <div className="sm:hidden bg-white border border-[#f2e7d7] pl-1 pr-2 rounded-md">
          <Link href="/" className="flex items-center gap-1">
            <IoIosArrowRoundBack size={24} className="text-yellow-800" /> Voltar
          </Link>
        </div>
      )}

      <ul className="hidden sm:flex sm:gap-6 md:gap-10 2xl:gap-16">
        <li>
          <Link
            href="/"
            className="text-lg font-medium text-yellow-900 hover:text-black transition-all duration-200 2xl:text-2xl"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/sobre"
            className="text-lg font-medium text-yellow-900 hover:text-black transition-all duration-200 2xl:text-2xl"
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            href="/contato"
            className="text-lg font-medium text-yellow-900 hover:text-black transition-all duration-200 2xl:text-2xl"
          >
            Contato
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
