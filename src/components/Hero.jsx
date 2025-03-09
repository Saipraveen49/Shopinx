import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slide1 from '../assets/seller.png';
import slide2 from '../assets/seller.png';
import slide3 from '../assets/seller.png';

const slides = [
  { id: 1, title: "Discover Amazing Products", image: slide1 },
  { id: 2, title: "Shop Smart, Shop Now", image: slide2 },
  { id: 3, title: "Unbeatable Deals Await", image: slide3 },
];

const Hero = () => {
  return (
    <section className="relative w-full h-[65vh] flex items-center justify-center bg-gray-900 text-white">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black bg-opacity-50"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <button className="px-6 py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg transition duration-300">
                Shop Now
              </button>
            </motion.div>
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
