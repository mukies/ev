import Layout from "../layout/Layout";

function About() {
  return (
    <Layout>
      <div className="text-gray-700 sm:px-16 px-1 flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <h3 className="text-3xl font-semibold">About NEST</h3>
          <div className="flex flex-col gap-2 text-lg">
            <p>
              NEST stands at the forefront of innovation and development in the
              EV charging & parking technology industry. As a leading EV
              charging station manufacturer, we are not just a supplier but a
              reliable solution provider for green-energy infrastructure in the
              powering business. We design and manufacture DC charging piles and
              AC chargers according to the customer&rsquo;s needs.{" "}
            </p>
            <p>
              Our products are suitable for home and the public with developed
              client APP. We are also willing to provide our clients with
              detailed and specific professional services.{" "}
            </p>
            <p>
              All NEST products adhere to the highest standards, such as CE,
              TUV, and UL certification.
            </p>
            <p>
              NEST aims to offer our customers various EV charging supplies,
              ensuring affordability without compromising on quality. Our
              priority is ensuring that our clients enjoy a pleasant purchasing
              experience.Committed to promoting our premium products, we offer
              superb service to every corner of the world.
            </p>
            <p>
              NEST also gives its employees opportunities to grow in a diverse
              and international setting. Our whole team is united in our goal to
              make NEST a leading name in the industry.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-4xl font-bold text-center uppercase text-black">
            Certificates
          </h2>
          <div className="h-auto w-full mx-auto overflow-hidden">
            <img
              src="/home_certificate.webp"
              alt="certificate image"
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
