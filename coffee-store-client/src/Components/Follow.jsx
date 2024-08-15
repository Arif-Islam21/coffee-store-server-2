import img from "../../public/1912.i211.035..coffee cup on table realistic.jpg";

const Follow = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-6">
        <h2 className="font-rancho font-light text-2xl">Follow Us Now</h2>
        <h1 className="font-rancho text-5xl my-4 text-[#331A15] font-bold drop-shadow-sm blur-[1px]">
          Follow on Instagram
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 mb-8">
        <img className="h-80 w-96 rounded-xl" src={img} alt="" />
        <img className="h-80 w-96 rounded-xl" src={img} alt="" />
        <img className="h-80 w-96 rounded-xl" src={img} alt="" />
        <img className="h-80 w-96 rounded-xl" src={img} alt="" />
        <img className="h-80 w-96 rounded-xl" src={img} alt="" />
        <img className="h-80 w-96 rounded-xl" src={img} alt="" />
        <img className="h-80 w-96 rounded-xl" src={img} alt="" />
        <img className="h-80 w-96 rounded-xl" src={img} alt="" />
      </div>
    </div>
  );
};

export default Follow;
