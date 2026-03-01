"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowUpRight, ArrowUpLeft } from "lucide-react";

const Categories = () => {
  const t = useTranslations("home.categories");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = [
    {
      key: "furniture",
      icon: "ri-armchair-line",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1920",
      link: "/services/furniture-antique",
    },
    {
      key: "fitout",
      icon: "ri-building-2-line",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920",
      link: "/services/fitout",
    },
    {
      key: "upgrade",
      icon: "ri-refresh-line",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1920",
      link: "/services/upgrade",
    },
    {
      key: "new",
      icon: "ri-add-circle-line",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1920",
      link: "/services/new",
    },
  ];

  if (!mounted) return null;

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-28 bg-slate-50 relative overflow-hidden"
      id="categories-sec"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="w-6 sm:w-8 md:w-12 h-[1px] sm:h-[2px] bg-[var(--theme-color)]"></span>
            <span className="text-[var(--theme-color)] font-bold uppercase tracking-widest text-[10px] sm:text-xs md:text-sm">
              {t("subtitle")}
            </span>
            <span className="w-6 sm:w-8 md:w-12 h-[1px] sm:h-[2px] bg-[var(--theme-color)]"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-slate-900 leading-tight mb-3 sm:mb-4 md:mb-6">
            {t("title")}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
            {t("description")}
          </p>
        </div>

        {/* Categories Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {categories.map((category, index) => (
            <Link
              href={category.link}
              key={category.key}
              className="group relative block"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              <div className="relative h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[480px] rounded-sm overflow-hidden bg-slate-900">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-end">
                  {/* Number */}
                  <span
                    className={`absolute top-4 sm:top-5 md:top-6 ${isRTL ? "right-4 sm:right-5 md:right-6" : "left-4 sm:left-5 md:left-6"} text-white/20 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  {/* <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 border border-white/20 group-hover:bg-[var(--theme-color)] group-hover:border-[var(--theme-color)] transition-all duration-500">
                    <i
                      className={`${category.icon} text-lg sm:text-xl md:text-2xl text-white`}
                    ></i>
                  </div> */}

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-white mb-1.5 sm:mb-2 md:mb-3 group-hover:text-[var(--theme-color)] transition-colors duration-300">
                    {t(`${category.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 md:mb-5 lg:mb-6 line-clamp-2">
                    {t(`${category.key}.description`)}
                  </p>

                  {/* Link */}
                  <div className="flex items-center gap-1.5 sm:gap-2 text-white group-hover:text-[var(--theme-color)] transition-colors duration-300">
                    <span className="text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-wider">
                      {t("learnMore")}
                    </span>
                    {isRTL ? (
                      <ArrowUpLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 transform group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    ) : (
                      <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    )}
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--theme-color)] rounded-sm transition-colors duration-500 pointer-events-none" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-16"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link href="/project" className="btn btn-sm sm:btn-md md:btn-lg">
            <span className="btn-text text-xs sm:text-sm md:text-base">
              {t("viewAll")}
            </span>
            <span className="btn-icon">
              <i
                className={`${isRTL ? "ri-arrow-left-up-line" : "ri-arrow-right-up-line"} text-sm sm:text-base md:text-lg`}
              ></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
