"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const CTA = () => {
  const t = useTranslations("home.cta");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div className="cta-area-3">
      <div className="container">
        <div
          className="cta-wrap3 text-center background-image"
          data-overlay="title"
          data-opacity="6"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dkc5klynm/image/upload/v1769943576/ernesta-vala-zbD8iz5ZJk4-unsplash_cidk1l.jpg')",
          }}
        >
          <div className="title-area mb-30 text-center!">
            <span className="sub-title text-white">
              {t("subtitle")}{" "}
              <i
                className={
                  isRTL ? "ri-arrow-left-down-line" : "ri-arrow-right-down-line"
                }
              ></i>
            </span>
            <h2 className="cta-title style2">{t("title1")}</h2>
            <h3 className="cta-title text-white">{t("title2")}</h3>
          </div>
          <div className="btn-wrap justify-content-center">
            <Link href="/pages/innerpage/contact" className="btn">
              {t("button")}{" "}
              <i
                className={
                  isRTL ? "ri-arrow-left-up-line" : "ri-arrow-right-up-line"
                }
              ></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
