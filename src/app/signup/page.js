// app/signup/page.jsx

"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, User, Mail, Phone, Lock } from "lucide-react";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+963",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToPrivacy: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "الاسم الكامل مطلوب";
    }

    if (!formData.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "رقم الهاتف مطلوب";
    }

    if (!formData.password) {
      newErrors.password = "كلمة المرور مطلوبة";
    } else if (formData.password.length < 8) {
      newErrors.password = "كلمة المرور يجب أن تكون 8 أحرف على الأقل";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "كلمة المرور غير متطابقة";
    }

    if (!formData.agreeToPrivacy) {
      newErrors.agreeToPrivacy = "يجب الموافقة على سياسة الخصوصية";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form submitted:", formData);
      alert("تم التسجيل بنجاح!");
      setIsSubmitting(false);
    }, 2000);
  };

  const countryCodes = [
    { code: "+963", country: "سوريا", flag: "🇸🇾" },
    { code: "+49", country: "ألمانيا", flag: "🇩🇪" },
    { code: "+971", country: "الإمارات", flag: "🇦🇪" },
    { code: "+966", country: "السعودية", flag: "🇸🇦" },
    { code: "+962", country: "الأردن", flag: "🇯🇴" },
    { code: "+961", country: "لبنان", flag: "🇱🇧" },
    { code: "+20", country: "مصر", flag: "🇪🇬" },
    { code: "+90", country: "تركيا", flag: "🇹🇷" },
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ===== Right Side: Sign Up Form ===== */}
          <div className="w-full order-2 lg:order-1">
            <div className="bg-[#FAF2EA] rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
              {/* Form Title */}
              <h2 className="text-2xl font-bold text-start text-[#DCB56D] mb-8">
                تسجيل حساب جديد
              </h2>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-[#023048] font-semibold text-base mb-2">
                    الاسم الكامل
                    <span className="text-red-500 mr-1">*</span>
                  </label>
                  <div
                    className={`
                      flex items-center bg-white border rounded-lg overflow-hidden
                      focus-within:border-[#DCB56D] transition-colors
                      ${errors.fullName ? "border-red-500" : "border-[#023048]/10"}
                    `}
                  >
                    <span className="px-4 text-[#023048]/40">
                      <User className="w-5 h-5 text-[#DADADA]" />
                    </span>
                    <div className="w-px h-14 bg-[#DADADA]" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="أدخل اسمك الكامل"
                      className="flex-1 px-4 py-3 bg-transparent focus:outline-none placeholder:text-[#023048]/40"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[#023048] font-semibold text-base mb-2">
                    البريد الإلكتروني
                    <span className="text-red-500 mr-1">*</span>
                  </label>
                  <div
                    className={`
                      flex items-center bg-white border rounded-lg overflow-hidden
                      focus-within:border-[#DCB56D] transition-colors
                      ${errors.email ? "border-red-500" : "border-[#023048]/10"}
                    `}
                  >
                    <span className="px-4 text-[#023048]/40">
                      <Mail className="w-5 h-5 text-[#DADADA]" />
                    </span>
                    <div className="w-px h-14 bg-[#DADADA]" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      dir="ltr"
                      placeholder="example@email.com"
                      className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-left placeholder:text-[#023048]/40"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone - Single Input Style */}
                <div>
                  <label className="block text-[#023048] font-semibold text-base mb-2">
                    رقم الهاتف
                    <span className="text-red-500 mr-1">*</span>
                  </label>
                  <div
                    className={`
                      flex items-center bg-white border rounded-lg overflow-hidden
                      focus-within:border-[#DCB56D] transition-colors
                      ${errors.phone ? "border-red-500" : "border-[#023048]/10"}
                    `}
                  >
                    {/* Icon + Divider */}
                    <span className="px-4 text-[#023048]/40">
                      <Phone className="w-5 h-5 text-[#DADADA]" />
                    </span>
                    <div className="w-px h-14 bg-[#DADADA]" />

                    {/* Phone Input */}
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      dir="ltr"
                      placeholder="123 456 789"
                      className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-left placeholder:text-[#023048]/40"
                    />

                    {/* Divider + Country Code */}
                    <div className="w-px h-14 bg-[#DADADA]" />
                    <div className="relative">
                      <select
                        dir="ltr"
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="appearance-none pl-8 pr-4 py-3 bg-transparent focus:outline-none text-[#023048] cursor-pointer font-medium"
                      >
                        {countryCodes.map((country) => (
                          <option
                            dir="ltr"
                            key={country.code}
                            value={country.code}
                          >
                            {country.code}
                          </option>
                        ))}
                      </select>
                      <span className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-[#023048]/40"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label className="block text-[#023048] font-semibold text-base mb-2">
                    كلمة المرور
                    <span className="text-red-500 mr-1">*</span>
                  </label>
                  <div
                    className={`
                      flex items-center bg-white border rounded-lg overflow-hidden
                      focus-within:border-[#DCB56D] transition-colors
                      ${errors.password ? "border-red-500" : "border-[#023048]/10"}
                    `}
                  >
                    <span className="px-4 text-[#023048]/40">
                      <Lock className="w-5 h-5 text-[#DADADA]" />
                    </span>
                    <div className="w-px h-14 bg-[#DADADA]" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="flex-1 px-4 py-3 bg-transparent focus:outline-none placeholder:text-[#023048]/40"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="px-4 text-[#023048]/50 hover:text-[#023048] transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5 text-[#DADADA]" />
                      ) : (
                        <Eye className="w-5 h-5 text-[#DADADA]" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-[#023048] font-semibold text-base mb-2">
                    تأكيد كلمة المرور
                    <span className="text-red-500 mr-1">*</span>
                  </label>
                  <div
                    className={`
                      flex items-center bg-white border rounded-lg overflow-hidden
                      focus-within:border-[#DCB56D] transition-colors
                      ${errors.confirmPassword ? "border-red-500" : "border-[#023048]/10"}
                    `}
                  >
                    <span className="px-4 text-[#023048]/40">
                      <Lock className="w-5 h-5 text-[#DADADA]" />
                    </span>
                    <div className="w-px h-14 bg-[#DADADA]" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="flex-1 px-4 py-3 bg-transparent focus:outline-none placeholder:text-[#023048]/40"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="px-4 text-[#023048]/50 hover:text-[#023048] transition-colors"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5 text-[#DADADA]" />
                      ) : (
                        <Eye className="w-5 h-5 text-[#DADADA]" />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                {/* Privacy Policy Checkbox */}
                <div>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="agreeToPrivacy"
                        name="agreeToPrivacy"
                        checked={formData.agreeToPrivacy}
                        onChange={handleChange}
                        className="peer sr-only"
                      />
                      <div
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            agreeToPrivacy: !prev.agreeToPrivacy,
                          }))
                        }
                        className={`
                          w-6 h-6 rounded-full border-2 cursor-pointer transition-all duration-200
                          flex items-center justify-center
                          ${
                            formData.agreeToPrivacy
                              ? "bg-[#DCB56D] border-[#DCB56D]"
                              : errors.agreeToPrivacy
                                ? "bg-white border-red-500"
                                : "bg-white border-[#023048]/30 hover:border-[#DCB56D]"
                          }
                        `}
                      >
                        {formData.agreeToPrivacy && (
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <label
                      htmlFor="agreeToPrivacy"
                      className="text-[#023048]/80 text-sm cursor-pointer select-none"
                    >
                      موافقة على{" "}
                      <Link
                        href="/privacy-policy"
                        className="hover:underline! font-semibold"
                      >
                        سياسة الخصوصية وحماية البيانات (GDPR)
                      </Link>
                      <Link
                        href="/privacy-policy"
                        className="text-[#0073D8]! hover:underline! mx-2 font-semibold"
                      >
                        معرفة المزيد
                      </Link>
                    </label>
                  </div>
                  {errors.agreeToPrivacy && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.agreeToPrivacy}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    w-full py-4 px-6 rounded-lg font-bold text-lg text-white
                    transition-all duration-300 mt-6
                    ${
                      isSubmitting
                        ? "bg-[#DCB56D]/50 cursor-not-allowed"
                        : "bg-[#DCB56D] hover:bg-[#c9a227] hover:shadow-lg hover:scale-[1.02]"
                    }
                  `}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      جاري التسجيل...
                    </span>
                  ) : (
                    "أكمل الطلب"
                  )}
                </button>

                {/* Already have account */}
                <p className="text-center text-[#023048]/70 text-sm">
                  لديك حساب بالفعل؟{" "}
                  <Link
                    href="/login"
                    className="text-[#DCB56D] hover:underline! font-bold"
                  >
                    تسجيل الدخول
                  </Link>
                </p>
              </form>
            </div>
          </div>

          {/* ===== Left Side: Welcome & Logo ===== */}
          <div className="hidden lg:flex flex-col items-center justify-center text-center space-y-8 order-1 lg:order-2">
            <div className="relative mb-8">
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dhgp9dzdt/image/upload/v1772620899/logo_udnowq.png"
                  alt="Set Al Sham Logo"
                  className="object-contain w-[450px] h-[150px]"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-[#DCB56D] font-montserrat! mb-[40px]">
                Welcome!
              </h1>
              <p className="text-gray-500 text-lg font-montserrat!">
                For The First time, You need to sign in
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
