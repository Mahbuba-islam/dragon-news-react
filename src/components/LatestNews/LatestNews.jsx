import filter from "daisyui/components/filter";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";


const LatestNews = () => {

    const [news, setNews] = useState([])
 
   useEffect(()=> {
   fetch('/news.json')
   .then(res => res.json())
   .then(result => setNews(result))
   }, [])

  
   const breakingNews = news.filter(n => n.others.is_today_pick === true)
   console.log(breakingNews)
   
    return (
        <div className="flex items-center gap-5 bg-base-200 p-3">
            <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
            <Marquee pauseOnHover = {true}>
                {
                    breakingNews.map(news =>  <p className="font-bold px-2"> {news.title}... </p> )
                }
           
           
            </Marquee>
           
        </div>
    );
};

export default LatestNews;