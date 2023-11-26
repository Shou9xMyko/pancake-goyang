import "./TestimoniVideo.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Testi1 from "../../assets/testimoni/testi1.jpg";
import Testi2 from "../../assets/testimoni/testi2.jpg";
import Testi3 from "../../assets/testimoni/testi3.mp4";
import Testi4 from "../../assets/testimoni/testi4.mp4";
import Testi5 from "../../assets/testimoni/testi5.jpg";
import Testi6 from "../../assets/testimoni/testi6.mp4";
import Testi7 from "../../assets/testimoni/testi7.jpg";
import Testi8 from "../../assets/testimoni/testi8.mp4";
import Testi9 from "../../assets/testimoni/testi9.jpg";
import Testi10 from "../../assets/testimoni/testi10.mp4";
import Testi11 from "../../assets/testimoni/testi11.jpg";
import Testi12 from "../../assets/testimoni/testi12.mp4";
import Testi13 from "../../assets/testimoni/testi3.mp4";
import Testi14 from "../../assets/testimoni/testi14.mp4";
import Testi15 from "../../assets/testimoni/testi15.mp4";
import Testi16 from "../../assets/testimoni/testi16.mp4";
import Testi17 from "../../assets/testimoni/testi17.mp4";
import Testi18 from "../../assets/testimoni/testi18.mp4";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";

const TestimoniVideo = () => {
  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    // Menghentikan video saat slide berubah
    if (swiperRef.current) {
      const currentSlide = swiperRef.current.activeIndex;
      const videos = document.querySelectorAll(".swiper-slide video");

      videos.forEach((video, index) => {
        if (index !== currentSlide) {
          video.pause();
        }
      });
    }
  };

  return (
    <div className="container mb-5">
      <h1 className="text-center my-5 title-testimoni">Testimoni</h1>
      <div className="wrapperSwiper" id="wrapperSwiper">
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          centeredSlides={true}
          onSlideChange={handleSlideChange}
          autoplay={{
            delay: 4000,
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
            <img src={Testi1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Testi2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <video width="200" height="360" autoPlay controls>
              <source src={Testi3} type="video/mp4" />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video width="200" height="360" autoPlay controls>
              <source src={Testi4} type="video/mp4" />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Testi5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <video width="200" height="360" autoPlay controls>
              <source src={Testi6} type="video/mp4" />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Testi7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <video width="200" height="360" autoPlay controls>
              <source src={Testi8} type="video/mp4" />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Testi9} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <video width="200" height="360" autoPlay controls>
              <source src={Testi10} type="video/mp4" />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Testi11} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <video width="200" height="360" autoPlay controls>
              <source src={Testi12} type="video/mp4" />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video width="200" height="360" autoPlay controls>
              <source src={Testi13} type="video/mp4" />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video width="200" height="360" autoPlay controls>
              <source src={Testi14} type="video/mp4" />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video width="200" height="360" autoPlay controls>
              <source src={Testi15} type="video/mp4" />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video width="200" height="360" autoPlay controls>
              <source src={Testi16} type="video/mp4" />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video width="200" height="360" autoPlay controls>
              <source src={Testi17} type="video/mp4" />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video width="200" height="360" autoPlay controls>
              <source src={Testi18} type="video/mp4" />
            </video>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TestimoniVideo;
