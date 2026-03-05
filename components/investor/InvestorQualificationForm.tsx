// PATH: components/investor/InvestorQualificationForm.tsx

"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  investmentBudget: string;
  accreditedInvestor: string;
  message: string;
}

export default function InvestorQualificationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    investmentBudget: "",
    accreditedInvestor: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white border border-gray-200 rounded-sm p-10 text-center">
        <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-2xl">✓</span>
        </div>
        <h3 className="text-xl font-bold mb-2">Application Received</h3>
        <p className="text-gray-500 text-sm">
          Our team will review your application and reach out within 24–48 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-sm p-8">
      <h2 className="text-xl font-bold mb-1">Investor Qualification</h2>
      <p className="text-gray-500 text-sm mb-7">
        Complete this form to begin your investment journey
      </p>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-sm p-4 mb-6">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1.5">
            Full Name <span className="text-black">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="John Smith"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            disabled={loading}
            className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors duration-150 disabled:bg-gray-50 disabled:cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">
            Email Address <span className="text-black">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleInputChange}
            required
            disabled={loading}
            className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors duration-150 disabled:bg-gray-50 disabled:cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">
            Phone Number <span className="text-black">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="+1 (555) 123-4567"
            value={formData.phone}
            onChange={handleInputChange}
            required
            disabled={loading}
            className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors duration-150 disabled:bg-gray-50 disabled:cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">
            Investment Budget Range <span className="text-black">*</span>
          </label>
          <select
            name="investmentBudget"
            value={formData.investmentBudget}
            onChange={handleInputChange}
            required
            disabled={loading}
            className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors duration-150 bg-white disabled:bg-gray-50 disabled:cursor-not-allowed"
          >
            <option value="" disabled>Select a range</option>
            <option value="25k-100k">$25,000 – $100,000</option>
            <option value="100k-500k">$100,000 – $500,000</option>
            <option value="500k-2m">$500,000 – $2,000,000</option>
            <option value="2m+">$2,000,000+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">
            Accredited Investor? <span className="text-black">*</span>
          </label>
          <select
            name="accreditedInvestor"
            value={formData.accreditedInvestor}
            onChange={handleInputChange}
            required
            disabled={loading}
            className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors duration-150 bg-white disabled:bg-gray-50 disabled:cursor-not-allowed"
          >
            <option value="" disabled>Please select</option>
            <option value="yes">Yes, I am an accredited investor</option>
            <option value="no">No, I am not accredited</option>
            <option value="unsure">I&apos;m not sure</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">
            Message (Optional)
          </label>
          <textarea
            name="message"
            placeholder="Tell us about your investment goals..."
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            disabled={loading}
            className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors duration-150 resize-none disabled:bg-gray-50 disabled:cursor-not-allowed"
          />
        </div>

        <Button type="submit" fullWidth disabled={loading} className="py-4 text-base">
          {loading ? "Submitting..." : "Apply for Investment Access"}
        </Button>

        <p className="text-xs text-gray-400 text-center">
          By submitting, you agree to our{" "}
          <a href="#" className="underline">Privacy Policy</a> and{" "}
          <a href="#" className="underline">Terms of Service</a>
        </p>
      </form>
    </div>
  );
}