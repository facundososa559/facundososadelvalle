export default function Section({children, className = "", subtle = false, id}) {
    return (
        <section id={id} className={`flex flex-col py-(--spacing-xxxl) px-(--section-padding-inline-sm) md:px-(--section-padding-inline-md) lg:px-(--section-padding-inline-lg) ${subtle ? "section-subtle" : ""} ${className}
        `}>
            {children}
        </section>
    )
}