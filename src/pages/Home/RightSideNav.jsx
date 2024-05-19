import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import qZone1 from "../../../src/assets/qZone1.png";
import qZone2 from "../../../src/assets/qZone2.png";
import qZone3 from "../../../src/assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 justify-start p-4 w-full">
        <h2 className="text-xl font-semibold text-[#403F3F]">Login With</h2>

        <button className="btn text-blue-600 bg-transparent border border-blue-600">
          <span className="text-lg">
            <FaGoogle />
          </span>
          Login With Google
        </button>
        <button className="btn bg-transparent border border-black">
          <span className="text-lg">
            <FaGithub />
          </span>
          Login With Github
        </button>
      </div>

      <div className="flex flex-col justify-start p-4 w-full">
        <h2 className="text-xl font-semibold text-[#403F3F]"> Find Us On</h2>

        <a className="flex justify-start items-center mt-5 gap-4 text-[#706F6F] font-medium border p-4 rounded-t-md">
          <span className="text-lg text-blue-800">
            <FaFacebook />
          </span>
          Facebook
        </a>
        <a className="flex justify-start items-center gap-4 text-[#706F6F] font-medium border-x p-4">
          <span className="text-lg text-blue-500">
            <FaTwitter />
          </span>
          Twitter
        </a>
        <a className="flex justify-start items-center gap-4 text-[#706F6F] font-medium border p-4 rounded-b-md">
          <span className="text-lg text-pink-600">
            <FaInstagram />
          </span>
          Instagram
        </a>
      </div>

      <div className="bg-[#F3F3F3] p-4">
        <h2 className="text-xl font-semibold text-[#403F3F]">Q-Zone</h2>

        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>

      <div
        style={{ backgroundImage: `url('../../../src/assets/bg.png')` }}
        className="py-16 px-10 flex flex-col gap-6 text-center bg-cover bg-no-repeat mt-5 text-white"
      >
        <h2 className="text-3xl font-bold">Create an Amazing Newspaper</h2>
        <p>
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>

        <button className="bg-[#D72050] text-xl font-semibold p-4 text-white rounded hover:bg-slate-400">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default RightSideNav;
