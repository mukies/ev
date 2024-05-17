import Layout from "../layout/Layout";
import ProductShowcase from "../components/ProductShowcase";

function AcSolution() {
  return (
    <Layout title={"Nest - AC Charger Solution"}>
      <div>
        <div
          style={{
            background:
              "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/ac_solution_bg.webp')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className=" bg-black h-[50vh] sm:h-[60vh] flex items-center  bg-cover text-white sm:text-lg text-[16px] md:text-xl bg-right  "
        >
          <div className="flex flex-col gap-5 ml-2 sm:ml-10 p-3">
            <h1 className="text-xl font-bold sm:text-2xl md:text-3xl">
              Best EV Charger Manufacturer
            </h1>
            <ul className=" flex  text-wrap list-disc flex-col gap-1">
              <li className="">
                8+ years of experience in producing EV charger
              </li>
              <li className="">
                2,000,00 pieces annual capacity, 85% automated production line
              </li>
              <li className="">
                Comply with CB, CE, TUV, ISO, and RoHS standards
              </li>
              <li className="">2 year warranty</li>
            </ul>
            <div className="flex justify-end w-[300px] sm:w-[400px]">
              <button className="btn bg-[red] hover:bg-[#ff2e2e] w-full sm:max-w-max duration-200 text-white border-none">
                Order Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex text-gray-700 text-wrap mt-10 p-2 flex-col gap-5">
          <div className="flex flex-col gap-1 items-center">
            <h3 className="text-3xl font-semibold text-center">
              AC ev electric vehicle charging station
            </h3>
            <p className="w-[90%] mx-auto text-center">
              NEST charger is not just safe, reliable,and user friendly,
              it&rsquo;s also fully compatible with all types of electric
              vehicles. By installing it at your business, you can attract new
              customers, showing that you’re committed to sustainability.
            </p>
          </div>
          <div className="grid text-gray-700 grid-cols-1 sm:grid-cols-3 ">
            <div className=" flex flex-col gap-5 ">
              <div className="h-[350px] w-[350px] mx-auto rounded-lg overflow-hidden">
                <img
                  className="h-full w-full object-cover object-center sm:hover:scale-110 duration-200"
                  src="/ac_solution1.webp"
                  alt="ac-solution"
                  loading="lazy"
                />
              </div>
              <div className="px-5 gap-2 flex flex-col">
                <h3 className="font-semibold text-xl text-center">
                  High compability
                </h3>
                <p className="text-">Suitable for most car models: </p>
                <div className="flex  px-5 gap-10">
                  <ul className="list-disc">
                    <li>BMW IX3</li>
                    <li>Flat 500</li>
                    <li>Renault Megane</li>
                    <li>Ford Kuga</li>
                    <li>GEELY</li>
                  </ul>
                  <ul className="list-disc">
                    <li>Benz EQA/EQE/250E </li>
                    <li>Hyundai Kona/IONIQ </li>
                    <li>Volvo XC40</li>
                    <li>Tesla Model 3/Y</li>
                    <li>Porsche Taycan and</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-5 ">
              <div className="h-[350px] w-[350px] mx-auto rounded-lg overflow-hidden">
                <img
                  className="h-full w-full object-cover object-center sm:hover:scale-110 duration-200"
                  src="/ac_solution2.webp"
                  alt="ac-solution"
                  loading="lazy"
                />
              </div>
              <div className="px-5 gap-2 flex flex-col">
                <h3 className="font-semibold text-center text-xl">
                  Simple and intelligent
                </h3>
                <p className="text-lg">Multiple boot modes: UPNP/RFID/APP</p>
                <div className="flex text-md flex-col items-center  gap-2">
                  <p>
                    Charging station availability: The app shows the
                    availability of charging stations in real-time, allowing
                    drivers to plan their trips accordingly and track their
                    charging sessions and receive notifications when their
                    vehicle is fully charged.
                  </p>
                  <p>
                    The app is available for both iOS and Android devices and
                    can be downloaded for free from the app store.
                  </p>
                  <p>
                    All kinds of charging standard: SAE J1772 Type 1 / IEC62196
                    Type 2 / GBT/Tesla
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="h-[350px] w-[350px] mx-auto rounded-lg overflow-hidden">
                <img
                  className="h-full w-full object-cover object-center sm:hover:scale-110 duration-200"
                  src="/ac_solution3.webp"
                  alt="ac-solution"
                  loading="lazy"
                />
              </div>
              <div className="px-5 gap-2 flex flex-col">
                <h3 className="font-semibold text-xl text-center">
                  Safe and fast
                </h3>
                <div className="flex items-center px-5 gap-10">
                  <ul className="list-none">
                    <li>Security: 12 safety protection system</li>
                    <li>Anti-theft</li>
                    <li>RCD: Type A + DC 6MA</li>
                    <li>Easy Installation: User manual and</li>
                    <li>Installation accessories are provided.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-10 gap-10 sm:px-10 text-wrap">
          <h2 className="text-3xl text-gray-700 font-semibold text-center">
            How Long Does It Take to Charge an Electric Vehicle?
          </h2>
          <div className=" flex flex-col sm:flex-row  items-center gap-5 sm:px-10">
            <div className="h-auto flex-1 overflow-hidden rounded-xl w-full">
              <img
                src="/car_charging.webp"
                alt="ac-solution"
                loading="lazy"
                className=" object-cover object-center h-full w-full sm:hover:scale-110 duration-200 "
              />
            </div>
            <div className="flex flex-col text-gray-700 flex-[1.7] px-1 gap-4">
              <div className="flex gap-3 flex-col">
                <h3 className="text-xl font-semibold">
                  How Long Does It Take to Charge an ElectricVehicle?
                </h3>
                <ol className="px-5">
                  <li>
                    The time it takes to charge an electric vehicle (EV) can
                    vary depending on several factors, including the type of
                    charger, the EV’s battery size, and its current battery
                    level.
                  </li>
                  <li>
                    EV batteries are measured in kilowatt-hour (kWh), which
                    represent the battery&rsquo;s energy capacity, ranging from
                    30kWh to 100kWh, depending on your car model.
                  </li>
                </ol>
              </div>
              <div className="flex gap-3 flex-col">
                <h3 className="text-xl font-semibold">
                  Here are the different levels of chargingand their approximate
                  charging times:
                </h3>
                <ol className="px-5">
                  <li>
                    Level 1 charging: This is the slowest option, using a
                    standard 120-240 volt household outlet. Fully charging an EV
                    can take up to 8-12 hours or more. It gets the job done with
                    a standard 3.5kw charger.
                  </li>
                  <li>
                    Level 2 charging: This faster charging option requires a
                    240-400volt charging station. Depending on the size of the
                    battery, it can take 4-8 hours to fully charge an EV, such
                    as a 7kw, 11kw, or 22kw charger.
                  </li>
                  <li>
                    DC fast charging: This is the fastest charging option
                    available and requires a specialized DC fast charging
                    station. It can charge an EV to 80% capacity in as little as
                    30 minutes. However, it&rsquo;s important to point out that
                    not all EVs can accept DC fast charging.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-gray-700 flex flex-col sm:flex-row-reverse my-10 text-wrap  items-center gap-5 sm:px-10">
          <div className="h-auto flex-1 overflow-hidden rounded-xl w-full">
            <img
              src="/app-control.webp"
              alt="ac-solution"
              loading="lazy"
              className=" object-cover object-center h-full w-full sm:hover:scale-110 duration-200 "
            />
          </div>
          <div className="flex flex-col text-gray-700 flex-[1.7] px-1 gap-4">
            <h3 className="text-xl font-semibold">Charging Optimization</h3>
            <p>
              NEST&rsquo;s electric vehicle chargers range from 3.7 kW to 22 kW
              for AC units and up to 240 kW for DC units. Each AC electric
              vehicle charger is available with advanced dynamic load balancing
              (DLB) technology, ensuring excellent efficiency and smarter energy
              management. The DC charger, although powerful, does not include
              DLB. DLB boxes integrated with AC chargers can switch to solar
              power, reducing dependence on grid electricity. This approach
              underlines our commitment to environmentally friendly charging by
              optimizing renewable energy sources.
            </p>
          </div>
        </div>
        <div className=" flex flex-col sm:flex-row my-10 text-wrap  items-center gap-5 sm:px-10">
          <div className="h-auto flex-1 overflow-hidden rounded-xl w-full">
            <img
              src="/charging.webp"
              alt="ac-solution"
              loading="lazy"
              className=" object-cover object-center h-full w-full sm:hover:scale-110 duration-200 "
            />
          </div>
          <div className="flex flex-col text-gray-700 flex-[1.7] px-1 gap-4">
            <h3 className="text-xl font-semibold text-center">
              How To Installation And Charging
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold">Easy installation </h4>
                <p>
                  Our chargers can be installed indoors or outdoors. Firmly
                  locking the charger on the installation backplane can prevent
                  thefts.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold">Compact Design</h4>
                <p>
                  This small and exquisite product makes it easy to transport,
                  store, and install.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold">
                  EasyIntelligent Chip Technology
                </h4>
                <p>
                  It can automatically repair minor charging problems while
                  charging. When a fault occurs, the lights will blink
                  differently to indicate different problems.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold">
                  Private EV Charging Station specialist
                </h4>
                <p>
                  Designed for home use, user-friendly, and intelligent charging
                  stations can provide 16A/32A, 1/3 phases and different demand
                  products, with voltages of 7-22kW, depending on your specific
                  needs. Operational flexibility is provided through various
                  methods, such as mobile phone control for turning on/off,
                  plugging in, charging, and card swiping. For safety, the
                  device includesten layers of protection to mitigate risks
                  associated with different factors.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ProductShowcase title={"ac"} />
      </div>
    </Layout>
  );
}

export default AcSolution;
