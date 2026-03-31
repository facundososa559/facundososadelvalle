import Button from "./Buttons/Button";

export default function Newsletter() {
  return (
    <section id="newsletter" className="px-[var(--section-padding-inline-sm)] md:px-[var(--section-padding-inline-md)] lg:px-[var(--section-padding-inline-lg)] py-[var(--spacing-xxxl)]">
      <div className="max-w-[600px] mx-auto flex flex-col items-center text-center gap-[var(--spacing-md)]">

        <div className="flex flex-col gap-[var(--spacing-xxxs)]">
          <p className="paragraph-separated text-[var(--color-text-muted)]">
            BLOG
          </p>
          <h2 className="heading-3 text-[var(--color-text)]">
            Todo lo que aprendo en el camino lo escribo acá en mi blog.
          </h2>
        </div>

        <a
          href="https://facundososadelvalle.substack.com/?utm_source=website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Quiero unirme</Button>
        </a>

      </div>
    </section>
  );
}