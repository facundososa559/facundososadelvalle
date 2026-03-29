import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import { articles } from "@/content/blog/articles";

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  const filePath = path.join(process.cwd(), "src/content/blog/articles", `${slug}.md`);
  const content = fs.readFileSync(filePath, "utf-8");

  return (
    <main className="px-[var(--section-padding-inline-sm)] md:px-[var(--section-padding-inline-md)] lg:px-[var(--blog-article-inline-lg)] py-[var(--spacing-xxxl)]">
      <div className="flex flex-col gap-[var(--spacing-md)] mb-[var(--spacing-xxl)]">
        <p className="label text-[var(--color-text-muted)]">{article.date} · {article.author}</p>
        <h1 className="heading-1 text-[var(--color-text)]">{article.title}</h1>
        <p className="paragraph text-[var(--color-text-muted)]">{article.description}</p>
      </div>
      <ReactMarkdown
        components={{
          h2: ({ children }) => <h2 className="heading-3 text-[var(--color-text)] mt-[var(--spacing-xxl)] mb-[var(--spacing-sm)]">{children}</h2>,
          h3: ({ children }) => <h3 className="heading-4 text-[var(--color-text)] mt-[var(--spacing-xl)] mb-[var(--spacing-xs)]">{children}</h3>,
          p: ({ children }) => <p className="paragraph mb-[var(--spacing-sm)]">{children}</p>,
          li: ({ children }) => <li className="paragraph mb-[var(--spacing-xxs)]">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-[var(--color-accent)] pl-[var(--spacing-md)] my-[var(--spacing-xl)] italic text-[var(--color-text-muted)]">
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </main>
  );
}