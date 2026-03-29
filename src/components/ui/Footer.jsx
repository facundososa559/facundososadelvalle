import Link from "next/link";
import { SiInstagram, SiTiktok, SiThreads, SiSubstack } from "react-icons/si";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/tuusuario", icon: <SiInstagram size={24} /> },
  { label: "TikTok", href: "https://tiktok.com/@tuusuario", icon: <SiTiktok size={24} /> },
  { label: "Threads", href: "https://threads.net/@tuusuario", icon: <SiThreads size={24} /> },
  { label: "Substack", href: "https://tuusuario.substack.com", icon: <SiSubstack size={24} /> },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="px-[var(--section-padding-inline-sm)] md:px-[var(--section-padding-inline-md)] lg:px-[var(--section-padding-inline-lg)] py-[var(--spacing-xxl)]">
        {/* TOP */}
        <div className="flex md:flex-row justify-between gap-[var(--spacing-xl)]">
          {/* MARCA */}
          <div className="flex flex-col gap-[var(--spacing-xs)]">
            {/* REDES */}
            <div className="flex items-center gap-[var(--spacing-sm)]">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          {/* BOTTOM */}
          <div>
            <p className="paragraph-sm text-[var(--color-text-muted)]">
              © {/* {new Date().getFullYear()}. */} Todos los derechos reservados.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}