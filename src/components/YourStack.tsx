import type { Technology } from "../types/technology";

type YourStackProps = {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

export default function YourStack({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <aside className="w-full flex-shrink-0 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm lg:w-80">
      {/* Title & Selected Count */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#0F172A]">Your Stack</h3>
        <p className="mt-1 text-sm font-normal text-slate-400">
          {stack.length > 0
            ? `${stack.length} Technology Selected`
            : "No technologies selected yet"}
        </p>
      </div>

      {/* Stack Items / Empty State */}
      {stack.length === 0 ? (
        <div className="flex h-32 items-center justify-center rounded-2xl border border-gray-100 bg-white">
          <span className="text-sm font-medium text-gray-300">
            Your stack is empty
          </span>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-3.5 shadow-xs"
            >
              <div className="flex items-center gap-3.5">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-8 w-8 object-contain"
                />
                <div>
                  <p className="text-sm font-bold text-gray-900">{item.name}</p>
                  <p className="text-xs font-medium text-slate-400">
                    {item.category}
                  </p>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="p-1 text-gray-400 transition-colors hover:text-gray-700"
                aria-label={`Remove ${item.name}`}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}

          {/* Bottom Remove All Button */}
          <button
            onClick={onRemoveAll}
            className="mt-4 w-full rounded-2xl border border-[#F87171] py-3 text-center text-sm font-bold text-[#DC2626] transition-colors hover:bg-red-50"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
}
