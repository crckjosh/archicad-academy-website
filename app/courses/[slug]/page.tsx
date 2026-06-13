import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  BadgeCheck,
  CheckCircle2,
  ChevronRight,
  Clock,
  Download,
  Globe,
  Infinity as InfinityIcon,
  PlayCircle,
  Smartphone,
  Users,
} from 'lucide-react'
import { courses, getCourse, instructors } from '@/lib/data'
import { SiteShell } from '@/components/site-shell'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { StarRating } from '@/components/star-rating'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const course = getCourse(slug)
  if (!course) return { title: 'Course not found' }
  return { title: course.title, description: course.subtitle }
}

const faqs = [
  {
    q: 'Do I need any prior experience?',
    a: 'Each course lists its requirements. Beginner courses assume no prior CAD or BIM experience, while advanced courses expect comfort with ArchiCAD modeling.',
  },
  {
    q: 'How long do I have access?',
    a: 'You get lifetime access to every course you enroll in, including all future updates to the material.',
  },
  {
    q: 'Will I get a certificate?',
    a: 'Yes. When you complete all lessons and pass the final quiz, a verifiable certificate is generated automatically.',
  },
  {
    q: 'Can I watch on mobile?',
    a: 'Absolutely. The platform is fully responsive and your progress syncs across all your devices.',
  },
]

