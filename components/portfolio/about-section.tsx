import { Briefcase, GraduationCap, Sparkles } from 'lucide-react'
import { profile, timeline, type TimelineItem } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const typeConfig: Record<TimelineItem['type'], { icon: typeof Briefcase; label: string }> = {
  formation: { icon: GraduationCap, label: 'Formation' },
  stage: { icon: Briefcase, label: 'Stage' },
  experience: { icon: Sparkles, label: 'Expérience' },
}

export function AboutSection() {
  return (
    <section id="a-propos" aria-labelledby="about-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading id="about-title" eyebrow="01 — À propos" title="Parcours & projet professionnel" />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{profile.about}</p>
              <ul className="mt-8 flex flex-wrap gap-2" aria-label="Points forts">
                {['Rigueur', 'Travail en équipe', 'Curiosité', 'Autonomie', 'Méthode agile'].map((q) => (
                  <li key={q} className="rounded-full border border-border bg-card px-3 py-1 text-sm">
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <ol className="relative border-l border-border pl-8">
            {timeline.map((item, i) => {
              const { icon: Icon, label } = typeConfig[item.type]
              return (
                <li key={item.title} className="relative pb-10 last:pb-0">
                  <span
                    className="absolute -left-[3.05rem] flex size-9 items-center justify-center rounded-full border border-border bg-card text-primary"
                    aria-hidden="true"
                  >
                    <Icon className="size-4" />
                  </span>
                  <Reveal delay={i * 60}>
                    <div className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                        <span className="font-mono text-accent">{item.period}</span>
                        <span className="rounded bg-muted px-2 py-0.5 text-muted-foreground">{label}</span>
                      </div>
                      <h3 className="mt-2 font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.organization}</p>
                      <p className="mt-3 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </Reveal>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
