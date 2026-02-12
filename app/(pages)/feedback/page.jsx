"use client";

import Nav from "@/app/components/Nav";
import React, { useState, useCallback, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { apiURL } from "@/app/utils/constants";
import Squares from "@/app/components/bits/Squares";

const FEEDBACK_OPTIONS = [
  "Game looks so smooth",
  "Game story is so good",
  "Game models are too good",
  "Graphics are amazing",
  "Sound design is excellent",
  "Level design is creative",
  "Gameplay is engaging",
  "Controls are intuitive",
];

const FeedbackPage = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleChange = useCallback((e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const toggleOption = useCallback((option) => {
    setData((prev) => ({
      ...prev,
      message: prev.message.includes(option)
        ? prev.message.filter((msg) => msg !== option)
        : [...prev.message, option],
    }));
  }, []);

  const removeOption = useCallback((option) => {
    setData((prev) => ({
      ...prev,
      message: prev.message.filter((msg) => msg !== option),
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (isSubmitting) return;

      if (data.message.length === 0) {
        toast.error("Please select at least one feedback option");
        return;
      }

      setIsSubmitting(true);

      try {
        const res = await fetch(`${apiURL}/api/form/post`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Server returned non-JSON response. Please try again later.");
        }

        const responseData = await res.json();

        if (!res.ok) {
          throw new Error(responseData.message || "Submission failed");
        }

        toast.success(responseData.message || "Feedback submitted successfully!");
        setData({ name: "", email: "", message: [] });
      } catch (error) {
        console.error("Submission error:", error);
        toast.error(error.message || "An error occurred during submission");
      } finally {
        setIsSubmitting(false);
      }
    },
    [data, isSubmitting]
  );

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between gap-4 bg-black relative">
      <div className="absolute z-[0] h-full w-full top-0 left-0">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="rgb(54, 54, 54)"
          hoverFillColor="#222"
        />
      </div>
      <div className="min-h-screen w-full flex flex-col items-center justify-between gap-4">
        <Nav />
        <form
          onSubmit={handleSubmit}
          className="z-10 mt-[8rem] lg:mt-[13rem] mb-8 w-full max-w-md mx-4 flex flex-col items-start justify-center gap-6 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <h1 className="text-white text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Share Your Feedback
          </h1>
          
          <div className="w-full flex flex-col gap-4">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              onChange={handleChange}
              value={data.name}
              className="w-full px-4 py-3 rounded-lg outline-none border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder:text-white/50 text-sm focus:border-cyan-500/50 transition-colors"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              onChange={handleChange}
              value={data.email}
              className="w-full px-4 py-3 rounded-lg outline-none border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder:text-white/50 text-sm focus:border-cyan-500/50 transition-colors"
              required
            />
          </div>

          <div className="w-full flex flex-col gap-3">
            <label className="text-white text-sm font-medium">
              What did you enjoy? <span className="text-cyan-400">(Select multiple)</span>
            </label>
            
            {/* Selected Options Display */}
            {data.message.length > 0 && (
              <div className="flex flex-wrap gap-2 p-3 rounded-lg border border-white/10 bg-white/5">
                {data.message.map((msg) => (
                  <span
                    key={msg}
                    className="flex items-center gap-2 px-3 py-1 text-xs font-medium text-cyan-200 bg-cyan-500/20 rounded-full border border-cyan-500/30"
                  >
                    {msg}
                    <button
                      type="button"
                      onClick={() => removeOption(msg)}
                      className="hover:text-cyan-100 transition-colors text-base leading-none"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Multi-Select Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white text-sm text-left flex items-center justify-between hover:border-white/20 transition-colors"
              >
                <span className="text-white/70">
                  {data.message.length === 0
                    ? "Select feedback options..."
                    : `${data.message.length} option${data.message.length > 1 ? 's' : ''} selected`}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 py-2 rounded-lg border border-white/20 bg-zinc-900/95 backdrop-blur-md max-h-40 sm:max-h-48 overflow-y-auto z-[9999] shadow-2xl scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-white/5">
                  {FEEDBACK_OPTIONS.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => toggleOption(option)}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 text-left text-xs sm:text-sm flex items-center gap-2 sm:gap-3 hover:bg-white/10 transition-colors ${
                        data.message.includes(option) ? 'text-cyan-300 bg-cyan-500/10' : 'text-white/80'
                      }`}
                    >
                      <div className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded border flex items-center justify-center flex-shrink-0 ${
                        data.message.includes(option)
                          ? 'bg-cyan-500 border-cyan-500'
                          : 'border-white/30'
                      }`}>
                        {data.message.includes(option) && (
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="flex-1 break-words">{option}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
          >
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackPage;

