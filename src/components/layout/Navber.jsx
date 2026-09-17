import Link from "next/link";
import Logo from "../Logo";
import NavLink from "../ActiveButton/NavLink";
import { FaShoppingCart } from "react-icons/fa";

const Navber = () => {
  const Navlinks = (
    <>
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/products"}>Products</NavLink>
      </li>
      <li>
        <NavLink href={"/contact"}>Contact</NavLink>
      </li>
      <li>
        <NavLink href={"/blog"}>Blog</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Navlinks}
            </ul>
          </div>
          <Logo></Logo>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Navlinks}</ul>
        </div>
        <div className="navbar-end space-x-5">
          <Link className="btn btn-primary text-xl" href={"/cart"}>
            <FaShoppingCart />
          </Link>
          <Link href={"/login"}>
            <button className="btn btn-primary btn-outline">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
