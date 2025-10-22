import { useMemo, useState } from "react";
import { apps } from "../data/apps";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import EmptyState from "../components/EmptyState";
import usePageTitle from "../hooks/usePageTitle";

export default function Apps() {
  usePageTitle("Apps");

  const [q, setQ] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const list = useMemo(() => {
    return apps.filter((a) => a.title.toLowerCase().includes(q.toLowerCase()));
  }, [q]);

  const onSearch = (v: string) => {
    setIsSearching(true);
    setQ(v);
    setTimeout(() => setIsSearching(false), 320);
  };

  return (
    <div className="bg-[#f5f6f7] text-[#1f2937] py-12 min-h-screen">
      {/* ------- PAGE HEADER ------- */}
      <div className="text-center mb-10 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827]">
          Our All Applications
        </h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Explore all apps on the market developed by us. We code for millions.
        </p>
      </div>

      {/* ------- SEARCH + COUNT ------- */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4 mb-6">
        <div className="opacity-80 text-sm sm:text-base text-black font-medium">
          ({list.length}) Apps Found
        </div>
        <div className="flex w-full sm:w-auto justify-end">
          <SearchBar onChange={onSearch} />
        </div>
      </div>

      {isSearching && <Loading label="Searching..." />}

      <div className="max-w-6xl mx-auto px-4">
        {list.length === 0 ? (
          <EmptyState
            title="No App Found"
            subtitle="Try searching a different app name."
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {list.map((app) => (
              <Link
                key={app.id}
                to={`/apps/${app.id}`}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition p-4 flex flex-col justify-between"
              >
                <div>
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full aspect-[4/3] object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold text-base sm:text-lg text-gray-800 line-clamp-1">
                    {app.title}
                  </h3>
                </div>

                <div className="flex justify-between items-center mt-3 text-sm sm:text-base text-gray-600">
                  <span className="flex items-center gap-1 bg-[#F1F5E8] text-green-700 font-semibold text-xs sm:text-sm px-2.5 py-1 rounded-md">
                    <img
                      src="/icon-downloads.png"
                      alt="Downloads"
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                    />
                    {(app.downloads / 1_000_000).toFixed(1)}M
                  </span>
                  <span className="flex items-center gap-1 bg-[#FFA07A]/30 text-[#FF6B00] font-semibold text-xs sm:text-sm px-2.5 py-1 rounded-md">
                    <img
                      src="/icon-ratings.png"
                      alt="Rating"
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                    />
                    {app.ratingAvg.toFixed(1)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
