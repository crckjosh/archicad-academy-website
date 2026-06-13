import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Globe, Video, Briefcase, Camera, MessageCircle } from 'lucide-react'

const groups = [
  {
    title: 'Learn',
    links: [
      { href: '/courses', label: 'All Courses' },
      { href: '/courses?level=Beginner', label: 'For Beginners' },
      { href: '/resources', label: 'Free Resources' },
      { href: '/blog', label: 'Blog' },
    ],
  },
  {
    title: 'Platform',
    links: [
      { href: '/dashboard', label: 'Student Dashboard' },
      { href: '/community', label: 'Community Forum' },
      { href: '/verify', label: 'Verify Certificate' },
      { href: '/live', label: 'Live Classes' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/contact', label: 'Contact' },
      { href: '/blog', label: 'News' },
      { href: '/register', label: 'Become an Instructor' },
      { href: '/contact', label: 'Support' },
    ],
  },
]

const socials = [
  { icon: Globe, label: 'Website', href: '#' },
  { icon: Video, label: 'YouTube', href: '#' },
  { icon: Briefcase, label: 'LinkedIn', href: '#' },
  { icon: Camera, label: 'Instagram', href: '#' },
  { icon: MessageCircle, label: 'WhatsApp', href: '#' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo className="[&_span:last-child]:text-secondary-foreground" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-secondary-foreground/70">
              East Africa&apos;s specialized learning platform for ArchiCAD, BIM, rendering, and
              construction documentation. Learn from industry professionals and build real
              projects.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-secondary-foreground/80 transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="font-heading text-sm font-semibold">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-secondary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} ArchiCAD Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary">
              Privacy
            </Link>
            <Link href="#" className="hover:text-primary">
              Terms
            </Link>
            <Link href="#" className="hover:text-primary">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
