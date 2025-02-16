"use client";

import Footer from "@/app/components/Footer";
import Loader from "@/app/components/Loader";
import Nav from "@/app/components/Nav";
import ResponseCard from "@/app/components/ResponseCard";
import { apiURL } from "@/app/utils/constants";
import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false); // New error state

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setHasError(false); // Reset error state on new fetch
      const res = await fetch(`${apiURL}/api/form/get`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to fetch data");
      }

      const responseData = await res.json();
      setData(responseData.data || []);
      toast.success(responseData.message);
    } catch (error) {
      setHasError(true); // Set error state on failure
      toast.error(error.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetchData();
    return () => controller.abort();
  }, [fetchData]);

  useEffect(() => {
    // Only show warning if there's no error and no data
    if (data.length === 0 && !isLoading && !hasError) {
      toast.warn("No responses found");
    }
  }, [data, isLoading, hasError]); // Include hasError in dependencies

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Nav />
      <div className="flex-grow w-full sm:px-6 lg:px-8 py-8 mt-28">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-6 md:px-16 lg:px-28">
            {data.map((item, index) => (
              <ResponseCard {...item} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
