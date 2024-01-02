import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";

const Menu = ({ backButton }) => {
  return (
    <div
      className="flex w-full items-center border-b border-b-1 border-b-[#ecdac9] p-4
      sm:flex sm:justify-between sm:items-center
      md:px-12 md:py-8 smd:border-none
      lg:w-full lg:px-20"
    >
      <div className="flex-1 text-yellow-900 text-lg lg:text-2xl font-thin">
        <Link href="/">
          <span className="font-ubuntu">net</span>
          <span className="font-ubuntu font-medium">Crochet</span>
        </Link>
      </div>

      {backButton && (
        <div className="sm:hidden">
          <Link href="/">
            <IoIosArrowRoundBack size={30} />
          </Link>
        </div>
      )}

      <ul className="hidden sm:flex sm:gap-6 md:gap-10">
        <li>
          <Link
            href="/"
            className="text-lg font-medium text-yellow-900 hover:text-black transition-all duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/sobre"
            className="text-lg font-medium text-yellow-900 hover:text-black transition-all duration-200"
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            href="/contato"
            className="text-lg font-medium text-yellow-900 hover:text-black transition-all duration-200"
          >
            Contato
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
