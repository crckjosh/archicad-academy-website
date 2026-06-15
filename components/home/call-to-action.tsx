import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CallToAction() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-secondary px-6 py-16 text-center text-secondary-foreground sm:px-12 lg:py-20">
        <Image
          src="/cta-bg.png"
          alt=""
          fill
          className="object-cover opacity-30"
          aria-hidden="true"
        />
        <div className="relative">
          <h2 className="text-balance font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">
            Start Building Your Future Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-secondary-foreground/80">
            Join thousands of students mastering ArchiCAD and BIM. Your first course is on us.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild className="text-base">
              <Link href="/register">
                Create free account
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white/20 bg-white/5 text-base text-secondary-foreground hover:bg-white/10 hover:text-secondary-foreground"
            >
              <Link href="/courses">Explore courses</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
