import { Star } from "lucide-react";
import type { AppItem } from "../types";
import { formatDownloads } from "../utils/number";
import { Link } from "react-router-dom";

export default function AppCard({ app }: { app: AppItem }) {
  return (
    <Link
      to={`/apps/${app.id}`}
      className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition p-4 flex flex-col justify-between h-full"
    >
      <figure className="mb-3">
        <img
          src={app.image}
          alt={app.title}
          className="rounded-lg h-40 sm:h-44 md:h-48 w-full object-cover"
        />
      </figure>

      <div className="flex-1 flex flex-col justify-between">
        <h3 className="font-semibold text-base md:text-lg text-gray-800 mb-2 line-clamp-1">
          {app.title}
        </h3>

        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 opacity-90">
          <span className="truncate">
            {formatDownloads(app.downloads)} downloads
          </span>
          <span className="flex items-center gap-1 text-orange-500">
            <Star className="h-4 w-4" /> {app.ratingAvg.toFixed(1)}
          </span>
        </div>
      </div>
    </Link>
  );
}
