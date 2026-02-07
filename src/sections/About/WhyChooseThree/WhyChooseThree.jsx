"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const WhyChooseThree = () => {
  const t = useTranslations("about.whyChooseSection");
  const locale = useLocale();
  const isRTL = locale === "ar";

  // بيانات الكروت - العمود الأيسر
  const leftCards = [
    { key: "card1", icon: "/main-assets/img/icon/why-icon1-1.svg" },
    { key: "card2", icon: "/main-assets/img/icon/why-icon1-2.svg" },
    { key: "card3", icon: "/main-assets/img/icon/why-icon1-3.svg" },
  ];

  // بيانات الكروت - العمود الأيمن
  const rightCards = [
    { key: "card4", icon: "/main-assets/img/icon/why-icon1-4.svg" },
    { key: "card5", icon: "/main-assets/img/icon/why-icon1-5.svg" },
    { key: "card6", icon: "/main-assets/img/icon/why-icon1-6.svg" },
  ];

  return (
    <div className="space-top text-center overflow-hidden shape-mockup-wrap">
      <div
        className="section-animation-shape1-1 shape-mockup animation-infinite background-image"
        style={{
          backgroundImage:
            "url('/main-assets/img/shape/global-line-shape2.png')",
          bottom: "0px",
        }}
      ></div>
      <div className="container">
        {/* Header */}
        <div className="title-area text-center">
          <div className="shadow-title">{t("shadowTitle")}</div>
          <span className="sub-title">
            {/* <img
              src="/main-assets/img/icon/section-subtitle-icon.svg"
              alt="icon"
            /> */}
            {t("subtitle")}
          </span>
          <h2 className="sec-title">{t("title")}</h2>
        </div>

        <div className="row gy-50 align-items-center">
          {/* Left Column */}
          <div className="col-xl-4 col-md-6">
            <div
              className={`wcu-card-wrap ${isRTL ? "right-align" : "left-align"}`}
            >
              {leftCards.map((card, index) => (
                <div
                  className="wcu-card"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="wcu-card-icon">
                    <img src={card.icon} alt={t(`cards.${card.key}.title`)} />
                  </div>
                  <div className="wcu-card-details">
                    <h4 className="wcu-card-title">
                      {t(`cards.${card.key}.title`)}
                    </h4>
                    <p className="wcu-card-text">
                      {t(`cards.${card.key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-xl-4 col-md-6 order-xl-3">
            <div
              className={`wcu-card-wrap ${isRTL ? "left-align" : "right-align"}`}
            >
              {rightCards.map((card, index) => (
                <div
                  className="wcu-card"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="wcu-card-icon">
                    <img src={card.icon} alt={t(`cards.${card.key}.title`)} />
                  </div>
                  <div className="wcu-card-details">
                    <h4 className="wcu-card-title">
                      {t(`cards.${card.key}.title`)}
                    </h4>
                    <p className="wcu-card-text">
                      {t(`cards.${card.key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Image */}
          <div className="col-xl-4">
            <div
              className="wcu-thumb1-1 flex items-center justify-center"
              data-aos="zoom-in"
            >
              <img
                src="/main-assets/img/normal/why_1-1.png"
                alt={t("imageAlt")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseThree;
