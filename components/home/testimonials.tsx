'use client'

import * as React from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { StarRating } from '@/components/star-rating'

export function Testimonials() {
  const [index, setIndex] = React.useState(0)
  const count = testimonials.length

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count)

  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Student Stories"
          title="Loved by students and professionals"
        />

        <div className="relative mt-12">
          <div className="rounded-2xl border border-border bg-card p-8 text-center sm:p-12">
            <Quote className="mx-auto size-10 text-primary/30" />
            <p className="mx-auto mt-6 max-w-2xl text-balance text-xl font-medium leading-relaxed sm:text-2xl">
              &ldquo;{testimonials[index].quote}&rdquo;
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <Image
                src={testimonials[index].avatar || '/placeholder.svg'}
                alt={testimonials[index].name}
                width={56}
                height={56}
                className="size-14 rounded-full object-cover"
              />
              <div>
                <p className="font-heading font-semibold">{testimonials[index].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[index].role}</p>
              </div>
              <StarRating rating={5} size={16} />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Button variant="outline" size="icon" onClick={() => go(-1)} aria-label="Previous">
              <ChevronLeft className="size-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-6 bg-primary' : 'w-2 bg-border'
                  }`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={() => go(1)} aria-label="Next">
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
