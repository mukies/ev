import { useState } from "react";
import Layout from "../../layout/Layout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreateProduct() {
  const [value, setValue] = useState("");
  return (
    <Layout>
      <div className="max-w-[768px]  mx-auto">
        <div className="max-w-max flex mx-auto justify-center items-center p-2 border-b-2 border-gray-700">
          <h1 className="text-center text-3xl font-semibold">Create Product</h1>
        </div>
        <form
          className="p-5 h-auto border-2 border-gray-300 rounded-lg mt-5 flex flex-col gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="file" className="flex max-w-max flex-col gap-2">
            <div className="text-xl max-w-max p-4 border-2 border-gray-300 rounded-lg  cursor-pointer">
              Product Image
            </div>
            <input id="file" type="file" className="hidden " />
          </label>
          <label htmlFor="title" className="flex flex-col gap-2">
            <span className="text-3xl font-semibold">Product Name</span>
            <input
              id="title"
              type="text"
              placeholder="Product name..."
              className="input input-bordered w-full "
            />
          </label>
          <label htmlFor="mini-des" className="flex flex-col gap-2">
            <span className="text-3xl font-semibold">Short Description</span>
            <ReactQuill id="mini-des" value={value} onChange={setValue} />
          </label>

          <label htmlFor="quill" className="flex flex-col gap-2">
            <span className="text-3xl font-semibold">Full Description</span>
            <ReactQuill id="quill" value={value} onChange={setValue} />
          </label>

          <label htmlFor="image" className="flex max-w-max flex-col gap-2">
            <div className="text-xl max-w-max p-4 border-2 border-gray-300 rounded-lg  cursor-pointer">
              Descriptive Image
            </div>
            <input id="image" type="file" className="hidden " />
          </label>
          <button
            onClick={() => console.log("first", value)}
            className="capitalize min-w-max px-4 btn btn-square btn-primary"
          >
            create post
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default CreateProduct;
