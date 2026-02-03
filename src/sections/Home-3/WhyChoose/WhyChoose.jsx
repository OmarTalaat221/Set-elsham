"use client";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const WhyChoose = () => {
  const t = useTranslations("home.whyChoose");
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState("why-pill-1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  // بيانات الخدمات من الترجمة
  const services = [
    { id: "why-pill-1", key: "service1" },
    { id: "why-pill-2", key: "service2" },
    { id: "why-pill-3", key: "service3" },
    { id: "why-pill-4", key: "service4" },
    { id: "why-pill-5", key: "service5" },
  ];

  return (
    <div className="why-area-3 space-top overflow-hidden" id="service-sec">
      <div
        className="why-sec-bg3-1"
        style={{ backgroundImage: "url('/main-assets/img/bg/why-bg3-1.png')" }}
      ></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 why-three-extra">
            <div className="title-area text-center">
              <span className="sub-title text-xl! text-theme">
                {t("subtitle")}{" "}
                <i
                  className={
                    locale === "ar"
                      ? "ri-arrow-left-down-line rotate-45"
                      : "ri-arrow-right-down-line"
                  }
                ></i>
              </span>
              <h2 className="homeThree-custom-titleOne">{t("title")}</h2>
            </div>
          </div>
        </div>
        <div className="row gy-50">
          <div className="col-xl-4">
            <ul className="why-tab-wrap nav nav-pills" role="tablist">
              {services.map((service, index) => (
                <li className="nav-item" key={service.id} role="presentation">
                  <button
                    className={`nav-link ${activeTab === service.id ? "active" : ""}`}
                    id={`${service.id}-tab`}
                    onClick={() => handleTabClick(service.id)}
                    type="button"
                    role="tab"
                    aria-controls={service.id}
                    aria-selected={activeTab === service.id}
                  >
                    {t(`${service.key}.tabTitle`)}{" "}
                    <i
                      className={
                        locale === "ar"
                          ? "ri-arrow-left-down-line rotate-180"
                          : "ri-arrow-right-down-line"
                      }
                    ></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-xl-8">
            <div className="tab-content custom-animation">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`tab-pane fade ${activeTab === service.id ? "show active custom-fadeIn" : ""}`}
                  id={service.id}
                  role="tabpanel"
                  aria-labelledby={`${service.id}-tab`}
                >
                  <div className="row gx-80 gy-40 align-items-center">
                    <div className="col-lg-5">
                      <div className="why-thumb-wrap3-1">
                        <div className="why-tab-thumb">
                          <img
                            className="lg:max-w-full lg:max-h-full"
                            src={`https://res.cloudinary.com/dkc5klynm/image/upload/v1769683342/pexels-alanur-o-285175026-18420593_eovxmv.jpg`}
                            alt={t(`${service.key}.title`)}
                          />
                        </div>
                        <div className="why-text-wrap">
                          <h4 className="title">{t("serviceLabel")}</h4>
                          <hr className="line" />
                          <div className="number">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="why-content-wrap">
                        <h4 className="title">{t("aboutService")}</h4>
                        <h5 className="subtitle">
                          {t(`${service.key}.title`)}
                        </h5>
                        <p className="text">
                          {t(`${service.key}.description`)}
                        </p>
                        <div className="checklist mb-35">
                          <ul>
                            <li>
                              <img
                                className={`${locale === "ar" ? "ml-[10px]! mr-0! rotate-180" : "mr-[10px]! ml-0!"}`}
                                src="/main-assets/img/icon/about-checklsit-icon1-1.svg"
                                alt="icon"
                              />
                              {t(`${service.key}.feature`)}
                            </li>
                          </ul>
                        </div>
                        <div className="btn-group mt-35">
                          <Link href="/pages/innerpage/service" className="btn">
                            {t("moreDetails")}{" "}
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
