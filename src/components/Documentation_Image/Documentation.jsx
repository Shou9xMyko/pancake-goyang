import "./Documentation.css";
import DocImg1 from "../../assets/documentaion1.jpeg";
import DocImg2 from "../../assets/documentaion2.jpeg";
import DocImg3 from "../../assets/documentaion3.jpeg";
import DocImg4 from "../../assets/documentaion4.jpeg";
import DocImg5 from "../../assets/documentaion5.jpeg";
import DocImg6 from "../../assets/documentaion6.jpeg";
import DocImg7 from "../../assets/documentaion7.jpeg";
import DocImg8 from "../../assets/documentaion8.jpeg";
import DocImg9 from "../../assets/documentaion9.jpeg";
import DocImg10 from "../../assets/documentaion10.jpeg";
import DocImg11 from "../../assets/documentaion1.jpeg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Documentation = () => {
  const arrays = new Array(11).fill(null);

  return (
    <div className=" my-4 container">
      <h2 className="text-center fw-bold mb-3" id="title-documentation">
        Dokumentasi
      </h2>

      <div className="wrapperSwiper" id="wrapperSwiper">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {arrays.map((item, index) => {
            const imageArray = [
              DocImg1,
              DocImg2,
              DocImg3,
              DocImg4,
              DocImg5,
              DocImg6,
              DocImg7,
              DocImg8,
              DocImg9,
              DocImg10,
              DocImg11,
            ];

            return (
              <SwiperSlide key={index}>
                <img src={imageArray[index]} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Documentation;
