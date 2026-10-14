import { Reveal } from './reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow: string
  title: string
  description?: string
  id: string
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="font-mono text-sm font-medium tracking-wide text-accent">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{description}</p>
      )}
    </Reveal>
  )
}
