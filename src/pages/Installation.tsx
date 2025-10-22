import useInstalledApps from "../hooks/useInstalledApps";
import toast from "react-hot-toast";
import { useState } from "react";
import usePageTitle from "../hooks/usePageTitle";

export default function Installation() {
  usePageTitle("Installation");

  const { installed, uninstall } = useInstalledApps();
  const [sort, setSort] = useState<"none" | "dl-hl" | "dl-lh">("none");

  const sorted = [...installed].sort((a, b) => {
    if (sort === "dl-hl") return b.downloads - a.downloads;
    if (sort === "dl-lh") return a.downloads - b.downloads;
    return 0;
  });

  return (
    <div className="bg-[#f5f6f7] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827]">
          Your Installed Apps
        </h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base md:text-lg">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {installed.length > 0 && (
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
          <p className="text-xs sm:text-sm md:text-base font-semibold opacity-80">
            {installed.length}{" "}
            {installed.length > 1 ? "Apps Found" : "App Found"}
          </p>

          <select
            className="select select-bordered w-full sm:w-48 md:w-56 text-sm md:text-base"
            value={sort}
            onChange={(e) => setSort(e.target.value as any)}
          >
            <option value="none">Sort by Downloads</option>
            <option value="dl-hl">High–Low ↓</option>
            <option value="dl-lh">Low–High ↑</option>
          </select>
        </div>
      )}

      {installed.length === 0 ? (
        <div className="text-center py-20 opacity-80">
          <h3 className="text-xl sm:text-2xl font-semibold">
            No installations yet
          </h3>
          <p className="text-sm sm:text-base opacity-70">
            Install an app to see it here.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {sorted.map((app) => (
              <div
                key={app.id}
                className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full sm:w-auto text-center sm:text-left">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl object-cover mx-auto sm:mx-0"
                  />
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg md:text-xl text-[#1f2937]">
                      {app.title}
                    </h3>

                    <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 text-xs sm:text-sm opacity-80 mt-1">
                      <span className="flex items-center gap-1 text-green-600">
                        <img
                          src="/icon-downloads.png"
                          alt="Downloads"
                          className="h-3 w-3 sm:h-4 sm:w-4"
                        />
                        {(app.downloads / 1_000_000).toFixed(1)}M
                      </span>

                      <span className="flex items-center gap-1 text-orange-500">
                        <img
                          src="/icon-ratings.png"
                          alt="Rating"
                          className="h-3 w-3 sm:h-4 sm:w-4"
                        />
                        {app.ratingAvg.toFixed(1)}
                      </span>

                      <span className="text-xs text-gray-400">
                        {app.size} MB
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  className="btn btn-success btn-sm w-full sm:w-auto mt-3 sm:mt-0 text-sm md:text-base"
                  onClick={(e) => {
                    e.preventDefault();
                    uninstall(app.id);
                    toast.success(`${app.title} uninstalled`);
                  }}
                >
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
