import { SiCoffeescript } from "react-icons/si";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar lg:pl-[40vw] text-white font-rancho bg-[#331A15]">
      <div className="flex-1">
        <a className="btn btn-ghost lg:text-4xl border-2 text-xl">
          <SiCoffeescript />
          Espresso Emporium
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          ></div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu bg-[#331A15] menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/addCoffee"} className="justify-between">
                addCoffee
              </Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/register"}>Register</Link>
            </li>
            <li>
              <Link to={"/users"}>Users</Link>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
