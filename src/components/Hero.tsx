import heroImage from "../assets/banner-stack.png";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
            <h1 className="text-4xl font-extrabold leading-tight text-base-text md:text-6xl">
              <span className="block">Build Your Ideal</span>
              <span className="brand-gradient-text block">
                Development Stack
              </span>
            </h1>

            <p className="max-w-md text-base-muted">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <button className="brand-gradient-bg rounded-full px-6 py-3 font-semibold text-white">
                Explore Technologies
              </button>
              <button className="rounded-lg border border-base-border px-6 py-3 font-semibold text-base-text">
                Learn More
              </button>
            </div>
          </div>

          <img
            src={heroImage}
            alt="Development stack illustration"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </Container>
    </section>
  );
}
