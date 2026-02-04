"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import GalleryViewer from "../../../components/shared/GalleryViewer";

const projectImages = [
  {
    src: "https://res.cloudinary.com/dkc5klynm/image/upload/v1770243040/%D9%A2%D9%A0%D9%A1%D9%A7%D9%A0%D9%A1%D9%A2%D9%A8_%D9%A2%D9%A3%D9%A0%D9%A8%D9%A1%D9%A7_ns3owt.jpg",
    key: "project1",
  },
  {
    src: "https://res.cloudinary.com/dkc5klynm/image/upload/v1770242376/%D9%A2%D9%A0%D9%A1%D9%A8%D9%A0%D9%A5%D9%A2%D9%A0_%D9%A2%D9%A2%D9%A2%D9%A0%D9%A4%D9%A7_lhzcj1.jpg",
    key: "project2",
  },
  {
    src: "https://res.cloudinary.com/dkc5klynm/image/upload/v1770242342/IMG_6138_nnibsf.jpg",
    key: "project3",
  },
  {
    src: "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955753/IMG_4621_ulnnme.webp",
    key: "project4",
  },
  {
    src: "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955459/IMG_6128_qcae7s.jpg",
    key: "project5",
  },
  {
    src: "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955447/IMG_6131_nbdnaj.jpg",
    key: "project6",
  },
  {
    src: "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955429/IMG_6417_c9i1qv.jpg",
    key: "project7",
  },
  {
    src: "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955331/%D9%A2%D9%A0%D9%A1%D9%A7%D9%A0%D9%A1%D9%A2%D9%A4_%D9%A1%D9%A9%D9%A5%D9%A4%D9%A4%D9%A0_szj9xq.jpg",
    key: "project8",
  },
  {
    src: "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955313/IMG-20240109-WA0002_luhjts.jpg",
    key: "project9",
  },
];

const Project = () => {
  const t = useTranslations("project");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [photoIndex, setPhotoIndex] = useState(-1);

  const handleOpenGallery = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    setPhotoIndex(index);
  };

  return (
    <section
      className="project-page space-top space-extra-bottom"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="sub-title">{t("pageSubtitle")}</span>
            <h2 className="sec-title">{t("pageTitle")}</h2>
            <p>{t("pageDescription")}</p>
          </div>
        </div>

        <div className="row gy-40 justify-content-center">
          {projectImages.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="portfolio-card style2">
                <div className="portfolio-card-thumb">
                  <Link href="/pages/innerpage/project-details">
                    <img
                      src={project.src}
                      alt={t(`projects.${project.key}.title`)}
                    />
                  </Link>
                  <span className="portfolio-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <button
                    className="icon-btn popup-image"
                    onClick={(e) => handleOpenGallery(e, index)}
                  >
                    <i className="ri-eye-line"></i>
                  </button>
                </div>
                <div className="portfolio-card-details">
                  <span className="portfolio-card-subtitle">
                    {t(`projects.${project.key}.category`)}
                  </span>
                  <h4 className="portfolio-card-title">
                    <Link href="/pages/innerpage/project-details">
                      {t(`projects.${project.key}.title`)}
                    </Link>
                  </h4>
                  <p className="portofolio-card-text">
                    {t(`projects.${project.key}.date`)}
                  </p>
                  <Link
                    href="/pages/innerpage/project-details"
                    className="btn-with-icon"
                  >
                    {t("viewDetails")}
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

          <div className="pagination justify-content-center">
            <ul>
              <li>
                <a className="active" href="/pages/innerpage/blog">
                  01
                </a>
              </li>
              <li>
                <a href="/pages/innerpage/blog">02</a>
              </li>
              <li>
                <a href="/pages/innerpage/blog">03</a>
              </li>
              <li>
                <a href="/pages/innerpage/blog">
                  <i className="ri-arrow-right-line"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <GalleryViewer
        images={projectImages.map((img) => img.src)}
        photoIndex={photoIndex}
        onClose={() => setPhotoIndex(-1)}
        onMovePrev={() =>
          setPhotoIndex(
            (photoIndex + projectImages.length - 1) % projectImages.length
          )
        }
        onMoveNext={() =>
          setPhotoIndex((photoIndex + 1) % projectImages.length)
        }
        imageTitle={
          photoIndex >= 0
            ? t(`projects.${projectImages[photoIndex].key}.title`)
            : ""
        }
        imageCaption={
          photoIndex >= 0
            ? t(`projects.${projectImages[photoIndex].key}.description`)
            : ""
        }
      />
    </section>
  );
};

export default Project;
