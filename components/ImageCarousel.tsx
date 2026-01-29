// app/projects/[id]/ImageCarousel.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageCarouselProps {
  images: string[];
  compact?: boolean;
}

export default function ImageCarousel({
  images,
  compact = false,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState({ x: 50, y: 50, active: false });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (compact) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoom({ x, y, active: true });
  };

  if (images.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-300">No images available for this project</p>
      </div>
    );
  }

  const arrowSize = compact ? "40px" : "50px";
  const arrowPosition = compact ? "10px" : "20px";

  return (
    <div className="image-carousel position-relative">
      {/* Main Image */}
      <div
        className={compact ? "carousel-main" : "carousel-main mb-4"}
        onMouseMove={handleMouseMove}
        onMouseEnter={() =>
          !compact && setZoom((prev) => ({ ...prev, active: true }))
        }
        onMouseLeave={() => setZoom((prev) => ({ ...prev, active: false }))}
        style={{ cursor: compact ? "default" : "zoom-in", overflow: "hidden" }}
      >
        <img
          src={images[currentIndex]}
          alt={`Project screenshot ${currentIndex + 1}`}
          className="rounded-2 shadow-lg w-100"
          style={{
            height: compact ? "220px" : "auto",
            maxHeight: compact ? "220px" : "70vh",
            objectFit: compact ? "cover" : "contain",
            backgroundColor: "#f8f9fa",
            transition: "transform 0.1s ease-out",
            transform: zoom.active && !compact ? "scale(2)" : "scale(1)",
            transformOrigin: `${zoom.x}% ${zoom.y}%`,
          }}
        />
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="carousel-btn carousel-btn-prev position-absolute top-50 start-0 translate-middle-y bg-white border-0 rounded-circle shadow"
            style={{ width: arrowSize, height: arrowSize, left: arrowPosition }}
          >
            <i
              className={
                compact
                  ? "ri-arrow-left-s-line fs-5"
                  : "ri-arrow-left-s-line fs-4"
              }
              style={{ color: "gray" }}
            ></i>
          </button>
          <button
            onClick={nextSlide}
            className="carousel-btn carousel-btn-next position-absolute top-50 end-0 translate-middle-y bg-white border-0 rounded-circle shadow"
            style={{
              width: arrowSize,
              height: arrowSize,
              right: arrowPosition,
            }}
          >
            <i
              className={
                compact
                  ? "ri-arrow-right-s-line fs-5"
                  : "ri-arrow-right-s-line fs-4"
              }
              style={{ color: "gray" }}
            ></i>
          </button>
        </>
      )}

      {/* Thumbnail Gallery - Hidden in compact mode */}
      {images.length > 1 && !compact && (
        <div className="carousel-thumbnails d-flex justify-content-center gap-3 mt-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`thumbnail border-0 rounded-2 p-1 ${
                index === currentIndex
                  ? "active border-primary border-2"
                  : "border"
              }`}
              style={{
                width: "80px",
                height: "80px",
                background: "none",
                cursor: "pointer",
              }}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-100 h-100 rounded-1"
                style={{ objectFit: "cover" }}
              />
            </button>
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div
          className={
            compact
              ? "carousel-counter text-center mt-2"
              : "carousel-counter text-center mt-3"
          }
        >
          <span
            className={
              compact
                ? "badge bg-dark bg-opacity-75 text-white px-2 py-1"
                : "badge bg-dark bg-opacity-75 text-white px-3 py-2"
            }
          >
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </div>
  );
}
