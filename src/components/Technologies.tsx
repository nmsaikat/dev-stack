import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { Technology } from "../types/technology";
import Container from "./Container";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

export default function Technologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState<Technology[]>([]);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

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
    <section className="py-16">
      <Container>
        {loading ? (
          <p className="text-center text-base-muted">Loading technologies...</p>
        ) : (
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
        )}
      </Container>
    </section>
  );
}
