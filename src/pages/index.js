import Menu from "../components/Menu";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Menu />
      <div className="flex-1 flex items-center">
        <div className="p-4 sm:px-6 md:px-8 lg:px-16">
          <h1 className="text-2xl leading-tight text-[#13131e] sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl lg:tracking-tight md:leading-tight lg:leading-tight">
            Bonito, 
            <br />
            muito elegante,
            <br />e personalizado.
            <br />
          </h1>
          <div className="mt-4 font-thin text-[#13131e] leading-tight max-w-sm sm:text-xl sm:max-w-lg md:text-2xl md:max-w-xl md:leading-relaxed">
            Todos os produtos são feitos manualmente, podendo ter
            características personalizadas sob encomenda.
          </div>
        </div>
      </div>

      <div class="grid grid-flow-col gap-2 grid-cols-[40%_40%_40%_40%] lg:grid-cols-[20%_20%_20%_20%] overscroll-contain overflow-x-auto px-4 pb-8 sm:px-6 md:px-8 lg:px-16">
        <Link href="/produto/bolsa">
          <div class="media-element flex flex-col items-center">
            <img src={`/img/produtos/bolsa1.webp`} className="aspect-video bg-white p-1 sm:p-2 md:p-3 object-contain border border-[#ecdac9] rounded-md" />
            <div className="text-sm">Bolsas</div>
          </div>
        </Link>
        <Link href="/produto/necessaire">
          <div class="media-element flex flex-col items-center">
            <img src={`/img/produtos/necessaire1.webp`} className="aspect-video bg-white p-1 sm:p-2 md:p-3 object-contain border border-[#ecdac9] rounded-md" />
            <div className="text-sm">Necessaires</div>
          </div>
        </Link>
        <Link href="/produto/luva">
          <div class="media-element flex flex-col items-center">
            <img src={`/img/produtos/luva1.webp`} className="aspect-video bg-white p-1 sm:p-2 md:p-3 object-contain border border-[#ecdac9] rounded-md" />
            <div className="text-sm">Luvas</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
