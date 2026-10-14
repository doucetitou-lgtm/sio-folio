import { Award, ExternalLink, Rss } from 'lucide-react'
import { certifications, veille } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function VeilleSection() {
  return (
    <section id="veille" aria-labelledby="veille-title" className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading id="veille-title" eyebrow="04 — Veille & certifications" title={veille.topic} description={veille.summary} />

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold">Méthodologie</h3>
              <ol className="mt-6 grid gap-4 sm:grid-cols-2">
                {veille.methodology.map((m, i) => (
                  <li key={m.step} className="rounded-xl bg-muted/60 p-4">
                    <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
                    <p className="mt-1 font-medium">{m.step}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-border bg-card p-6">
              <h3 className="flex items-center gap-2 font-semibold">
                <Rss className="size-4 text-accent" aria-hidden="true" />
                Sources & flux suivis
              </h3>
              <ul className="mt-6 divide-y divide-border">
                {veille.sources.map((s) => (
                  <li key={s.name} className="flex items-center justify-between gap-4 py-3 text-sm">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-xs text-muted-foreground">{s.type}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <h3 className="mt-16 mb-6 text-xl font-semibold">Certifications</h3>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c, i) => (
            <li key={c.name}>
              <Reveal delay={i * 70} className="h-full">
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/40"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                      <Award className="size-6" aria-hidden="true" />
                    </span>
                    <ExternalLink className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                  </div>
                  <p className="mt-4 font-medium leading-snug">{c.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
                  <div className="mt-auto flex items-center justify-between pt-4 font-mono text-xs">
                    <span className="text-accent">{c.score}</span>
                    <span className="text-muted-foreground">{c.date}</span>
                  </div>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
