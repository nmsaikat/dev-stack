import type { Technology } from "../types/technology";

type TechnologyCardProps = {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
};

export default function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) {
  const { name, category, description, icon, rating, difficulty, badge } =
    technology;

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-base-border bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <img src={icon} alt={name} className="h-10 w-10 object-contain" />
        <span className="brand-gradient-bg rounded-full px-3 py-1 text-xs font-semibold text-white">
          {badge}
        </span>
      </div>

      <div>
        <h3 className="text-lg font-bold text-base-text">{name}</h3>
        <p className="mt-1 text-sm text-base-muted">{description}</p>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className="rounded-full bg-gray-100 px-3 py-1 font-medium text-base-text">
          {category}
        </span>
        <span className="text-base-muted">{difficulty}</span>
      </div>

      <div className="flex items-center gap-1 text-sm font-medium text-base-text">
        <span className="text-yellow-400">★</span>
        {rating}
      </div>

      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
          isAdded
            ? "cursor-not-allowed bg-gray-100 text-base-muted"
            : "brand-gradient-bg text-white"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
