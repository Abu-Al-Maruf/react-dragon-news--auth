import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
 const {createUser} = useContext(AuthContext);


  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    createUser(email,password)
    .then((res) => {
      console.log(res.user)
    })
    .catch((error) => {
      console.error(error)
    })

  };

  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="max-w-2xl mx-auto bg-gray-300 rounded mt-6 py-10 px-20">
        <h2 className="text-[#403F3F] font-semibold text-3xl text-center">
          Register your account
        </h2>

        <form
          onSubmit={handleRegister}
          className="flex flex-col gap-5 py-12 px-6"
        >
          <div className="w-full flex flex-col gap-2">
            <label
              className="text-[#403F3F] text-lg font-semibold"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              className=" p-4 rounded"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label
              className="text-[#403F3F] text-lg font-semibold"
              htmlFor="photo"
            >
              Photo URL
            </label>
            <input
              className=" p-4 rounded"
              type="text"
              name="photo"
              id="photo"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label
              className="text-[#403F3F] text-lg font-semibold"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              className=" p-4 rounded"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label
              className="text-[#403F3F] text-lg font-semibold"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className=" p-4 rounded"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button className="btn rounded bg-[#403F3F] text-white">
            Register
          </button>

          <p className="text-center">
            Already Have An Account ?
            <Link className="text-[#FF8C47]" to={"/login"}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
