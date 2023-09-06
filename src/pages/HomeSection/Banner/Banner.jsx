import "./Banner.css";

const Banner = () => {
  return (
    <section className="">
      <div className="mx-auto banner">
        <div className="ml-5">
          <h2 className="text-3xl md:text-4xl md:leading-normal text-center text-white font-semibold tracking-wider">
            {`Let's Make Your Best
           `}
            <br />
            Trip Ever
          </h2>
          <p className="text-center text-white mt-3">
            Plan and book your perfect trip with expert advice, travel tips,
            destination
            <br />
            information and inspiration from us.
          </p>
          <div className="flex items-center justify-center lg:mb-5 mb-32">
            <button className="mt-5 bg-[#fadd03] rounded-md px-3 py-1">
              Explore Now
            </button>
          </div>
        </div>
        <div className="banner-curd effect1 md:flex border-1 border-[#cdf3f9] grid md:top-[71%] top-[53%]">
          <div className="CheckInDiv w-full">
            <label
              className="font-normal block text-white mb-2"
              htmlFor="CheckInDate"
            >
              Check In Date
            </label>
            <input
              type="date"
              name="location"
              id="location"
              className="outline-none font-normal"
              placeholder="Dream Destination"
            />
          </div>
          <div className="locationDiv w-full">
            <label
              className="font-normal block text-white mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              className="outline-none font-normal"
              placeholder="Dream Destination"
            />
          </div>
          <div className="distanceDiv w-full">
            <label
              className="font-normal block text-white mb-2"
              htmlFor="distance"
            >
              Distance
            </label>
            <input
              type="text"
              name="distance"
              id="distance"
              className="outline-none font-normal"
              placeholder="11/Meters"
            />
          </div>
          <div className="priceDiv w-full">
            <label
              className="font-normal block text-white mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              type="text"
              name="price"
              id="price"
              className="outline-none font-normal"
              placeholder="$140-$500"
            />
          </div>
          <button className="bg-gradient-to-r from-[#fbd104] via-[#ffb807] to-[#ffbb08] px-9 md:ml-7 py-2 mt-2 text-xl font-semibold rounded-md text-white uppercase">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
