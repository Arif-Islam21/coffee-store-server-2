import Follow from "./Follow";
import Hero from "./Hero";
import HeroBase from "./HeroBase";
import PopularProduct from "./PopularProduct";

const Homepage = () => {
  return (
    <div>
      <Hero></Hero>
      <HeroBase></HeroBase>
      <PopularProduct></PopularProduct>
      <Follow></Follow>
    </div>
  );
};

export default Homepage;
