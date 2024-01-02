import Menu from "../components/Menu";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Menu />
      <div className="flex-1 flex justify-center items-center">
        <div className="p-6">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl leading-tight text-[#13131e] font-marcellus">
              Bonito,
              <br />
              muito macio,
              <br />e aconchegante!
              <br />
            </h1>
            <div className="mt-4 font-thin md:text-2xl text-[#13131e]">
              Todos os nossos produtos são feitos manualmente, podendo ter
              características personalizadas sob encomenda.
            </div>
            <div className="flex gap-4 mt-10">
              <Link href="/produto/bolsa">
                <div
                  className="border border-yellow-900 rounded-md bg-yellow-900
                   text-white px-6 py-1 hover:bg-yellow-800 transition-all duration-300"
                >
                  Bolsa
                </div>
              </Link>
              <Link href="/produto/necessaire">
                <div
                  className="border border-yellow-900 rounded-md bg-yellow-900
                text-white px-6 py-1 hover:bg-yellow-800 transition-all duration-300"
                >
                  Necessaire
                </div>
              </Link>
            </div>
          </div>
          {/* <div className="flex-1">
            <h1 className="text-3xl">Cachecol</h1>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
