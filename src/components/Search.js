import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loader from "./Loader";
import Header from "./Header";
const Search = () => {
    const history =useHistory();
  const [news, setNews] = useState(null);
  const ApiKey = "24796203-2faa445cce13a2d0c89c453cf";
  const getImages = async (keyword) => {
      setNews(null)
    const ApiUrl = `https://pixabay.com/api/?key=${ApiKey}&q=${keyword}&image_type=photo&pretty=true
  `;
    const response = await fetch(ApiUrl);
    const data = await response.json();
    setNews(data.hits);
  };

  useEffect(() => {
    getImages("nature");
  }, []);
  return (
    <>
    <Header getImages={getImages}/>
  {(news === null) ? <Loader/>:
    <>
    <div className="bg-white dark:bg-gray-700">
      <h3 className="text-2xl font-bold pt-4 text-center font-mulish bg-white dark:bg-gray-700 dark:text-white">
        Most Popular Images
      </h3>
                    
      <div className="container font-mulish p-4 mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {news.map((element) => {
          let tags = element.tags.split(",");
          return (
              
            <div
              className="  w-full shadow-lg bg-white rounded-md flex flex-col justify-center items-center text-left hover:shadow-xl cursor-pointer dark:bg-gray-700 dark:text-white"
              key={element.id} onClick={()=>history.push(`/description/${element.id}`)}
            >
              <img
                src={element.largeImageURL}
                className="w-full h-1/2"
                alt={element.user}
              />
              <div className="pb-6 px-4 w-full">
                <h3 className=" text-xl font-bold pt-4">{element.user}</h3>
                <p className=" text-gray-700 pb-2 font-bold dark:text-white">
                  Downloads:{element.downloads}
                </p>
                <p className=" text-gray-700 pb-2 font-bold dark:text-white">
                  Likes:{element.likes}
                </p>
                <p className=" text-gray-700 pb-2 font-bold dark:text-white">
                  Views:{element.views}
                </p>
                <p className=" text-gray-700 pb-2 font-bold dark:text-white">
                  Comments:{element.comments}
                </p>
                <p className="flex  items-center justify-start text-black-700 pb-2 space-x-2 font-bold whitespace-pre	text-sm">
                  {tags.map((elem,index) => {
                    return <span className="bg-gray-200 p-1 dark:text-white dark:bg-gray-800" key={index}>#{elem}</span>;
                  })}
                </p>
              </div>
            </div>
            
          );
        })}
      </div>
      </div>
      </>
    }
    </>
  );
};

export default Search;
