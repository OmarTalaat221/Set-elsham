"use client";
import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const teamMembers = [
  {
    id: 1,
    key: "member1",
    image:
      "https://i.pinimg.com/736x/25/b9/c9/25b9c99d1a7f5bcc86d09ee85d82ee02.jpg",
    socials: [
      {
        platform: "linkedin",
        icon: <Linkedin size={16} />,
        url: "https://www.linkedin.com/",
      },
      {
        platform: "instagram",
        icon: <Instagram size={16} />,
        url: "https://www.instagram.com/",
      },
      {
        platform: "email",
        icon: <Mail size={16} />,
        url: "mailto:info@mtrix.sa",
      },
    ],
  },
  {
    id: 2,
    key: "member2",
    image:
      "https://i.pinimg.com/736x/9e/db/42/9edb42beac7992b2c7a5f0a7bffc5441.jpg",
    socials: [
      {
        platform: "linkedin",
        icon: <Linkedin size={16} />,
        url: "https://www.linkedin.com/",
      },
      {
        platform: "instagram",
        icon: <Instagram size={16} />,
        url: "https://www.instagram.com/",
      },
      {
        platform: "facebook",
        icon: <Facebook size={16} />,
        url: "https://www.facebook.com/",
      },
    ],
  },
  {
    id: 3,
    key: "member3",
    image:
      "https://i.pinimg.com/736x/99/41/f6/9941f61de6519275317a5460180541ac.jpg",
    socials: [
      {
        platform: "instagram",
        icon: <Instagram size={16} />,
        url: "https://www.instagram.com/",
      },
      {
        platform: "linkedin",
        icon: <Linkedin size={16} />,
        url: "https://www.linkedin.com/",
      },
      {
        platform: "email",
        icon: <Mail size={16} />,
        url: "mailto:info@mtrix.sa",
      },
    ],
  },
  {
    id: 4,
    key: "member4",
    image:
      "https://i.pinimg.com/1200x/6e/a2/db/6ea2db384503cbd6ea3e5787dc393ffa.jpg",
    socials: [
      {
        platform: "linkedin",
        icon: <Linkedin size={16} />,
        url: "https://www.linkedin.com/",
      },
      {
        platform: "instagram",
        icon: <Instagram size={16} />,
        url: "https://www.instagram.com/",
      },
      {
        platform: "email",
        icon: <Mail size={16} />,
        url: "mailto:info@mtrix.sa",
      },
    ],
  },
];

// 👇 Official Social Media Brand Colors
function getSocialStyles(platform) {
  const styles = {
    linkedin: {
      hoverBg: "#0A66C2",
      defaultBg: "#0A66C2",
    },
    facebook: {
      hoverBg: "#1877F2",
      defaultBg: "#1877F2",
    },
    instagram: {
      hoverBg: "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
      defaultBg: "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
    },
    email: {
      hoverBg: "#EA4335",
      defaultBg: "#EA4335",
    },
  };
  return (
    styles[platform] || {
      hoverBg: "#202c54",
      defaultBg: "rgba(32, 44, 84, 0.9)",
    }
  );
}

export default function TeamSection() {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [swiperRef, setSwiperRef] = useState(null);

  const t = useTranslations("home.team");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 lg:mb-20"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
              <span className="text-[var(--theme-color)] font-bold tracking-[0.15em] sm:tracking-[0.25em] text-xs sm:text-sm md:text-base">
                {t("subtitle")}
              </span>
              <i
                className={`text-sm sm:text-base ${
                  isRTL ? "ri-arrow-left-down-line" : "ri-arrow-right-down-line"
                }`}
              ></i>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-slate-900 leading-tight">
              {t("title")}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Custom Navigation Buttons */}
            <button
              onClick={() => swiperRef?.slidePrev()}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center text-[var(--theme-color)] hover:bg-[var(--theme-color)]! hover:text-white transition-all duration-300 group"
              aria-label="Previous"
            >
              {isRTL ? (
                <ArrowRight className="w-5 h-5" />
              ) : (
                <ArrowLeft className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => swiperRef?.slideNext()}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--theme-color)]! shadow-md hover:shadow-lg flex items-center justify-center text-[var(--white-color)] hover:bg-[var(--white-color)]! hover:text-[var(--theme-color)]! transition-all duration-300"
              aria-label="Next"
            >
              {isRTL ? (
                <ArrowLeft className="w-5 h-5" />
              ) : (
                <ArrowRight className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Swiper */}
        <div data-aos="fade-up" data-aos-delay="200">
          <Swiper
            key={locale}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            onSwiper={setSwiperRef}
            dir={isRTL ? "rtl" : "ltr"}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: isRTL,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 32,
              },
            }}
            className="team-swiper !pb-12 sm:!pb-14"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={member.id}>
                <div
                  className="group relative h-full"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 md:hover:-translate-y-3">
                    {/* Image */}
                    <div className="relative w-full h-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={t(`members.${member.key}.name`)}
                        className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                      />

                      {/* Overlay - only on desktop hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--black-color)] via-[var(--black-color)]/60 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Mobile overlay - always visible */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--black-color)]/90 via-[var(--black-color)]/30 to-transparent md:hidden" />
                    </div>

                    {/* Position Badge */}
                    <div className="absolute top-4 sm:top-5 md:top-6 left-4 sm:left-5 md:left-6 right-4 sm:right-5 md:right-6 z-20">
                      <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-black/30 backdrop-blur-sm rounded-full shadow-lg">
                        <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-white">
                          {t(`members.${member.key}.position`)}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 md:p-6 lg:p-8 z-10">
                      {/* Name & Bio */}
                      <div className="mb-3 sm:mb-4">
                        <h3 className="inline-block text-lg! sm:text-xl! md:text-2xl! font-bold text-white mb-1 sm:mb-2 px-3 py-1 rounded-full">
                          {t(`members.${member.key}.name`)}
                        </h3>
                        <p className="text-white! text-xs! sm:text-sm! leading-relaxed line-clamp-2 backdrop-blur-sm bg-black/20 px-3 py-1.5 rounded-lg inline-block mt-2">
                          {t(`members.${member.key}.bio`)}
                        </p>
                      </div>

                      {/* Social Icons - Always visible on mobile, hover on desktop */}
                      <div className="flex items-center gap-2 sm:gap-2.5 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
                        {member.socials.map((social, idx) => {
                          const socialKey = `${member.id}-${social.platform}`;
                          const isHovered = hoveredSocial === socialKey;
                          const styles = getSocialStyles(social.platform);

                          return (
                            <a
                              target="_blank"
                              key={idx}
                              href={social.url}
                              onMouseEnter={() => setHoveredSocial(socialKey)}
                              onMouseLeave={() => setHoveredSocial(null)}
                              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 text-white"
                              style={{
                                background: styles.defaultBg,
                                opacity: isHovered ? 1 : 0.95,
                              }}
                              aria-label={social.platform}
                            >
                              {social.icon}
                            </a>
                          );
                        })}
                      </div>
                    </div>

                    {/* Bottom Decoration */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-2 sm:h-3 rounded-b-2xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[var(--theme-color)] to-[var(--black-color)]" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .team-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        .team-swiper .swiper-pagination-bullet {
          background: var(--theme-color);
          opacity: 0.3;
          width: 8px;
          height: 8px;
        }
        .team-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 4px;
        }
        @media (min-width: 768px) {
          .team-swiper .swiper-pagination {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
