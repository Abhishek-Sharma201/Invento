"use client";

import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav";
import React, { useState, useCallback } from "react";
import { toast } from "react-toastify";
import { apiURL } from "@/app/utils/constants";
import Squares from "@/app/components/bits/Squares";

const AdminPage = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (isSubmitting) return;

      const controller = new AbortController();
      setIsSubmitting(true);

      try {
        const res = await fetch(`${apiURL}/api/form/post`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
          signal: controller.signal,
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || "Submission failed");
        }

        const responseData = await res.json();
        toast.success(responseData.message);
        setData({ name: "", email: "", message: "" });
      } catch (error) {
        if (error.name !== "AbortError") {
          toast.error(error.message || "An error occurred during submission");
        }
      } finally {
        setIsSubmitting(false);
      }
    },
    [data, isSubmitting]
  );

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between gap-4 bg-black relative">
      <div className=" absolute z-[0] h-full w-full top-0 left-0  ">
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
          className=" z-10 mt-[12rem] lg:mt-[13rem] h-[max-content] w-[max-content] flex flex-col items-start justify-center gap-4 p-4 rounded-md border border-zinc-800 bg-zinc-950"
        >
          <h1 className="text-white text-[1.3rem] font-[500]">Feedback</h1>
          <div className="h-[max-content] w-[max-content] flex flex-col items-center justify-center gap-4">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              onChange={handleChange}
              value={data.name}
              className="h-[6dvh] w-[250px] rounded-md outline-none border border-zinc-800 bg-transparent px-3 text-white placeholder:text-white text-[.8rem]"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              onChange={handleChange}
              value={data.email}
              className="h-[6dvh] w-[250px] rounded-md outline-none border border-zinc-800 bg-transparent px-3 text-white placeholder:text-white text-[.8rem]"
              required
            />
            <input
              type="text"
              name="message"
              id="message"
              placeholder="message"
              onChange={handleChange}
              value={data.message}
              className="h-[6dvh] w-[250px] rounded-md outline-none border border-zinc-800 bg-transparent px-3 text-white placeholder:text-white text-[.8rem]"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="h-[max-content] w-full rounded-md outline-none border border-zinc-700 bg-blue-600 px-4 py-2 text-white text-[.9rem] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
