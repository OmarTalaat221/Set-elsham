"use client";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Hero = () => {
  const t = useTranslations("home.hero");
  const locale = useLocale();

  const heroImages = [
    // "https://res.cloudinary.com/dkc5klynm/image/upload/v1769674231/collab-media-VGjQgLN4B78-unsplash_ks6vrj.webp",
    "https://res.cloudinary.com/dkc5klynm/image/upload/v1770456573/considerate-agency-64_nESiE6q8-unsplash_jdfq9d.jpg",
    // "https://res.cloudinary.com/dkc5klynm/image/upload/v1770456578/pickawood-6tAIO3pxde4-unsplash_ifdxus.jpg",
    "https://res.cloudinary.com/dkc5klynm/image/upload/v1770456582/lajos-szabo-lzW4Zv95-Ts-unsplash_hdcyce.jpg",
    "https://res.cloudinary.com/dkc5klynm/image/upload/v1770456571/pickawood-_l9Znw_mxgs-unsplash_gjnbjn.jpg",
  ];
  return (
    <div className="hero-wrapper hero-3 pb-12 relative" id="hero">
      {/* Swiper Background Slider */}
      <div className="absolute inset-0 w-full h-full">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Navigation, EffectFade, Autoplay]}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            prevEl: ".hero-swiper-prev",
            nextEl: ".hero-swiper-next",
          }}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          loop={true}
          className="w-full h-full hero-swiper"
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <div
                  className="hero-bg-3-1 background-image bg-mask w-full h-full"
                  style={{
                    backgroundImage: `url('${image}')`,
                    backgroundPosition: "center",
                    maskImage:
                      "url('/main-assets/img/hero/hero_bg_mask_3_1.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    filter: "brightness(0.7)",
                  }}
                ></div>

                {/* Dark Overlay - الحل الأساسي */}
                {/* <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div> */}

                {/* Alternative: Radial gradient focusing on center */}
                {/* <div className="absolute inset-0 bg-radial-gradient"></div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          className="hero-swiper-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-[var(--theme-color)] backdrop-blur-sm rounded-full p-3 hover:bg-black/60 transition-all duration-300 border border-white/20"
          aria-label="Previous slide"
        >
          <i
            className={
              locale === "ar"
                ? "ri-arrow-left-s-line text-white text-xl"
                : "ri-arrow-left-s-line text-white text-xl"
            }
          ></i>
        </button>
        <button
          className="hero-swiper-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-[var(--theme-color)] backdrop-blur-sm rounded-full p-3 hover:bg-black/60 transition-all duration-300 border border-white/20 "
          aria-label="Next slide"
        >
          <i
            className={
              locale === "ar"
                ? "ri-arrow-right-s-line text-white text-xl"
                : "ri-arrow-right-s-line text-white text-xl"
            }
          ></i>
        </button>
      </div>

      {/* Shadow Text with enhanced visibility */}
      <div className="hero-shadow-text relative text-shadow-strong">
        {t("shadowText")}
      </div>

      <div
        className="hero-bg-shape3-1 shape-mockup jump flex items-center gap-2 xl:bottom-[2%] xl:left-[3%] lg:bottom-[-2%] lg:left-[3%] md:bottom-[2%] md:left-[3%] sm:bottom-[2%] sm:left-[3%] bottom-[2%] left-[3%]"
        style={{ position: "absolute" }}
      >
        <img
          className="w-[90px] h-[330px]! object-cover rotate-[-15deg] drop-shadow-lg"
          src="https://res.cloudinary.com/dkc5klynm/image/upload/v1769945575/1_o7atc8.png"
          alt="shape"
        />
        <img
          className="w-[90px] h-[330px]! object-cover rotate-[-15deg] drop-shadow-lg"
          src="https://res.cloudinary.com/dkc5klynm/image/upload/v1769946359/2_vzugva.png"
          alt="shape"
        />
      </div>

      <div className="container relative z-10">
        <div className="hero-style3">
          <div className="row">
            <div className="col-lg-12">
              {/* Enhanced text visibility with backdrop and shadow */}
              <span className="hero-subtitle backdrop-blur-sm bg-black/20 px-3 py-1 rounded-full inline-block w-fit!">
                {t("vision")}{" "}
                <img
                  src="/main-assets/img/icon/long-arrow-right2.svg"
                  alt="arrow"
                  className={locale === "ar" ? "rotate-180" : ""}
                />
              </span>

              <h1 className="hero-title text-shadow-strong">{t("title")}</h1>

              <h1 className="hero-title style2 text-shadow-strong">
                {t("subtitle")}
              </h1>

              <p className="hero-text text-shadow-medium p-3 rounded-lg">
                {t("description")}
              </p>

              <Link href="/about" className="btn style2 shadow-lg">
                {t("button")}{" "}
                <i
                  className={
                    locale === "ar"
                      ? "ri-arrow-left-up-line"
                      : "ri-arrow-right-up-line"
                  }
                ></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
