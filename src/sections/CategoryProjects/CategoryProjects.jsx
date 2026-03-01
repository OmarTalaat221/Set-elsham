// sections/Project/CategoryProjects.jsx
"use client";

import { useState, useEffect, useMemo } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import GalleryViewer from "../../components/shared/GalleryViewer";

// Projects data organized by category with detailsKey for mapping
const allProjects = {
  "furniture-antique": [
    {
      id: "fa-1",
      src: "https://res.cloudinary.com/dkc5klynm/image/upload/v1770243040/%D9%A2%D9%A0%D9%A1%D9%A7%D9%A0%D9%A1%D9%A2%D9%A8_%D9%A2%D9%A3%D9%A0%D9%A8%D9%A1%D9%A7_ns3owt.jpg",
      key: "furniture1",
      detailsKey: "project1",
      featured: true,
    },
    {
      id: "fa-2",
      src: "https://res.cloudinary.com/dkc5klynm/image/upload/v1770242376/%D9%A2%D9%A0%D9%A1%D9%A8%D9%A0%D9%A5%D9%A2%D9%A0_%D9%A2%D9%A2%D9%A2%D9%A0%D9%A4%D9%A7_lhzcj1.jpg",
      key: "furniture2",
      detailsKey: "project2",
      featured: false,
    },
    {
      id: "fa-3",
      src: "https://res.cloudinary.com/dkc5klynm/image/upload/v1770242342/IMG_6138_nnibsf.jpg",
      key: "furniture3",
      detailsKey: "project3",
      featured: true,
    },
  ],
  fitout: [
    {
      id: "fo-1",
      src: "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955753/IMG_4621_ulnnme.webp",
      key: "fitout1",
      detailsKey: "project4",
      featured: true,
    },
    {
      id: "fo-2",
      src: "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955459/IMG_6128_qcae7s.jpg",
      key: "fitout2",
      detailsKey: "project5",
      featured: false,
    },
  ],
  upgrade: [
    {
      id: "up-1",
      src: "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955447/IMG_6131_nbdnaj.jpg",
      key: "upgrade1",
      detailsKey: "project6",
      featured: true,
    },
    {
      id: "up-2",
      src: "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955429/IMG_6417_c9i1qv.jpg",
      key: "upgrade2",
      detailsKey: "project7",
      featured: true,
    },
  ],
  "new-build": [
    {
      id: "nb-1",
      src: "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955331/%D9%A2%D9%A0%D9%A1%D9%A7%D9%A0%D9%A1%D9%A2%D9%A4_%D9%A1%D9%A9%D9%A5%D9%A4%D9%A4%D9%A0_szj9xq.jpg",
      key: "newbuild1",
      detailsKey: "project8",
      featured: true,
    },
    {
      id: "nb-2",
      src: "https://res.cloudinary.com/dkc5klynm/image/upload/v1769955313/IMG-20240109-WA0002_luhjts.jpg",
      key: "newbuild2",
      detailsKey: "project9",
      featured: false,
    },
  ],
};

const categoryInfo = {
  "furniture-antique": {
    key: "furniture",
    icon: "ri-armchair-line",
  },
  fitout: {
    key: "fitout",
    icon: "ri-building-2-line",
  },
  upgrade: {
    key: "upgrade",
    icon: "ri-refresh-line",
  },
  "new-build": {
    key: "new",
    icon: "ri-add-circle-line",
  },
};

