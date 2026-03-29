import Button from "./Buttons/Button";

export default function Newsletter() {
  return (
    <section id="newsletter" className="px-[var(--section-padding-inline-sm)] md:px-[var(--section-padding-inline-md)] lg:px-[var(--section-padding-inline-lg)] py-[var(--spacing-xxxl)]">
      <div className="max-w-[600px] mx-auto flex flex-col items-center text-center gap-[var(--spacing-md)]">
        
        <div className="flex flex-col gap-[var(--spacing-xxxs)]">
          <p className="paragraph-sm text-[var(--color-text-muted)]">
            BLOG
          </p>
          <h2 className="heading-3 text-[var(--color-text)]">
            Te sumo al blog si querés saber lo que está pasando. Te espero ahí.
          </h2>
        </div>

        <Button type="submit">
            Quiero unirme
        </Button>

      </div>
    </section>
  );
}