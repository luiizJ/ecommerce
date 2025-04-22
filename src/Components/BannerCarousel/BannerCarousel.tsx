"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import mobile1 from "../../../public/assets/images/mobilepromo1.png";
import mobile2 from "../../../public/assets/images/mobilepromo2.png";
import mobile3 from "../../../public/assets/images/mobilepromo3.png";

import desktop1 from "../../../public/assets/images/promocao1.png";
import desktop2 from "../../../public/assets/images/promocao2.png";
import desktop3 from "../../../public/assets/images/promocao3.png";

import "./BannerCarousel.css";

const mobileBanners = [mobile1, mobile2, mobile3];
const desktopBanners = [desktop1, desktop2, desktop3];

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mobileBanners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? mobileBanners.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize(); // Executa na montagem
    window.addEventListener("resize", handleResize);
    const interval = setInterval(nextSlide, 7000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, []);

  const banners = isDesktop ? desktopBanners : mobileBanners;

  return (
    <div className="carousel-container">
      {banners.map((img, idx) => (
        <img
          key={idx}
          src={img.src}
          alt={`Banner ${idx + 1}`}
          className={`carousel-image ${idx === currentIndex ? "active" : ""}`}
        />
      ))}

      <button onClick={prevSlide} className="carousel-btn left">
        <ChevronLeft size={20} />
      </button>
      <button onClick={nextSlide} className="carousel-btn right">
        <ChevronRight size={20} />
      </button>

      <div className="carousel-dots">
        {banners.map((_, idx) => (
          <div
            key={idx}
            className={`dot ${idx === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
