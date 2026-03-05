// components/Header/Header.jsx

"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { User } from "lucide-react";

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

  const currentPath = pathname.replace(`/${locale}`, "") || "/";
  const shouldHideHeader = HIDDEN_HEADER_ROUTES.some(
    (route) => currentPath === route || currentPath.startsWith(`${route}/`)
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  if (shouldHideHeader) {
    return null;
  }

  const isActive = (path) => currentPath === path;

  const navLinksRight = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
  ];

  const navLinksLeft = [
    { href: "/", label: t("nav.blog") },
    { href: "/gallery", label: t("nav.gallery") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm lg:hidden"
          style={{ zIndex: 9998 }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        dir={isRTL ? "rtl" : "ltr"}
        className={`fixed top-0 h-full w-72 lg:hidden transition-transform duration-300 ease-out ${
          isRTL ? "right-0" : "left-0"
        } ${
          isMenuOpen
            ? "translate-x-0"
            : isRTL
              ? "translate-x-full"
              : "-translate-x-full"
        }`}
        style={{
          zIndex: 9999,
          background: "linear-gradient(to bottom, #1a1a2e, #0f0f1a)",
        }}
      >
        <div className="flex flex-col h-full p-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center text-white/60 hover:text-[#DCB56D] transition-colors duration-300"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>

          <div className="flex justify-center mt-12 mb-10">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <img
                src="https://res.cloudinary.com/dhgp9dzdt/image/upload/v1772620899/logo_udnowq.png"
                alt="Set Al Sham"
                style={{ height: "64px", width: "auto" }}
              />
            </Link>
          </div>

          <div
            className="w-full mb-8"
            style={{
              height: "1px",
              background:
                "linear-gradient(to right, transparent, rgba(220,181,109,0.5), transparent)",
            }}
          />

          <nav className="flex flex-col gap-2 flex-1">
            {[...navLinksRight, ...navLinksLeft].map((link, index) => (
              <Link
                key={`${link.href}-${index}`}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-3 px-4 text-lg font-medium rounded-lg transition-all duration-300"
                style={{
                  color: isActive(link.href)
                    ? "#DCB56D"
                    : "rgba(255,255,255,0.8)",
                  backgroundColor: isActive(link.href)
                    ? "rgba(220,181,109,0.1)"
                    : "transparent",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div
            className="mt-auto pt-6"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            <Link
              href="/login"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 font-bold rounded-full transition-all duration-300"
              style={{ backgroundColor: "#DCB56D", color: "#023048" }}
            >
              <User style={{ width: "20px", height: "20px" }} />
              <span>{t("nav.login") || "تسجيل الدخول"}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        dir={isRTL ? "rtl" : "ltr"}
        className="fixed top-0 left-0 right-0 transition-all duration-500 ease-out"
        style={{
          zIndex: 40,
          backgroundColor: isSticky ? "rgba(26,26,46,0.95)" : "transparent",
          backdropFilter: isSticky ? "blur(12px)" : "none",
          boxShadow: isSticky ? "0 25px 50px -12px rgba(0,0,0,0.2)" : "none",
          padding: isSticky ? "12px 0" : "8px 0",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Right Navigation */}
            <nav
              className="hidden lg:flex items-center flex-1 justify-end"
              style={{ gap: "48px" }}
            >
              {navLinksRight.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative"
                >
                  <span
                    className="font-bold transition-colors duration-300 group-hover:text-[#DCB56D]"
                    style={{
                      fontSize: "16px",
                      color: isActive(link.href)
                        ? "#DCB56D"
                        : "rgba(255,255,255,0.9)",
                    }}
                  >
                    {link.label}
                  </span>
                  <span
                    className="absolute left-0 bg-[#DCB56D] transition-all duration-300 ease-out group-hover:w-full"
                    style={{
                      bottom: "-4px",
                      height: "2px",
                      width: isActive(link.href) ? "100%" : "0%",
                    }}
                  />
                </Link>
              ))}
            </nav>

            {/* Center Logo */}
            <div className="flex-shrink-0 px-4 lg:px-12">
              <Link href="/" className="block group">
                <img
                  src="https://res.cloudinary.com/dhgp9dzdt/image/upload/v1772620899/logo_udnowq.png"
                  alt="Set Al Sham"
                  className="transition-all duration-500 ease-out group-hover:scale-105"
                  style={{
                    height: isSticky ? "56px" : "80px",
                  }}
                />
              </Link>
            </div>

            {/* Left Navigation + Login Button */}
            <div
              className="hidden lg:flex items-center flex-1 justify-start"
              style={{ gap: "48px" }}
            >
              <nav className="flex items-center" style={{ gap: "48px" }}>
                {navLinksLeft.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group relative"
                  >
                    <span
                      className="font-bold transition-colors duration-300 group-hover:text-[#DCB56D]"
                      style={{
                        fontSize: "16px",
                        color: isActive(link.href)
                          ? "#DCB56D"
                          : "rgba(255,255,255,0.9)",
                      }}
                    >
                      {link.label}
                    </span>
                    <span
                      className="absolute left-0 bg-[#DCB56D] transition-all duration-300 ease-out group-hover:w-full"
                      style={{
                        bottom: "-4px",
                        height: "2px",
                        width: isActive(link.href) ? "100%" : "0%",
                      }}
                    />
                  </Link>
                ))}
              </nav>

              {/* Login Button - Desktop */}
              <Link
                href="/login"
                className="group flex items-center justify-center rounded-full transition-all duration-300 ease-out"
                style={{
                  width: "36px",
                  height: "36px",
                  border: "2px solid #DCB56D",
                  backgroundColor: isSticky ? "#DCB56D" : "#023048",
                }}
              >
                <User
                  className="transition-colors duration-300"
                  style={{
                    width: "18px",
                    height: "18px",
                    color: isSticky ? "#023048" : "#DCB56D",
                  }}
                />
              </Link>
            </div>

            {/* Mobile: Login Icon + Menu Button */}
            <div className="flex lg:hidden items-center gap-3">
              <Link
                href="/login"
                className="flex items-center justify-center rounded-full transition-all duration-300 ease-out"
                style={{
                  width: "36px",
                  height: "36px",
                  border: "2px solid #DCB56D",
                  backgroundColor: isSticky ? "#DCB56D" : "#023048",
                }}
              >
                <User
                  style={{
                    width: "18px",
                    height: "18px",
                    color: isSticky ? "#023048" : "#DCB56D",
                  }}
                />
              </Link>

              <button
                onClick={() => setIsMenuOpen(true)}
                className="w-10 h-10 flex items-center justify-center transition-colors duration-300"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                <i className="ri-menu-3-line text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
