import "./Category.css";
const Category = ({ category }) => {
  const { category_name, image } = category;
  return (
    <div className="lg:p-0 p-2 mx-2">
      {/* // <!-- Card --> */}
      <a className="group relative block" href="#">
        <div className="flex-shrink-0 relative rounded-md overflow-hidden w-full h-[200px] before:z-[1]">
          <img
            className="w-full h-full absolute top-0 left-0 object-cover"
            src={image}
            alt="Image Description"
          />
        </div>

        <div className="absolute bottom-0 bg-[#1c170d] rounded-b-md opacity-60 mt-12 inset-x-0 z-10">
          <div className="flex flex-col h-full pt-1 pb-2">
            <p className="mt-2 text-center text-white text-xl font-semibold">
              {category_name}
            </p>
          </div>
        </div>
      </a>
      {/* <!-- End Card --> */}
    </div>
  );
};

export default Category;
