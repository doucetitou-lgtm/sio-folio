import { Mail } from 'lucide-react'
import { Github, Linkedin } from './brand-icons'
import { profile } from '@/lib/portfolio-data'
import { buttonVariants } from '@/components/ui/button'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="text-sm text-muted-foreground">
          <p>
            © {year} {profile.firstName} {profile.lastName}. Tous droits réservés.
          </p>
          <p className="mt-1">
            Portfolio réalisé dans le cadre de l&apos;épreuve E5 du BTS SIO — option {profile.option} — {profile.session}.
          </p>
        </div>
        <ul className="flex gap-1" aria-label="Réseaux">
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={buttonVariants({ variant: 'ghost', size: 'icon' })}>
              <Github />
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={buttonVariants({ variant: 'ghost', size: 'icon' })}>
              <Linkedin />
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`} aria-label="Email" className={buttonVariants({ variant: 'ghost', size: 'icon' })}>
              <Mail />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
