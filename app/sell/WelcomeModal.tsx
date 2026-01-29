"use client";

import { useState, useEffect } from "react";

interface WelcomeModalProps {
  categories: string[];
  onSubmit: (email: string, interests: string[]) => void;
}

export default function WelcomeModal({ categories, onSubmit }: WelcomeModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    const hasVisited = localStorage.getItem("sell_visited");
    if (!hasVisited) {
      setTimeout(() => setIsOpen(true), 500);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && selected.length > 0) {
      onSubmit(email, selected);
      localStorage.setItem("sell_visited", "true");
      setIsOpen(false);
    }
  };

  const toggleCategory = (cat: string) => {
    setSelected(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="preview-modal active">
      <div className="preview-modal__overlay" onClick={() => setIsOpen(false)} />
      <div className="preview-modal__content" style={{ maxWidth: 600, height: 'auto' }}>
        <button className="preview-modal__close" onClick={() => setIsOpen(false)}>
          <i className="ri-close-line" />
        </button>

        <div className="text-center mb-4">
          <h3 className="mb-2">Welcome! 👋</h3>
          <p className="text-400">Tell us what you're interested in</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <p className="mb-2 fw-medium">Select categories:</p>
            <div className="d-flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => toggleCategory(cat)}
                  className={`btn btn-sm ${selected.includes(cat) ? 'btn-primary' : 'btn-outline-secondary'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Show My Templates
          </button>
        </form>
      </div>
    </div>
  );
}
