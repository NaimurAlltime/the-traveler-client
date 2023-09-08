import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import GrandCayman from "../GrandCayman/GrandCayman";
import PopularPackages from "../PopularPackages/PopularPackages";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <PopularPackages></PopularPackages>
      <GrandCayman></GrandCayman>
    </div>
  );
};

export default Home;
