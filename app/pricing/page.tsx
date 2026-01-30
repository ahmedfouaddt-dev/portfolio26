"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { findTemplateById } from "@/lib/templateData";
import ClientImageCarousel from "../sell/ClientImageCarousel";
import { PopupModal } from "react-calendly";

function PricingContent() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get("template");
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    requirements: "",
  });

  useEffect(() => {
    if (templateId) {
      // Try to get template from sessionStorage first (includes screenshots)
      const storedTemplate = sessionStorage.getItem('selectedTemplate');
      if (storedTemplate) {
        setSelectedTemplate(JSON.parse(storedTemplate));
      } else {
        // Fallback to finding by ID (no screenshots)
        const foundTemplate = findTemplateById(templateId);
        if (foundTemplate) {
          setSelectedTemplate(foundTemplate);
        }
      }
    }
  }, [templateId]);

  const handlePackageSelect = (pkg: string) => {
    setSelectedPackage(pkg);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const requestData = {
      template: selectedTemplate?.name || 'Not specified',
      brand: selectedTemplate?.brand || 'Not specified',
      package: selectedPackage,
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      requirements: formData.requirements,
      timestamp: new Date().toISOString(),
    };

    try {
      // Use Formspree (free service that sends form data to your email)
      const response = await fetch('https://formspree.io/f/mlgnlblw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        alert(
          "Thank you! Your request has been saved. I'll contact you via email shortly.",
        );
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          requirements: "",
        });
      } else {
        alert("There was an issue saving your request. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting request:', error);
      alert("There was an issue saving your request. Please try again.");
    }
  };

  const packages = [
    {
      id: "starter",
      name: "Starter",
      price: "$200",
      features: [
        "Ready-to-deploy template",
        "No customization",
        "Basic setup & deployment",
        "Delivered in less than 1 week",
        "3 months support",
        "Perfect for quick launch",
      ],
    },
    {
      id: "professional",
      name: "Professional",
      price: "$800",
      features: [
        "Template deployment",
        "Basic customization included",
        "Brand colors & logo integration",
        "Minor feature adjustments",
        "Delivered within 2 weeks",
        "6 months support",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$2,500+",
      features: [
        "Full custom development",
        "Complete feature customization",
        "Custom APIs & integrations",
        "Dedicated developer support",
        "Priority delivery",
        "12 months extended support",
      ],
    },
  ];

  return (
    <Layout headerStyle={2} footerStyle={2}>
      <div>
        <section className="section-pricing-1 pt-130 pb-150">
          <div className="container">
            {/* Selected Template Display */}
            {selectedTemplate && (
              <div className="card shadow-sm mb-5" style={{ borderRadius: 12 }}>
                <div className="card-body p-4">
                  <div className="row align-items-center">
                    <div className="col-md-5">
                      {selectedTemplate.screenshots?.length > 0 ? (
                        <ClientImageCarousel images={selectedTemplate.screenshots} compact={true} />
                      ) : (
                        <div
                          style={{
                            height: 220,
                            background:
                              "linear-gradient(90deg,#f0f2f5,#e9edf2)",
                            borderRadius: 8,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <p className="text-muted">No screenshots available</p>
                        </div>
                      )}
                    </div>
                    <div className="col-md-7">
                      <div className="badge bg-primary bg-opacity-10 text-primary mb-2">
                        Selected Template
                      </div>
                      <h2 className="fs-28 mb-2">{selectedTemplate.name}</h2>
                      <p className="text-muted mb-3">
                        Brand: {selectedTemplate.brand}
                      </p>
                      <p className="text-300 mb-0">
                        Choose a package below that fits your needs for
                        deploying this template.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="row">
              <div className="col-lg-8 mx-lg-auto mb-8">
                <div className="text-center">
                  <Link
                    href="/#"
                    className="btn btn-gradient d-inline-block text-uppercase"
                  >
                    My Pricing
                  </Link>
                  <h3 className="ds-3 mt-3 mb-4 text-dark">
                    Affordable{" "}
                    <span className="text-300">Solutions for Every</span> Budget
                  </h3>
                  <p className="text-300 fs-5 mb-0">
                    Flexible Plans Tailored to Meet Your Unique Needs, Ensuring
                    High-Quality Services <br />
                    Without Breaking the Bank
                  </p>
                </div>

                {/* Pricing Cards */}
                <div className="row mt-8 d-flex">
                  {packages.map((pkg) => (
                    <div key={pkg.id} className="col-md-4 mt-md-0 mt-6">
                      <div
                        className={`card-pricing-1 p-3 rounded-4 h-100 d-flex flex-column ${
                          selectedPackage === pkg.id
                            ? "border-2 border-primary"
                            : ""
                        }`}
                        style={{
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        }}
                        onClick={() => handlePackageSelect(pkg.id)}
                      >
                        <div className="d-flex justify-content-between align-items-center">
                          <span
                            className={`text-uppercase fs-7 ${
                              selectedPackage === pkg.id ? "text-primary" : ""
                            }`}
                          >
                            {pkg.name}
                          </span>
                          {selectedPackage === pkg.id && (
                            <i className="ri-check-circle-fill text-primary fs-4"></i>
                          )}
                        </div>
                        <h3 className="ds-3 fw-medium text-primary mb-5">
                          {pkg.price}
                        </h3>
                        <ul className="ps-3 border-top border-600 pt-5 mb-auto">
                          {pkg.features.map((feature, idx) => (
                            <li key={idx}>
                              <p className="text-300">{feature}</p>
                            </li>
                          ))}
                        </ul>
                        <button
                          className={`btn ${
                            selectedPackage === pkg.id
                              ? "btn-primary"
                              : "btn-outline-primary"
                          } mt-5 w-100 justify-content-center`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePackageSelect(pkg.id);
                          }}
                        >
                          {selectedPackage === pkg.id
                            ? "Selected"
                            : "Select Package"}
                          <i className="ri-arrow-right-up-line ms-2" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact Form */}
                {selectedPackage && (
                  <div className="row mt-8">
                    <div className="col-12">
                      <div
                        className="card shadow-sm"
                        style={{ borderRadius: 12 }}
                      >
                        <div className="card-body p-5">
                          <h3 className="fs-28 mb-2">
                            Almost there! Tell me about your project
                          </h3>
                          <p className="text-300 mb-4">
                            Fill in the details below and I'll get back to you
                            within 24 hours.
                          </p>

                          <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                              <div className="col-md-6">
                                <label className="form-label">
                                  Name <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  required
                                  value={formData.name}
                                  onChange={handleInputChange}
                                />
                              </div>
                              <div className="col-md-6">
                                <label className="form-label">
                                  Email <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="email"
                                  name="email"
                                  className="form-control"
                                  required
                                  value={formData.email}
                                  onChange={handleInputChange}
                                />
                              </div>
                              <div className="col-md-6">
                                <label className="form-label">
                                  Company/Business
                                </label>
                                <input
                                  type="text"
                                  name="company"
                                  className="form-control"
                                  value={formData.company}
                                  onChange={handleInputChange}
                                />
                              </div>
                              <div className="col-md-6">
                                <label className="form-label">
                                  Phone Number
                                </label>
                                <input
                                  type="tel"
                                  name="phone"
                                  className="form-control"
                                  value={formData.phone}
                                  onChange={handleInputChange}
                                />
                              </div>
                              <div className="col-12">
                                <label className="form-label">
                                  Project Requirements
                                </label>
                                <textarea
                                  name="requirements"
                                  className="form-control"
                                  rows={5}
                                  placeholder="Tell me about your specific needs, timeline, and any questions you have..."
                                  value={formData.requirements}
                                  onChange={handleInputChange}
                                />
                              </div>
                              <div className="col-12">
                                <div className="d-flex gap-3 flex-wrap">
                                  <button
                                    type="submit"
                                    className="btn btn-primary btn-lg"
                                  >
                                    <i className="ri-send-plane-fill me-2" />
                                    Submit Request
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => setIsCalendlyOpen(true)}
                                    className="btn btn-outline-primary btn-lg"
                                  >
                                    <i className="ri-calendar-line me-2" />
                                    Schedule a Meeting
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* No Package Selected Message */}
                {!selectedPackage && (
                  <div className="row mt-8">
                    <div className="col-12">
                      <div className="alert alert-info text-center">
                        <i className="ri-information-line me-2"></i>
                        Please select a package above to continue with your
                        request.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Calendly Popup Modal */}
      {typeof window !== 'undefined' && (
        <PopupModal
          url="https://calendly.com/ahmedfouad01099"
          onModalClose={() => setIsCalendlyOpen(false)}
          open={isCalendlyOpen}
          rootElement={document.body}
        />
      )}
    </Layout>
  );
}

export default function Pricing() {
  return (
    <Suspense fallback={
      <Layout headerStyle={2} footerStyle={2}>
        <div className="section-pricing-1 pt-130 pb-150">
          <div className="container">
            <div className="text-center">
              <p>Loading...</p>
            </div>
          </div>
        </div>
      </Layout>
    }>
      <PricingContent />
    </Suspense>
  );
}
