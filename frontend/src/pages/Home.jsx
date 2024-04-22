import Layout from "../layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="">
        <div className="h-[calc(100dvh-100px)] relative">
          <img
            src="/hero.jpg"
            alt="hero-img"
            className="h-full w-full object-cover object-center backdrop-grayscale-0"
            loading="lazy"
          />
          <div className=" absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            {" "}
            <div className="flex flex-col p-3 text-white text-wrap items-center gap-2 sm:gap-5">
              <h3 className="text-2xl sm:text-3xl flex items-center gap-3">
                <span className="h-[2px] bg-white w-4"></span> Since 2017{" "}
                <span className="h-[2px] bg-white w-4"></span>
              </h3>
              <h2 className="text-[60px] sm:text-[80px] font-semibold">
                Bomern
              </h2>
              <h3 className="text-2xl sm:text-4xl">
                Contribute to a green future
              </h3>
              <h1 className="text-2xl mb-4 sm:text-[45px] font-bold">
                A World-Class EV Charger Manufacturer
              </h1>
              <p className="text-xl sm:text-2xl">
                The exploration and inovation of EV chargers has lead us from
                being pioneers to industry leader
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
