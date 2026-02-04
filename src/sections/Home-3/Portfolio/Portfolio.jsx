// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";
// import { useTranslations } from "next-intl";
// import { useLocale } from "next-intl";

// // Swiper styles
// import "swiper/css";
// import "./style.css";

// const Portfolio = () => {
//   const t = useTranslations("home.portfolio");
//   const locale = useLocale();
//   const isRTL = locale === "ar";
//   const [mounted, setMounted] = useState(false);

//   const [isOpen, setIsOpen] = useState(false);
//   const [photoIndex, setPhotoIndex] = useState(0);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const portfolioItems = [
//     {
//       imgSrc:
//         "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955459/IMG_6128_qcae7s.jpg",
//       key: "project1",
//     },
//     {
//       imgSrc:
//         "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955447/IMG_6131_nbdnaj.jpg",
//       key: "project2",
//     },
//     {
//       imgSrc:
//         "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955331/%D9%A2%D9%A0%D9%A1%D9%A7%D9%A0%D9%A1%D9%A2%D9%A4_%D9%A1%D9%A9%D9%A5%D9%A4%D9%A4%D9%A0_szj9xq.jpg",
//       key: "project3",
//     },
//     {
//       imgSrc:
//         "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955753/IMG_4621_ulnnme.webp",
//       key: "project4",
//     },
//     {
//       imgSrc:
//         "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955313/IMG-20240109-WA0002_luhjts.jpg",
//       key: "project5",
//     },
//   ];

//   const handleOpen = (index) => {
//     setPhotoIndex(index);
//     setIsOpen(true);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen]);

//   if (!mounted) {
//     return null;
//   }

//   return (
//     <div
//       className="portfolio-area-3 space-bottom"
//       id="project-sec"
//       dir={isRTL ? "rtl" : "ltr"}
//     >
//       {/* Decorative Background Elements */}
//       <div className="portfolio-bg-shape"></div>
//       <div className="portfolio-bg-gradient"></div>

//       <div className="container">
//         {/* Header */}
//         <div className="row justify-content-between align-items-end">
//           <div className="col-lg-7">
//             <div
//               className={`title-area ${
//                 isRTL ? "" : "blog-area-content-text-extra-style"
//               }`}
//             >
//               <span className="sub-title text-theme">
//                 <span className="sub-title-line"></span>
//                 {t("subtitle")}{" "}
//                 <i
//                   className={
//                     isRTL
//                       ? "ri-arrow-left-down-line"
//                       : "ri-arrow-right-down-line"
//                   }
//                 ></i>
//               </span>
//               <h2 className="sec-title">{t("title")}</h2>
//             </div>
//           </div>
//           <div className="col-lg-auto">
//             <div className="sec-btn">
//               <Link href="/pages/innerpage/project" className="btn">
//                 <span className="btn-text">{t("viewAll")}</span>
//                 <span className="btn-icon">
//                   <i
//                     className={
//                       isRTL ? "ri-arrow-left-up-line" : "ri-arrow-right-up-line"
//                     }
//                   ></i>
//                 </span>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Swiper Carousel */}
//         <div className="portfolio-slider3 overflow-hidden">
//           <Swiper
//             key={locale}
//             modules={[]}
//             slidesPerView={2}
//             spaceBetween={30}
//             loop={true}
//             speed={1500}
//             autoplay={{
//               delay: 5000,
//               disableOnInteraction: false,
//               reverseDirection: isRTL,
//             }}
//             breakpoints={{
//               0: {
//                 slidesPerView: 1,
//                 spaceBetween: 20,
//               },
//               576: {
//                 slidesPerView: 1,
//                 spaceBetween: 20,
//               },
//               768: {
//                 slidesPerView: 1,
//                 spaceBetween: 25,
//               },
//               992: {
//                 slidesPerView: 2,
//                 spaceBetween: 30,
//               },
//             }}
//             dir={isRTL ? "rtl" : "ltr"}
//             className="global-carousel"
//           >
//             {portfolioItems.map((item, index) => (
//               <SwiperSlide key={index}>
//                 <div className="portfolio-card">
//                   <div className="portfolio-card-inner">
//                     {/* Card Number */}
//                     <span className="portfolio-card-number">
//                       {String(index + 1).padStart(2, "0")}
//                     </span>

//                     <div className="portfolio-card-thumb">
//                       <img src={item.imgSrc} alt={t(`${item.key}.title`)} />
//                       <div className="portfolio-card-overlay"></div>
//                       <button
//                         className="icon-btn popup-image"
//                         onClick={() => handleOpen(index)}
//                         type="button"
//                         aria-label="View Image"
//                       >
//                         <i className="ri-eye-line"></i>
//                         <span className="icon-btn-ripple"></span>
//                       </button>
//                     </div>

//                     <div className="portfolio-card-details">
//                       <h4 className="portfolio-card-title">
//                         <Link href="/pages/innerpage/project-details">
//                           {t(`${item.key}.title`)}
//                         </Link>
//                       </h4>
//                       <div className="portfolio-card-meta">
//                         <p className="portofolio-card-text">
//                           <i className="ri-folder-open-line"></i>
//                           {t(`${item.key}.category`)}
//                         </p>
//                         <p className="portofolio-card-text ms-3 me-3"> | </p>
//                         <p className="portofolio-card-text">
//                           <i className="ri-calendar-line"></i>
//                           {t(`${item.key}.date`)}
//                         </p>
//                       </div>
//                       <div className="portfolio-card-footer">
//                         <Link
//                           href="/pages/innerpage/project-details"
//                           className="btn"
//                         >
//                           <span className="btn-text">
//                             {t("exploreProject")}
//                           </span>
//                           <span className="btn-icon">
//                             <i
//                               className={
//                                 isRTL
//                                   ? "ri-arrow-left-up-line"
//                                   : "ri-arrow-right-up-line"
//                               }
//                             ></i>
//                           </span>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>

