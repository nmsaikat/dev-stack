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
    <aside className="w-full flex-shrink-0 rounded-2xl border border-base-border bg-white p-6 lg:w-80">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-base-text">Your Stack</h3>
          <p className="text-sm text-base-muted">
            {stack.length} Technology Selected
          </p>
        </div>
        {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-sm font-medium text-red-500 hover:underline"
          >
            Remove All
          </button>
        )}
      </div>

      {stack.length === 0 ? (
        <p className="text-sm text-base-muted">
          No technologies selected yet. Click "Add to Stack" on any card to get
          started.
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-3 rounded-xl border border-base-border p-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-8 w-8 object-contain"
                />
                <div>
                  <p className="text-sm font-semibold text-base-text">
                    {item.name}
                  </p>
                  <p className="text-xs text-base-muted">{item.category}</p>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-base-muted hover:text-red-500"
                aria-label={`Remove ${item.name}`}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}
