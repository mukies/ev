/* eslint-disable react/prop-types */
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

function Product({ product }) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center text-wrap flex-col sm:flex-row gap-[50px]">
      <div className="h-[250px] w-[250px] overflow-hidden rounded-lg">
        <img
          onClick={() => navigate(`/product-page/${product.slug}`)}
          src={product.productImage}
          alt="product image"
          loading="lazy"
          className="h-full w-full object-contain mix-blend-multiply object-center hover:scale-110 duration-300 cursor-pointer"
        />
      </div>
      <div className="flex flex-col justify-center gap-2 w-full">
        <h2 className="text-xl sm:text-2xl font-bold">{product.productName}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html:
              product.shortDescription?.length > 500
                ? product.shortDescription?.slice(0, 500) + "..."
                : product.shortDescription,
          }}
          className="flex flex-col gap-1"
        ></div>
        <div className="border-b border-red-600 flex justify-end">
          <Link
            role="span"
            to={`/product-page/${product.slug}`}
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
