
import { format } from "date-fns";
import { FaShareAlt, FaRegBookmark, FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, rating, author, total_view, thumbnail_url, details,id } = news;
  const { name, published_date, img } = author;
  const { number, badge } = rating;
  
  const formattedDate = format(new Date(published_date), 'MM-dd-yy')

  return (
    <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      {/* Header: Author + Icons */}
      <div className="flex items-center justify-between px-5 pt-5">
        <div className="flex items-center gap-3">
          <img src={img} alt={name} className="w-9 h-9 rounded-full object-cover" />
          <div>
            <p className="font-semibold text-gray-800">{name}</p>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500 text-lg">
          <FaShareAlt className="cursor-pointer hover:text-blue-600" />
          <FaRegBookmark className="cursor-pointer hover:text-blue-600" />
        </div>
      </div>

      {/* Headline */}
      <div className="px-5 pt-4">
        <h2 className="text-xl font-bold text-gray-900 leading-snug">
          {title}
        </h2>
      </div>

      {/* Thumbnail */}
      <div className="mt-4">
        <img src={thumbnail_url} alt={title} className="w-full h-56 object-cover" />
      </div>

      {/* Details */}
      <div className="px-5 py-4 space-y-3">
        <p className="text-sm text-gray-700">
          {details?.slice(0, 120)}...
        </p>
        <Link  to={`/categoryDetails/${id}`}>
          <button  className="mb-6 text-sm text-white bg-orange-500 px-4 py-1 rounded hover:bg-orange-600 transition">
          Read More
        </button>
        </Link>
      

        {/* Tags */}
        <div className="flex flex-wrap gap-2 text-xs text-gray-600">
          {["Biden", "EU", "Ukraine", "Military", "Security", "United States"].map((tag, i) => (
            <span key={i} className="bg-gray-100 px-2 py-0.5 rounded">{tag}</span>
          ))}
        </div>
      </div>

      {/* Footer: Rating + Views */}
      <div className="px-5 py-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-600">
       
        <div className="flex items-center gap-2">
          {
          Array.from({length:rating.number}).map((_,i)=> ( <FaStar key={i} className="text-orange-400" />))
        }
          <span className="font-semibold">{number}</span>
          <span>({badge})</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEye />
          <span className="font-semibold">{total_view}</span>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;