import { ArrowRight, Download, MapPin } from 'lucide-react'
import { Linkedin } from './brand-icons'
import { profile } from '@/lib/portfolio-data'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

export function HeroSection() {
  return (
    <section id="accueil" aria-labelledby="hero-title" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              En recherche de stage / alternance
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 id="hero-title" className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {profile.firstName} {profile.lastName}
              <span className="mt-2 block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Étudiant(e) en BTS SIO — option {profile.option}
              </span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">{profile.tagline}</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#realisations" className={cn(buttonVariants({ size: 'lg' }), 'h-11 px-5')}>
                Voir mes réalisations
                <ArrowRight data-icon="inline-end" />
              </a>
              <a
                href={profile.cvUrl}
                download
                className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-11 px-5')}
              >
                <Download data-icon="inline-start" />
                Télécharger mon CV (PDF)
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: 'ghost', size: 'lg' }), 'h-11 px-5')}
              >
                <Linkedin data-icon="inline-start" />
                Mon LinkedIn
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="rounded-2xl border border-border bg-card shadow-xl shadow-primary/5">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3" aria-hidden="true">
              <span className="size-3 rounded-full bg-muted-foreground/30" />
              <span className="size-3 rounded-full bg-muted-foreground/30" />
              <span className="size-3 rounded-full bg-muted-foreground/30" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">profil.json</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-sm leading-7">
              <code>
                <span className="text-muted-foreground">{'{'}</span>
                {'\n  '}
                <span className="text-primary">{'"formation"'}</span>
                {': '}
                <span className="text-accent">{'"BTS SIO"'}</span>
                {',\n  '}
                <span className="text-primary">{'"option"'}</span>
                {': '}
                <span className="text-accent">{`"${profile.option}"`}</span>
                {',\n  '}
                <span className="text-primary">{'"établissement"'}</span>
                {': '}
                <span className="text-accent">{`"${profile.school}"`}</span>
                {',\n  '}
                <span className="text-primary">{'"session"'}</span>
                {': '}
                <span className="text-accent">{`"${profile.session}"`}</span>
                {',\n  '}
                <span className="text-primary">{'"disponible"'}</span>
                {': '}
                <span className="text-chart-3">true</span>
                {'\n'}
                <span className="text-muted-foreground">{'}'}</span>
              </code>
            </pre>
            <dl className="grid grid-cols-3 border-t border-border">
              {profile.highlights.map((h) => (
                <div key={h.label} className="border-r border-border px-4 py-4 text-center last:border-r-0">
                  <dt className="sr-only">{h.label}</dt>
                  <dd className="text-2xl font-semibold">{h.value}</dd>
                  <dd className="mt-1 text-xs text-muted-foreground">{h.label}</dd>
                </div>
              ))}
            </dl>
            <p className="flex items-center gap-2 border-t border-border px-5 py-3 text-xs text-muted-foreground">
              <MapPin className="size-3.5" aria-hidden="true" />
              {profile.location}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
