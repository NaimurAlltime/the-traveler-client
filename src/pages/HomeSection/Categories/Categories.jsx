// Import css files
import { useEffect, useState } from "react";
import Slider from "react-slick";
import Category from "./Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //   grid sm:grid-cols-2 lg:grid-cols-4 gap-6
  return (
    <div className="max-w-screen-xl mx-auto mb-10 lg:mb-24 lg:mt-32 mt-72">
      <Slider {...settings}>
        {categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </Slider>
    </div>
  );
};

export default Categories;
