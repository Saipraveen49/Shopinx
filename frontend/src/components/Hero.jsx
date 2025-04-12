import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { assets } from '../assets/assets';

const Banner = () => {
  const banners = [
    { id: 1, image: assets.hero1 },
    { id: 2, image: assets.hero2 },
    { id: 3, image: assets.hero3 }
  ];

  return (
    <div className="w-full">
      {/* Banner Carousel */}
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
          bulletClass: 'inline-block w-2 h-2 rounded-full mx-1 bg-gray-300 cursor-pointer',
          bulletActiveClass: '!bg-blue-500 w-4'
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="w-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="w-full aspect-[5/3] sm:aspect-[5/2] md:aspect-[16/5] lg:aspect-[16/4] flex items-center justify-center overflow-hidden">
              <img 
                src={banner.image}
                alt="Banner"
                className="w-full md:w-auto md:h-full object-contain sm:object-cover max-w-full"
                loading="eager"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom pagination dots */}
      <div className="custom-pagination flex justify-center mt-2"></div>
    </div>
  );
};

export default Banner;