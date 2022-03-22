import React from "react";
import { useState } from "react";
import { FaMoon ,FaSun} from "react-icons/fa";
const Header = ({ getImages }) => {
    const [search, setSearch] = useState("");
const[darkMode,setDarkMode]=useState(false);
const audio = new Audio("../audio/toggle.mp3")
    const addDarkMode = () => {
        let darkmode = document.querySelector("html");
        darkmode.classList.toggle("dark");
        setDarkMode(!darkMode)
        audio.play();
    };

    return (
        <>
            <header className="font-mulish sticky top-0 ">
                <div className="flex  justify-center  items-center  w-full  px-10 py-4 bg-gray-100 dark:bg-gray-700">
                    <input className="px-5 py-2 text-black-900 text-lg w-1/2  rounded-md focus:outline-none" onChange={(event) => setSearch(event.target.value)} type="search" placeholder="Search" value={search} />
                    <button onClick={() => getImages(search)} className="bg-purple-700 text-white  text-lg px-5 py-2 rounded-r-md hover:bg-blue-500">
                        Search
                    </button>
                </div>
                <button className="absolute top-6 right-5"
                        onClick={() => {
                            addDarkMode();
                        }}
                        
                    >
                        {darkMode ?<FaSun className="dark:text-yellow-400 text-lg"/>: <FaMoon className="dark:text-slate-400 text-lg"/> }
                    </button>
            </header>
        </>
    );
};

export default Header;
