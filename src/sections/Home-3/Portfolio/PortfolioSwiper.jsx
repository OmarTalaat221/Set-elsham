// PortfolioSwiper.tsx
"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Zoom } from 'swiper/modules';
import { useTranslations } from 'next-intl';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

export default function PortfolioSwiper({ image, initialIndex = 0, onClose }) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const t = useTranslations("home.portfolio");

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white text-2xl transition-all duration-300 hover:scale-110"
      >
        <i className="ri-close-line"></i>
      </button>

      {/* Image Counter */}
      <div className="absolute top-6 left-6 z-10 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white font-medium">
        {String(activeIndex + 1).padStart(2, '0')} / {String(image.length).padStart(2, '0')}
      </div>

      {/* Full Screen Swiper */}
      <div className="h-full w-full">
        <Swiper
          modules={[Navigation, Pagination, Zoom]}
          initialSlide={initialIndex}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-custom',
          }}
          zoom={{
            maxRatio: 5,
            minRatio: 1,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="h-full w-full"
        >
          {image.map((item, index) => (
            <SwiperSlide key={index} className="h-full w-full">
              <div className="swiper-zoom-container h-full w-full">
                <img
                  src={item.imgSrc}
                  alt={t(`${item.key}.title`)}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev-custom absolute left-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white text-2xl transition-all duration-300 hover:scale-110 cursor-pointer">
        <i className="ri-arrow-left-line"></i>
      </div>
      <div className="swiper-button-next-custom absolute right-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white text-2xl transition-all duration-300 hover:scale-110 cursor-pointer">
        <i className="ri-arrow-right-line"></i>
      </div>

      {/* Custom Pagination */}
      <div className="swiper-pagination-custom absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex gap-2"></div>
      
    </div>
  );
}