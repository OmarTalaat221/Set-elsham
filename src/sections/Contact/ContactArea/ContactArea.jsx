"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactArea = () => {
  const t = useTranslations("contactPage");
  const locale = useLocale();
  const isRtl = locale === "ar";

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  const offices = [
    {
      key: "office1",
      image: "/main-assets/img/normal/contact_page1-1.png",
      bgColor: "bg-smoke",
    },
    {
      key: "office2",
      image: "/main-assets/img/normal/contact_page1-2.png",
      bgColor: "bg-smoke",
    },
    {
      key: "office3",
      image: "/main-assets/img/normal/contact_page1-3.png",
      bgColor: "bg-smoke",
    },
  ];

  return (
    <section className="contact-page-area space">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          {offices.map((office, index) => (
            <div
              key={office.key}
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`contact-page-card ${office.bgColor}`}>
                <div className="contact-page-card-details">
                  <h4
                    className="contact-page-card_title"
                    data-aos="fade-down"
                    data-aos-delay={index * 100 + 100}
                  >
                    {t(`offices.${office.key}.title`)}
                  </h4>

                  <div
                    className="contact-page-card-text"
                    data-aos="fade-right"
                    data-aos-delay={index * 100 + 150}
                  >
                    <i className="ri-phone-line"></i>
                    <Link
                      className="contact-page-card_link"
                      href={`tel:${t(`offices.${office.key}.phone`).replace(/\s/g, "")}`}
                    >
                      {t(`offices.${office.key}.phone`)}
                    </Link>
                  </div>

                  <div
                    className="contact-page-card-text"
                    data-aos="fade-right"
                    data-aos-delay={index * 100 + 200}
                  >
                    <i className="ri-mail-line"></i>
                    <Link
                      className="contact-page-card_link"
                      href={`mailto:${t(`offices.${office.key}.email`)}`}
                    >
                      {t(`offices.${office.key}.email`)}
                    </Link>
                  </div>

                  <div
                    className="contact-page-card-text"
                    data-aos="fade-right"
                    data-aos-delay={index * 100 + 250}
                  >
                    <i className="ri-time-line"></i>
                    {t(`offices.${office.key}.hours`)}
                  </div>
                </div>

                <div
                  className="contact-page-card-thumb"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100 + 300}
                >
                  <img
                    src={office.image}
                    alt={t(`offices.${office.key}.title`)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
