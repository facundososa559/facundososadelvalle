import { articles } from "@/content/blog/articles";
import Card from "@/components/ui/Cards/Card";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";

export default function BlogPage() {
  return (
    <main>
      <Section>
        <div className="flex flex-col gap-[var(--spacing-xs)] mb-[var(--spacing-xxl)]">
          <span className="label text-[var(--color-accent)]">Blog</span>
          <h1 className="heading-2 text-[var(--color-text)]">Todos los artículos</h1>
          <p className="paragraph text-[var(--color-text-muted)]">
            Música, creatividad y el camino de construir una vida de artista.
          </p>
        </div>
        <Container columns={3}>
          {articles.map((article) => (
            <Card
              key={article.slug}
              slug={article.slug}
              title={article.title}
              description={article.description}
              date={article.date}
              cover={article.cover}
              buttonText="Leer artículo"
            />
          ))}
        </Container>
      </Section>
    </main>
  );
}