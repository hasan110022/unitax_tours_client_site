import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";


const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
};

const Banner = () => {
  return (
    <div className="relative md:p-10 max-sm:p-3 max-sm:mt-36  ">
      <Slider {...settings}>
        <div className="w-full ">
          <div className="relative ">
            <img
              src="https://i.ibb.co.com/MkrQ9jqt/Rectangle-19305-3.png"
              alt="Image 1"
              className="w-full md:h-[700px] max-sm:h-[300px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
            <div className="absolute inset-0 flex justify-center items-center text-center text-white">
              <h2 className="text-5xl font-bold"> JOURNEY TO  <br /> <span className="text-white mb-4">EXPLORE</span> </h2>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="relative">
            <img
              src="https://i.ibb.co.com/xSP7nP45/Rectangle-19290.png"
              alt="Image 2"
              className="w-full md:h-[700px] max-sm:h-[300px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
            <div className="absolute inset-0 flex justify-center items-center text-center text-white">
              <h2 className="text-3xl font-bold">
                GALLERY
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="relative">
            <img
              src="https://i.ibb.co.com/xSP7nP45/Rectangle-19290.png"
              alt="Image 3"
              className="w-full md:h-[700px] max-sm:h-[300px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
            <div className="absolute inset-0 flex justify-center items-center text-center text-white">
              <h2 className="text-3xl font-bold">
                ABOUT US
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="relative">
            <img
              src="https://i.ibb.co.com/MkrQ9jqt/Rectangle-19305-3.png"
              alt="Image 3"
              className="w-full md:h-[700px] max-sm:h-[300px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
            <div className="absolute inset-0 flex justify-center items-center text-center text-white">
              <h2 className="text-3xl font-bold uppercase">
                Landscapes
              </h2>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
