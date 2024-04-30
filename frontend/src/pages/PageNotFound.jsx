import Layout from "../layout/Layout";

function PageNotFound() {
  return (
    <Layout>
      <div className="max-w-[768px] h-[calc(50vh-108px)] mx-auto text-gray-700 text-wrap flex justify-center items-center">
        <h1 className="text-3xl font-bold">404 Page Not Found !</h1>
      </div>
    </Layout>
  );
}

export default PageNotFound;
