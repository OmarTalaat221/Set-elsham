/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import PopupVideo from "../../Common/PopupVideo/PopupVideo";

// بيانات صور المشاريع
const projectImagesData = {
  project1:
    "https://res.cloudinary.com/dkc5klynm/image/upload/v1770243040/%D9%A2%D9%A0%D9%A1%D9%A7%D9%A0%D9%A1%D9%A2%D9%A8_%D9%A2%D9%A3%D9%A0%D9%A8%D9%A1%D9%A7_ns3owt.jpg",
  project2:
    "https://res.cloudinary.com/dkc5klynm/image/upload/v1770242376/%D9%A2%D9%A0%D9%A1%D9%A8%D9%A0%D9%A5%D9%A2%D9%A0_%D9%A2%D9%A2%D9%A2%D9%A0%D9%A4%D9%A7_lhzcj1.jpg",
  project3:
    "https://res.cloudinary.com/dkc5klynm/image/upload/v1770242342/IMG_6138_nnibsf.jpg",
  project4:
    "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955753/IMG_4621_ulnnme.webp",
  project5:
    "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955459/IMG_6128_qcae7s.jpg",
  project6:
    "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955447/IMG_6131_nbdnaj.jpg",
  project7:
    "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955429/IMG_6417_c9i1qv.jpg",
  project8:
    "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955331/%D9%A2%D9%A0%D9%A1%D9%A7%D9%A0%D9%A1%D9%A2%D9%A4_%D9%A1%D9%A9%D9%A5%D9%A4%D9%A4%D9%A0_szj9xq.jpg",
  project9:
    "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955313/IMG-20240109-WA0002_luhjts.jpg",
};