const CategoryProjects = ({ category }) => {
  const t = useTranslations("projects");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [photoIndex, setPhotoIndex] = useState(-1);

  useEffect(() => {
    setMounted(true);
  }, []);

  const normalizedCategory = useMemo(() => {
    if (!category) return "";
    const decoded = decodeURIComponent(category);
    return decoded.toLowerCase().trim();
  }, [category]);

  const projects = allProjects[normalizedCategory] || [];
  const info = categoryInfo[normalizedCategory] || {
    key: "furniture",
    icon: "ri-folder-line",
  };

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    if (activeFilter === "featured") return projects.filter((p) => p.featured);
    return projects;
  }, [projects, activeFilter]);

  const handleOpenGallery = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    setPhotoIndex(index);
  };

  if (!mounted) return null;

  if (!normalizedCategory || !categoryInfo[normalizedCategory]) {
    return (
      <section
        className="space-top space-extra-bottom"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="container">
          <div className="text-center py-5">
            <div className="mb-4">
              <i className="ri-error-warning-line text-6xl text-muted"></i>
            </div>
            <h3 className="mb-3">Category Not Found</h3>
            <p className="text-muted mb-4">
              The category "{category}" does not exist.
            </p>
            <Link href="/project" className="btn">
              <span className="btn-text">{t("backToCategories")}</span>
              <span className="btn-icon">
                <i className={`ri-arrow-${isRTL ? "left" : "right"}-line`}></i>
              </span>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Custom Styles */}
      <style jsx>{`
        .portfolio-thumb-fixed {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          overflow: hidden;
        }

        .portfolio-thumb-fixed img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .portfolio-thumb-fixed:hover img {
          transform: scale(1.05);
        }

        .portfolio-thumb-fixed .portfolio-card-number {
          position: absolute;
          top: 16px;
          left: 16px;
          z-index: 2;
        }

        .portfolio-thumb-fixed .icon-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 2;
        }

        @media (min-width: 768px) {
          .portfolio-thumb-fixed {
            aspect-ratio: 4 / 5;
          }
        }

        @media (min-width: 1024px) {
          .portfolio-thumb-fixed {
            aspect-ratio: 3 / 4;
          }
        }
      `}</style>

      <section
        className="project-page space-top space-extra-bottom"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="container">
          {/* Back Link */}
          <div className="mb-4" data-aos="fade-up">
            <Link
              href="/project"
              className="d-inline-flex align-items-center gap-2 text-theme"
              style={{ textDecoration: "none" }}
            >
              {isRTL ? (
                <i className="ri-arrow-right-line"></i>
              ) : (
                <i className="ri-arrow-left-line"></i>
              )}
              <span>{t("backToCategories")}</span>
            </Link>
          </div>

          {/* Category Header */}
          <div
            className="row justify-content-center text-center mb-5"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="col-lg-8">
              <h2 className="sec-title">{t(`categories.${info.key}.title`)}</h2>
              <p>{t(`categories.${info.key}.description`)}</p>
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="row gy-40 justify-content-center">
              {filteredProjects.map((project, index) => (
                <div
                  className="col-md-6 col-lg-4"
                  key={project.id}
                  data-aos="fade-up"
                  data-aos-delay={100 + (index % 3) * 100}
                  data-aos-duration="800"
                >
                  <div className="portfolio-card style2 h-full flex flex-col">
                    {/* Fixed Height Thumbnail */}
                    <div className="portfolio-thumb-fixed">
                      <Link href={`/project-details?id=${project.detailsKey}`}>
                        <img
                          src={project.src}
                          alt={t(`projectItems.${project.key}.title`)}
                        />
                      </Link>

                      <button
                        className="icon-btn popup-image"
                        onClick={(e) => handleOpenGallery(e, index)}
                      >
                        <i className="ri-eye-line"></i>
                      </button>
                    </div>

                    {/* Card Details */}
                    <div className="portfolio-card-details flex-1 flex flex-col">
                      <span className="portfolio-card-subtitle">
                        {t(`categories.${info.key}.title`)}
                      </span>
                      <h4 className="portfolio-card-title">
                        <Link
                          href={`/project-details?id=${project.detailsKey}`}
                        >
                          {t(`projectItems.${project.key}.title`)}
                        </Link>
                      </h4>

                      {/* Description + Button in same row */}
                      <div className="flex justify-between gap-3 mt-auto flex-col">
                        <p className="portofolio-card-text line-clamp-1! flex-1 mb-0!">
                          {t(`projectItems.${project.key}.description`)}
                        </p>
                        <Link
                          href={`/project-details?id=${project.detailsKey}`}
                          className="btn-with-icon shrink-0"
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
                </div>
              ))}

              {/* Pagination */}
              <div
                className="pagination justify-content-center mt-5"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <ul>
                  <li>
                    <a href="#">
                      <i
                        className={`ri-arrow-${isRTL ? "right" : "left"}-line`}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a className="active" href="#">
                      01
                    </a>
                  </li>
                  <li>
                    <a href="#">02</a>
                  </li>
                  <li>
                    <a href="#">03</a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        className={`ri-arrow-${isRTL ? "left" : "right"}-line`}
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-center py-5" data-aos="fade-up">
              <div className="mb-4">
                <i className="ri-folder-open-line text-6xl text-muted"></i>
              </div>
              <h3 className="mb-3">{t("noProjects")}</h3>
              <p className="text-muted">{t("noProjectsDescription")}</p>
            </div>
          )}
        </div>

        {/* Gallery Viewer */}
        <GalleryViewer
          images={filteredProjects.map((p) => p.src)}
          photoIndex={photoIndex}
          onClose={() => setPhotoIndex(-1)}
          onMovePrev={() =>
            setPhotoIndex(
              (photoIndex + filteredProjects.length - 1) %
                filteredProjects.length
            )
          }
          onMoveNext={() =>
            setPhotoIndex((photoIndex + 1) % filteredProjects.length)
          }
          imageTitle={
            photoIndex >= 0
              ? t(`projectItems.${filteredProjects[photoIndex]?.key}.title`)
              : ""
          }
        />
      </section>
    </>
  );
};

export default CategoryProjects;
