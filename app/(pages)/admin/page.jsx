"use client";

import Loader from "@/app/components/Loader";
import Nav from "@/app/components/Nav";
import { apiURL } from "@/app/utils/constants";
import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";

const AdminPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 50,
    total: 0,
    totalPages: 0,
  });

  const fetchData = useCallback(async (page = 1) => {
    try {
      setIsLoading(true);
      setHasError(false);
      const res = await fetch(`${apiURL}/api/form/get?page=${page}&limit=50`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Server returned non-JSON response");
      }

      const responseData = await res.json();

      if (!res.ok) {
        throw new Error(responseData.message || "Failed to fetch data");
      }

      setData(responseData.data || []);
      if (responseData.pagination) {
        setPagination(responseData.pagination);
      }
    } catch (error) {
      setHasError(true);
      console.error("Fetch error:", error);
      toast.error(error.message || "Failed to load feedback");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(1);
  }, [fetchData]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      fetchData(newPage);
    }
  };

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
    <div className="flex flex-col min-h-screen bg-black">
      <Nav />
      <div className="flex-grow w-full px-4 sm:px-6 lg:px-8 py-8 mt-28">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Feedback Dashboard
          </h1>
          <p className="text-white/60 text-sm">
            {pagination.total > 0
              ? `Total ${pagination.total} feedback responses`
              : "No feedback yet"}
          </p>
        </div>

        {isLoading ? (
          <Loader />
        ) : hasError ? (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-white/60 mb-4">Failed to load feedback</p>
            <button
              onClick={() => fetchData(pagination.page)}
              className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
            >
              Retry
            </button>
          </div>
        ) : data.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-white/60">No feedback responses yet</p>
          </div>
        ) : (
          <>
            {/* Table View */}
            <div className="max-w-7xl mx-auto overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden rounded-lg border border-white/10">
                  <table className="min-w-full divide-y divide-white/10">
                    <thead className="bg-white/5">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-white/70 uppercase tracking-wider">
                          #
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-white/70 uppercase tracking-wider">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-white/70 uppercase tracking-wider">
                          Email
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-white/70 uppercase tracking-wider">
                          Feedback
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-white/70 uppercase tracking-wider">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white/5 divide-y divide-white/10">
                      {data.map((item, index) => (
                        <tr key={item._id || index} className="hover:bg-white/10 transition-colors">
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-white/50">
                            {(pagination.page - 1) * pagination.limit + index + 1}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-white">{item.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-white/70">{item.email}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-wrap gap-1.5 max-w-md">
                              {Array.isArray(item.message) ? (
                                item.message.map((msg, idx) => (
                                  <span
                                    key={idx}
                                    className="inline-flex px-2.5 py-1 text-xs font-medium text-cyan-200 bg-cyan-500/10 rounded-full border border-cyan-500/20"
                                  >
                                    {msg}
                                  </span>
                                ))
                              ) : (
                                <span className="inline-flex px-2.5 py-1 text-xs font-medium text-purple-200 bg-purple-500/10 rounded-full border border-purple-500/20">
                                  {item.message}
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white/60">
                            {item.createdAt ? formatDate(item.createdAt) : 'N/A'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={() => handlePageChange(pagination.page - 1)}
                  disabled={pagination.page === 1}
                  className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
                >
                  Previous
                </button>
                <span className="text-white/70 text-sm">
                  Page {pagination.page} of {pagination.totalPages}
                </span>
                <button
                  onClick={() => handlePageChange(pagination.page + 1)}
                  disabled={pagination.page === pagination.totalPages}
                  className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
