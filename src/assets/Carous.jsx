
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// // import "./Carous.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// const images = [
//        "https://cdn.olaelectric.com/sites/evdp/pages/home/hp_banner_web_image_180325.webp",
//        "https://cdn.olaelectric.com/sites/evdp/pages/bike/roadster_x/rodster_x_banner_web_image.webp",
//        "https://cdn.olaelectric.com/sites/evdp/pages/powerpod/powerpod_banner_web_image_v2.webp"
// ];

// const CarousP = () => {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Autoplay]}
//       spaceBetween={20}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       autoplay={{ delay: 3000 }}
//     //   className="w-full max-w-3xl mx-auto"
//     className="image-slider"
//     >
//       {images.map((src, index) => (
//         <SwiperSlide key={index}>
//           <img src={src} alt={`Slide ${index + 1}`} className="slide-image" />
//         </SwiperSlide>

//       ))}
//       {/* <SwiperSlide><img src="https://cdn.olaelectric.com/sites/evdp/pages/home/hp_banner_web_image_180325.webp" alt="Slide 1" className="slide-image"/></SwiperSlide>
//       <SwiperSlide><img src="https://cdn.olaelectric.com/sites/evdp/pages/bike/roadster_x/rodster_x_banner_web_image.webp" alt="Slide 2" className="slide-image"/></SwiperSlide>
//       <SwiperSlide><img src="https://cdn.olaelectric.com/sites/evdp/pages/powerpod/powerpod_banner_web_image_v2.webp" alt="Slide 3" className="slide-image"/></SwiperSlide> */}
//     </Swiper>
//   );
// };

// export default CarousP;



import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carous.css'

const CarousP = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  arrows: true,
  // prevArrow: <CustomPrevArrow />,
  // nextArrow: <CustomNextArrow />,
  focusOnSelect: true,
  };

  const slides = [
    { image: 'https://cdn.olaelectric.com/sites/evdp/pages/gen3/s1_pro_plus_strip_banner_web_v2.webp' , desc: ['Item 1']},
    { image: 'https://cdn.olaelectric.com/sites/evdp/pages/gen3/s1_x_plus_strip_banner_web_v2.webp', desc: ['Item 2'] },
    { image: 'https://cdn.olaelectric.com/sites/evdp/pages/gig/strip_banner_gig_image_web.webp', desc: ['Item 3'] },
    { image: 'https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/strip_banner_image_v2_web.webp', desc: ['Item 4'] },
    { image: 'https://cdn.olaelectric.com/sites/evdp/components/massets/homepage_massets_easyfinance_web_image.webp', desc: ['Item 5'] },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide.image} alt={slide.title} style={{ maxHeight:200 , minWidth:1196 }}/>
          <div>
            <h2>{slide.title}</h2>
            <ul>{slide.desc.map((d, i) => <li key={i}>{d}</li>)}</ul>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CarousP;