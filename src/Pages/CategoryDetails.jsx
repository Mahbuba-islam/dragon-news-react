import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";

const NewsDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const newsDetails = data.find(news => news.id == id);

  const { title, rating, author, total_view, thumbnail_url, details } = newsDetails;
  const { name, published_date, img } = author;
  const { number, badge } = rating;

  return (
    <div className="max-w-4xl mx-auto p-4 my-12jnhgvfcdxspijkhl;'jjopkpoi">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={thumbnail_url} alt={title} className="w-full h-64 object-cover" />
        </figure>

        <div className="card-body space-y-4">
          <h2 className="card-title text-2xl font-bold">{title}</h2>

          <div className="flex items-center gap-4">
            <img src={img} alt={name} className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-medium">{name}</p>
              <p className="text-sm text-gray-500">{published_date}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {Array.from({ length: number }).map((_, i) => (
              <FaStar key={i} className="text-orange-400" />
            ))}
            <span className="badge badge-info">{badge}</span>
            <span className="text-sm text-gray-600">Views: {total_view}</span>
          </div>

          <p className="text-gray-700 leading-relaxed">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;