"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSix = () => {
  const t = useTranslations("contact");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitMessage({ type: "", text: "" });

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitMessage({
        type: "success",
        text: t("form.success"),
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text: t("form.error"),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-area-2 space-bottom overflow-hidden">
      <div className="container">
        <div
          className="contact-wrap2 space overflow-hidden shape-mockup-wrap background-image"
          style={{
            backgroundImage: "url('/main-assets/img/bg/contact-bg3-1.png')",
          }}
          dir={isRTL ? "rtl" : "ltr"}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            className="section-animation-shape1-1 shape-mockup animation-infinite background-image"
            style={{
              backgroundImage:
                "url('/main-assets/img/shape/global-line-shape1.png')",
              top: "0px",
              left: "0px",
            }}
          ></div>

          <div
            className={`row gy-60 ${isRTL ? "flex-row-reverse" : ""} justify-content-lg-end justify-content-center`}
          >
            <div className="col-xl-7">
              <div
                className="contact-form-wrap"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="800"
              >
                {/* Title Area */}
                <div className="title-area">
                  <span
                    className="sub-title text-theme"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="600"
                  >
                    <img
                      src="/main-assets/img/icon/section-subtitle-icon.svg"
                      alt="img"
                    />
                    {t("form.subtitle")}
                  </span>
                  <h2
                    className="sec-title"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="600"
                  >
                    {t("form.title")}
                  </h2>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row gy-4">
                    {/* Name Field */}
                    <div
                      className="col-md-6"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="600"
                    >
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder={t("form.fields.name")}
                          value={formData.name}
                          onChange={handleChange}
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div
                      className="col-md-6"
                      data-aos="fade-up"
                      data-aos-delay="150"
                      data-aos-duration="600"
                    >
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder={t("form.fields.email")}
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>

                    {/* Phone Field */}
                    <div
                      className="col-md-6"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="600"
                    >
                      <div className="form-group">
                        <input
                          type="tel"
                          className="form-control"
                          name="phone"
                          id="phone"
                          placeholder={t("form.fields.phone")}
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>

                    {/* Service Select */}
                    <div
                      className="col-md-6"
                      data-aos="fade-up"
                      data-aos-delay="250"
                      data-aos-duration="600"
                    >
                      <div className="form-group">
                        <select
                          className="form-control"
                          name="service"
                          id="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          disabled={loading}
                        >
                          <option value="">
                            {t("form.fields.selectService")}
                          </option>
                          <option value="wood-manufacturing">
                            {t("form.services.woodManufacturing")}
                          </option>
                          <option value="doors-windows">
                            {t("form.services.aluminumGlass")}
                          </option>
                          <option value="furniture">
                            {t("form.services.furniture")}
                          </option>
                          <option value="decorations">
                            {t("form.services.decorations")}
                          </option>
                          <option value="wholesale">
                            {t("form.services.wholesale")}
                          </option>
                          <option value="custom-project">
                            {t("form.services.customProject")}
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div
                      className="col-12"
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="600"
                    >
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="3"
                          className="form-control"
                          placeholder={t("form.fields.message")}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          disabled={loading}
                        ></textarea>
                      </div>
                    </div>

                    {/* Success/Error Message */}
                    {submitMessage.text && (
                      <div
                        className="col-12"
                        data-aos="fade-up"
                        data-aos-duration="400"
                      >
                        <div
                          className={`alert ${
                            submitMessage.type === "success"
                              ? "alert-success"
                              : "alert-danger"
                          }`}
                          role="alert"
                        >
                          <i
                            className={`${
                              submitMessage.type === "success"
                                ? "ri-checkbox-circle-line"
                                : "ri-error-warning-line"
                            } me-2`}
                          ></i>
                          {submitMessage.text}
                        </div>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div
                      className="form-btn col-12"
                      data-aos="fade-up"
                      data-aos-delay="350"
                      data-aos-duration="600"
                    >
                      <button
                        type="submit"
                        className="btn w-100"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            {isRTL ? "جاري الإرسال..." : "Sending..."}
                          </>
                        ) : (
                          <>
                            {t("form.button")}{" "}
                            <i
                              className={`ri-arrow-${isRTL ? "left" : "right"}-up-line`}
                            ></i>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSix;
