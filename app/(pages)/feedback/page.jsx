"use client";

import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav";
import React, { useState } from "react";
import { toast } from "react-toastify";
import dotenv from "dotenv";

dotenv.config();

const page = () => {
  const apiURL = process.env.API_URL;
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const res = await fetch(`${apiURL}/api/form/post`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    if (!res.ok) throw new toast.error(`${json.message}`);

    console.log(json.message);

    toast.success(`${json.message}`);

    setData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className=" h-[100dvh] w-full flex flex-col items-center justify-between gap-4 bg-black ">
      <Nav />
      <form
        onSubmit={handleSubmit}
        className=" mt-[15rem] h-[max-content] w-[max-content] flex flex-col items-start justify-center gap-4 p-4 rounded-md border border-zinc-800 bg-zinc-950 "
      >
        <h1 className=" text-white text-[1.3rem] font-[500] ">Feedback</h1>
        <div className="h-[max-content] w-[max-content] flex flex-col items-center justify-center gap-4">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            onChange={handleChange}
            value={data.name}
            className=" h-[6dvh] w-[250px] rounded-md outline-none border border-zinc-800 bg-transparent px-3 text-white placeholder:text-white text-[.8rem] "
            required={true}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            onChange={handleChange}
            value={data.email}
            className=" h-[6dvh] w-[250px] rounded-md outline-none border border-zinc-800 bg-transparent px-3 text-white placeholder:text-white text-[.8rem] "
            required={true}
          />
          <input
            type="text"
            name="message"
            id="message"
            placeholder="message"
            onChange={handleChange}
            value={data.message}
            className=" h-[6dvh] w-[250px] rounded-md outline-none border border-zinc-800 bg-transparent px-3 text-white placeholder:text-white text-[.8rem] "
            required={true}
          />
        </div>
        <button
          type="submit"
          className=" h-[max-content] w-full rounded-md outline-none border border-zinc-700 bg-blue-600 px-4 py-2 text-white text-[.9rem] "
        >
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default page;
