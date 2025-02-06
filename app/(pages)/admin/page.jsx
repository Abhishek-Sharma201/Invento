"use client";

import Footer from "@/app/components/Footer";
import Loader from "@/app/components/Loader";
import Nav from "@/app/components/Nav";
import ResponseCard from "@/app/components/ResponseCard";
import { apiURL } from "@/app/utils/constants";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${apiURL}/api/form/get`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const j = await res.json();

      if (!res.ok) throw new Error(`${j.message}`);

      setData(j.data);

      setIsLoading(false);

      toast.success(`${j.message}`);
    } catch (error) {
      toast.error(`${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex-grow w-full sm:px-6 lg:px-8 py-8 mt-28 ">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-6 md:px-16 lg:px-28">
            {data.map((data, i) => (
              <ResponseCard {...data} key={i} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default page;
