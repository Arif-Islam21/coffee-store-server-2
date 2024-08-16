import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewCoffee = () => {
  const viewData = useLoaderData();
  const { name, chef, supplier, taste, category, details, photo } = viewData;
  return (
    <div className="bg-[#F4F3F0] mx-24 px-4 py-2 my-12 flex rounded-lg shadow-xl">
      <figure className=" my-auto">
        <img src={photo} alt={details} className="rounded-lg " />
      </figure>
      <div className="card-body lg:ml-24">
        <h2 className="card-title text-3xl font-bold">{name}</h2>
        <div className="flex items-center gap-2">
          <h2 className="card-title">Name:</h2>
          <p>{name}</p>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="card-title">Chef:</h2>
          <p>{chef}</p>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="card-title">Supplier:</h2>
          <p>{supplier}</p>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="card-title">Taste:</h2>
          <p>{taste}</p>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="card-title">Category:</h2>
          <p>{category}</p>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="card-title">Details:</h2>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewCoffee;
