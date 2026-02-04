"use client";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

const Process = () => {
  const t = useTranslations("home.process");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const benefits = [
    { number: "01", key: "benefit1" },
    { number: "02", key: "benefit2" },
    { number: "03", key: "benefit3" },
    { number: "04", key: "benefit4" },
  ];

  const getMarginStyle = (index) => {
    if (isMobile) return {}; // لا مسافات على الموبايل

    const spacing = 50;
    const marginValue = index * spacing;

    if (marginValue === 0) return {};

    return isRTL
      ? { marginRight: `${marginValue}px`, marginLeft: 0 }
      : { marginLeft: `${marginValue}px`, marginRight: 0 };
  };

  const bgTextStyle = {
    fontSize: isMobile ? "100px" : "180px",
    fontWeight: 600,
    fontFamily: "var(--title-font)",
    letterSpacing: "-0.015em",
    textTransform: "uppercase",
    opacity: 0.03,
    position: "absolute",
    top: "50%",
    zIndex: -1,
    display: isMobile ? "none" : "block",
    ...(isRTL
      ? {
          left: 0,
          right: "auto",
          transform: "rotate(90deg) translate(-50%, -100%)",
          transformOrigin: "left top",
        }
      : {
          right: 0,
          left: "auto",
          transform: "rotate(-90deg) translate(50%, -100%)",
          transformOrigin: "right top",
        }),
  };

  return (
    <section className="process-area-2 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-between align-items-center gy-40">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div
              className={`title-area ${isRTL ? "text-right!" : "text-left content-text-extra-style"}`}
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
            <div className="process-thumb2-1">
              <img
                src="https://res.cloudinary.com/dkc5klynm/image/upload/v1770213269/loggers-cutting-preparing-harvested-timber-stacking-hauling-length-time-lapse-isolated.jpg_h0lsla.jpg"
                alt={t("title")}
              />
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div
              className="process-grid-list-wrapper style2"
              style={{ position: "relative" }}
            >
              <div style={bgTextStyle}>{t("bgText")}</div>

              <div className="process-grid-container">
                {benefits.map((benefit, index) => (
                  <div
                    className="process-grid"
                    key={benefit.number}
                    style={getMarginStyle(index)}
                  >
                    <div className="process-grid-number">{benefit.number}</div>
                    <div className="process-grid-details">
                      <h3 className="process-grid-title">
                        {t(`${benefit.key}.title`)}
                      </h3>
                      <p className="process-grid-text">
                        {t(`${benefit.key}.description`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Mobile */
        @media (max-width: 575px) {
          .process-grid-container {
            gap: 15px;
          }

          .process-grid {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default Process;