// Component الداخلي الذي يستخدم searchParams
const ProjectDetailsContent = () => {
  const t = useTranslations("projectDetails");
  const tProjects = useTranslations("project.projects");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const searchParams = useSearchParams();

  const projectId = searchParams?.get("id") || "project1";

  const [popup, setPopup] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  const openPopup = () => {
    setPopup(true);
    const iframe = document.getElementById("youtube-video");
    if (iframe) {
      iframe.src =
        "https://www.youtube.com/embed/cnVuVtbbZgs?si=UQVMsmBriHPfD6Vf";
    }
    setIsActive(true);
    document.body.style.overflow = "hidden";
  };

  const projectImage =
    projectImagesData[projectId] || projectImagesData.project1;

  const allProjectKeys = Object.keys(projectImagesData);
  const otherProjects = allProjectKeys
    .filter((key) => key !== projectId)
    .slice(0, 3);

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      {/* قسم التفاصيل الرئيسي */}
      <div className="project-details-area space-top overflow-hidden">
        <div className="container">
          <div className="row gy-30 gx-30">
            <div className="col-12">
              <div className="single-page">
                {/* صورة المشروع الرئيسية */}
                <div
                  className="project-page-thumb mb-50"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <img
                    className="w-100"
                    src={projectImage}
                    alt={tProjects(`${projectId}.title`)}
                  />
                  <aside
                    className="sidebar-area"
                    data-aos={isRTL ? "fade-right" : "fade-left"}
                    data-aos-delay="200"
                    data-aos-duration="800"
                  >
                    <div className="widget widget_project_info style2">
                      <h3 className="widget_title">{t("projectInfo.title")}</h3>
                      <ul className="project-info-list border-0 p-0 m-0">
                        <li>
                          <strong>
                            {t("projectInfo.client")}
                            <span>:</span>
                          </strong>
                          <span>{t(`projects.${projectId}.client`)}</span>
                        </li>
                        <li>
                          <strong>
                            {t("projectInfo.category")}
                            <span>:</span>
                          </strong>
                          <span>{tProjects(`${projectId}.category`)}</span>
                        </li>
                        <li>
                          <strong>
                            {t("projectInfo.location")}
                            <span>:</span>
                          </strong>
                          <span>{t(`projects.${projectId}.location`)}</span>
                        </li>
                        <li>
                          <strong>
                            {t("projectInfo.date")}
                            <span>:</span>
                          </strong>
                          <span>{t(`projects.${projectId}.date`)}</span>
                        </li>
                        <li>
                          <strong>
                            {t("projectInfo.status")}
                            <span>:</span>
                          </strong>
                          <span>{t(`projects.${projectId}.status`)}</span>
                        </li>
                        <li>
                          <strong>
                            {t("projectInfo.budget")}
                            <span>:</span>
                          </strong>
                          <span>{t(`projects.${projectId}.budget`)}</span>
                        </li>
                        <li>
                          <strong>
                            {t("projectInfo.duration")}
                            <span>:</span>
                          </strong>
                          <span>{t(`projects.${projectId}.duration`)}</span>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>

                {/* عنوان المشروع */}
                <h2
                  className="sec-title mb-15"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="600"
                >
                  {tProjects(`${projectId}.title`)}
                </h2>

                {/* نظرة عامة */}
                <h4
                  className="mb-20"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="600"
                  style={{ color: "var(--theme-color)" }}
                >
                  {t("overview.title")}
                </h4>
                <p
                  className="mb-30"
                  data-aos="fade-up"
                  data-aos-delay="150"
                  data-aos-duration="600"
                >
                  {tProjects(`${projectId}.description`)}
                </p>
                <p
                  className="mb-30"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="600"
                >
                  {t("overview.description1")}
                </p>
                <p
                  className="mb-50"
                  data-aos="fade-up"
                  data-aos-delay="250"
                  data-aos-duration="600"
                >
                  {t("overview.description2")}
                </p>

                {/* كروت الخدمات */}
                <div className="row gy-4 justify-content-center">
                  <div
                    className="col-xl-4 col-lg-6"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="800"
                  >
                    <div className="service-card style4">
                      <div className="service-card_icon">
                        <img
                          src="https://res.cloudinary.com/dkc5klynm/image/upload/v1770292106/4_ejlj7h.png"
                          alt="wood"
                        />
                      </div>
                      <div className="service-card_content">
                        <h4 className="service-card_title">
                          <Link href="/pages/innerpage/service-details">
                            {t("services.service1.title")}
                          </Link>
                        </h4>
                        <p className="service-card_text">
                          {t("services.service1.description")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-lg-6"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="800"
                  >
                    <div className="service-card style4">
                      <div className="service-card_icon">
                        <img
                          src="https://res.cloudinary.com/dkc5klynm/image/upload/v1770292390/Untitled_design_-_2026-02-05T135213.033_u05qxk.png"
                          alt="cnc"
                        />
                      </div>
                      <div className="service-card_content">
                        <h4 className="service-card_title">
                          <Link href="/pages/innerpage/service-details">
                            {t("services.service2.title")}
                          </Link>
                        </h4>
                        <p className="service-card_text">
                          {t("services.service2.description")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-lg-6"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="800"
                  >
                    <div className="service-card style4">
                      <div className="service-card_icon">
                        <img
                          src="https://res.cloudinary.com/dkc5klynm/image/upload/v1770292106/5_felcpa.png"
                          alt="finish"
                        />
                      </div>
                      <div className="service-card_content">
                        <h4 className="service-card_title">
                          <Link href="/pages/innerpage/service-details">
                            {t("services.service3.title")}
                          </Link>
                        </h4>
                        <p className="service-card_text">
                          {t("services.service3.description")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* الاقتباس */}
                <blockquote
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="800"
                >
                  <p>"{t("quote.text")}"</p>
                  <cite>{t("quote.author")}</cite>
                  <span className="desig">{t("quote.position")}</span>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* قسم الفيديو مع Parallax و Overlay */}
      <div
        className="video-area overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div
          className="video-wrap-parallax mt-20"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dkc5klynm/image/upload/v1770283158/ryno-marais-p5JcD-_13ek-unsplash_tabsnv.jpg')`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "relative",
            minHeight: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "var(--theme-color)",
              opacity: 0.55,
              zIndex: 1,
            }}
          />
          {/* Play Button */}
          <a
            onClick={openPopup}
            className="play-btn style3"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="800"
            style={{
              position: "relative",
              zIndex: 2,
              cursor: "pointer",
            }}
          >
            <i className="ri-play-fill"></i>
          </a>
        </div>
      </div>

      {/* مشاريع أخرى */}
      <div
        className="related-projects pb-60 overflow-hidden"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="container">
          <div
            className="title-area text-center pt-60"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <span className="sub-title" data-aos="fade-up" data-aos-delay="100">
              {t("relatedProjects.subtitle")}
            </span>
            <h2 className="sec-title" data-aos="fade-up" data-aos-delay="200">
              {t("relatedProjects.title")}
            </h2>
          </div>
          <div className="row gy-4">
            {otherProjects.map((projId, index) => (
              <div
                className="col-lg-4"
                key={projId}
                data-aos="fade-up"
                data-aos-delay={100 + index * 150}
                data-aos-duration="800"
              >
                <div className="portfolio-card style2">
                  <div className="portfolio-card-thumb">
                    <Link href={`/project-details?id=${projId}`}>
                      <img
                        src={projectImagesData[projId]}
                        alt={tProjects(`${projId}.title`)}
                      />
                    </Link>
                    <span className="portfolio-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="portfolio-card-details">
                    <span className="portfolio-card-subtitle">
                      {tProjects(`${projId}.category`)}
                    </span>
                    <h4 className="portfolio-card-title">
                      <Link href={`/project-details?id=${projId}`}>
                        {tProjects(`${projId}.title`)}
                      </Link>
                    </h4>
                    <p className="portofolio-card-text">
                      {tProjects(`${projId}.date`)}
                    </p>
                    <Link
                      href={`/project-details?id=${projId}`}
                      className="btn-with-icon"
                    >
                      {t("relatedProjects.viewDetails")}
                      <span className="btn-icon">
                        <i
                          className={`ri-arrow-${isRTL ? "left" : "right"}-up-line`}
                        ></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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

// Loading Component
const ProjectDetailsLoading = () => {
  return (
    <div className="project-details-area space-top overflow-hidden">
      <div className="container">
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading project details...</p>
        </div>
      </div>
    </div>
  );
};

// Main Component مع Suspense
const ProjectDetails = () => {
  return (
    <Suspense fallback={<ProjectDetailsLoading />}>
      <ProjectDetailsContent />
    </Suspense>
  );
};

export default ProjectDetails;
