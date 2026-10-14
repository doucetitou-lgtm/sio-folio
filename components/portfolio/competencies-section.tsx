'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { competencies, projects, type CompetencyId } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function CompetenciesSection() {
  const [activeComp, setActiveComp] = useState<CompetencyId | null>(null)
  const [activeProject, setActiveProject] = useState<string | null>(null)

  const isHighlighted = (projectId: string, compId: CompetencyId) =>
    activeComp === compId || activeProject === projectId

  return (
    <section id="competences" aria-labelledby="skills-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="skills-title"
          eyebrow="03 — Épreuve E5"
          title="Tableau de synthèse des compétences"
          description="Correspondance entre les six compétences du bloc 1 « Support et mise à disposition de services informatiques » et mes réalisations. Survolez ou sélectionnez une ligne ou une colonne pour la mettre en évidence."
        />

        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <caption className="sr-only">
                Matrice des réalisations et des compétences du référentiel BTS SIO
              </caption>
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="p-4 text-left font-medium text-muted-foreground">
                    Réalisation
                  </th>
                  {competencies.map((c) => (
                    <th key={c.id} scope="col" className="p-2 text-center">
                      <button
                        type="button"
                        title={c.label}
                        aria-pressed={activeComp === c.id}
                        onMouseEnter={() => setActiveComp(c.id)}
                        onMouseLeave={() => setActiveComp(null)}
                        onFocus={() => setActiveComp(c.id)}
                        onBlur={() => setActiveComp(null)}
                        className={cn(
                          'flex w-full flex-col items-center rounded-lg px-2 py-2 transition-colors',
                          activeComp === c.id ? 'bg-primary/10 text-primary' : 'hover:bg-muted',
                        )}
                      >
                        <span className="font-mono font-semibold">{c.id}</span>
                        <span className="text-xs font-normal text-muted-foreground">{c.short}</span>
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {projects.map((p) => (
                  <tr
                    key={p.id}
                    onMouseEnter={() => setActiveProject(p.id)}
                    onMouseLeave={() => setActiveProject(null)}
                    className={cn(
                      'border-b border-border transition-colors last:border-b-0',
                      activeProject === p.id && 'bg-muted/60',
                    )}
                  >
                    <th scope="row" className="p-4 text-left font-normal">
                      <span className="block font-medium">{p.title}</span>
                      <span className="text-xs text-muted-foreground">{p.category}</span>
                    </th>
                    {competencies.map((c) => {
                      const has = p.competencies.includes(c.id)
                      return (
                        <td
                          key={c.id}
                          className={cn(
                            'p-2 text-center transition-colors',
                            activeComp === c.id && 'bg-primary/5',
                          )}
                        >
                          {has ? (
                            <span
                              className={cn(
                                'mx-auto flex size-8 items-center justify-center rounded-lg transition-all',
                                isHighlighted(p.id, c.id)
                                  ? 'scale-110 bg-primary text-primary-foreground'
                                  : 'bg-primary/15 text-primary',
                              )}
                            >
                              <Check className="size-4" aria-hidden="true" />
                              <span className="sr-only">Compétence mobilisée</span>
                            </span>
                          ) : (
                            <span className="text-muted-foreground/40" aria-label="Non mobilisée">
                              —
                            </span>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-border bg-muted/40">
                  <th scope="row" className="p-4 text-left text-xs font-medium text-muted-foreground">
                    Couverture
                  </th>
                  {competencies.map((c) => (
                    <td key={c.id} className="p-2 text-center font-mono text-xs text-muted-foreground">
                      {projects.filter((p) => p.competencies.includes(c.id)).length}
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {competencies.map((c, i) => (
            <li key={c.id}>
              <Reveal delay={(i % 3) * 60} className="h-full">
                <div
                  className={cn(
                    'h-full rounded-xl border bg-card p-5 transition-colors',
                    activeComp === c.id ? 'border-primary' : 'border-border',
                  )}
                >
                  <span className="font-mono text-sm font-semibold text-primary">{c.id}</span>
                  <p className="mt-2 text-sm leading-relaxed">{c.label}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
