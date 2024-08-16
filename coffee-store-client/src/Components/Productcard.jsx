import { FaEye, FaPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const Productcard = ({ coff }) => {
  const { name, chef, supplier, taste, category, details, photo } = coff;

  return (
    <div className="card card-side bg-base-100 max-w-xl px-8 py-4 my-4 shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-center lg:min-w-72 items-center">
        <div className="card-body flex justify-center">
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
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="h-10 w-10 bg-[#D2B48C] text-white flex items-center justify-center text-xl rounded-md">
          <FaEye />
        </div>
        <div className="h-10 w-10 bg-[#3C393B] my-6 text-white flex items-center justify-center text-xl rounded-md">
          <FaPen />
        </div>
        <div className="h-10 w-10 bg-[#EA4744] text-white flex items-center justify-center text-xl rounded-md">
          <MdDelete />
        </div>
      </div>
    </div>
  );
};

export default Productcard;
