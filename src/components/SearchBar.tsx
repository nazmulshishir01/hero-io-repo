import { useEffect, useState } from "react";

export default function SearchBar({
  onChange,
}: {
  onChange: (v: string) => void;
}) {
  const [v, setV] = useState("");
  useEffect(() => {
    const id = setTimeout(() => onChange(v), 300);
    return () => clearTimeout(id);
  }, [v]);
  return (
    <input
      value={v}
      onChange={(e) => setV(e.target.value)}
      placeholder="Search Apps."
      className="input input-bordered w-full md:w-80"
    />
  );
}
