"use client";

import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ onToggleDark, isDark }) {
  const pathname = usePathname();

  // Construye el breadcrumb a partir de la ruta
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbMap = {
    "blog": { label: "Blog", href: "/#blog" },
    "recursos": { label: "Recursos", href: "/#recursos" },
    "portfolio": { label: "Portfolio", href: "/#portfolio" },
    "sobre-mi": { label: "Sobre mí", href: "/#sobre-mi" },
  };

  return (
    <nav className="bg-[var(--color-bg)] absolute top-0 left-0 w-full z-50 px-[var(--section-padding-inline-sm)] md:px-[var(--section-padding-inline-md)] lg:px-[var(--section-padding-inline-lg)]">
      <div className="flex justify-between items-center py-[var(--spacing-sm)]">

        {/* BREADCRUMB */}
        <div className="flex items-center gap-[var(--spacing-xxs)]">
          <Link href="/" className="heading-6 special-link text-[var(--color-text)]">
            Inicio
          </Link>
          {segments.map((segment, i) => {
            const href = breadcrumbMap[segment]?.href || "/" + segments.slice(0, i + 1).join("/");
            const label = breadcrumbMap[segment]?.label || segment.replace(/-/g, " ");
            const isLast = i === segments.length - 1;

            return (
              <span key={href} className="flex items-center gap-[var(--spacing-xxs)]">
                <span className="paragraph-sm text-[var(--color-text-muted)]">/</span>
                {isLast ? (
                  <span className="paragraph text-[var(--color-text-muted)] capitalize">
                    {label}
                  </span>
                ) : (
                  <Link href={href} className="heading-6 special-link text-[var(--color-text)] capitalize">
                    {label}
                  </Link>
                )}
              </span>
            );
          })}
        </div>

        <button
          onClick={onToggleDark}
          className="p-[var(--spacing-xxs)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-all duration-200"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

      </div>
    </nav>
  );
}