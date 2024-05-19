import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="max-w-2xl mx-auto bg-slate-200 rounded mt-6 py-10 px-20">
        <h2 className="text-[#403F3F] font-semibold text-3xl text-center">
          Login your account
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-5 py-12 px-6">
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
            />
          </div>

          <button className="btn rounded bg-[#403F3F] text-white">Login</button>

          <p className="text-center">
            Don&apos;t Have An Account ?{" "}
            <Link className="text-[#FF8C47]" to={"/register"}>
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
