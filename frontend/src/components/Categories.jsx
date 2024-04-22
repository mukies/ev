import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function Categories({ category }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between gap-10  p-3 ">
      <div className="h-[150px] w-[150px] rounded-md overflow-hidden">
        <img
          onClick={() =>
            navigate(
              category.slug.startsWith("homeuse") ||
                category.slug.startsWith("public") ||
                category.slug.startsWith("portable") ||
                category.slug.startsWith("dc")
                ? `/product/${category.slug}`
                : `/${category.slug}`
            )
          }
          src={category.img}
          alt="category_image"
          loading="lazy"
          className="cursor-pointer h-full w-full object-cover object-center hover:scale-110 duration-300"
        />
      </div>
      <div className="flex justify-center flex-1 gap-2 flex-col">
        <h1
          onClick={() =>
            navigate(
              category.slug.startsWith("homeuse") ||
                category.slug.startsWith("public") ||
                category.slug.startsWith("portable") ||
                category.slug.startsWith("dc")
                ? `/product/${category.slug}`
                : `/${category.slug}`
            )
          }
          className="link link-primary text-xl"
        >
          {category.name}
        </h1>
        <ul>
          {category.mini_des.map((it, idx) => (
            <li key={idx}>{it}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Categories;
