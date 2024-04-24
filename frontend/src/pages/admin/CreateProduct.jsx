import { useState } from "react";
import Layout from "../../layout/Layout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useGetImageUrl from "../../hooks/useGetImageUrl";
import { FaTimes } from "react-icons/fa";

function CreateProduct() {
  const [shortDes, setShortDes] = useState("");
  const [fullDes, setFullDes] = useState("");
  const [category, setCategory] = useState("homeuse");
  const { previewImg, imgUrl, setImgUrl } = useGetImageUrl();
  const {
    previewImg: preview,
    imgUrl: url2,
    setImgUrl: setUrl2,
  } = useGetImageUrl();
  return (
    <Layout>
      <div className="max-w-[768px]  mx-auto">
        <div className="max-w-max flex mx-auto justify-center items-center p-2 border-b-2 border-gray-700">
          <h1 className="text-center text-3xl font-semibold">Create Product</h1>
        </div>
        <form
          className="sm:p-5 h-auto sm:border-2 border-gray-300 rounded-lg mt-5 flex flex-col gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          {!imgUrl && (
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
            <div className="h-[100px] mx-auto sm:mx-0 mb-20 sm:mb-10 relative w-[100px]">
              <span
                onClick={() => setImgUrl(null)}
                className="absolute top-0 right-0 btn btn-circle btn-sm"
              >
                <FaTimes />
              </span>
              <img src={imgUrl} alt="image" />
            </div>
          )}
          <label htmlFor="title" className="flex px-2 flex-col gap-2">
            <span className="text-3xl font-semibold">
              Product Name<span className="text-[red] text-xl">*</span>
            </span>
            <input
              id="title"
              type="text"
              placeholder="Product name..."
              className="input input-bordered w-full "
            />
          </label>
          <label htmlFor="category" className="flex px-2 flex-col gap-3">
            <span className="text-3xl font-semibold">
              Category<span className="text-[red] text-xl">*</span>
            </span>
            <select
              id="category"
              onChange={(e) => setCategory(e.target.value)}
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                Select Category
              </option>
              <option value={"homeuse"}>Homeuse EV Charger</option>
              <option value={"public"}>Public EV Charger</option>
              <option value={"portable"}>Portable EV Charger</option>
              <option value={"dc-charging"}>DC Charging Station</option>
              <option value={"charging-cable"}>Charging Cable</option>
              <option value={"ev-adapter"}>EV Adapter</option>
              <option value={"ev-parts"}>EV Parts</option>
            </select>
          </label>

          <label htmlFor="mini-des" className="flex  flex-col gap-2">
            <span className="text-3xl font-semibold px-2">
              Short Description
            </span>
            <ReactQuill
              className="w-[100vw] sm:w-full"
              id="mini-des"
              value={shortDes}
              onChange={setShortDes}
            />
          </label>

          <label htmlFor="quill" className="flex  flex-col gap-2">
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

          {!url2 && (
            <label htmlFor="image" className="flex max-w-max flex-col gap-2">
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
            <div className="h-[100px] w-[100px] mb-10 mx-auto sm:mx-0 relative">
              <span
                onClick={() => setUrl2(null)}
                className="absolute top-0 right-0 btn btn-circle btn-sm"
              >
                <FaTimes />
              </span>
              <img src={url2} alt="image" />
            </div>
          )}
          <div className="px-4">
            <button className="capitalize w-full sm:w-auto sm:min-w-max px-4 btn btn-square btn-primary">
              create product
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default CreateProduct;
