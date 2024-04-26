/* eslint-disable react/prop-types */
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <div className="flex items-center text-wrap flex-col sm:flex-row gap-[50px]">
      <div className="h-[250px] w-[250px] overflow-hidden rounded-lg">
        <img
          src={product.img}
          alt="product_image"
          loading="lazy"
          className="h-full w-full object-cover object-center hover:scale-110 duration-300 cursor-pointer"
        />
      </div>
      <div className="flex flex-col justify-center gap-2">
        <h2 className="text-xl sm:text-2xl font-bold">{product.name}</h2>
        <ul className="flex flex-col gap-2">
          {product.mini_des.map((des, idx) => (
            <li key={idx}>{des}</li>
          ))}
        </ul>
        <div className="border-b border-red-600 flex justify-end">
          <Link
            role="span"
            to={`/product-page/${product.name}`}
            className="text-[red] flex items-center gap-3 cursor-pointer md:hover:scale-110 duration-200 "
          >
            Learn more <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
