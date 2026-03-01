"use client";
import { useState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Images object - can be moved to a separate file or fetched from CMS
const memberImages = {
  ceo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
  marketing_quality: {
    managers: {
      manager1:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      manager2:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    staff: {
      staff1:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      staff2:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
  },
  hr: {
    managers: {
      manager1:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    },
    staff: {
      staff1:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      staff2:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      staff3:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    },
  },
  engineers: {
    managers: {
      manager1:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      manager2:
        "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop",
      manager3:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    staff: {
      staff1:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      staff2:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop",
      staff3:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop",
      staff4:
        "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&h=400&fit=crop",
      staff5:
        "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=400&h=400&fit=crop",
      staff6:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      staff7:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
  },
};

const departmentKeys = ["marketing_quality", "hr", "engineers"];

const MemberCard = ({ member, size = "normal", onOpenModal, showLine }) => {
  const sizeClasses = {
    large: "w-28 h-28 md:w-36 md:h-36",
    normal: "w-20 h-20 md:w-28 md:h-28",
    small: "w-16 h-16 md:w-22 md:h-22",
  };

  const textSizes = {
    large: "text-sm! md:text-base!",
    normal: "text-xs! md:text-sm!",
    small: "text-[10px]! md:text-xs!",
  };

  return (
    <div className="flex flex-col items-center">
      {showLine && (
        <div className="w-px h-4 md:h-5 bg-[var(--theme-color)]/40"></div>
      )}
      <div onClick={() => onOpenModal(member)} className="group cursor-pointer">
        <div
          className={`${sizeClasses[size]} relative rounded-full overflow-hidden 
          border-2 md:border-3 border-[var(--theme-color)] p-0.5 md:p-1 bg-white
          shadow-lg group-hover:shadow-2xl group-hover:border-[#2C2C2C] 
          transition-all duration-300 group-hover:scale-110 mx-auto`}
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover rounded-full"
          />
          <div className="absolute inset-0 rounded-full bg-[#2C2C2C]/0 group-hover:bg-[#2C2C2C]/40 transition-all duration-300 flex items-center justify-center">
            <i className="ri-add-line text-white text-xl md:text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
          </div>
        </div>
        <div className="text-center mt-2 w-20 md:w-24">
          <h4
            className={`font-bold text-[#2C2C2C] ${textSizes[size]} leading-tight line-clamp-1`}
          >
            {member.name}
          </h4>
          <p
            className={`text-[var(--theme-color)] w-fit m-auto ${textSizes[size]} mt-0.5 line-clamp-1`}
          >
            {member.position}
          </p>
        </div>
      </div>
    </div>
  );
};

const MemberModal = ({ member, isOpen, onClose, t }) => {
  if (!isOpen || !member) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#2C2C2C]/90 backdrop-blur-md"></div>
      <div
        className="relative bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl"
        style={{ animation: "modalIn 0.3s ease-out" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[var(--theme-color)]
            flex items-center justify-center text-white hover:bg-white hover:text-[#2C2C2C] transition-all"
        >
          <i className="ri-close-line text-xl"></i>
        </button>

        <div className="relative h-72">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full! object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C] via-[#2C2C2C]/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white">{member.name}</h3>
            <p className="text-white font-medium text-lg mt-1 w-fit">
              {member.position}
            </p>
          </div>
        </div>

        <div className="p-6">
          <p className="text-gray-600 leading-relaxed">{member.bio}</p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <a
              href={`tel:${member.phone}`}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[var(--theme-color)] text-white hover:opacity-90 transition-all"
            >
              <i className="ri-phone-fill text-lg"></i>
              <span className="font-medium">{t("callNow")}</span>
            </a>
            <a
              href={`mailto:${member.email}`}
              className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-[var(--theme-color)] text-[var(--theme-color)] hover:bg-[var(--theme-color)] hover:text-white transition-all"
            >
              <i className="ri-mail-fill text-lg"></i>
              <span className="font-medium">{t("email")}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConnectorLine = () => (
  <div className="flex justify-center">
    <div className="w-px h-5 md:h-6 bg-gradient-to-b from-[var(--theme-color)] to-[var(--theme-color)]/20"></div>
  </div>
);

const LevelBadge = ({ title, isMain = false }) => (
  <span
    className={`
    text-[10px] md:text-xs px-3 md:px-4 py-1 md:py-1.5 rounded-full font-semibold inline-block
    ${
      isMain
        ? "bg-[var(--theme-color)] text-white"
        : "bg-[var(--theme-color)]/10 text-[var(--theme-color)] border border-[var(--theme-color)]/30"
    }
  `}
  >
    {title}
  </span>
);

const MembersRow = ({ members, size, onOpenModal, showLine }) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const containerRef = useRef(null);

  useEffect(() => {
    const calculateVisible = () => {
      if (containerRef.current) {
        const actualWidth = containerRef.current.offsetWidth;

        const cardWidths = {
          large: 140,
          normal: 110,
          small: 90,
        };

        const cardWidth = cardWidths[size] || 90;
        const gap = 16;

        const calculated = Math.floor((actualWidth + gap) / (cardWidth + gap));
        setVisibleCount(Math.max(2, Math.min(calculated, 10)));
      }
    };

    calculateVisible();

    const resizeObserver = new ResizeObserver(calculateVisible);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener("resize", calculateVisible);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", calculateVisible);
    };
  }, [size, members.length]);

  const needsSwiper = members.length > visibleCount;

  if (!needsSwiper) {
    return (
      <div ref={containerRef} className="w-full">
        <div className="flex justify-center items-start gap-4 md:gap-6 lg:gap-8">
          {members.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
              size={size}
              onOpenModal={onOpenModal}
              showLine={showLine && members.length > 1}
            />
          ))}
        </div>
      </div>
    );
  }

  const slidesPerView = Math.min(visibleCount, members.length - 1);
  const needsDuplication = members.length < slidesPerView * 2;
  const displayMembers = needsDuplication ? [...members, ...members] : members;

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView={slidesPerView}
        loop={true}
        loopAdditionalSlides={slidesPerView}
        speed={500}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: Math.min(2, members.length),
            spaceBetween: 12,
          },
          480: {
            slidesPerView: Math.min(3, members.length),
            spaceBetween: 14,
          },
          768: {
            slidesPerView: Math.min(4, members.length),
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: Math.min(slidesPerView, members.length),
            spaceBetween: 16,
          },
        }}
        className="!py-2"
      >
        {displayMembers.map((member, index) => (
          <SwiperSlide
            key={`${member.id}-${index}`}
            className="!flex justify-center"
          >
            <MemberCard
              member={member}
              size={size}
              onOpenModal={onOpenModal}
              showLine={showLine}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const OrganizationalPyramid = () => {
  const t = useTranslations("home.organizationalPyramid");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("marketing_quality");

  // Build CEO data from translations
  const ceo = {
    id: "ceo",
    name: t("ceo.name"),
    position: t("ceo.position"),
    bio: t("ceo.bio"),
    phone: t("ceo.phone"),
    email: t("ceo.email"),
    image: memberImages.ceo,
  };

  // Build departments data from translations
  const departments = departmentKeys.reduce((acc, deptKey) => {
    const deptTranslations = t.raw(`departmentsList.${deptKey}`);
    const deptImages = memberImages[deptKey];

    // Build managers array
    const managersObj = deptTranslations.managers || {};
    const managers = Object.keys(managersObj).map((key, index) => ({
      id: `${deptKey}-manager-${index}`,
      name: managersObj[key].name,
      position: managersObj[key].position,
      bio: managersObj[key].bio,
      phone: managersObj[key].phone,
      email: managersObj[key].email,
      image: deptImages?.managers?.[key] || memberImages.ceo,
    }));

    // Build staff array
    const staffObj = deptTranslations.staff || {};
    const staff = Object.keys(staffObj).map((key, index) => ({
      id: `${deptKey}-staff-${index}`,
      name: staffObj[key].name,
      position: staffObj[key].position,
      bio: staffObj[key].bio,
      phone: staffObj[key].phone,
      email: staffObj[key].email,
      image: deptImages?.staff?.[key] || memberImages.ceo,
    }));

    acc[deptKey] = {
      id: deptKey,
      name: deptTranslations.name,
      icon: deptTranslations.icon,
      managers,
      staff,
    };

    return acc;
  }, {});

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
    document.body.style.overflow = "auto";
  };

  const activeDept = departments[activeTab];

  // Calculate total team count
  const totalTeamCount = Object.values(departments).reduce(
    (acc, d) => acc + d.managers.length + d.staff.length,
    1 // +1 for CEO
  );

  return (
    <>
      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(${isRTL ? "-20px" : "20px"}); }
          to { opacity: 1; transform: translateX(0); }
        }
        .fade-in {
          animation: fadeIn 0.4s ease-out;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div
        className="py-16 md:py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C19A5B' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundColor: "#fafafa",
        }}
      >
        <div className="container relative z-10">
          {/* Title */}
          <div className="text-center mb-10! md:mb-12!" data-aos="fade-up">
            <span className="sub-title text-lg md:text-xl text-[var(--theme-color)]">
              {t("subtitle")}
              <i
                className={
                  isRTL ? "ri-arrow-left-down-line" : "ri-arrow-right-down-line"
                }
              ></i>
            </span>
            <h2 className="sec-title mt-2">{t("title")}</h2>
          </div>

          {/* Main Layout */}
          <div
            className={`flex flex-col lg:flex-row gap-6 lg:gap-8 ${
              isRTL ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Sidebar */}
            <div
              className={`lg:w-64 xl:w-72 shrink-0 ${
                isRTL ? "order-1" : "order-2"
              }`}
              data-aos="fade-up"
            >
              {/* CEO Card */}
              <div
                onClick={() => openModal(ceo)}
                className="mb-4 md:mb-6 p-3 md:p-4 rounded-xl md:rounded-2xl bg-[var(--theme-color)]/5 border border-[var(--theme-color)]/20 cursor-pointer hover:bg-[var(--theme-color)]/10 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-[var(--theme-color)] p-0.5 bg-white group-hover:scale-105 transition-transform">
                    <img
                      src={ceo.image}
                      alt={ceo.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] text-[var(--theme-color)] font-semibold uppercase tracking-wider">
                      {t("ceo.title")}
                    </span>
                    <h4 className="font-bold text-[#2C2C2C] text-sm! truncate">
                      {ceo.name}
                    </h4>
                  </div>
                  <i className="ri-add-circle-line text-[var(--theme-color)] text-xl opacity-0 group-hover:opacity-100 transition-opacity"></i>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
                <span className="hidden lg:block text-xs text-gray-500 font-medium px-2 mb-1">
                  {t("departments")}
                </span>
                {departmentKeys.map((deptKey) => {
                  const dept = departments[deptKey];
                  return (
                    <button
                      key={dept.id}
                      onClick={() => setActiveTab(dept.id)}
                      className={`
                        flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2.5 lg:py-3.5 rounded-xl text-xs lg:text-sm font-medium
                        transition-all duration-300 whitespace-nowrap flex-shrink-0 lg:flex-shrink lg:w-full text-start
                        ${
                          activeTab === dept.id
                            ? "bg-[var(--theme-color)] text-white shadow-lg shadow-[var(--theme-color)]/30"
                            : "bg-white text-[#2C2C2C] hover:bg-[var(--theme-color)]/10 border border-gray-100"
                        }
                      `}
                    >
                      <i className={`${dept.icon} text-lg lg:text-xl`}></i>
                      <span className="flex-1">{dept.name}</span>
                      <span
                        className={`text-[10px] lg:text-xs px-1.5 lg:px-2 py-0.5 rounded-full ${
                          activeTab === dept.id ? "bg-white/20" : "bg-gray-100"
                        }`}
                      >
                        {dept.managers.length + dept.staff.length}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Stats */}
              <div className="hidden lg:block mt-6 p-4 rounded-2xl bg-white border border-gray-100">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <span className="text-2xl font-bold text-[var(--theme-color)]">
                      {totalTeamCount}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">
                      {t("totalTeam")}
                    </p>
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-[var(--theme-color)]">
                      {departmentKeys.length}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">
                      {t("departmentsCount")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={`flex-1 min-w-0 ${isRTL ? "order-2" : "order-1"}`}>
              <div key={activeTab} className="fade-in">
                {/* Pyramid */}
                <div className="space-y-1 md:space-y-2">
                  {/* Level 1: Managers */}
                  <div className="text-center">
                    <LevelBadge
                      title={
                        activeDept.managers.length > 1
                          ? t("managers")
                          : t("manager")
                      }
                      isMain={true}
                    />

                    <div className="mt-3 md:mt-4">
                      <MembersRow
                        members={activeDept.managers}
                        size="normal"
                        onOpenModal={openModal}
                        showLine={true}
                      />
                    </div>
                  </div>

                  <ConnectorLine />

                  {/* Level 2: Staff */}
                  <div className="text-center">
                    <LevelBadge title={t("staff")} />

                    <div className="mt-3 md:mt-4">
                      <MembersRow
                        members={activeDept.staff}
                        size="small"
                        onOpenModal={openModal}
                        showLine={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MemberModal
          member={selectedMember}
          isOpen={isModalOpen}
          onClose={closeModal}
          t={t}
        />
      </div>
    </>
  );
};

export default OrganizationalPyramid;
