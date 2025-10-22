import { Link } from "react-router-dom";
import { apps } from "../data/apps";
import usePageTitle from "../hooks/usePageTitle";

export default function Home() {
  usePageTitle("Home");
  const top = [...apps].sort((a, b) => b.downloads - a.downloads).slice(0, 8);

  return (
    <div className="bg-[#f5f6f7] text-[#1f2937]">
      <section className="relative text-center px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-0 overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#111827]">
            We Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
              Productive
            </span>{" "}
            Apps
          </h1>

          <p className="mt-5 text-[#627382] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2 italic">
            At <b>HERO.IO</b>, we craft innovative apps designed to make
            everyday life simpler, smarter, and more exciting. Our goal is to
            turn your ideas into digital experiences that truly make an impact.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              className="px-5 sm:px-6 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 hover:bg-gray-100 transition font-medium flex items-center gap-2 shadow-sm text-sm sm:text-base"
            >
              <img src="/google-play.png" alt="Play" className="h-5 w-5" />
              Google Play
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              className="px-5 sm:px-6 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 hover:bg-gray-100 transition font-medium flex items-center gap-2 shadow-sm text-sm sm:text-base"
            >
              <img src="/app-store.png" alt="App Store" className="h-5 w-5" />
              App Store
            </a>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 flex justify-center relative z-10">
          <img
            src="/hero.png"
            alt="Hero Mockup"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg drop-shadow-2xl -mb-[2px]"
          />
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-center py-16 sm:py-20 z-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="mb-10 text-xl sm:text-2xl md:text-4xl font-bold">
            Trusted By Millions, Built For You
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 md:gap-12">
            <div>
              <p className="text-xs sm:text-sm opacity-90">Total Downloads</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3">
                29.6M
              </h2>
              <p className="text-xs sm:text-sm opacity-75 mt-3">
                21% More Than Last Month
              </p>
            </div>

            <div>
              <p className="text-xs sm:text-sm opacity-90">Total Reviews</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3">
                906K
              </h2>
              <p className="text-xs sm:text-sm opacity-75 mt-3">
                46% More Than Last Month
              </p>
            </div>

            <div>
              <p className="text-xs sm:text-sm opacity-90">Active Apps</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3">
                132+
              </h2>
              <p className="text-xs sm:text-sm opacity-75 mt-3">
                31 More Will Launch
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2937] mb-3">
            Trending Apps
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {top.map((app) => (
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

              <div className="flex justify-between items-center mt-2 text-xs sm:text-sm md:text-base text-gray-600">
                <span className="flex items-center gap-1 bg-[#F1F5E8] text-green-700 font-semibold px-2.5 py-1 rounded-md">
                  <img
                    src="/icon-downloads.png"
                    alt="Downloads"
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                  />
                  {(app.downloads / 1_000_000).toFixed(1)}M
                </span>

                <span className="flex items-center gap-1 bg-[#FFA07A]/30 text-[#FF6B00] font-semibold px-2.5 py-1 rounded-md">
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

        <div className="text-center mt-10">
          <Link
            to="/apps"
            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white border-none hover:opacity-90 px-8 sm:px-12 md:px-14 py-4 sm:py-6 md:py-8 text-sm sm:text-base md:text-lg font-semibold rounded-md"
          >
            Show All
          </Link>
        </div>
      </section>
    </div>
  );
}
