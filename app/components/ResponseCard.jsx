import React from "react";

const ResponseCard = ({ name, email, message }) => {
  return (
    <div className="flex flex-col gap-3 p-4 bg-zinc-900 border border-zinc-700 rounded-md h-full">
      <p className="text-sm text-zinc-300">{email}</p>
      <h2 className="text-lg font-semibold text-zinc-100">{name}</h2>
      <p className="text-sm text-zinc-300 flex-grow">{message}</p>
    </div>
  );
};

export default ResponseCard;
