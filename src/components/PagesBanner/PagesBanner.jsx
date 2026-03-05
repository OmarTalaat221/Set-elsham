// components/PageBanner/PageBanner.jsx

"use client";
import { useState, useEffect, useRef } from "react";
import { detectMediaType, hexToRgba } from "../../utils/detectMediaType";

const alignClasses = {
  right: "items-end text-right",
  center: "items-center text-center",
  left: "items-start text-left",
};

const PageBanner = ({
  mediaSrc = "",
  gradientColor = "#023048",
  align = "right",
  overlayStrength = 60,
  parallax = false,
  showBottomFade = true,
  bottomFadeColor = "white",
  children,
  className = "",
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);
  const imgRef = useRef(null);

  // Detect media type
  const mediaType = detectMediaType(mediaSrc);
  const hasMedia = mediaSrc && mediaType !== "unknown";

  // Parallax scroll effect
  useEffect(() => {
    if (!parallax) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [parallax]);

  // Image load handler - Fixed version
  useEffect(() => {
    if (mediaType === "image" && mediaSrc) {
      const img = new Image();
      img.src = mediaSrc;

      img.onload = () => {
        console.log("✅ Image loaded via new Image()!");
        setIsLoaded(true);
      };

      img.onerror = () => {
        console.log("❌ Image failed to load, showing anyway");
        setIsLoaded(true); // Show anyway even if error
      };

      // If already cached
      if (img.complete) {
        console.log("✅ Image already cached!");
        setIsLoaded(true);
      }
    }
  }, [mediaType, mediaSrc]);

  // Video load handler
  useEffect(() => {
    if (mediaType === "video" && videoRef.current) {
      const video = videoRef.current;

      const handleLoaded = () => {
        console.log("✅ Video loaded!");
        setIsLoaded(true);
      };

      video.addEventListener("loadeddata", handleLoaded);
      video.addEventListener("canplay", handleLoaded);
      video.addEventListener("playing", handleLoaded);

      if (video.readyState >= 3) {
        setIsLoaded(true);
      }

      return () => {
        video.removeEventListener("loadeddata", handleLoaded);
        video.removeEventListener("canplay", handleLoaded);
        video.removeEventListener("playing", handleLoaded);
      };
    }
  }, [mediaType, mediaSrc]);

  // Reset on mediaSrc change
  useEffect(() => {
    setIsLoaded(false);
  }, [mediaSrc]);

  // Fallback: Force show after timeout
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isLoaded) {
        console.log("⏰ Timeout reached, forcing isLoaded = true");
        setIsLoaded(true);
      }
    }, 3000); // 3 seconds fallback

    return () => clearTimeout(timeout);
  }, [mediaSrc]);

  // Gradient styles
  const overlayGradient = `linear-gradient(180deg, 
    ${hexToRgba(gradientColor, overlayStrength / 100)} 0%, 
    ${hexToRgba(gradientColor, 0.35)} 81.77%, 
    ${hexToRgba(gradientColor, 0)} 100%)`;

  const solidGradient = `linear-gradient(180deg, 
    ${gradientColor} 0%, 
    ${hexToRgba(gradientColor, 0.7)} 50%, 
    ${hexToRgba(gradientColor, 0.35)} 81.77%, 
    ${hexToRgba(gradientColor, 0)} 100%)`;

  const parallaxTransform = parallax
    ? `translateY(${scrollY * 0.3}px)`
    : "none";

  return (
    <section
      className={`relative w-full h-screen overflow-hidden ${className}`}
    >
      {/* ===== Background Layer ===== */}
      <div className="absolute inset-0 w-full h-full">
        {/* Image Background */}
        {hasMedia && mediaType === "image" && (
          <img
            ref={imgRef}
            src={mediaSrc}
            alt=""
            onLoad={() => {
              console.log("✅ Image onLoad fired!");
              setIsLoaded(true);
            }}
            onError={() => {
              console.log("❌ Image onError fired!");
              setIsLoaded(true);
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 0.7s ease-in-out",
              transform: parallaxTransform,
            }}
          />
        )}

        {/* Video Background */}
        {hasMedia && mediaType === "video" && (
          <video
            ref={videoRef}
            src={mediaSrc}
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 0.7s ease-in-out",
              transform: parallaxTransform,
            }}
          />
        )}

        {/* Loading State / Fallback Background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: solidGradient,
            opacity: isLoaded ? 0 : 1,
            transition: "opacity 0.7s ease-in-out",
            zIndex: 1,
          }}
        />

        {/* Gradient Overlay */}
        {hasMedia && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: overlayGradient,
              zIndex: 10,
            }}
          />
        )}

        {/* Solid Gradient (no media) */}
        {!hasMedia && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: solidGradient,
            }}
          />
        )}
      </div>

      {/* ===== Content Layer ===== */}
      <div
        className={`
          relative z-20 w-full h-full
          flex flex-col justify-center
          ${alignClasses[align] || alignClasses.right}
          container mx-auto px-4 sm:px-6 lg:px-8
          pt-24 md:pt-28 lg:pt-32
          pb-16 md:pb-20 lg:pb-24
        `}
      >
        {children}
      </div>

      {/* ===== Bottom Fade ===== */}
      {showBottomFade && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "80px",
            background: `linear-gradient(to top, ${bottomFadeColor} 0%, transparent 100%)`,
            zIndex: 15,
            pointerEvents: "none",
          }}
        />
      )}

      {/* Debug Info - Remove in production
      {process.env.NODE_ENV === "development" && (
        <div className="absolute top-4 left-4 z-50 bg-black/70 text-white text-xs p-2 rounded">
          <p>isLoaded: {isLoaded ? "✅ true" : "❌ false"}</p>
          <p>mediaType: {mediaType}</p>
          <p>hasMedia: {hasMedia ? "true" : "false"}</p>
        </div>
      )} */}
    </section>
  );
};

export default PageBanner;
