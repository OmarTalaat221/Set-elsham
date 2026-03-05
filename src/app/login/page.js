// app/login/page.jsx

"use client";
import { useState } from "react";
import Link from "next/link";
import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
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

    if (!formData.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح";
    }

    if (!formData.password) {
      newErrors.password = "كلمة المرور مطلوبة";
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
      console.log("Login submitted:", formData);
      alert("تم تسجيل الدخول بنجاح!");
      setIsSubmitting(false);
    }, 2000);
  };

  const handleFacebookLogin = () => {
    console.log("Facebook login clicked");
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleXLogin = () => {
    console.log("X login clicked");
  };

  return (
    <>
      <div className="min-h-screen bg-white flex items-center justify-center py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            {/* ===== Right Side: Login Form ===== */}
            <div className="w-full order-2 lg:order-1">
              <div className="bg-[#FAF2EA] rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 p-5 sm:p-6 md:p-8 lg:p-10">
                {/* Mobile Logo - يظهر فقط في الموبايل */}
                <div className="flex lg:hidden justify-center mb-6">
                  <img
                    src="https://res.cloudinary.com/dhgp9dzdt/image/upload/v1772620899/logo_udnowq.png"
                    alt="Set Al Sham Logo"
                    className="h-16 sm:h-20 object-contain"
                  />
                </div>

                {/* Form Title */}
                <h2 className="text-xl sm:text-2xl font-bold text-start text-[#DCB56D] mb-6 sm:mb-8">
                  تسجيل الدخول
                </h2>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-5"
                >
                  {/* Email */}
                  <div>
                    <label className="block text-[#023048] font-semibold text-sm sm:text-base mb-1.5 sm:mb-2">
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
                      <span className="px-3 sm:px-4 text-[#023048]/40">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#DADADA]" />
                      </span>
                      <div className="w-px h-12 sm:h-14 bg-[#DADADA]" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        dir="ltr"
                        placeholder="example@email.com"
                        className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-transparent focus:outline-none text-left text-sm sm:text-base placeholder:text-[#023048]/40"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-[#023048] font-semibold text-sm sm:text-base mb-1.5 sm:mb-2">
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
                      <span className="px-3 sm:px-4 text-[#023048]/40">
                        <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-[#DADADA]" />
                      </span>
                      <div className="w-px h-12 sm:h-14 bg-[#DADADA]" />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-transparent focus:outline-none text-sm sm:text-base placeholder:text-[#023048]/40"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="px-3 sm:px-4 text-[#023048]/50 hover:text-[#023048] transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4 sm:w-5 sm:h-5 text-[#DADADA]" />
                        ) : (
                          <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-[#DADADA]" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  {/* Remember Me */}
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="rememberMe"
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleChange}
                          className="peer sr-only"
                        />
                        <div
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              rememberMe: !prev.rememberMe,
                            }))
                          }
                          className={`
                            w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 cursor-pointer transition-all duration-200
                            flex items-center justify-center
                            ${
                              formData.rememberMe
                                ? "bg-[#DCB56D] border-[#DCB56D]"
                                : "bg-white border-[#023048]/30 hover:border-[#DCB56D]"
                            }
                          `}
                        >
                          {formData.rememberMe && (
                            <svg
                              className="w-3 h-3 sm:w-4 sm:h-4 text-white"
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
                        htmlFor="rememberMe"
                        className="text-[#023048]/80 text-xs sm:text-sm cursor-pointer select-none"
                      >
                        تذكرني
                      </label>
                    </div>
                  </div>

                  {/* Don't have account */}
                  <div className="flex justify-end items-center">
                    <p className="text-center text-[#023048]/70 text-xs sm:text-sm">
                      ليس لديك حساب؟{" "}
                      <Link
                        href="/signup"
                        className="text-[#0073D8] hover:underline font-bold"
                      >
                        إنشاء حساب جديد
                      </Link>
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      w-full py-3 sm:py-4 px-6 rounded-lg font-bold text-base sm:text-lg text-white
                      transition-all duration-300
                      ${
                        isSubmitting
                          ? "bg-[#DCB56D]/50 cursor-not-allowed"
                          : "bg-[#DCB56D] hover:bg-[#c9a227] hover:shadow-lg hover:scale-[1.02]"
                      }
                    `}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                        >
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
                        جاري تسجيل الدخول...
                      </span>
                    ) : (
                      "تسجيل الدخول"
                    )}
                  </button>

                  {/* ===== Social Login Buttons ===== */}
                  <div className="flex flex-col sm:flex-row items-stretch gap-2 mt-4 sm:mt-6">
                    {/* X (Twitter) Button */}
                    <button
                      type="button"
                      onClick={handleXLogin}
                      className="flex flex-1 items-center justify-center gap-2 py-2.5 sm:py-3 px-3 bg-black text-white font-medium rounded-lg transition-all duration-300 hover:bg-[#1a1a1a] hover:shadow-lg"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      <span className="font-montserrat text-xs sm:text-sm whitespace-nowrap">
                        Sign in with X
                      </span>
                    </button>

                    {/* Google Button */}
                    <button
                      type="button"
                      onClick={handleGoogleLogin}
                      className="flex flex-1 items-center justify-center gap-2 py-2.5 sm:py-3 px-3 bg-white border border-[#023048]/20 rounded-lg transition-all duration-300 hover:border-[#4285F4] hover:shadow-lg"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      <span className="text-[#023048]/70 text-xs sm:text-sm font-montserrat whitespace-nowrap truncate max-w-[150px] sm:max-w-none">
                        Sign in with Google
                      </span>
                    </button>

                    {/* Facebook Button */}
                    <button
                      type="button"
                      onClick={handleFacebookLogin}
                      className="flex flex-1 items-center justify-center gap-2 py-2.5 sm:py-3 px-3 bg-[#1877F2] text-white font-medium rounded-lg transition-all duration-300 hover:bg-[#166FE5] hover:shadow-lg"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      <span className="font-montserrat text-xs sm:text-sm whitespace-nowrap">
                        Sign in with Facebook
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* ===== Left Side: Welcome & Logo (Desktop Only) ===== */}
            <div className="hidden lg:flex flex-col items-center justify-center text-center space-y-8 order-1 lg:order-2">
              <div className="relative mb-8">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dhgp9dzdt/image/upload/v1772620899/logo_udnowq.png"
                    alt="Set Al Sham Logo"
                    className="object-contain w-[350px] xl:w-[450px] h-[120px] xl:h-[150px]"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#DCB56D] font-montserrat mb-8 xl:mb-10">
                  Welcome Back!
                </h1>
                <p className="text-gray-500 text-base xl:text-lg font-montserrat">
                  Sign in to continue to your account
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterTwo />
    </>
  );
};

export default LoginPage;
