export type SortKey = "hl" | "lh" | "none";
export default function SortSelect({
  value,
  onChange,
}: {
  value: SortKey;
  onChange: (v: SortKey) => void;
}) {
  return (
    <select
      className="select select-bordered"
      value={value}
      onChange={(e) => onChange(e.target.value as SortKey)}
    >
      <option value="none">Sort by Size</option>
      <option value="hl">High-Low</option>
      <option value="lh">Low-High</option>
    </select>
  );
}
