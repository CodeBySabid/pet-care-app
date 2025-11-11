import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

import slide1 from "../../assets/download (1).jpg";
import slide2 from "../../assets/download (2).jpg";
import slide3 from "../../assets/download (3).jpg";
import slide4 from "../../assets/download (4).jpg";
import slide5 from "../../assets/download.jpg";

const images = [slide1, slide2, slide3, slide4, slide5];
function HeroSlider() {
  return (
    <div className="w-full my-5 mx-auto">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index}`} className="w-[300px] h-[300px] object-cover rounded-xl mx-auto" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSlider;


