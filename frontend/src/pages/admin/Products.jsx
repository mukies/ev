import { Link } from "react-router-dom";
import LayoutAdmin from "../../layout/admin/LayoutAdmin";
import { MdAddBox } from "react-icons/md";
import Product from "../../components/admin/Product";

function Products() {
  const product = [
    {
      _id: 12122,
      name: "text and text",
      img: "/ev_car.jpeg",
      category: "test category",
    },
    {
      _id: 12122635,
      name: "another anksjks",
      img: "/ev_car.jpeg",
      category: "test category",
    },
    {
      _id: 12122800,
      name: "hj jhdj",
      img: "/ev_car.jpeg",
      category: "test category",
    },
  ];

  return (
    <LayoutAdmin>
      <div className="max-w-[768px] flex flex-col text-gray-700 gap-10 p-1 sm:p-5 mx-auto border-r-2 border-l-2 border-gray-300">
        <div className="border-b-2 border-gray-300 flex justify-center">
          <span className="text-4xl  font-semibold capitalize">
            All Products
          </span>
        </div>
        <div className="flex justify-end">
          <Link
            role="button"
            to={"/admin/add-product"}
            className="btn btn-primary text-white"
          >
            <span className="flex items-center gap-2 text-nowrap capitalize">
              <MdAddBox size={23} /> add product
            </span>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {product.map((item, i) => (
            <Product key={i} product={item} />
          ))}
        </div>
      </div>
    </LayoutAdmin>
  );
}

export default Products;
