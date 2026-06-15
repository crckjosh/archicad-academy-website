import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { courses } from '@/lib/data'
import { CourseCard } from '@/components/course-card'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'

export function FeaturedCourses() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Featured Courses"
          title="Learn the skills studios hire for"
          description="Hand-picked courses covering modeling, BIM, rendering, and documentation."
        />
        <Button variant="outline" asChild>
          <Link href="/courses">
            View all courses
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </section>
  )
}
