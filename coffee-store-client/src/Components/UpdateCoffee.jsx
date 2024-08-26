import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const data = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = data;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const coffeeData = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    fetch(`${import.meta.env.VITE_SERVER_API}/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

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
      <form onSubmit={handleUpdateCoffee} className="bg-[#F4F3F0] px-32 py-16">
        <div className="text-center">
          <h2 className="font-rancho text-[#374151] text-3xl font-bold blur-[1px]">
            Update Coffee
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
              name="name"
              defaultValue={name}
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
              name="chef"
              defaultValue={chef}
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
              name="supplier"
              defaultValue={supplier}
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
              name="taste"
              defaultValue={taste}
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
              name="category"
              defaultValue={category}
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
              name="details"
              defaultValue={details}
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
              name="photo"
              defaultValue={photo}
              placeholder="Enter Photo Url"
              className="input input-bordered text-gray-200 w-full"
            />
          </label>
        </div>
        <input
          className="w-full btn text-[#331A15] border-[#331A15] bg-[#D2B48C] border-2 text-xl py-2 font-rancho my-4"
          type="submit"
          value="Update Coffee"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
