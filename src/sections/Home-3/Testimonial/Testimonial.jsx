"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./style.css";

const Testimonial = () => {
  const t = useTranslations("home.testimonials");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [mounted, setMounted] = useState(false);

  // لتجنب hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const testimonials = [
    { key: "client1", image: "/main-assets/img/testimonial/testi_2_2.png" },
    { key: "client2", image: "/main-assets/img/testimonial/testi_2_3.png" },
    { key: "client3", image: "/main-assets/img/testimonial/testi_2_1.png" },
    { key: "client4", image: "/main-assets/img/testimonial/testi_2_2.png" },
    { key: "client5", image: "/main-assets/img/testimonial/testi_2_3.png" },
    { key: "client6", image: "/main-assets/img/testimonial/testi_2_1.png" },
  ];

  if (!mounted) {
    return null; // أو loading skeleton
  }

  return (
    <div className="testimonial-area-3 overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="row  pb-0 justify-content-between">
          <div className="col-lg-7">
            <div
              className={`title-area  pb-0! mb-0! ${
                isRTL ? "" : "blog-area-content-text-extra-style"
              }`}
            >
              <span className="sub-title text-xl! text-theme">
                {t("subtitle")}{" "}
                <i
                  className={
                    isRTL
                      ? "ri-arrow-left-down-line"
                      : "ri-arrow-right-down-line"
                  }
                ></i>
              </span>
              <h2 className="sec-title">{t("title")}</h2>
            </div>
          </div>
          <div className="col-lg-auto">
            <div className="sec-btn btn-wrap">
              <div className="client-group-thumb">
                <img
                  src="/main-assets/img/normal/client_group_1-2.png"
                  alt="clients"
                />
              </div>
              <div className="testi-counter-wrap">
                <h3
                  className="testi-counter-number"
                  style={{ direction: "ltr" }}
                >
                  <span className="counter-number">500</span>+
                </h3>
                <p className="testi-counter-text">{t("successCounter")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="testi-slider-wrapper ">
          <Swiper
            key={locale} // 👈 مهم جداً - يعيد تحميل الـ Swiper عند تغيير اللغة
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            initialSlide={1}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              reverseDirection: isRTL, // 👈 عكس الاتجاه في RTL
            }}
            pagination={{
              clickable: true,
              el: ".testi-pagination",
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            dir={isRTL ? "rtl" : "ltr"}
            className="testi-slider3 slider-shadow"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testi-card style3">
                  <div className="testi-card-thumb">
                    <img
                      src={testimonial.image}
                      alt={t(`${testimonial.key}.name`)}
                    />
                    <div className="media-body">
                      <h4 className="testi-card_title">
                        {t(`${testimonial.key}.title`)}
                      </h4>
                      <div className="testi-card_review">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div className="testi-card_content">
                    <p className="testi-card_text">
                      {t(`${testimonial.key}.review`)}
                    </p>
                    <div className="testi-card-profile">
                      <h4 className="testi-profile-title">
                        {t(`${testimonial.key}.name`)}
                      </h4>
                      <span className="testi-profile-desig">
                        / {t(`${testimonial.key}.position`)}
                      </span>
                    </div>
                  </div>
                  <div className="quote-icon">
                    <img src="/main-assets/img/icon/quote3.svg" alt="quote" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          {/* <div className="testi-pagination"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
