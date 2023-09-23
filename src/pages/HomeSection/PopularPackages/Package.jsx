import clsx from "clsx";
import { ImPriceTag } from "react-icons/im";

const Package = ({ item }) => {
  const { title, image, price, startDate, endDate } = item;

  // Define three different color classes for the price text
  const priceColorClasses = [
    "text-blue-500",
    "text-pink-500",
    "text-green-500",
    "text-pink-500",
    "text-green-500",
    "text-yellow-500",
    "text-pink-500",
    "text-blue-500",
    "text-pink-500",
    "text-yellow-500",
    "text-pink-500",
    "text-green-500",
    "text-pink-500",
    "text-cyan-500",
    "text-yellow-500",
    "text-pink-500",
    "text-green-500",
    "text-yellow-500",
  ];

  // Generate a random index to select a color class from the array
  const randomPriceColorIndex = Math.floor(
    Math.random() * priceColorClasses.length + 1
  );
  // Define three different color classes for the price text
  const buttonColorClasses = [
    "bg-blue-500",
    "bg-yellow-500",
    "bg-pink-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-blue-500",
    "bg-pink-500",
    "bg-yellow-500",
    "bg-pink-500",
    "bg-green-500",
    "bg-cyan-500",
    "bg-yellow-500",
    "bg-pink-500",
    "bg-green-500",
    "bg-yellow-500",
  ];
  // Generate a random index to select a color class from the array
  const randomButtonColorIndex = Math.floor(
    Math.random() * buttonColorClasses.length + 1
  );
  return (
    <div className="lg:p-0 p-2">
      {/* // <!-- Card --> */}
      <div className="group relative block" href="#">
        <div className="flex-shrink-0 relative overflow-hidden w-full h-[260px] before:z-[1]">
          <img
            className="w-full h-full absolute top-0 left-0 object-cover"
            src={image}
            alt="Image Description"
          />
        </div>

        <div className="absolute top-0 inset-x-0 z-10">
          <div className="p-4 flex flex-col h-full sm:p-6">
            <button
              className={clsx(
                "text-white font-medium absolute right-0 px-4 py-1 mt-2",
                buttonColorClasses[randomButtonColorIndex]
              )}
            >
              View Details
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 bg-[#1c170d]  px-2 opacity-70 mt-12 inset-x-3 mb-3 z-10">
          <div className="flex justify-between items-center px-2 h-full pb-2 text-white text-lg font-semibold">
            <h3 className="mt-2">{title}</h3>
            <p
              className={clsx(
                "mt-2 font-bold text-xl flex items-center gap-3",
                priceColorClasses[randomPriceColorIndex]
              )}
            >
              <span className="text-white">
                <ImPriceTag />
              </span>{" "}
              $ {price}
            </p>
          </div>
        </div>
      </div>
      {/* <!-- End Card --> */}
      <div className="text-center mt-4 text-gray-500 font-medium">
        <p>
          {" "}
          {startDate} - {endDate}{" "}
        </p>
      </div>
    </div>
  );
};

export default Package;
