import { Link, NavLink } from "react-router-dom";
import userProImg from "../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Log Out Success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-base-100 flex justify-end items-center gap-x-64">
      <div>
        <ul className="menu menu-horizontal px-1 text-[#706F6F] font-normal">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/career"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Career
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex justify-center gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={userProImg} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-xl w-52"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>{user ? <a>Logout</a> : <a>Login</a>}</li>
          </ul>
        </div>

        {user ? (
          <Link
            onClick={handleLogOut}
            to={"/"}
            className="flex btn bg-[#403F3F] text-xl font-medium rounded px-10 text-white"
          >
            Log Out
          </Link>
        ) : (
          <Link
            to={"/login"}
            className="flex btn bg-[#403F3F] text-xl font-medium rounded px-10 text-white"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
