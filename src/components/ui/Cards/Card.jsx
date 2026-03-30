import Link from "next/link";
import Button from "../Buttons/Button";
import { FiLink } from "react-icons/fi";

export default function Card({
  title,
  description,
  date,
  slug,
  coverTrue = true,
  cover,
  coverSize,
  buttonText,
  basePath = "/blog"
}) {
  return (
    <Link className="flex flex-col group" href={`${basePath}/${slug}`}>
        {coverTrue &&
          <div className="overflow-hidden">
            <img
              src={cover}
              alt={title}
              className={`w-full object-cover ${coverSize} group-hover:scale-110 transition-transform duration-200`}
            />
          </div>
        }

        <div className="flex flex-col gap-[var(--spacing-xxs)] pt-[var(--spacing-sm)] flex-1">

          {date && (
            <span className="label text-[var(--color-text-muted)]">{date}</span>
          )}

          <div className="flex flex-col gap-[var(--spacing-xxxs)] flex-1">
            <h4 className="heading-5 text-[var(--color-text)]">{title}</h4>
            <p className="paragraph text-[var(--color-text-muted)]">{description}</p>
          </div>

          <div className="pt-[var(--spacing-xxs)] mt-auto">
            <button className="heading-6 flex items-center gap-[var(--spacing-xxxs)] special-link cursor-pointer" href={`${basePath}/${slug}`}>
              <FiLink strokeWidth={2.5}/>
              {buttonText}
            </button>
          </div>

        </div>
      </Link>
  );
}