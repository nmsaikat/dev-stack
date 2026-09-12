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
    <div className="flex flex-col justify-between rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div>
        {/* Header: Icon & Badge */}
        <div className="flex items-start justify-between">
          <img src={icon} alt={name} className="h-9 w-9 object-contain" />
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-500">
            {badge}
          </span>
        </div>

        {/* Info */}
        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-900">{name}</h3>
          <p className="mt-2 text-xs leading-relaxed text-gray-400 line-clamp-3">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-6">
        {/* Meta tags & rating */}
        <div className="mb-4 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-gray-50 px-2.5 py-1 text-gray-600">
              {category}
            </span>
            <span className="text-gray-400">{difficulty}</span>
          </div>
          <div className="flex items-center gap-1 font-semibold text-gray-700">
            <span className="text-amber-400">★</span>
            {rating}
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          className={`w-full rounded-lg py-2.5 text-xs font-semibold transition-all ${
            isAdded
              ? "cursor-not-allowed bg-gray-100 text-gray-400"
              : "bg-[#0b0f19] text-white hover:bg-gray-800"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}
