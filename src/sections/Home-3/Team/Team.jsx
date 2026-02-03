"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const Team = () => {
  const t = useTranslations("home.team");
  const locale = useLocale();
  const isRTL = locale === "ar";

  // بيانات أعضاء الفريق
  const teamMembers = [
    {
      key: "member1",
      image: "/main-assets/img/team/team-2-1.png",
    },
    {
      key: "member2",
      image: "/main-assets/img/team/team-2-2.png",
    },
    {
      key: "member3",
      image: "/main-assets/img/team/team-2-3.png",
    },
  ];

  return (
    <div className="team-area-2 space-bottom">
      <div className="container">
        {/* Header */}
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-7 col-md-7">
            <div
              className={`title-area ${isRTL ? "text-right" : "content-text-extra-style "}`}
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
              <Link href="/pages/innerpage/team" className="btn">
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

        {/* Team Members */}
        <div className="row gy-30 justify-content-center">
          {teamMembers.map((member, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="team-card style2 home-three-white-space-none">
                <div className="team-card_img">
                  <img src={member.image} alt={t(`${member.key}.name`)} />
                  <div className="team-social_wrap">
                    <div className="social-btn">
                      <Link
                        href="https://facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="ri-facebook-fill"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="ri-twitter-x-line"></i>
                      </Link>
                      <Link
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="ri-instagram-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="team-card_content">
                  <h4 className="team-card_title">
                    <Link href="/pages/innerpage/team-details">
                      {t(`${member.key}.name`)}
                    </Link>
                  </h4>
                  <span className="team-card_desig">
                    {t(`${member.key}.position`)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
