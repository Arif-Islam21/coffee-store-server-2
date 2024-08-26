import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

const Users = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);

  const handleDelete = (id) => {
    fetch(`${import.meta.env.VITE_SERVER_API}/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remainingUser = users.filter((user) => user._id !== id);
        setUsers(remainingUser);
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Serial</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
              <td>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="btn text-2xl bg-red-400 text-white"
                >
                  <MdDeleteForever />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
