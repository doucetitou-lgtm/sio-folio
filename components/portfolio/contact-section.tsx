'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Send } from 'lucide-react'
import { Github, Linkedin } from './brand-icons'
import { profile } from '@/lib/portfolio-data'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const links = [
  { href: profile.github, label: 'GitHub', value: profile.github.replace('https://', ''), icon: Github },
  { href: profile.linkedin, label: 'LinkedIn', value: profile.linkedin.replace('https://www.', ''), icon: Linkedin },
  { href: `mailto:${profile.email}`, label: 'Email', value: profile.email, icon: Mail },
]

export function ContactSection() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const subject = String(data.get('subject') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const body = `${message}\n\n— ${name} (${email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="contact-title"
          eyebrow="05 — Contact"
          title="Travaillons ensemble"
          description="Une proposition de stage, d’alternance ou une question sur mes projets ? N’hésitez pas à me contacter."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <ul className="flex flex-col gap-3">
              {links.map(({ href, label, value, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium">{label}</span>
                      <span className="block truncate text-sm text-muted-foreground">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Nom</Label>
                  <Input id="name" name="name" required maxLength={100} autoComplete="name" placeholder="Jean Dupont" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required maxLength={150} autoComplete="email" placeholder="jean@entreprise.fr" />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input id="subject" name="subject" required maxLength={150} placeholder="Proposition de stage" />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" required maxLength={2000} rows={5} placeholder="Bonjour, …" />
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
                  {sent ? 'Votre messagerie s’est ouverte avec le message pré-rempli.' : ''}
                </p>
                <Button type="submit" size="lg" className="h-11 px-5">
                  <Send data-icon="inline-start" />
                  Envoyer le message
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
