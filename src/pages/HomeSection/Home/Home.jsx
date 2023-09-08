import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import PopularPackages from "../PopularPackages/PopularPackages";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <PopularPackages></PopularPackages>
    </div>
  );
};

export default Home;
