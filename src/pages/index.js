import Carrossel from "../components/Carrossel";
import Menu from "../components/Menu";

const Home = () => {
  return (
    <>
      <Menu />
      <div className="grid self-center px-4 sm:px-6 md:px-8 lg:px-16">
        <div>
          <h1
            className="text-2xl leading-tight text-[#13131e]
            sm:mb-8 sm:text-4xl md:text-5xl md:leading-tight
            lg:text-6xl lg:tracking-tight lg:leading-tight
            2xl:text-7xl 2xl:tracking-normal 2xl:leading-tight"
          >
            Bonito,
            <br />
            muito elegante,
            <br />e personalizado.
            <br />
          </h1>
          <div
            className="mt-4 font-thin text-[#13131e] leading-tight max-w-sm
            sm:text-xl sm:max-w-lg md:text-2xl md:max-w-xl md:leading-relaxed
            2xl:text-3xl 2xl:max-w-4xl 2xl:leading-normal"
          >
            Todos os produtos são feitos manualmente, podendo ter
            características personalizadas sob encomenda.
          </div>
        </div>
      </div>
      <Carrossel />
    </>
  );
};

export default Home;
