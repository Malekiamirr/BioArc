import {FaHospitalAlt} from "react-icons/fa"
import {GrFormNext} from "react-icons/gr";
import { useEffect, useRef, useState } from 'react';


function FloorsList({floors}) {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollRef = useRef(null);

  function handleScroll(direction) {
    scrollRef.current.scrollBy({
      top: 0,
      left: direction * 200, // adjust this value to control the amount of scrolling
      behavior: 'smooth',
    });
  }

  let slider = (floors.length > 4 || (windowWidth < 1280)) ? <div className="flex items-center justify-center px-2 py-3 rounded bg-anti-flash-light"><GrFormNext className="text-gray-300 w-7 h-7"/></div> : undefined;
  return (
    <div className="relative">
      <div className={`overflow-x-auto scrollbar-hidden flex items-center ${floors.length > 4 || (windowWidth < 1280) ? "justify-between mx-4 min-[850px]:mx-16 2lg:mx-20" : "justify-center gap-12"} mt-16 cursor-pointer`} ref={scrollRef}>
          {floors.map(floor=> (
            <div key={floor} className="flex flex-col items-center w-full min-w-full sm:w-1/2 sm:min-w-[50%] md:w-1/3 md:min-w-[33.33%] 2md:w-1/4 2md:min-w-[25%] lg:min-w-[20%] lg:w-1/5 gap-3 pb-4 text-primary-lighter-2 hover:text-secondary group">
              <FaHospitalAlt className="w-11 h-11"/>
              <p className="relative text-base tracking-tight lgr:text-lg font-Yekan-medium">{floor}<span className="absolute inset-x-0 h-1 duration-300 ease-out transform scale-x-0 -bottom-4 rounded-xl transition-noneion-transform bg-secondary group-hover:scale-x-100"></span></p>
                {console.log(windowWidth === 1280)}
              </div>
          ))}
      </div>

      
        <button
          className="absolute top-0 text-gray-600 hover:text-gray-900"
          onClick={() => handleScroll(1)}
        >
          {slider}
        </button>

        <button
          className="absolute top-0 left-0 text-gray-600 rotate-180 hover:text-gray-900"
          onClick={() => handleScroll(-1)}
        >
          {slider}
        </button>

    </div>
  ) 
}

export default FloorsList