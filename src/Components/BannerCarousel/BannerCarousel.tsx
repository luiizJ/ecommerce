"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../../../public/assets/images/promocao1.png";
import img2 from "../../../public/assets/images/promocao2.png";
import img3 from "../../../public/assets/images/promocao3.png";
import "./BannerCarousel.css";

const banners = [img1, img2, img3];

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

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
        <ChevronLeft size={24} />
      </button>
      <button onClick={nextSlide} className="carousel-btn right">
        <ChevronRight size={24} />
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
