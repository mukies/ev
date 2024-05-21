import { FaTimes } from "react-icons/fa";
import LayoutAdmin from "../../layout/admin/LayoutAdmin";
import ReactQuill from "react-quill";
import { useEffect, useState } from "react";
import useGetImageUrl from "../../hooks/useGetImageUrl";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useEditProduct } from "../../hooks/editProduct";

function EditProduct() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [productName, setProductName] = useState("");
  const [shortDes, setShortDes] = useState("");
  const [fullDes, setFullDes] = useState("");
  const [category, setCategory] = useState("");
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const { previewImg, imgUrl, setImgUrl } = useGetImageUrl();
  const {
    previewImg: preview,
    imgUrl: url2,
    setImgUrl: setUrl2,
  } = useGetImageUrl();

  const { editProduct, loading: editLoading } = useEditProduct();

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/api/product/product-details/${id}`);
      if (data.success) {
        setShortDes(data.product.shortDescription);
        setFullDes(data.product.mainDescription);
        setProductName(data.product.productName);
        setCategory(data.product.category);
        setImage1(data.product.productImage);
        setImage2(data.product.descriptiveImage);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = () => {
    if (!productName || (!imgUrl && !image1) || !category || !shortDes) {
      toast.error("Please provide required details.");
      return;
    }

    if (!editLoading) {
      editProduct(
        productName,
        image1 || imgUrl,
        category,
        shortDes,
        fullDes,
        image2 || url2,
        id
      );
    }
  };

  return (
    <LayoutAdmin>
      <div className="max-w-[768px] text-gray-700 py-5 mx-auto">
        {loading && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-white flex z-[89] justify-center items-center">
            <span className="loading loading-spinner scale-125 text-gray-800"></span>
          </div>
        )}
        <div className="max-w-max flex mx-auto justify-center items-center p-2 border-b-2 border-gray-700">
          <h1 className="text-center text-3xl font-semibold">
            Edit Product Details
          </h1>
        </div>
        <form
          className="sm:p-5 h-auto sm:border-2 border-gray-300 rounded-lg mt-5 flex flex-col gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          {!imgUrl && !image1 && (
            <label
              htmlFor="file"
              className="flex px-2 max-w-max flex-col gap-2"
            >
              <div className="text-xl max-w-max p-4 border-2  border-gray-300 rounded-lg  cursor-pointer">
                Product Image<span className="text-[red]">*</span>
              </div>
              <input
                onChange={previewImg}
                id="file"
                type="file"
                className="hidden "
              />
            </label>
          )}
          {imgUrl && (
            <div className="h-[100px] mx-auto sm:mx-0  relative w-[100px]">
              <span
                onClick={() => setImgUrl(null)}
                className="absolute top-0 right-0 btn btn-circle btn-sm"
              >
                <FaTimes />
              </span>
              <img
                src={imgUrl}
                alt="image"
                className="h-full w-full object-cover object-center"
              />
            </div>
          )}
          {image1 && (
            <div className="h-[100px] mx-auto sm:mx-0  relative w-[100px]">
              <span
                onClick={() => setImage1(null)}
                className="absolute top-0 right-0 btn btn-circle btn-sm"
              >
                <FaTimes />
              </span>
              <img
                src={image1}
                alt="image"
                className="h-full w-full object-cover object-center"
              />
            </div>
          )}
          <label htmlFor="title" className="flex px-2 flex-col gap-2">
            <span className="text-3xl font-semibold">
              Product Name<span className="text-[red] text-xl">*</span>
            </span>
            <input
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              id="title"
              type="text"
              placeholder="Product name..."
              className="input input-bordered bg-gray-100 w-full "
            />
          </label>
          <label htmlFor="category" className="flex px-2 flex-col gap-3">
            <span className="text-3xl font-semibold">
              Category<span className="text-[red] text-xl">*</span>
            </span>
            <select
              id="category"
              onChange={(e) => setCategory(e.target.value)}
              className="select select-bordered bg-gray-50 w-full max-w-xs"
            >
              <option disabled selected>
                Select Category
              </option>
              <option
                selected={category == "homeuse-ev-charger"}
                value={"homeuse-ev-charger"}
              >
                Homeuse EV Charger
              </option>
              <option
                selected={category == "public-ev-charger"}
                value={"public-ev-charger"}
              >
                Public EV Charger
              </option>
              <option
                selected={category == "portable-ev-charger"}
                value={"portable-ev-charger"}
              >
                Portable EV Charger
              </option>
              <option
                selected={category == "dc-charging-station"}
                value={"dc-charging-station"}
              >
                DC Charging Station
              </option>
              <option
                selected={category == "charging-cable"}
                value={"charging-cable"}
              >
                Charging Cable
              </option>
              <option selected={category == "ev-adapter"} value={"ev-adapter"}>
                EV Adapter
              </option>
              <option selected={category == "ev-parts"} value={"ev-parts"}>
                EV Parts
              </option>
            </select>
          </label>

          <label htmlFor="mini-des" className="flex  flex-col gap-2">
            <span className="text-3xl font-semibold px-2">
              Short Description<span className="text-[red] text-xl">*</span>
            </span>
            <ReactQuill
              className="w-[100vw]  sm:w-full"
              id="mini-des"
              value={shortDes}
              onChange={setShortDes}
            />
          </label>

          <label
            htmlFor="quill"
            className={
              category == "charging-cable" ||
              category == "ev-adapter" ||
              category == "ev-parts"
                ? "hidden"
                : "flex  flex-col gap-2"
            }
          >
            <span className="text-3xl font-semibold px-2">
              Full Description
            </span>
            <ReactQuill
              className="text-xl"
              id="quill"
              value={fullDes}
              onChange={setFullDes}
            />
          </label>

          {!url2 && !image2 && (
            <label
              htmlFor="image"
              className={` ${
                category == "charging-cable" ||
                category == "ev-adapter" ||
                category == "ev-parts"
                  ? "hidden"
                  : "flex"
              } max-w-max flex-col gap-2 `}
            >
              <div className="text-xl max-w-max p-4 border-2 border-gray-300 rounded-lg  cursor-pointer">
                Descriptive Image
              </div>
              <input
                onChange={preview}
                id="image"
                type="file"
                className="hidden "
              />
            </label>
          )}
          {url2 && (
            <div className="h-[100px] w-[100px]  mx-auto sm:mx-0 relative">
              <span
                onClick={() => setUrl2(null)}
                className="absolute top-0 right-0 btn btn-circle btn-sm"
              >
                <FaTimes />
              </span>
              <img
                src={url2}
                alt="image"
                className="h-full w-full object-cover object-center"
              />
            </div>
          )}
          {image2 && (
            <div className="h-[100px] w-[100px]  mx-auto sm:mx-0  relative">
              <span
                onClick={() => setImage2(null)}
                className="absolute top-0 right-0 btn btn-circle btn-sm"
              >
                <FaTimes />
              </span>
              <img
                src={image2}
                alt="image"
                className="h-full w-full object-cover object-center"
              />
            </div>
          )}
          <div className="flex items-center px-5 gap-5 ">
            <button
              onClick={handleUpdate}
              className="capitalize min-w-max px-4 btn btn-square btn-primary text-white"
            >
              {editLoading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Update"
              )}
            </button>
            <Link
              role="button"
              to={"/admin/product"}
              className="btn btn-active"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </LayoutAdmin>
  );
}

export default EditProduct;
