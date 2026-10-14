'use client'

import { useState } from 'react'
import { ExternalLink, FileText } from 'lucide-react'
import { Github } from './brand-icons'
import {
  competencies,
  projectCategories,
  projects,
  type Project,
  type ProjectCategory,
} from '@/lib/portfolio-data'
import { Badge } from '@/components/ui/badge'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

type Filter = 'Tous' | ProjectCategory

export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>('Tous')
  const [selected, setSelected] = useState<Project | null>(null)

  const filters: Filter[] = ['Tous', ...projectCategories]
  const visible = filter === 'Tous' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="realisations" aria-labelledby="projects-title" className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="projects-title"
          eyebrow="02 — Réalisations"
          title="Projets & situations professionnelles"
          description="Réalisations menées en stage, en ateliers de professionnalisation et à titre personnel. Chaque fiche détaille le contexte, les technologies et les compétences mobilisées."
        />

        <div role="group" aria-label="Filtrer par catégorie" className="mb-8 flex flex-wrap gap-2">
          {filters.map((f) => {
            const count = f === 'Tous' ? projects.length : projects.filter((p) => p.category === f).length
            return (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className={cn(
                  'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                  filter === f
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-card text-muted-foreground hover:text-foreground',
                )}
              >
                {f} <span className="ml-1 opacity-70">({count})</span>
              </button>
            )
          })}
        </div>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <li key={project.id}>
              <Reveal delay={(i % 3) * 80} className="h-full">
                <ProjectCard project={project} onOpen={() => setSelected(project)} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="sm:max-w-lg">
          {selected && <ProjectDetails project={selected} />}
        </DialogContent>
      </Dialog>
    </section>
  )
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <div className="flex items-center justify-between gap-2">
        <Badge variant="secondary">{project.category}</Badge>
        <div className="flex gap-1">
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: 'ghost', size: 'icon-sm' })}
              aria-label={`Code source de ${project.title}`}
            >
              <Github />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: 'ghost', size: 'icon-sm' })}
              aria-label={`Démo de ${project.title}`}
            >
              <ExternalLink />
            </a>
          )}
        </div>
      </div>

      <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
      <p className="mt-1 text-xs text-muted-foreground">{project.context}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
        {project.technologies.map((t) => (
          <li key={t} className="rounded-md bg-muted px-2 py-0.5 font-mono text-xs">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap items-center gap-1.5" aria-label="Compétences BTS associées">
        {project.competencies.map((c) => (
          <span key={c} className="rounded-md border border-primary/30 px-2 py-0.5 font-mono text-xs text-primary">
            {c}
          </span>
        ))}
      </div>

      <Button variant="outline" className="mt-6 w-full" onClick={onOpen}>
        <FileText data-icon="inline-start" />
        Voir la fiche détaillée / preuve
      </Button>
    </article>
  )
}

function ProjectDetails({ project }: { project: Project }) {
  return (
    <>
      <DialogHeader>
        <Badge variant="secondary" className="w-fit">
          {project.category}
        </Badge>
        <DialogTitle className="text-lg">{project.title}</DialogTitle>
        <DialogDescription>{project.context}</DialogDescription>
      </DialogHeader>

      <div className="flex flex-col gap-5">
        <p className="leading-relaxed">{project.description}</p>
        <div>
          <h4 className="mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">Missions réalisées</h4>
          <ul className="flex flex-col gap-1.5">
            {project.details.map((d) => (
              <li key={d} className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">Compétences mobilisées</h4>
          <ul className="flex flex-col gap-1.5">
            {competencies
              .filter((c) => project.competencies.includes(c.id))
              .map((c) => (
                <li key={c.id} className="flex gap-2">
                  <span className="font-mono text-primary">{c.id}</span>
                  {c.label}
                </li>
              ))}
          </ul>
        </div>
        <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.technologies.map((t) => (
            <li key={t} className="rounded-md bg-muted px-2 py-0.5 font-mono text-xs">
              {t}
            </li>
          ))}
        </ul>
      </div>

      <DialogFooter>
        {project.codeUrl && (
          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: 'outline' })}>
            <Github data-icon="inline-start" />
            Code source
          </a>
        )}
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: 'outline' })}>
            <ExternalLink data-icon="inline-start" />
            Démo
          </a>
        )}
        {project.proofUrl && (
          <a href={project.proofUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants()}>
            <FileText data-icon="inline-start" />
            Fiche de preuve (PDF)
          </a>
        )}
      </DialogFooter>
    </>
  )
}
