import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import LeftSideNav from "./LeftSideNav";
import RightSideNav from "./RightSideNav";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>

      <section className="grid md:grid-cols-4 grid-cols-3 gap-5 py-10">
        <LeftSideNav></LeftSideNav>

        <div className="col-span-2 space-y-8">
          <h2 className="text-xl text-[#403F3F] font-semibold">
            Dragon News Home
          </h2>

          {news.map((singleNews) => (
            <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>
          ))}
        </div>

        <RightSideNav></RightSideNav>
      </section>
    </div>
  );
};

export default Home;
