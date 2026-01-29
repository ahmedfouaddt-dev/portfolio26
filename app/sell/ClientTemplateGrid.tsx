"use client";

import { useState } from "react";
import Link from "next/link";
import ClientImageCarousel from "./ClientImageCarousel";
import PreviewModal from "@/components/PreviewModal";
import WelcomeModal from "./WelcomeModal";
import { Category, TemplateItem } from "@/lib/templateData";

interface ClientTemplateGridProps {
  categories: Category[];
}

export default function ClientTemplateGrid({
  categories,
}: ClientTemplateGridProps) {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    item: TemplateItem | null;
  }>({ isOpen: false, item: null });
  const [interests, setInterests] = useState<string[]>([]);

  const openModal = (item: TemplateItem) => {
    setModalState({ isOpen: true, item });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, item: null });
  };

  const handleWelcomeSubmit = async (email: string, selected: string[]) => {
    setInterests(selected);
    const data = {
      email,
      interests: selected,
      timestamp: new Date().toISOString(),
    };
    console.log("SAVE THIS TO /public/data/interests.json:", data);
  };

  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const filteredCategories =
    activeFilters.length > 0
      ? categories.filter((cat) => activeFilters.includes(cat.name))
      : categories;

  const handleWelcomeSubmitUpdated = async (
    email: string,
    selected: string[],
  ) => {
    setInterests(selected);
    setActiveFilters(selected);
    await handleWelcomeSubmit(email, selected);
  };

  const toggleFilter = (catName: string) => {
    setActiveFilters((prev) =>
      prev.includes(catName)
        ? prev.filter((c) => c !== catName)
        : [...prev, catName],
    );
  };

  return (
    <>
      <WelcomeModal
        categories={categories.map((c) => c.name)}
        onSubmit={handleWelcomeSubmitUpdated}
      />

      {/* Filter Pills */}
      <div className="mb-4 d-flex flex-wrap gap-2 align-items-center">
        <span className="text-muted small">Filter:</span>
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => toggleFilter(cat.name)}
            className={`btn btn-sm ${activeFilters.includes(cat.name) ? "btn-primary" : "btn-outline-secondary"}`}
          >
            {cat.name}
          </button>
        ))}
        {activeFilters.length > 0 && (
          <button
            onClick={() => setActiveFilters([])}
            className="btn btn-sm btn-outline-danger"
          >
            Clear All
          </button>
        )}
      </div>

      {filteredCategories.map((cat) => (
        <div key={cat.name} className="mb-5">
          <h2 className="fs-22 mb-3">{cat.name}</h2>
          <div className="row g-4">
            {cat.items.map((it, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column">
                    {/* Template Name */}
                    <h5 className="card-title mb-3">{it.name}</h5>

                    {/* Image Carousel or Placeholder */}
                    {it.screenshots.length > 0 ? (
                      <div className="mb-3">
                        <ClientImageCarousel
                          images={it.screenshots}
                          compact={true}
                        />
                      </div>
                    ) : (
                      <div
                        style={{ minHeight: 220 }}
                        className="d-flex align-items-center justify-content-center mb-3"
                      >
                        <div
                          className="media-placeholder"
                          style={{
                            width: "100%",
                            height: 220,
                            background:
                              "linear-gradient(90deg,#f0f2f5,#e9edf2)",
                            borderRadius: 8,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                          }}
                        >
                          <div style={{ textAlign: "center" }}>
                            <svg
                              width="48"
                              height="48"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="11"
                                stroke="#c8d0da"
                                strokeWidth="2"
                                fill="#fff"
                              />
                              <path d="M10 8L16 12L10 16V8Z" fill="#4b6cb7" />
                            </svg>
                            <p
                              className="text-muted mt-2 mb-0"
                              style={{ fontSize: "12px" }}
                            >
                              Screenshots coming soon
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="mt-auto d-flex gap-2">
                      {/* Preview button - opens modal if images exist, otherwise links to external URL */}
                      {it.screenshots.length > 0 ? (
                        <button
                          className="btn btn-outline-primary"
                          onClick={() => openModal(it)}
                        >
                          <i className="ri-eye-line me-1" />
                          Preview
                        </button>
                      ) : (
                        <a
                          className="btn btn-outline-primary"
                          href={it.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="ri-eye-line me-1" />
                          Preview
                        </a>
                      )}
                      <Link
                        href={`/pricing?template=${it.id}`}
                        className="btn btn-primary"
                        onClick={() => {
                          if (typeof window !== 'undefined') {
                            sessionStorage.setItem('selectedTemplate', JSON.stringify(it));
                          }
                        }}
                      >
                        Hire me
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Preview Modal */}
      <PreviewModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        images={modalState.item?.screenshots || []}
        templateName={modalState.item?.name || ""}
        templateBrand={modalState.item?.brand || ""}
      />
    </>
  );
}
