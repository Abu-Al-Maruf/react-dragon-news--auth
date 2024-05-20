import { useLoaderData, useParams } from "react-router-dom";
import RightSideNav from "../Home/RightSideNav";
import Navbar from "../shared/Navbar/Navbar";
import { useEffect, useState } from "react";
const NewsDetails = () => {
  const [singleNews, setSingleNews] = useState({});
  const news = useLoaderData();
  const { id } = useParams();

  const { title, image_url, details } = singleNews;

  useEffect(() => {
    const findNews = news.find((newNews) => newNews._id === id);
    setSingleNews(findNews);
  }, [news, id]);

  return (
    <div className="px-20">
      <Navbar></Navbar>

      <div className="grid grid-cols-4 gap-5 ">
        <div className="col-span-3 border rounded p-5">
          <h2 className="font-semibold text-xl">Dragon News</h2>

          <img className="mt-5" src={image_url} />
          <h2 className="text-2xl font-bold text-[#403F3F] my-5">{title}</h2>
          <p className="text-[#706F6F] font-normal">{details}</p>
        </div>

        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
