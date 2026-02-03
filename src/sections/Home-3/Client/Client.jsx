"use client";

import Link from "next/link";
import Slider from "react-slick";
import { useLocale } from "next-intl";

const Client = () => {
  const locale = useLocale();
  const isRTL = locale === "ar";

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    dots: false,
    rtl: isRTL, // 👈 دعم RTL
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4, rtl: isRTL } },
      { breakpoint: 992, settings: { slidesToShow: 3, rtl: isRTL } },
      { breakpoint: 768, settings: { slidesToShow: 3, rtl: isRTL } },
      { breakpoint: 576, settings: { slidesToShow: 1, rtl: isRTL } },
    ],
  };

  // بيانات الشركاء/العملاء
  const clients = [
    { logo: "/main-assets/img/client/client-2-1.svg", name: "Partner 1" },
    { logo: "/main-assets/img/client/client-2-2.svg", name: "Partner 2" },
    { logo: "/main-assets/img/client/client-2-3.svg", name: "Partner 3" },
    { logo: "/main-assets/img/client/client-2-4.svg", name: "Partner 4" },
    { logo: "/main-assets/img/client/client-2-5.svg", name: "Partner 5" },
    { logo: "/main-assets/img/client/client-2-1.svg", name: "Partner 6" },
    { logo: "/main-assets/img/client/client-2-2.svg", name: "Partner 7" },
    { logo: "/main-assets/img/client/client-2-3.svg", name: "Partner 8" },
    { logo: "/main-assets/img/client/client-2-4.svg", name: "Partner 9" },
    { logo: "/main-assets/img/client/client-2-5.svg", name: "Partner 10" },
  ];

  return (
    <div className="client-area-2 text-center space overflow-hidden">
      <div className="container">
        <Slider
          {...settings}
          key={locale} // 👈 مهم جداً
          className="row global-carousel client-slider2"
        >
          {clients.map((client, index) => (
            <div className="col-lg-auto" key={index}>
              <div className="client-logo">
                <Link href="#partners">
                  <img src={client.logo} alt={client.name} />
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Client;
