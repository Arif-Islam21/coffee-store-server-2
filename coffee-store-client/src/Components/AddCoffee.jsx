import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddCoffee = () => {
  return (
    <div className="my-8">
      <div className="flex items-center gap-2 ml-4">
        <Link to={"/"}>
          <FaArrowLeft></FaArrowLeft>
        </Link>
        <span className="font-rancho text-[#374151] text-xl font-bold blur-[1px]">
          Back to home
        </span>
      </div>
      <form className="bg-[#F4F3F0] px-32 py-16">
        <div className="text-center">
          <h2 className="font-rancho text-[#374151] text-3xl font-bold blur-[1px]">
            Add New Coffee
          </h2>
          <p className="max-w-3xl font-raleway mx-auto text-sm text-[#1B1A1A] my-4">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <div className="flex justify-between gap-4">
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text text-xl">Name</span>
            </div>
            <input
              type="text"
              placeholder="Enter Coffe Name"
              className="input input-bordered text-gray-200 w-full max-w-lg"
            />
          </label>
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text text-xl">Chef</span>
            </div>
            <input
              type="text"
              placeholder="Enter Chef Name"
              className="input input-bordered text-gray-200 w-full max-w-lg"
            />
          </label>
        </div>
        <div className="flex justify-between gap-4">
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text text-xl">Supplier</span>
            </div>
            <input
              type="text"
              placeholder="Enter Supplier Name"
              className="input input-bordered text-gray-200 w-full max-w-lg"
            />
          </label>
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text text-xl">Taste</span>
            </div>
            <input
              type="text"
              placeholder="Enter Coffe Taste"
              className="input input-bordered text-gray-200 w-full max-w-lg"
            />
          </label>
        </div>
        <div className="flex justify-between gap-4">
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text text-xl">Category</span>
            </div>
            <input
              type="text"
              placeholder="Enter Coffe Category"
              className="input input-bordered text-gray-200 w-full max-w-lg"
            />
          </label>
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text text-xl">Details</span>
            </div>
            <input
              type="text"
              placeholder="Enter Coffe Details"
              className="input input-bordered text-gray-200 w-full max-w-lg"
            />
          </label>
        </div>
        <div className="flex justify-between gap-4">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-xl">Photo</span>
            </div>
            <input
              type="text"
              placeholder="Enter Photo Url"
              className="input input-bordered text-gray-200 w-full"
            />
          </label>
        </div>
        <input
          className="w-full btn text-[#331A15] border-[#331A15] bg-[#D2B48C] border-2 text-xl py-2 font-rancho my-4"
          type="submit"
          value="Add Coffee"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
