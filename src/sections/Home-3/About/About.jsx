"use client";
import Link from "next/link";
import { useState } from "react";
import PopupVideo from "../../Common/PopupVideo/PopupVideo";
import { useLocale, useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("home.about");
  const locale = useLocale();
  const [popup, setPopup] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const openPopup = () => {
    setPopup(true);
    const iframe = document.getElementById("youtube-video");
    if (iframe) {
      iframe.src =
        "https://www.youtube.com/embed/Mp8IXI1kzvQ?si=UQVMsmBriHPfD6Vf";
    }
    setIsActive(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <div>
      <div className="about-area-3 space overflow-hidden" id="about-sec">
        <div className="container">
          <div className="row gy-80 gx-100 align-items-end">
            <div className="col-xl-7">
              <div className="about-wrap3">
                <div className="title-area mb-25">
                  <span className="sub-title text-theme">
                    {t("subtitle")}
                    <i
                      className={
                        locale === "ar"
                          ? "ri-arrow-left-down-line"
                          : "ri-arrow-right-down-line"
                      }
                    ></i>
                  </span>
                  <h2 className="sec-title">{t("title")}</h2>
                  <p className="sec-text">{t("description")}</p>
                </div>

                <div className="checklist mb-35">
                  <ul>
                    <li>
                      <img
                        className={
                          locale === "ar"
                            ? "rotate-180 ml-[10px]! mr-0!"
                            : "mr-[10px]!"
                        }
                        src="/main-assets/img/icon/about-checklsit-icon1-1.svg"
                        alt="icon"
                      />
                      {t("feature1")}
                    </li>
                    <li>
                      <img
                        className={
                          locale === "ar"
                            ? "rotate-180 ml-[10px]! mr-0!"
                            : "mr-[10px]!"
                        }
                        src="/main-assets/img/icon/about-checklsit-icon1-1.svg"
                        alt="icon"
                      />
                      {t("feature2")}
                    </li>
                    <li>
                      <img
                        className={
                          locale === "ar"
                            ? "rotate-180 ml-[10px]! mr-0!"
                            : "mr-[10px]!"
                        }
                        src="/main-assets/img/icon/about-checklsit-icon1-1.svg"
                        alt="icon"
                      />
                      {t("feature3")}
                    </li>
                  </ul>
                </div>

                <div className="btn-wrap">
                  <div className="cta-grid-wrap">
                    <div className="icon-btn">
                      <i className="ri-phone-fill"></i>
                    </div>
                    <div className="media-body">
                      <Link className="link" href="tel:+201234567890">
                        {t("phone")}
                      </Link>
                      <h6 className="title">{t("needHelp")}</h6>
                    </div>
                  </div>
                  <div className="about-author-wrap">
                    <div className="author-thumb">
                      <img
                        src="/main-assets/img/normal/about_3-4.png"
                        alt="founder"
                      />
                    </div>
                    <div className="media-body">
                      <div className="author-sign">
                        <img
                          src="/main-assets/img/normal/about_3-3.png"
                          alt="signature"
                        />
                      </div>
                      <div className="author-text">{t("founder")}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* video */}
              <div className="about-thumb3 mt-70">
                <div className="video-wrap about-img-1">
                  <img
                    src="https://res.cloudinary.com/dkc5klynm/image/upload/v1769679989/pexels-shvetsa-5711226_omxdpy.jpg"
                    alt="workshop"
                  />
                  <a onClick={openPopup} className="play-btn style6">
                    <i className="ri-play-fill"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-5 col-md-8">
              <div className="about-thumb3 mb-30">
                <div
                  className="about-img-2 pt-[10px]"
                  style={{
                    maskImage:
                      "url('/main-assets/img/normal/about_mask3-2.png')",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/dkc5klynm/image/upload/v1769679994/pexels-shvetsa-5711815_hublle.jpg"
                    alt="wood products"
                  />
                </div>
              </div>
              <p>{t("sideText")}</p>
              <div className="btn-group mt-35">
                <Link href="/pages/innerpage/about" className="btn">
                  {t("button")}
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
      <PopupVideo
        popup={popup}
        setPopup={setPopup}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </div>
  );
};

export default About;
