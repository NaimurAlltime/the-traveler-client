import { useEffect, useState } from "react";
import GrandCaymanCard from "./GrandCaymanCard";

const GrandCayman = () => {
  const [grandCayman, setGrandCayman] = useState([]);
  useEffect(() => {
    fetch("grandCayman.json")
      .then((res) => res.json())
      .then((data) => setGrandCayman(data));
  }, []);

  return (
    <div>
      {/* <!-- Title --> */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-12 mt-24">
        <h2 className="text-2xl font-normal md:text-3xl md:leading-tight dark:text-white">
          Things to do in <span className="font-semibold">Grand Cayman</span>
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Families couples workaholics, adventures, find your own piece of
          paradise
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-9 mb-10">
        {grandCayman.map((item) => (
          <GrandCaymanCard key={item.id} item={item}></GrandCaymanCard>
        ))}
      </div>

      {/* <!-- End Title --> */}
    </div>
  );
};

export default GrandCayman;
