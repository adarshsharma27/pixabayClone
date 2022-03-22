import { useState, useEffect } from "react";
import {NavLink,useParams } from "react-router-dom";

import Loader from "./Loader";
const Description = () => {
    const [images, setImages] = useState(null);
  const ApiKey = "24796203-2faa445cce13a2d0c89c453cf";
  const {id} =useParams();
  const getImages = async () => {
    const ApiUrl = `https://pixabay.com/api/?key=${ApiKey}&id=${id}&image_type=photo&pretty=true
`;
    const response = await fetch(ApiUrl);
    const data = await response.json();
    setImages(data.hits);
  };

  useEffect(() => {
    getImages();
    // eslint-disable-next-line
  }, []);
  return (
    <>
  {(images === null) ? <Loader/>:
    <>
    <div className=" dark:bg-gray-700 dark:text-white h-screen">
      <h3 className="text-2xl font-bold pt-4 text-center font-mulish">
        More About Image
      </h3>
                    
      <div className="container font-mulish p-4 mx-auto w-full ">
        {images.map((element) => {
          let tags = element.tags.split(",");
          return (
              
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-x-15 py-10 "
              key={element.id} 
            >
              <img
                src={element.largeImageURL}
                className="w-full "
                alt={element.user}
              />
              <div className="p-6">
                <h3 className=" text-xl font-bold pt-4">{element.user}</h3>
                <p className=" text-gray-700 pb-2 font-bold">
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
                <p className="flex  items-center justify-start space-x-4 text-black-700 pb-2  font-bold">
                  {tags.map((elem,index) => {
                    return <span className="bg-gray-200 px-2 dark:text-white dark:bg-gray-800" key={index}>#{elem}</span>;
                  })}
                </p>
                <a
            href={element.previewURL}
            className="bg-purple-700 text-white w-8/12 text-lg px-5 py-2  mr-4 hover:bg-blue-500"
          >
            Preview
          </a>
                <NavLink
            to="/"
            className="bg-purple-700 text-white w-8/12 text-lg px-5 py-2  hover:bg-blue-500"
          >
           Back
          </NavLink>
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
}

export default Description
