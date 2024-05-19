import moment from "moment";
import logo from "../../../assets/logo.png";
import Marquee from "react-fast-marquee";
const Header = () => {
  return (
    <div className="flex flex-col items-center pt-10 pb-3">
      <img src={logo} alt="" />
      <p className="text-lg font-normal mt-5 text-[#706F6F]">
        Journalism Without Fear or Favour
      </p>
      <p className="text-[#706F6F] mt-3">
        <span className="text-[#403F3F] font-medium">
          {moment().format("dddd")}
        </span>
        , {moment().format("MMMM D, YYYY")}
      </p>
      <div className="flex justify-start w-full mt-8 items-center gap-5 bg-gray-100 p-4">
        <button className="btn bg-[#D72050] rounded px-6 font-medium text-xl text-white">
          Latest
        </button>
        <div className="font-semibold text-[#403F3F]">
          <Marquee>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Header;
