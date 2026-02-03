"use client";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const Hero = () => {
  const t = useTranslations("home.hero");
  const locale = useLocale();

  return (
    <div className="hero-wrapper hero-3" id="hero">
      <div
        className="hero-bg-3-1 background-image bg-mask"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dkc5klynm/image/upload/v1769674231/collab-media-VGjQgLN4B78-unsplash_ks6vrj.webp')",
          backgroundPosition: "center",
          maskImage: "url('/main-assets/img/hero/hero_bg_mask_3_1.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="hero-shadow-text">{t("shadowText")}</div>

      <div
        className="hero-bg-shape3-1 shape-mockup jump flex items-center gap-2"
        style={{ bottom: "2%", left: "3%", position: "absolute" }}
      >
        <img
          className="w-[90px] h-[330px]! object-cover rotate-[-15deg]"
          src="https://res.cloudinary.com/dkc5klynm/image/upload/v1769945575/1_o7atc8.png"
          alt="shape"
        />
        <img
          className="w-[90px] h-[330px]! object-cover rotate-[-15deg]"
          src="https://res.cloudinary.com/dkc5klynm/image/upload/v1769946359/2_vzugva.png"
          alt="shape"
        />
      </div>

      <div className="container">
        <div className="hero-style3">
          <div className="row ">
            <div className="col-lg-12">
              <span className="hero-subtitle">
                {t("vision")}{" "}
                <img
                  src="/main-assets/img/icon/long-arrow-right2.svg"
                  alt="arrow"
                  className={locale === "ar" ? "rotate-180" : ""}
                />
              </span>
              .<h1 className="hero-title">{t("title")}</h1>
              <h1 className="hero-title style2">{t("subtitle")}</h1>
              <p className="hero-text">{t("description")}</p>
              <Link href="/about" className="btn style2">
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
