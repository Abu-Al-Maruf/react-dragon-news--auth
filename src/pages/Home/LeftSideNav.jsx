import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import img1 from "../../../src/assets/1.png";
import img2 from "../../../src/assets/2.png";
import img3 from "../../../src/assets/3.png";
import moment from "moment";
import { FaRegCalendar } from "react-icons/fa";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold">All Category</h2>

      <div className="px-12 space-y-7 mt-9">
        {categories?.map((category) => {
          return (
            <ul
              key={category.id}
              className="text-[#9F9F9F] font-medium text-lg"
            >
              <li>
                <NavLink to={category.id}>{category.name}</NavLink>
              </li>
            </ul>
          );
        })}
      </div>
      {/* bottom news  */}
      <div className="flex flex-col justify-center items-center gap-4 mt-8">
        <div>
          <img src={img1} alt="" />
          <h1 className="text-xl font-semibold mt-5">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h1>
          <div className="text-[#9F9F9F] font-medium mt-5 flex justify-start items-center gap-2">
            <span className="text-[#403F3F] pr-3">Sports</span>
            <FaRegCalendar /> <span>{moment().format("MMMM D, YYYY")}</span>
          </div>
        </div>

        <div>
          <img src={img2} alt="" />
          <h1 className="text-xl font-semibold mt-5">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h1>
          <div className="text-[#9F9F9F] font-medium mt-5 flex justify-start items-center gap-2">
            <span className="text-[#403F3F] pr-3">Sports</span>
            <FaRegCalendar /> <span>{moment().format("MMMM D, YYYY")}</span>
          </div>
        </div>

        <div>
          <img src={img3} alt="" />
          <h1 className="text-xl font-semibold mt-5">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h1>
          <div className="text-[#9F9F9F] font-medium mt-5 flex justify-start items-center gap-2">
            <span className="text-[#403F3F] pr-3">Sports</span>
            <FaRegCalendar /> <span>{moment().format("MMMM D, YYYY")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
