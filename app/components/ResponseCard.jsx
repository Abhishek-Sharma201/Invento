import React from "react";

const ResponseCard = ({ name, email, message, createdAt }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="group flex flex-col gap-4 p-5 bg-white/5 border border-white/10 rounded-xl h-full backdrop-blur-md hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
          {name}
        </h2>
        <p className="text-xs text-white/50">{email}</p>
        {createdAt && (
          <p className="text-xs text-white/40 mt-1">{formatDate(createdAt)}</p>
        )}
      </div>

      <div className="flex flex-col gap-2 flex-grow">
        <p className="text-xs font-medium text-white/70 uppercase tracking-wider">
          Feedback
        </p>
        <div className="flex flex-wrap gap-2">
          {Array.isArray(message) ? (
            message.map((msg, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-xs font-medium text-cyan-200 bg-cyan-500/10 rounded-full border border-cyan-500/20"
              >
                {msg}
              </span>
            ))
          ) : (
            <span className="px-3 py-1.5 text-xs font-medium text-purple-200 bg-purple-500/10 rounded-full border border-purple-500/20">
              {message}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResponseCard;
