import { Link } from "react-router-dom";
import Layout from "../layout/Layout";

function PageNotFound() {
  return (
    <Layout title={"Page Not Found"}>
      <div className="max-w-[768px] h-[calc(50vh-108px)] flex flex-col justify-center mx-auto text-gray-700 gap-4 text-wrap items-center">
        <h1 className="text-3xl font-bold">404 Page Not Found !</h1>
        <Link role="p" to={"/"} className="link link-primary max-w-max text-xl">
          go to home
        </Link>
      </div>
    </Layout>
  );
}

export default PageNotFound;
