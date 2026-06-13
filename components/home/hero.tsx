import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, PlayCircle, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(var(--color-secondary-foreground)_1px,transparent_1px),linear-gradient(90deg,var(--color-secondary-foreground)_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-secondary-foreground/80">
            <Sparkles className="size-3.5 text-primary" />
            East Africa&apos;s #1 ArchiCAD learning platform
          </div>
          <h1 className="mt-5 text-balance font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Master ArchiCAD and BIM from{' '}
            <span className="text-primary">Beginner to Professional</span>
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-secondary-foreground/75">
            Learn practical architectural design, BIM workflows, rendering, and construction
            documentation from industry professionals.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild className="text-base">
              <Link href="/register">
                Start Learning
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white/20 bg-white/5 text-base text-secondary-foreground hover:bg-white/10 hover:text-secondary-foreground"
            >
              <Link href="/courses">
                <PlayCircle className="size-4" />
                Browse Courses
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm text-secondary-foreground/70">
            <div className="flex -space-x-2">
              {['/student-1.png', '/student-2.png', '/student-3.png', '/student-4.png'].map(
                (src) => (
                  <Image
                    key={src}
                    src={src || '/placeholder.svg'}
                    alt=""
                    width={32}
                    height={32}
                    className="size-8 rounded-full border-2 border-secondary object-cover"
                  />
                ),
              )}
            </div>
            <span>Joined by 12,400+ students worldwide</span>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <Image
              src="/hero-workspace.png"
              alt="Architect working on a 3D BIM model in ArchiCAD"
              width={720}
              height={520}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl glass p-4 text-foreground shadow-xl sm:block">
            <p className="text-xs text-muted-foreground">Course completion</p>
            <p className="font-heading text-2xl font-bold text-accent">94%</p>
          </div>
        </div>
      </div>
    </section>
  )
}
