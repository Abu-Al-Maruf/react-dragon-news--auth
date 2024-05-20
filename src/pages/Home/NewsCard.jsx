import PropTypes from "prop-types";
import { CiShare2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router-dom";
import { MdRemoveRedEye } from "react-icons/md";
import StarRatings from "react-star-ratings";
const NewsCard = ({ singleNews }) => {
  const { _id, title, image_url, details, author, rating, total_view } = singleNews;

  return (
    <div className="border">
      <div className="flex justify-between items-center bg-[#F3F3F3] py-3 px-5 rounded">
        <div className="flex justify-center gap-3">
          <img className="w-10 h-10 rounded-full" src={author?.img} alt="" />
          <h3 className="flex flex-col items-start justify-center text-#403F3F] font-semibold">
            {author.name}
            <span className="text-[#706F6F] font-normal">
              {author.published_date}
            </span>
          </h3>
        </div>

        <div className="flex justify-center items-center text-2xl gap-2">
          <Link className="cursor-pointer">
            <CiBookmark />
          </Link>
          <Link className="cursor-pointer">
            <CiShare2 />
          </Link>
        </div>
      </div>

      <div className="p-5">
        <h2 className="text-[#403F3F] font-bold text-xl leading-9">{title}</h2>
        <img className="mt-4" src={image_url} alt="" />
        <div className="text-[#706F6F] font-normal leading-6 mt-7">
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}
              <Link
                to={`/newsDetails/${_id}`}
                className="text-[#FF8C47] font-semibold"
              >
                Read More...
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>

        <div className="flex justify-between items-center pt-5 border-t mt-6">
          <div className="text-2xl flex items-center justify-center gap-3">
            <StarRatings
              rating={rating.number}
              starRatedColor="#FF8C47"
              numberOfStars={5}
              starDimension="24px"
              starSpacing="3px"
            />
            <span className="text-base mt-1">{rating.number}</span>
          </div>
          <p className="font-medium text-[#706F6F] flex items-center gap-2">
            <MdRemoveRedEye />
            {total_view}
          </p>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  singleNews: PropTypes.object,
};
export default NewsCard;
