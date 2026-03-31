import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import { recursos } from "@/content/recursos/recursos";
import Button from "@/components/ui/Buttons/Button";

export async function generateStaticParams() {
  return recursos.map((recurso) => ({
    slug: recurso.slug,
  }));
}

export default async function RecursoPage({ params }) {
  const { slug } = await params;
  const recurso = recursos.find((r) => r.slug === slug);

  const filePath = path.join(process.cwd(), "src/content/recursos/recursos", `${slug}.md`);
  const content = fs.readFileSync(filePath, "utf-8");

  return (
    <>
      <div className="w-full h-[340px] md:h-[400px] overflow-hidden">
        <img
          src={recurso.cover}
          alt={recurso.title}
          className="w-full h-full object-cover"
        />
      </div>
      <main className="pt-[var(--spacing-xxl)] px-[var(--section-padding-inline-sm)] md:px-[var(--section-padding-inline-md)] lg:px-[var(--section-padding-inline-lg)] py-[var(--spacing-xxxl)]">

        {/* HEADER */}
        <div className="flex flex-col gap-[var(--spacing-xs)] mb-[var(--spacing-xxl)] pb-[var(--spacing-xl)] border-b border-[var(--color-border)]">
          <span className="label text-[var(--color-text-muted)]">Recurso</span>
          <h1 className="heading-1 text-[var(--color-text)]">{recurso.title}</h1>
          <p className="paragraph text-[var(--color-text-muted)]">{recurso.description}</p>
        </div>

        {/* LAYOUT DOS COLUMNAS */}
        <div className="flex flex-col lg:flex-row gap-[var(--spacing-xxl)] items-start">

          {/* CONTENIDO — columna izquierda */}
          <div className="w-[70%]">
            <ReactMarkdown
              components={{
                h2: ({ children }) => <h2 className="heading-3 text-[var(--color-text)] [&:not(:first-child)]:mt-[var(--spacing-xxl)] mb-[var(--spacing-sm)]">{children}</h2>,
                h3: ({ children }) => <h3 className="heading-4 text-[var(--color-text)] mb-[var(--spacing-xs)]">{children}</h3>,
                p: ({ children }) => <p className="paragraph mb-[var(--spacing-xs)]">{children}</p>,
                ul: ({ children }) => (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-xs)] my-[var(--spacing-md)]">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="flex items-start gap-[var(--spacing-xxs)]">
                    <span className="text-[var(--color-text)] mt-[2px] shrink-0">✓</span>
                    <span className="paragraph text-[var(--color-text)]">{children}</span>
                  </li>
                ),
                hr: () => <hr className="border-t border-[var(--color-border)] my-[var(--spacing-xxl)]" />,
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-[var(--color-accent)] pl-[var(--spacing-md)] my-[var(--spacing-xl)] italic text-[var(--color-text-muted)]">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>

          {/* CTA STICKY — columna derecha */}
          <div className="lg:sticky lg:top-[var(--spacing-xxxl)] w-[40%] shrink-0">
            <div className="flex flex-col gap-[var(--spacing-md)] p-[var(--spacing-md)] border border-[var(--color-border)]">
              <div className="flex flex-col gap-[var(--spacing-xxs)]">
                <span className="heading-4 text-[var(--color-text)]">{recurso.price}</span>
                <p className="paragraph text-[var(--color-text-muted)]">{recurso.description}</p>
              </div>
              <a
                href={recurso.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full">{recurso.cta}</Button>
              </a>
              <p className="paragraph-sm text-[var(--color-text-muted)] text-center">
                Sin registros. Sin spam.
              </p>
            </div>
          </div>

        </div>

      </main>
    </>

  );
}