// sections/Project/ProjectCategories.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowUpRight, ArrowUpLeft, ArrowRight, ArrowLeft } from "lucide-react";

const ProjectCategories = () => {
  const t = useTranslations("projects");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = [
    {
      key: "furniture",
      slug: "furniture-antique",
      icon: "ri-armchair-line",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1920",
      projectCount: 3,
    },
    {
      key: "fitout",
      slug: "fitout",
      icon: "ri-building-2-line",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920",
      projectCount: 2,
    },
    {
      key: "upgrade",
      slug: "upgrade",
      icon: "ri-refresh-line",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1920",
      projectCount: 2,
    },
    {
      key: "new",
      slug: "new-build",
      icon: "ri-add-circle-line",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1920",
      projectCount: 2,
    },
  ];

  if (!mounted) return null;

  return (
    <section
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white relative overflow-hidden"
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
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-16 lg:mb-20"
          data-aos="fade-up"
        >
          <div className="max-w-2xl">
            <span className="inline-block text-[var(--theme-color)] font-medium uppercase tracking-widest text-xs sm:text-sm mb-4 border border-[var(--theme-color)]/30 px-4 py-2 rounded-full">
              {t("categoriesSubtitle")}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 leading-tight">
              {t("categoriesTitle")}
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
            {t("categoriesDescription")}
          </p>
        </div>

        {/* Categories - Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* First Category - Large */}
          <Link
            href={`/project/${categories[0].slug}`}
            className="group relative block lg:col-span-7 h-[350px] sm:h-[400px] lg:h-[500px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="relative h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${categories[0].image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80" />

              {/* Content */}
              <div className="absolute inset-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                {/* Top */}
                <div className="flex justify-between items-start">
                  <span className="bg-[var(--theme-color)] text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full">
                    {categories[0].projectCount} {t("projectsCount")}
                  </span>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:bg-[var(--theme-color)] group-hover:border-[var(--theme-color)] group-hover:rotate-45 transition-all duration-500">
                    {isRTL ? (
                      <ArrowUpLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    ) : (
                      <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    )}
                  </div>
                </div>

                {/* Bottom */}
                <div>
                  {/* <div className="flex items-center gap-3 mb-3">
                    <span className="text-[var(--theme-color)] text-xs sm:text-sm font-medium uppercase tracking-wider">
                      {t("exploreProjects")}
                    </span>
                  </div> */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white mb-3 group-hover:text-[var(--theme-color)] transition-colors duration-300">
                    {t(`categories.${categories[0].key}.title`)}
                  </h3>
                  <p className="text-white text-sm sm:text-base leading-relaxed max-w-lg line-clamp-2 mb-0!">
                    {t(`categories.${categories[0].key}.description`)}
                  </p>
                </div>
              </div>

              {/* Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--theme-color)] rounded-2xl transition-colors duration-500 pointer-events-none" />
            </div>
          </Link>

          {/* Second Category - Medium */}
          <Link
            href={`/project/${categories[1].slug}`}
            className="group relative block lg:col-span-5 h-[350px] sm:h-[400px] lg:h-[500px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="relative h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${categories[1].image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80" />

              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full border border-white/30">
                    {categories[1].projectCount} {t("projectsCount")}
                  </span>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:bg-[var(--theme-color)] group-hover:border-[var(--theme-color)] group-hover:rotate-45 transition-all duration-500">
                    {isRTL ? (
                      <ArrowUpLeft className="w-5 h-5 text-white" />
                    ) : (
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-white mb-2 group-hover:text-[var(--theme-color)] transition-colors duration-300">
                    {t(`categories.${categories[1].key}.title`)}
                  </h3>
                  <p className="text-white text-sm leading-relaxed line-clamp-2 mb-0!">
                    {t(`categories.${categories[1].key}.description`)}
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--theme-color)] rounded-2xl transition-colors duration-500 pointer-events-none" />
            </div>
          </Link>

          {/* Third Category */}
          <Link
            href={`/project/${categories[2].slug}`}
            className="group relative block lg:col-span-5 h-[300px] sm:h-[350px]"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="relative h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${categories[2].image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80" />

              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full border border-white/30">
                    {categories[2].projectCount} {t("projectsCount")}
                  </span>
                  <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:bg-[var(--theme-color)] group-hover:border-[var(--theme-color)] group-hover:rotate-45 transition-all duration-500">
                    {isRTL ? (
                      <ArrowUpLeft className="w-5 h-5 text-white" />
                    ) : (
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-serif text-white mb-2 group-hover:text-[var(--theme-color)] transition-colors duration-300">
                    {t(`categories.${categories[2].key}.title`)}
                  </h3>
                  <p className="text-white text-sm leading-relaxed line-clamp-2 mb-0!">
                    {t(`categories.${categories[2].key}.description`)}
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--theme-color)] rounded-2xl transition-colors duration-500 pointer-events-none" />
            </div>
          </Link>

          {/* Fourth Category */}
          <Link
            href={`/project/${categories[3].slug}`}
            className="group relative block lg:col-span-7 h-[300px] sm:h-[350px]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="relative h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${categories[3].image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80" />

              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full border border-white/30">
                    {categories[3].projectCount} {t("projectsCount")}
                  </span>
                  <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:bg-[var(--theme-color)] group-hover:border-[var(--theme-color)] group-hover:rotate-45 transition-all duration-500">
                    {isRTL ? (
                      <ArrowUpLeft className="w-5 h-5 text-white" />
                    ) : (
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-white mb-2 group-hover:text-[var(--theme-color)] transition-colors duration-300">
                      {t(`categories.${categories[3].key}.title`)}
                    </h3>
                    <p className="text-white text-sm leading-relaxed line-clamp-2 mb-0! max-w-md mb-0!">
                      {t(`categories.${categories[3].key}.description`)}
                    </p>
                  </div>
                  <span className="hidden sm:flex items-center gap-2 text-white group-hover:text-[var(--theme-color)] text-sm font-medium whitespace-nowrap transition-colors duration-300">
                    {t("exploreProjects")}
                    {isRTL ? (
                      <ArrowLeft className="w-4 h-4" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--theme-color)] rounded-2xl transition-colors duration-500 pointer-events-none" />
            </div>
          </Link>
        </div>

        {/* Stats Section */}
        {/* <div
          className="mt-16 sm:mt-20 lg:mt-24"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: "45+", label: t("stats.projects") },
              { value: "7+", label: t("stats.years") },
              { value: "100%", label: t("stats.satisfaction") },
              { value: "300+", label: t("stats.clients") },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 sm:p-8 bg-slate-50 rounded-xl border border-slate-100 hover:border-[var(--theme-color)]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <span className="block text-3xl sm:text-4xl lg:text-5xl font-serif text-[var(--theme-color)] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </span>
                <span className="text-slate-600 text-xs sm:text-sm uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectCategories;
