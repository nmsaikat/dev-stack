import { use, useState } from "react";
import { toast } from "react-toastify";
import type { Technology } from "../types/technology";
import Container from "./Container";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

type TechnologiesProps = {
  techPromise: Promise<Technology[]>;
};

export default function Technologies({ techPromise }: TechnologiesProps) {
  const technologies = use(techPromise);
  const [stack, setStack] = useState<Technology[]>([]);

  const handleAdd = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);
    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }
    setStack([...stack, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (id: string) => {
    setStack(stack.filter((item) => item.id !== id));
    toast.info("Removed from your stack");
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("Stack cleared");
  };

  return (
    <section className="bg-white py-12">
      <Container>
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
            Explore the <span className="text-[#D91B7E]">Technologies</span>
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <TechnologyCard
                key={tech.id}
                technology={tech}
                isAdded={stack.some((item) => item.id === tech.id)}
                onAdd={handleAdd}
              />
            ))}
          </div>

          <YourStack
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </Container>
    </section>
  );
}
