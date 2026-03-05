// components/Header/Header.jsx

"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

// الصفحات اللي مش عايز فيها Header
const HIDDEN_HEADER_ROUTES = [
  "/signup",
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
];

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = useTranslations("header");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const router = useRouter();
  const pathname = usePathname();

  // Check if header should be hidden
  const currentPath = pathname.replace(`/${locale}`, "") || "/";
  const shouldHideHeader = HIDDEN_HEADER_ROUTES.some(
    (route) => currentPath === route || currentPath.startsWith(`${route}/`)
  );

  // إذا كان الـ Header مخفي، ارجع null
  if (shouldHideHeader) {
    return null;
  }

  const isActive = (path) => {
    return currentPath === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const switchLanguage = (newLocale) => {
    const currentPath = pathname.replace(`/${locale}`, "");
    router.push(`/${newLocale}${currentPath}`);
  };

  // Right side navigation links
  const navLinksRight = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
  ];

  // Left side navigation links
  const navLinksLeft = [
    { href: "/blog", label: t("nav.blog") },
    { href: "/gallery", label: t("nav.gallery") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <>
      {/* ===== Mobile Menu Overlay ===== */}
      <div
        className={`
          fixed inset-0 bg-black/70 backdrop-blur-sm z-100001
          transition-all duration-300 lg:hidden
          ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
        `}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* ===== Mobile Menu Drawer ===== */}
      <div
        dir={isRTL ? "rtl" : "ltr"}
        className={`
          fixed top-0 h-full w-72 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] z-100001
          transform transition-transform duration-300 ease-out lg:hidden
          ${isRTL ? "right-0" : "left-0"}
          ${
            isMenuOpen
              ? "translate-x-0"
              : isRTL
                ? "translate-x-full"
                : "-translate-x-full"
          }
        `}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center
                       text-white/60 hover:text-[#DCB56D] transition-colors duration-300"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>

          {/* Mobile Logo */}
          <div className="flex justify-center mt-12 mb-10">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <img
                src="https://res.cloudinary.com/dhgp9dzdt/image/upload/v1772620899/logo_udnowq.png"
                alt="Set Al Sham"
                className="h-16! w-auto"
              />
            </Link>
          </div>

          {/* Decorative Line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#DCB56D]/50 to-transparent mb-8" />

          {/* Mobile Nav Links */}
          <nav className="flex flex-col gap-2 flex-1">
            {[...navLinksRight, ...navLinksLeft].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  py-3 px-4 text-lg font-medium rounded-lg
                  transition-all duration-300
                  ${
                    isActive(link.href)
                      ? "text-[#DCB56D]! bg-[#DCB56D]/10!"
                      : "text-white/80! hover:text-[#DCB56D]! hover:bg-white/5!"
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* ===== Main Header ===== */}
      <header
        dir={isRTL ? "rtl" : "ltr"}
        className={`
          fixed top-0 left-0 right-0 z-40
          transition-all duration-500 ease-out
          ${
            isSticky
              ? "bg-[#1a1a2e]/95 backdrop-blur-md shadow-2xl shadow-black/20 py-3"
              : "bg-transparent! py-2"
          }
        `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* ===== Right Navigation ===== */}
            <nav className="hidden lg:flex items-center gap-[32px]! xl:gap-[48px]! flex-1 justify-end">
              {navLinksRight.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative"
                >
                  <span
                    className={`
                      text-[20px]! font-bold transition-colors duration-300
                      ${
                        isActive(link.href)
                          ? "text-[#DCB56D]"
                          : "text-white/90 group-hover:text-[#DCB56D]"
                      }
                    `}
                  >
                    {link.label}
                  </span>
                  {/* Underline Indicator */}
                  <span
                    className={`
                      absolute -bottom-1 left-0 h-0.5 bg-[#DCB56D]
                      transition-all duration-300 ease-out
                      ${isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </Link>
              ))}
            </nav>

            {/* ===== Center Logo ===== */}
            <div className="flex-shrink-0 lg:px-12">
              <Link href="/" className="block group">
                <div className="flex flex-col items-center">
                  <img
                    src="https://res.cloudinary.com/dhgp9dzdt/image/upload/v1772620899/logo_udnowq.png"
                    alt="Set Al Sham"
                    className={`
                      transition-all duration-500 ease-out
                      group-hover:scale-105
                      ${isSticky ? "h-14! lg:h-16!" : "h-20! lg:h-[160px]!"}
                    `}
                  />
                </div>
              </Link>
            </div>

            {/* ===== Left Navigation ===== */}
            <nav className="hidden lg:flex items-center gap-[32px]! xl:gap-[48px]! flex-1 justify-start">
              {navLinksLeft.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative"
                >
                  <span
                    className={`
                      text-[20px]! font-bold transition-colors duration-300
                      ${
                        isActive(link.href)
                          ? "text-[#DCB56D]"
                          : "text-white/90 group-hover:text-[#DCB56D]"
                      }
                    `}
                  >
                    {link.label}
                  </span>
                  {/* Underline Indicator */}
                  <span
                    className={`
                      absolute -bottom-1 left-0 h-0.5 bg-[#DCB56D]
                      transition-all duration-300 ease-out
                      ${isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </Link>
              ))}
            </nav>

            {/* ===== Mobile Menu Button ===== */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden w-10 h-10 flex items-center justify-center
                         text-white/90 hover:text-[#DCB56D] transition-colors duration-300"
            >
              <i className="ri-menu-3-line text-2xl"></i>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
