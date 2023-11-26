import "./Documentation.css";
import DocImg1 from "../../assets/documentaion1.jpeg";
import DocImg2 from "../../assets/documentaion2.jpeg";
import DocImg3 from "../../assets/documentaion3.jpeg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Documentation = () => {
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
          <SwiperSlide>
            <img src={DocImg1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={DocImg2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={DocImg3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Documentation;