//       {/* Lightbox - Default Design */}
//       {isOpen && (
//         <Lightbox
//           mainSrc={portfolioItems[photoIndex].imgSrc}
//           nextSrc={
//             portfolioItems[(photoIndex + 1) % portfolioItems.length].imgSrc
//           }
//           prevSrc={
//             portfolioItems[
//               (photoIndex + portfolioItems.length - 1) % portfolioItems.length
//             ].imgSrc
//           }
//           onCloseRequest={handleClose}
//           onMovePrevRequest={() =>
//             setPhotoIndex(
//               (photoIndex + portfolioItems.length - 1) % portfolioItems.length
//             )
//           }
//           onMoveNextRequest={() =>
//             setPhotoIndex((photoIndex + 1) % portfolioItems.length)
//           }
//           imageTitle={t(`${portfolioItems[photoIndex].key}.title`)}
//           imageCaption={t(`${portfolioItems[photoIndex].key}.category`)}
//           enableZoom={true}
//           animationDuration={300}
//         />
//       )}
//     </div>
//   );
// };

// export default Portfolio;


"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useTranslations, useLocale } from "next-intl";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PortfolioSwiper from "./PortfolioSwiper";

const Portfolio = () => {
  const t = useTranslations("home.portfolio");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const portfolioItems = [
    { imgSrc: "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955459/IMG_6128_qcae7s.jpg", key: "project1" },
    { imgSrc: "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955447/IMG_6131_nbdnaj.jpg", key: "project2" },
    { imgSrc: "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955331/%D9%A2%D9%A0%D9%A1%D9%A7%D9%A0%D9%A1%D9%A2%D9%A4_%D9%A1%D9%A9%D9%A5%D9%A4%D9%A4%D9%A0_szj9xq.jpg", key: "project3" },
    { imgSrc: "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955753/IMG_4621_ulnnme.webp", key: "project4" },
    { imgSrc: "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955313/IMG-20240109-WA0002_luhjts.jpg", key: "project5" },
  ];

  if (!mounted) return null;

  return (
    <section className="py-24  overflow-hidden" id="project-sec" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              {/* <span className="w-12 h-[2px] bg-amber-600"></span> */}
              <span className="text-theme font-bold uppercase tracking-widest text-xl">
                {t("subtitle")}
              </span>
              <i
                  className={
                    isRTL
                      ? "ri-arrow-left-down-line"
                      : "ri-arrow-right-down-line"
                  }
                ></i>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
              {t("title")}
            </h2>
          </div>
          
          <Link 
            href="/pages/innerpage/project" 
            className="group flex items-center gap-2 p-3 bg-[#202c54] text-white font-semibold hover:text-theme transition-colors duration-300"
          >
            <span className="">
              {t("viewAll")}
            </span>
            <i className={`${isRTL ? "ri-arrow-left-line" : "ri-arrow-right-line"} text-xl transition-transform group-hover:translate-x-1`}></i>
          </Link>
        </div>

        {/* Portfolio Slider */}
        <div className="portfolio-slider-wrapper relative">
          <Swiper
            key={locale}
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            speed={1200}
            autoplay={{ delay: 5000, disableOnInteraction: false, reverseDirection: isRTL }}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              1024: { slidesPerView: 2.2 },
              1440: { slidesPerView: 2.5 },
            }}
            className="!pb-20"
          >
            {portfolioItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
                  
                  {/* Image Container */}
                  <div className="relative h-[400px] overflow-hidden cursor-pointer" onClick={() => { setPhotoIndex(index); setIsOpen(true); }}>
                    <img 
                      src={item.imgSrc} 
                      alt="" 
                      className="w-full h-[400px]! object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl text-slate-900 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <i className="ri-expand-diagonal-line"></i>
                      </div>
                    </div>
                    {/* Floating Number */}
                    <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center font-serif text-slate-900 shadow-lg">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Pagination Container */}
          <div className="custom-pagination flex justify-center gap-2 !mt-8"></div>
        </div>
      </div>

      {/* Lightbox Component */}
      {isOpen && (
        // <Lightbox
        //   mainSrc={portfolioItems[photoIndex].imgSrc}
        //   nextSrc={portfolioItems[(photoIndex + 1) % portfolioItems.length].imgSrc}
        //   prevSrc={portfolioItems[(photoIndex + portfolioItems.length - 1) % portfolioItems.length].imgSrc}
        //   onCloseRequest={() => setIsOpen(false)}
        //   onMovePrevRequest={() => setPhotoIndex((photoIndex + portfolioItems.length - 1) % portfolioItems.length)}
        //   onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % portfolioItems.length)}
        //   imageTitle={t(`${portfolioItems[photoIndex].key}.title`)}
        //   enableZoom={true}
        // />
        <PortfolioSwiper 
        image={portfolioItems}
    initialIndex={photoIndex}
    onClose={() => setIsOpen(false)}
        />
      )}
    </section>
  );
};

export default Portfolio;