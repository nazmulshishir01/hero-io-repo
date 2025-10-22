import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { apps } from "../data/apps";
import usePageTitle from "../hooks/usePageTitle";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import toast from "react-hot-toast";
import { install as addInstall, isInstalled } from "../utils/storage";
import EmptyState from "../components/EmptyState";
import { formatDownloads } from "../utils/number";

export default function AppDetails() {
  usePageTitle("App Details");

  const { id } = useParams();
  const app = useMemo(() => apps.find((a) => String(a.id) === id), [id]);

  const [installed, setInstalled] = useState(() =>
    app ? isInstalled(app.id) : false
  );

  if (!app)
    return (
      <EmptyState
        title="Oops! App Not Found"
        subtitle="The app you are requesting is not found in our system. Please try another one."
      />
    );

  const toK = (n: number) => `${Math.round(n / 1000)}K`;
  const ratingsDesc = [...app.ratings].sort(
    (a, b) => parseInt(b.name) - parseInt(a.name)
  );

  const downloadsDisplay = formatDownloads(app.downloads);

  const onInstall = () => {
    if (!installed) {
      addInstall(app);
      setInstalled(true);
      toast.success(`${app.title} installed successfully!`);
    }
  };

  return (
    <div className="bg-[#f5f6f7] text-[#0f172a] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 md:gap-10 items-start">
            <div className="flex justify-center md:justify-start">
              <img
                src={app.image}
                alt={app.title}
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-[250px] md:h-[250px] object-cover rounded-xl border border-gray-200 bg-white"
              />
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-[30px] font-bold leading-snug">
                {app.title}
              </h1>

              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                Developed by{" "}
                <span className="text-[#6b5cff] font-medium hover:underline">
                  {app.companyName}
                </span>
              </p>

              <div className="mt-4 border-b border-gray-200 w-full" />

              <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap justify-center md:justify-start gap-8 sm:gap-10">
                <div className="flex flex-col items-center sm:items-start space-y-1">
                  <img
                    src="/icon-downloads.png"
                    alt="Downloads"
                    className="h-6 w-6"
                  />
                  <span className="text-[12px] uppercase tracking-wide text-gray-500">
                    Downloads
                  </span>
                  <span className="text-2xl sm:text-[28px] font-extrabold">
                    {downloadsDisplay}
                  </span>
                </div>

                <div className="flex flex-col items-center sm:items-start space-y-1">
                  <img
                    src="/icon-ratings.png"
                    alt="Ratings"
                    className="h-6 w-6"
                  />
                  <span className="text-[12px] uppercase tracking-wide text-gray-500">
                    Average Ratings
                  </span>
                  <span className="text-2xl sm:text-[28px] font-extrabold">
                    {app.ratingAvg.toFixed(1)}
                  </span>
                </div>

                <div className="flex flex-col items-center sm:items-start space-y-1">
                  <img
                    src="/icon-review.png"
                    alt="Reviews"
                    className="h-6 w-6"
                  />
                  <span className="text-[12px] uppercase tracking-wide text-gray-500">
                    Total Reviews
                  </span>
                  <span className="text-2xl sm:text-[28px] font-extrabold">
                    {toK(app.reviews)}
                  </span>
                </div>
              </div>

              <div className="mt-6 w-full sm:w-auto">
                <button
                  onClick={onInstall}
                  disabled={installed}
                  className={`w-full sm:w-auto px-6 py-3 rounded-md text-white text-[14px] font-semibold transition ${
                    installed
                      ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                      : "bg-[#19c37d] hover:bg-[#17b674]"
                  }`}
                >
                  {installed ? "Installed" : `Install Now (${app.size} MB)`}
                </button>
              </div>
            </div>
          </div>
          <div className="mt-5 border-b border-gray-200" />
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-center md:text-left">
            Ratings
          </h2>
          <div className="h-64 sm:h-72 md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={ratingsDesc}
                layout="vertical"
                barCategoryGap="18%"
              >
                <XAxis type="number" axisLine={false} tickLine={false} />
                <YAxis
                  dataKey="name"
                  type="category"
                  width={50}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip />
                <Bar
                  dataKey="count"
                  fill="#f97316"
                  radius={[0, 10, 10, 0]}
                  maxBarSize={28}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-5 border-b border-gray-200" />
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-center md:text-left">
            Description
          </h2>
          <p className="leading-relaxed text-gray-700 text-sm sm:text-base md:text-lg text-justify">
            {app.description}
          </p>
        </section>
      </div>
    </div>
  );
}
