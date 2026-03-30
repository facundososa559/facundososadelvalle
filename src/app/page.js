import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Card from "@/components/ui/Cards/Card";
import Newsletter from "@/components/ui/Newsletter";
import { articles } from "@/content/blog/articles";
import { recursos } from "@/content/recursos/recursos";
import { FiLink } from "react-icons/fi";

export default function Home() {
  return (
    <main>
      {/* =============== HERO ================== */}
      <div className="h-screen flex flex-col items-center justify-center text-center px-[var(--section-padding-inline-sm)] md:px-[var(--section-padding-inline-md)]">
        <div className="flex flex-col items-center gap-[var(--spacing-xs)] max-w-screen-md">
          <h1 className="paragraph-separated">FACU SOSA</h1>
          <h1 className="heading-1 text-[var(--color-text)] max-w-[560px]">
            Un lugar para artistas y creadores modernos.
          </h1>
          <p className="paragraph text-[var(--color-text-muted)] max-w-[560px]">
            Recursos, ideas y todo lo que aprendo en el camino. Dirigido a personas que buscan potenciar su mente, su tiempo y su futuro.
          </p>
          <a className="heading-6 flex items-center gap-[var(--spacing-xxxs)] special-link" href="#newsletter">
            <FiLink strokeWidth={2.5}/>
            Quiero unirme al blog
          </a>
        </div>
      </div>


      {/* ============ RECURSOS ============== */}
      <Section id="recursos">
        <div className="text-center mb-[var(--spacing-xl)]">
          <h2 className="heading-3 text-[var(--color-text)]">Recursos para músicos</h2>
          <p className="paragraph text-[var(--color-text-muted)]">Herramientas para que músicos de cualquier tipo puedan potenciar su proyecto.</p>
        </div>
        <Container columns={2}>
          {recursos.map((recurso) => (
            <Card
              key={recurso.slug}
              slug={recurso.slug}
              title={recurso.title}
              description={recurso.description}
              date={recurso.type}
              cover={recurso.cover}
              coverSize={"h-72"}
              buttonText="Obtener recurso"
              basePath="/recursos"
            />
          ))}
        </Container>
      </Section>

      {/* ============ SOBRE MI ============== */}
      <Section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-xxl)]">

          <div className="mb-[var(--spacing-xl)]">
            <h2 className="heading-3 text-[var(--color-text)]">A ver si te suena esto...</h2>
          </div>
          <div className="flex flex-col gap-[var(--spacing-xs)]">
            <p className="heading-4 text-[var(--color-text)]">Algo en tu mente todo el tiempo te empuja a buscar lo que querés.</p>
            <p className="paragraph text-[var(--color-text-muted)]">Pero por alguna razón algo te frena.</p>
            <p className="paragraph text-[var(--color-text-muted)]">No es un blog, ni es una marca, es una prueba de que este camino solo existe si uno lo crea.</p>
            <p className="paragraph text-[var(--color-text-muted)]">Si estás en la misma que yo, llegaste al lugar correcto.</p>
          </div>

        </div>
      </Section>

      {/* ============ BLOG ============== */}
      <Section id="blog">
        <div className="text-center mb-[var(--spacing-xl)]">
          <h2 className="heading-3 text-[var(--color-text)]">Últimos artículos</h2>
          <p className="paragraph text-[var(--color-text-muted)]">La mente, el arte moderno y el camino de construir una vida auténtica.</p>
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
              coverSize={"h-56"}
              buttonText="Leer artículo"
            />
          ))}
        </Container>
      </Section>




      <Newsletter />
    </main>
  );
}