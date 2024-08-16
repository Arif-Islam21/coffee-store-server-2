import { FaEye, FaPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Productcard = ({ coff, setCoffee, coffee }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coff;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffee.filter((cof) => cof._id !== _id);
              setCoffee(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 max-w-xl px-8 py-4 my-4 shadow-xl">
      <figure>
        <img src={photo} alt="Coffee" />
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
        <Link className="h-10 w-10 bg-[#D2B48C] text-white flex items-center justify-center text-xl rounded-md">
          <FaEye />
        </Link>
        <Link
          to={`/updateCoffee/${_id}`}
          className="h-10 w-10 bg-[#3C393B] my-6 text-white flex items-center justify-center text-xl rounded-md"
        >
          <FaPen />
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="h-10 w-10 bg-[#EA4744] text-white flex items-center justify-center text-xl rounded-md"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default Productcard;