const reviews = [
  {
    name: 'Brian Kamau',
    avatar: '/student-1.png',
    rating: 5,
    date: '2 weeks ago',
    text: 'Clear, practical, and well paced. I finally understand how to structure a BIM model properly.',
  },
  {
    name: 'Faith Njeri',
    avatar: '/student-2.png',
    rating: 5,
    date: '1 month ago',
    text: 'The downloadable templates alone are worth it. Saved me hours on my current project.',
  },
  {
    name: 'Samuel Mutua',
    avatar: '/student-3.png',
    rating: 4,
    date: '1 month ago',
    text: 'Great content. Would love even more real-world examples, but overall excellent value.',
  },
]

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const course = getCourse(slug)
  if (!course) notFound()

  const instructor = instructors[course.instructor]
  const totalLessons = course.curriculum.reduce((sum, m) => sum + m.lessons.length, 0)

  return (
    <SiteShell>
      {/* Banner */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
          <div>
            <nav className="flex items-center gap-1 text-sm text-secondary-foreground/60">
              <Link href="/courses" className="hover:text-primary">
                Courses
              </Link>
              <ChevronRight className="size-3.5" />
              <span>{course.category}</span>
            </nav>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>{course.level}</Badge>
              {course.bestseller && (
                <Badge className="bg-primary text-primary-foreground">Bestseller</Badge>
              )}
            </div>
            <h1 className="mt-4 text-balance font-heading text-3xl font-bold sm:text-4xl">
              {course.title}
            </h1>
            <p className="mt-3 max-w-2xl text-pretty text-lg text-secondary-foreground/80">
              {course.subtitle}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <span className="flex items-center gap-2">
                <span className="font-semibold text-chart-5">{course.rating.toFixed(1)}</span>
                <StarRating rating={course.rating} />
                <span className="text-secondary-foreground/60">
                  ({course.reviews.toLocaleString()} reviews)
                </span>
              </span>
              <span className="flex items-center gap-1.5 text-secondary-foreground/80">
                <Users className="size-4" />
                {course.students.toLocaleString()} students
              </span>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <Image
                src={instructor.avatar || '/placeholder.svg'}
                alt={instructor.name}
                width={40}
                height={40}
                className="size-10 rounded-full object-cover"
              />
              <p className="text-sm">
                Created by{' '}
                <span className="font-semibold text-primary">{instructor.name}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
        {/* Main content */}
        <div className="space-y-12">
          {/* Objectives */}
          <section className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-heading text-xl font-bold">What you&apos;ll learn</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {course.objectives.map((o) => (
                <div key={o} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                  <span className="text-sm text-muted-foreground">{o}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Curriculum */}
          <section>
            <div className="flex items-end justify-between">
              <h2 className="font-heading text-xl font-bold">Course curriculum</h2>
              <p className="text-sm text-muted-foreground">
                {course.curriculum.length} modules · {totalLessons} lessons · {course.duration}
              </p>
            </div>
            <Accordion type="multiple" className="mt-4 rounded-xl border border-border bg-card">
              {course.curriculum.map((mod, idx) => (
                <AccordionItem
                  key={mod.id}
                  value={mod.id}
                  className="border-border px-4 last:border-b-0"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <span className="flex items-center gap-3 text-left font-medium">
                      <span className="text-sm text-muted-foreground">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      {mod.title}
                      <span className="text-xs font-normal text-muted-foreground">
                        ({mod.lessons.length} lessons)
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1">
                      {mod.lessons.map((lesson) => (
                        <li
                          key={lesson.id}
                          className="flex items-center justify-between rounded-md px-2 py-2 hover:bg-muted"
                        >
                          <span className="flex items-center gap-2 text-sm text-muted-foreground">
                            <PlayCircle className="size-4 text-primary" />
                            {lesson.title}
                            {lesson.preview && (
                              <Badge variant="outline" className="text-[10px]">
                                Preview
                              </Badge>
                            )}
                          </span>
                          <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Requirements */}
          <section>
            <h2 className="font-heading text-xl font-bold">Requirements</h2>
            <ul className="mt-4 space-y-2">
              {course.requirements.map((r) => (
                <li key={r} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {r}
                </li>
              ))}
            </ul>
          </section>

          {/* Instructor */}
          <section>
            <h2 className="font-heading text-xl font-bold">Your instructor</h2>
            <div className="mt-4 flex flex-col gap-4 rounded-xl border border-border bg-card p-6 sm:flex-row">
              <Image
                src={instructor.avatar || '/placeholder.svg'}
                alt={instructor.name}
                width={96}
                height={96}
                className="size-24 rounded-full object-cover"
              />
              <div>
                <p className="flex items-center gap-1.5 font-heading text-lg font-semibold">
                  {instructor.name}
                  <BadgeCheck className="size-4 text-accent" />
                </p>
                <p className="text-sm text-primary">{instructor.title}</p>
                <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted-foreground">
                  <span>{instructor.rating} instructor rating</span>
                  <span>{instructor.students.toLocaleString()} students</span>
                  <span>{instructor.courses} courses</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {instructor.bio}
                </p>
              </div>
            </div>
          </section>

          {/* Reviews */}
          <section>
            <h2 className="font-heading text-xl font-bold">Student reviews</h2>
            <div className="mt-4 space-y-4">
              {reviews.map((r) => (
                <div key={r.name} className="rounded-xl border border-border bg-card p-5">
                  <div className="flex items-center gap-3">
                    <Image
                      src={r.avatar || '/placeholder.svg'}
                      alt={r.name}
                      width={40}
                      height={40}
                      className="size-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold">{r.name}</p>
                      <div className="flex items-center gap-2">
                        <StarRating rating={r.rating} size={12} />
                        <span className="text-xs text-muted-foreground">{r.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{r.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-heading text-xl font-bold">Frequently asked questions</h2>
            <Accordion type="single" collapsible className="mt-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>

        {/* Sticky enroll card */}
        <aside>
          <div className="sticky top-24 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="relative aspect-video">
              <Image
                src={course.thumbnail || '/placeholder.svg'}
                alt={course.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-secondary/30">
                <PlayCircle className="size-14 text-white" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-baseline gap-2">
                {course.price === 0 ? (
                  <span className="font-heading text-3xl font-bold text-accent">Free</span>
                ) : (
                  <>
                    <span className="font-heading text-3xl font-bold">${course.price}</span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${Math.round(course.price * 1.6)}
                    </span>
                  </>
                )}
              </div>
              <Button asChild size="lg" className="mt-4 w-full">
                <Link href={`/learn/${course.slug}`}>
                  {course.price === 0 ? 'Enroll for free' : 'Enroll now'}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="mt-2 w-full">
                <Link href={`/learn/${course.slug}`}>Preview course</Link>
              </Button>
              <Separator className="my-5" />
              <p className="text-sm font-semibold">This course includes:</p>
              <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <PlayCircle className="size-4 text-primary" />
                  {course.lessons} on-demand video lessons
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="size-4 text-primary" />
                  {course.duration} of content
                </li>
                <li className="flex items-center gap-2">
                  <Download className="size-4 text-primary" />
                  Downloadable resources
                </li>
                <li className="flex items-center gap-2">
                  <Smartphone className="size-4 text-primary" />
                  Access on mobile and desktop
                </li>
                <li className="flex items-center gap-2">
                  <InfinityIcon className="size-4 text-primary" />
                  Full lifetime access
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="size-4 text-primary" />
                  Certificate of completion
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </SiteShell>
  )
}
