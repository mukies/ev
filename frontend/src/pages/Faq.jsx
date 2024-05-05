import Layout from "../layout/Layout";

function Faq() {
  const faq = [
    {
      question: "Are you a factory or trading company?",
      answer:
        "We are a factory. Located in Kunshan city, NEST was founded in 2002 for cable production. Many workers in our factory have been working in this industry for more than 10 years and have rich experience.",
    },
    {
      question: "What’s the MOQ?",
      answer:
        "MOQ for standard model is 1 piece, and MOQ is 100pcs if custom-made.",
    },
    {
      question: "What’s your main market?",
      answer:
        "Our main market is Nepal, but our cargoes are sold all over the world.",
    },
    {
      question: "What’s your advantage?",
      answer:
        "We have our own cable production line so that we can control quality, price and leading time better.",
    },
    {
      question: "Can I custom my LOGO?",
      answer:
        "Yes. You can not only custom LOGO, but also color, cable, enclosure box and carton. Just contact us if you have any special need.",
    },
    {
      question: "How can you ensure the products quality?",
      answer:
        "We conduct stress test, waterproof test, IP test and anti-rust testing for each EV charger before shipment, so product quality is fully guaranteed. NEST features premium and safe products, all of which are with CE, TUV and UL approval to ensure EV charger from NEST with high performance, reliability and longevity.",
    },
    {
      question: "What’s your warranty?",
      answer: "Our warranty is up to 24 months.",
    },
    {
      question: "What’s your payment term?",
      answer:
        "Normally, our payment term is 50% deposit and balance payment at sight of packing list/pictures, while we ask for 100% in advance if invoice amount is less than $3000.00.",
    },
  ];
  return (
    <Layout>
      <div className="text-gray-700 py-3 max-w-[768px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-3 items-center">
          <h2 className="sm:text-4xl font-semibold text-xl">FAQ</h2>
          <p className="text-center text-xl">
            You can contact us for more detailed questions, and your questions
            will have a chance to be updated in the FAQ.
          </p>
        </div>
        <div className="flex flex-col px-2 gap-5">
          {faq.map((item, i) => (
            <div
              key={i}
              className="collapse collapse-arrow ease-in-out border-2 border-gray-700"
            >
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                {item.question}
              </div>
              <div className="collapse-content">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Faq;
