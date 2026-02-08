"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
  const [swiperRef, setSwiperRef] = useState(null);

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
    <div className="testimonial-area-3 py-16 overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="row pb-0 justify-content-between items-center">
          <div className="col-lg-7">
            <div
              className={`title-area pb-0! mb-0! ${
                isRTL ? "" : "blog-area-content-text-extra-style"
              }`}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="sub-title text-theme">
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
            <div className="d-flex align-items-center gap-3">
              {/* Counter Section */}
              {/* <div className="sec-btn btn-wrap d-none d-lg-flex">
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
              </div> */}

              {/* Navigation Buttons */}
              <div className="d-flex align-items-center gap-3">
                <button
                  onClick={() => swiperRef?.slidePrev()}
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    // borderRadius: "50%",
                    background: "white",
                    border: "none",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    color: "var(--theme-color)",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--theme-color)";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.boxShadow =
                      "0 10px 15px -3px rgb(0 0 0 / 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "white";
                    e.currentTarget.style.color = "var(--theme-color)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 6px -1px rgb(0 0 0 / 0.1)";
                  }}
                  aria-label="Previous"
                >
                  {isRTL ? (
                    <ArrowRight className="w-5 h-5" />
                  ) : (
                    <ArrowLeft className="w-5 h-5" />
                  )}
                </button>

                <button
                  onClick={() => swiperRef?.slideNext()}
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    // borderRadius: "50%",
                    background: "var(--theme-color)",
                    border: "none",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    color: "white",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--black-color)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 15px -3px rgb(0 0 0 / 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--theme-color)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 6px -1px rgb(0 0 0 / 0.1)";
                  }}
                  aria-label="Next"
                >
                  {isRTL ? (
                    <ArrowLeft className="w-5 h-5" />
                  ) : (
                    <ArrowRight className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="testi-slider-wrapper">
          <Swiper
            key={locale}
            onSwiper={setSwiperRef}
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
              reverseDirection: isRTL,
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
              1200: {
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
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
