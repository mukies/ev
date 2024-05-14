import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ProductShowcase from "../components/ProductShowcase";

const Home = () => {
  const whatCanWeDo = [
    {
      name: "Prompt 24/7 Support",
      des: "Professional one-on-one online communication to understand customers’ specific needs",
      img: "/support.webp",
    },
    {
      name: "Customization",
      des: "OEM&ODM services / Custom logo design. PCB & enclosure designs / Personalized APP & CMS",
      img: "/custo.webp",
    },
    {
      name: "Extended Warranty",
      des: `Enjoy a long warranty period of up to 24 months \n 100% follow-up within warranty period`,
      img: "/support.webp",
    },
    {
      name: "Guaranteed Quality",
      des: `Every product undergoes rigorous testing and quality assurance to ensure consistent performance and reliability`,
      img: "/quality.webp",
    },
    {
      name: "After-sales services",
      des: `Reduce the need for frequent repairs and empower your business to succeed with our after-sales services, from technical support to marketing`,
      img: "/service.webp",
    },
    {
      name: "Reliable solutions",
      des: `As your EV charger supplier, we provide opportunities tocustomize network management features, ensuring solutions that perfectly fit your needs`,
      img: "/solution.webp",
    },
  ];
  return (
    <Layout>
      <div className="">
        <div className="h-[calc(100vh-60px)] sm:h-[calc(100vh-100px)] relative">
          <LazyLoadImage
            src="/hero.jpg"
            alt="hero-img"
            height={"100%"}
            width={"100%"}
            effect="black-and-white"
            className="h-full w-full filter blur-[1px] object-cover object-center "
            loading="lazy"
          />
          <div className=" absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            {" "}
            <div className="flex flex-col p-3 text-white text-wrap items-center gap-2 sm:gap-5">
              <h3 className="text-2xl sm:text-3xl flex items-center gap-3">
                <span className="h-[2px] bg-white w-4"></span> Since 2017{" "}
                <span className="h-[2px] bg-white w-4"></span>
              </h3>
              <h2 className="text-[60px] sm:text-[80px] font-semibold">NEST</h2>
              <h3 className="text-2xl sm:text-4xl">
                Contribute to a green future
              </h3>
              <h1 className="text-2xl mb-4 sm:text-[45px] text-center font-bold">
                A World-Class EV Charger Manufacturer
              </h1>
              <p className="text-xl sm:text-2xl text-center">
                The exploration and inovation of EV chargers has lead us from
                being pioneers to industry leader
              </p>
            </div>
          </div>
        </div>
        <div className="flex sm:border-2 w-[95%] flex-col md:flex-row gap-3 text-black mx-auto border-gray-300 rounded-lg text-wrap sm:p-4 p-1 mt-10">
          <div className="flex flex-col gap-5 flex-[2] p-2">
            <div className="flex flex-col gap-5 items-center">
              <h2 className="text-3xl font-semibold">Enterprise Vision</h2>
              <p className="w-[90%] mx-auto text-lg">
                World-Class EV Charger Manufacturer Provide high-quality and
                reliablevehicle charging solutions.
              </p>
              <button className=" btn btn-accent btn-outline ">
                Learn More
              </button>
            </div>
            <div className="h-[250px] w-full overflow-hidden">
              <LazyLoadImage
                src="/cloud.webp"
                alt="cloud_platform"
                height={"100%"}
                width={"100%"}
              />
            </div>
          </div>
          <div className=" flex-[2.5]">
            <div className="h-[250px] w-full overflow-hidden">
              <LazyLoadImage
                src="/home_certificate.webp"
                alt="cloud_platform"
                height={"100%"}
                width={"100%"}
              />
            </div>
            <div className="flex flex-col gap-5 items-center">
              <h2 className="text-3xl font-semibold">Core Competence </h2>
              <ul className="flex flex-col gap-2 list-disc">
                <li>Diverse, cutting-edge EV chargingsolutions</li>
                <li>Deep insights into EV market trends</li>
                <li>Advanced charging technologyexpertise</li>
                <li>Exceptional customer service andsupport</li>
              </ul>
              <button className=" btn btn-accent btn-outline ">
                Learn More
              </button>
            </div>
          </div>
          <div className=" flex flex-col gap-5 h-full flex-[3]">
            <div className="flex flex-col gap-5 items-center">
              <h2 className="text-3xl font-semibold">Enterprise Vision</h2>
              <p className="w-[90%] mx-auto text-lg">
                World-Class EV Charger Manufacturer Provide high-quality and
                reliablevehicle charging solutions.
              </p>
              <Link
                to={"/product/homeuse-ev-charger"}
                className=" btn btn-accent btn-outline"
              >
                Learn More
              </Link>
            </div>
            <div className="h-[300px] w-full overflow-hidden">
              <img
                src="/room.webp"
                alt="room-image"
                className="object-cover object-center h-full w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-5 sm:mt-10 p-5 text-black text-wrap gap-5">
          <div className="flex flex-col gap-5 items-center">
            <h3 className="text-3xl font-semibold">What We Can Do</h3>
            <p className="text-xl sm:w-[80%] mx-auto">
              As a leading EV charging station manufacturer, we integrate open
              services and charging networks into client products and provide
              comprehensive OEM& ODM service.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-2 sm:px-10">
            {whatCanWeDo.map((item, i) => (
              <div className="flex items-center flex-col gap-5 sm:p-5" key={i}>
                <img
                  src={item.img}
                  alt={item.name}
                  className=" h-[160px] w-[160px] object-cover object-center "
                  loading="lazy"
                />

                <div className="flex flex-col gap-2 items-center">
                  <h2 className="text-2xl font-semibold sm:text-3xl ">
                    {item.name}
                  </h2>
                  <p className="text-lg sm:text-xl">{item.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* crousel */}
        <div className="sm:px-10 hidden sm:flex text-gray-700 flex-col h-[50vh] mt-10">
          <div className="carousel w-full h-full bg-gray-200 rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
              <div className="w-full flex text-gray-700 text-wrap flex-col gap-5 sm:py-5 items-center h-full justify-center">
                <h2 className=" text-2xl sm:text-3xl font-bold">
                  WHAT OUR CLIENTS SAY
                </h2>
                <p className="w-[85%] mx-auto text-lg sm:text-xl">
                  “I am a regular customer and have maintained a good
                  long-termpartnership with NEST. In terms of my purchasing
                  experience, NEST is a professional team. It offers quality
                  products at temptingly low prices alongside the attentive
                  service.”
                </p>
                <span className="text-md sm:text-xl font-semibold">
                  Andrew Robinson, America
                </span>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <div className="w-full flex text-gray-700 text-wrap flex-col gap-5 py-5 items-center h-full justify-center">
                <h2 className="text-3xl font-bold">WHAT OUR CLIENTS SAY</h2>
                <p className="w-[85%] mx-auto text-xl">
                  “I customized an EV charger at NEST. The design and quality
                  exceededmy expectations, making me extremely satisfied.
                  Moreover, the charger is very practical and easy to operate. I
                  highly recommend purchasing NEST&rsquo;s products.”
                </p>
                <span className="text-xl font-semibold">
                  Melle Van De Buuren, Netherlands
                </span>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <div className="w-full flex text-gray-700 text-wrap flex-col gap-5 py-5 items-center h-full justify-center">
                <h2 className="md:text-3xl text-2xl font-bold">
                  WHAT OUR CLIENTS SAY
                </h2>
                <p className="w-[85%] mx-auto text-md md:text-xl">
                  “I customized a batch of enclosure boxes at NEST for my
                  company&rsquo;scharging piles. The most satisfying thing for
                  me is the positive and efficient way they solve the problems.
                  Because what I care is how they address the issue, not the
                  problem itself. A good partner does not only provide customers
                  with appropriate products, but also face problems together and
                  respond to the market swiftly, which is the basis forlong-term
                  cooperation. NEST, I do believe, will continue to excel.”
                </p>
                <span className="text-xl font-semibold">
                  Thomas Jähn, Germany
                </span>
              </div>
            </div>
          </div>
        </div>
        <ProductShowcase title={"home"} />
      </div>
    </Layout>
  );
};

export default Home;
