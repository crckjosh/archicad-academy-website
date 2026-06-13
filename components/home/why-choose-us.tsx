import {
  Award,
  Download,
  GraduationCap,
  Hammer,
  Infinity as InfinityIcon,
  Smartphone,
} from 'lucide-react'
import { whyChooseUs } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

const icons = {
  GraduationCap,
  Hammer,
  Download,
  Award,
  Infinity: InfinityIcon,
  Smartphone,
}

export function WhyChooseUs() {
  return (
    <section className="bg-muted/40 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Why Choose Us"
          title="Everything you need to go pro"
          description="A complete learning experience built specifically for architecture, BIM, and construction professionals."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons]
            return (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
