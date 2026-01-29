"use client";

import { useEffect } from "react";
import ImageCarousel from "./ImageCarousel";

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  templateName: string;
  templateBrand: string;
}

export default function PreviewModal({
  isOpen,
  onClose,
  images,
  templateName,
  templateBrand,
}: PreviewModalProps) {
  // Handle Escape key to close modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (images.length === 0) {
    return null;
  }

  return (
    <>
      {/* Modal */}
      <div className={`preview-modal ${isOpen ? "active" : ""}`}>
        {/* Overlay */}
        <div className="preview-modal__overlay" onClick={onClose} />

        {/* Content */}
        <div className="preview-modal__content">
          {/* Close button */}
          <button
            className="preview-modal__close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <i className="ri-close-line" />
          </button>

          {/* Header */}
          <div className="preview-modal__header">
            <h3 className="mb-2">{templateBrand}</h3>
            <p className="text-400 mb-0">{templateName}</p>
          </div>

          {/* Body with Image Carousel */}
          <div className="preview-modal__body">
            <ImageCarousel images={images} compact={false} />
          </div>
        </div>
      </div>
    </>
  );
}
