"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import "./style.css";

const Counter = () => {
  const t = useTranslations("home.counter");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const { ref: counterRef, inView: counterInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const counters = [
    {
      key: "projects",
      end: 500,
      suffix: "+",
    },
    {
      key: "customers",
      end: 98,
      suffix: "%",
    },
    {
      key: "products",
      end: 50,
      suffix: "+",
    },
    {
      key: "experience",
      end: 7,
      suffix: "+",
    },
  ];

  return (
    <div className="counter-area-1 space-bottom" ref={counterRef}>
      <div className="container">
        <div
          className="row justify-content-between gy-40"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {counters.map((counter) => (
            <div className="col-auto" key={counter.key}>
              <div className="counter-card">
                <h2
                  className="counter-card_number"
                  style={{ direction: "ltr" }} // 👈 الأرقام دائماً LTR
                >
                  <span className="counter-number">
                    {counterInView && (
                      <CountUp
                        start={0}
                        end={counter.end}
                        duration={2.5}
                        separator={locale === "ar" ? "٬" : ","}
                      />
                    )}
                  </span>
                  {counter.suffix}
                </h2>
                <p className="counter-card_text">{t(`${counter.key}.label`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;
