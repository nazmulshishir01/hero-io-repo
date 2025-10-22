export default function RatingStars({ avg }: { avg: number }) {
  const filled = Math.round(avg);

  return (
    <div className="rating rating-sm sm:rating-md" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <input
          key={i}
          type="radio"
          name="avg-stars"
          aria-hidden="true"
          className={`mask mask-star-2 ${
            i < filled ? "bg-yellow-400" : "bg-gray-400"
          }`}
          readOnly
        />
      ))}
    </div>
  );
}
