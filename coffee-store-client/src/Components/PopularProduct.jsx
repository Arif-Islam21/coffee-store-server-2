import { BiSolidCoffee } from "react-icons/bi";
import Productcard from "./Productcard";

const PopularProduct = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-6">
        <h2 className="font-raleway font-light text-2xl">
          --- Sip & Savor ---
        </h2>
        <h1 className="font-rancho text-5xl my-4 text-[#331A15] font-bold drop-shadow-sm blur-[1px]">
          Our Popular Products
        </h1>
        <button className="flex justify-between bg-[#E3B577] my-4 items-center btn border-2 border-[#331A15]">
          <span className="font-bold text-xl text-white font-rancho">
            Add Coffee
          </span>
          <BiSolidCoffee className="text-[#331A15] font-bold text-xl" />
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-8">
        <Productcard></Productcard>
        <Productcard></Productcard>
        <Productcard></Productcard>
      </div>
    </div>
  );
};

export default PopularProduct;
