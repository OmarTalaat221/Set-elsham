"use client";

import Link from "next/link";
import Slider from "react-slick";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import "./blog.css";

const Blog = () => {
  const t = useTranslations("home.blog");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    dots: false,
    arrows: false,
    rtl: isRTL,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, rtl: isRTL },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1, rtl: isRTL },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, rtl: isRTL },
      },
    ],
  };

  // بيانات المقالات
  const blogPosts = [
    {
      key: "post1",
      image:
        "https://res.cloudinary.com/dkc5klynm/image/upload/v1769957506/jeriden-villegas-VLPUm5wP5Z0-unsplash_hrmeus.jpg",
      day: "17",
      month: "JUN",
      year: "2024",
    },
    {
      key: "post2",
      image:
        "https://res.cloudinary.com/dkc5klynm/image/upload/v1769957531/samuel-cruz-cVB7mVf5_KA-unsplash_bckukl.jpg",
      day: "22",
      month: "JUN",
      year: "2024",
    },
    {
      key: "post3",
      image:
        "https://res.cloudinary.com/dkc5klynm/image/upload/v1769957558/jennifer-salavarrieta-FN1XoGL68-I-unsplash_nyu4jy.jpg",
      day: "28",
      month: "JUN",
      year: "2024",
    },
    {
      key: "post4",
      image:
        "https://res.cloudinary.com/dkc5klynm/image/upload/v1769957916/javad-esmaeili-lIrl53eeWmE-unsplash_e1q6dm.jpg",
      day: "05",
      month: "JUL",
      year: "2024",
    },
    // {
    //   key: "post5",
    //   image: "/main-assets/img/blog/blog_1_2.png",
    //   day: "12",
    //   month: "JUL",
    //   year: "2024",
    // },
    // {
    //   key: "post6",
    //   image: "/main-assets/img/blog/blog_1_3.png",
    //   day: "19",
    //   month: "JUL",
    //   year: "2024",
    // },
  ];

  // تحويل الشهور للعربي
  const getMonth = (month) => {
    if (!isRTL) return month;
    const months = {
      JAN: "يناير",
      FEB: "فبراير",
      MAR: "مارس",
      APR: "أبريل",
      MAY: "مايو",
      JUN: "يونيو",
      JUL: "يوليو",
      AUG: "أغسطس",
      SEP: "سبتمبر",
      OCT: "أكتوبر",
      NOV: "نوفمبر",
      DEC: "ديسمبر",
    };
    return months[month] || month;
  };

  return (
    <section
      className="blog-area-2 space shape-mockup-wrap"
      id="blog-sec"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div
        className="section-animation-shape1-1 shape-mockup animation-infinite background-image"
        style={{
          backgroundImage:
            "url('/main-assets/img/shape/global-line-shape1.png')",
          top: "0px",
        }}
      ></div>
      <div className="container">
        {/* Header */}
        <div className="row justify-content-lg-between justify-content-center align-items-center">
          <div className="col-lg-6">
            <div
              className={`title-area ${isRTL ? "text-start" : "blog-area-content-text-extra-style"}`}
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
          <div className="col-md-auto">
            <div className="sec-btn">
              <Link href="/pages/innerpage/blog" className="btn">
                {t("viewAll")}{" "}
                <i
                  className={
                    isRTL ? "ri-arrow-left-up-line" : "ri-arrow-right-up-line"
                  }
                ></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Blog Slider */}
        <div dir={isRTL ? "rtl" : "ltr"}>
          <Slider
            {...settings}
            key={locale}
            className="row global-carousel blog-slider slider-shadow"
          >
            {blogPosts.map((post, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="blog-card style2">
                  <div className="blog-img">
                    <img src={post.image} alt={t(`${post.key}.title`)} />
                    <div className="blog-date">
                      <Link href="/pages/innerpage/blog">
                        <span>{post.day}</span>
                        {getMonth(post.month)}
                      </Link>
                      <div className="year">{post.year}</div>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <Link href="/pages/innerpage/blog">
                        {t(`${post.key}.author`)}
                      </Link>
                      <Link href="/pages/innerpage/blog">
                        {t(`${post.key}.category`)}
                      </Link>
                    </div>
                    <h3 className="blog-title line-clamp-1">
                      <Link href="/pages/innerpage/blog-details">
                        {t(`${post.key}.title`)}
                      </Link>
                    </h3>
                    <p className="blog-text line-clamp-2">
                      {t(`${post.key}.excerpt`)}
                    </p>
                    <Link
                      href="/pages/innerpage/blog-details"
                      className="btn style2"
                    >
                      {t("moreDetails")}{" "}
                      <i
                        className={
                          isRTL
                            ? "ri-arrow-left-up-line"
                            : "ri-arrow-right-up-line"
                        }
                      ></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Blog;
