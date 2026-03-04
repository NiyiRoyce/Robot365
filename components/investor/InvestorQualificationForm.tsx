// PATH: components/investor/InvestorQualificationForm.tsx

"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function InvestorQualificationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1.5">
            Full Name <span className="text-black">*</span>
          </label>
          <input
            type="text"
            placeholder="John Smith"
            required
            className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors duration-150"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">
            Email Address <span className="text-black">*</span>
          </label>
          <input
            type="email"
            placeholder="john@example.com"
            required
            className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors duration-150"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">
            Phone Number <span className="text-black">*</span>
          </label>
          <input
            type="tel"
            placeholder="+1 (555) 123-4567"
            required
            className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors duration-150"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">
            Investment Budget Range <span className="text-black">*</span>
          </label>
          <select
            required
            defaultValue=""
            className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors duration-150 bg-white"
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
            required
            defaultValue=""
            className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors duration-150 bg-white"
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
            placeholder="Tell us about your investment goals..."
            rows={4}
            className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors duration-150 resize-none"
          />
        </div>

        <Button type="submit" fullWidth className="py-4 text-base">
          Apply for Investment Access
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