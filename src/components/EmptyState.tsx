import { useNavigate } from "react-router-dom";

export default function EmptyState({
  title,
  subtitle,
  image = "/App-Error.png",
}: {
  title: string;
  subtitle?: string;
  image?: string;
}) {
  const navigate = useNavigate();

  return (
    <div className="text-center py-12 sm:py-16 md:py-20 opacity-90 px-4">
      <img
        src={image}
        alt="Error"
        className="h-40 sm:h-48 md:h-56 mx-auto mb-4 object-contain"
      />

      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
        {title}
      </h3>
      {subtitle && (
        <p className="opacity-75 mb-6 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}

      <button
        onClick={() => navigate("/")}
        className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-8 py-2 w-full sm:w-auto font-medium text-sm sm:text-base"
      >
        Go Back
      </button>
    </div>
  );
}
