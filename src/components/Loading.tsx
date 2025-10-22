export default function Loading({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[60]">
      <div className="flex items-center gap-3 bg-neutral p-4 rounded-2xl shadow-xl">
        <span className="loading loading-spinner loading-md"></span>
        <span className="font-medium">{label}</span>
      </div>
    </div>
  );
}
