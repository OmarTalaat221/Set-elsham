"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import "./style.css";
const FooterTwo = () => {
  const t = useTranslations("footer");
  const locale = useLocale();
  const isRTL = locale === "ar";

  // روابط مفيدة - العمود الأول
  const usefulLinks1 = [
    { key: "aboutUs", href: "/pages/innerpage/about" },
    { key: "products", href: "/pages/innerpage/project" },
    { key: "blog", href: "/pages/innerpage/blog" },
    { key: "careers", href: "/pages/innerpage/contact" },
  ];

  // روابط مفيدة - العمود الثاني
  const usefulLinks2 = [
    { key: "services", href: "/pages/innerpage/service" },
    // { key: "team", href: "/pages/innerpage/team" },
    { key: "testimonials", href: "/pages/innerpage/testimonials" },
    { key: "privacy", href: "/pages/innerpage/privacy" },
    { key: "terms", href: "/pages/innerpage/terms" },
  ];

  // روابط السوشيال ميديا
  const socialLinks = [
    { icon: "ri-facebook-fill", href: "https://facebook.com/matrixwood" },
    { icon: "ri-instagram-line", href: "https://instagram.com/matrixwood" },
    { icon: "ri-twitter-x-line", href: "https://twitter.com/matrixwood" },
    { icon: "ri-whatsapp-line", href: "https://wa.me/201234567890" },
  ];

  return (
    <div>
      <footer
        className="footer-wrapper footer-layout1 background-image"
        style={{
          backgroundImage: "url('/main-assets/img/bg/footer-bg1-1.png')",
        }}
      >
        <div className="container">
          {/* Footer Top - Logo & Subscribe */}
          <div className="footer-top-1">
            <div className="footer-logo">
              <Link href="/">
                <img
                  className="w-[200px] h-[55px]"
                  src="https://res.cloudinary.com/dkc5klynm/image/upload/v1770203475/4_keca0z.png"
                  alt="Matrix Wood Factory"
                />
              </Link>
            </div>
            <div className="subscribe-box">
              <p className="subscribe-box_text">{t("subscribe.text")}</p>
              <form className="newsletter-form">
                <input
                  className="form-control"
                  type="email"
                  placeholder={t("subscribe.placeholder")}
                  required
                />
                <button type="submit" className="btn style2">
                  {t("subscribe.button")}
                  <i
                    className={
                      isRTL ? "ri-arrow-left-up-line" : "ri-arrow-right-up-line"
                    }
                  ></i>
                </button>
              </form>
            </div>
          </div>

          {/* Widget Area */}
          <div className="widget-area">
            <div className="row justify-content-between">
              {/* About Company */}
              <div className="col-md-6 col-xl-3">
                <div className="widget widget-about footer-widget">
                  <h3 className="widget_title">{t("about.title")}</h3>
                  <p className="about-text">{t("about.description")}</p>
                  <h4 className="about-year">{t("about.since")}</h4>
                  <h5 className="about-subtitle">
                    {t("about.availableTitle")}
                  </h5>
                  <p className="about-text">
                    <span className="text-[var(--white-color)]">
                      {t("about.workDays")}:
                    </span>{" "}
                    {t("about.workHours")}
                  </p>
                </div>
              </div>

              {/* Useful Links */}
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">{t("links.title")}</h3>
                  <div className="menu-all-pages-container grid-style">
                    <ul className="menu">
                      {usefulLinks1.map((link, index) => (
                        <li key={index}>
                          <Link href={link.href}>{t(`links.${link.key}`)}</Link>
                        </li>
                      ))}
                    </ul>
                    {/* <ul className="menu">
                      {usefulLinks2.map((link, index) => (
                        <li key={index}>
                          <Link href={link.href}>{t(`links.${link.key}`)}</Link>
                        </li>
                      ))}
                    </ul> */}
                  </div>
                </div>
              </div>

              {/* Office Address */}
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget widget-contact">
                  <h3 className="widget_title">{t("address.title")}</h3>
                  <p className="contact-text">{t("address.location")}</p>
                  <h3 className="widget_title">{t("email.title")}</h3>
                  <p className="text-white footer-text">
                    {t("email.subtitle")}
                  </p>
                  <p className="footer-text">
                    <Link href="mailto:info@matrixwood.com">
                      info@matrixwood.com
                    </Link>
                  </p>
                </div>
              </div>

              {/* Phone & Social */}
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title">{t("phone.title")}</h3>
                  <p className="footer-text" style={{ direction: "ltr" }}>
                    <Link href="tel:+201234567890">+20 123 456 7890</Link>
                  </p>
                  <p className="footer-text" style={{ direction: "ltr" }}>
                    <Link href="tel:+201098765432">+20 109 876 5432</Link>
                  </p>
                  <h3 className="widget_title">{t("social.title")}</h3>
                  <div className="social-btn style2">
                    {socialLinks.map((social, index) => (
                      <Link
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className={social.icon}></i>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="container">
          <div className="copyright-wrap">
            <div className="row gy-3 justify-content-md-between justify-content-center">
              <div className="col-auto align-self-center">
                <p className="copyright-text text-center">
                  © {new Date().getFullYear()}{" "}
                  <Link href="/">{t("copyright.company")}</Link> |{" "}
                  {t("copyright.rights")}
                </p>
              </div>
              <div className="col-auto">
                <div className="footer-links">
                  <Link href="/pages/innerpage/terms">
                    {t("copyright.terms")}
                  </Link>
                  <Link href="/pages/innerpage/privacy">
                    {t("copyright.privacy")}
                  </Link>
                  <Link href="/pages/innerpage/contact">
                    {t("copyright.contact")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterTwo;
