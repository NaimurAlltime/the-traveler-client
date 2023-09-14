import "./GrandCayman.css";

const GrandCaymanCard = ({ item }) => {
  const { title, image } = item;
  return (
    // <!-- Card -->
    <div
      className="group hover:bg-gray-100 lg:p-0 p-2 rounded-xl transition-all dark:hover:bg-white/[.05]"
      href="#"
    >
      <div className="aspect-w-16 aspect-h-10">
        <h3 className="text-xl mb-2 text-center text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
          {title}
        </h3>
        <div className="poligon">
          <img
            className="flex-shrink-0  border-2 border-gray-500 border-dashed object-top relative overflow-hidden w-full h-[260px] before:z-[1]"
            src={image}
            alt="Image Description"
          />
        </div>
      </div>
    </div>
  );
};

export default GrandCaymanCard;
