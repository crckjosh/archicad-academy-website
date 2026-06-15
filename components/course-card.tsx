import Link from 'next/link'
import Image from 'next/image'
import { Clock, PlayCircle, Users } from 'lucide-react'
import { type Course, instructors } from '@/lib/data'
import { Badge } from '@/components/ui/badge'
import { StarRating } from '@/components/star-rating'
import { cn } from '@/lib/utils'

const levelColor: Record<string, string> = {
  Beginner: 'bg-accent/15 text-accent border-accent/20',
  Intermediate: 'bg-chart-5/15 text-chart-5 border-chart-5/20',
  Advanced: 'bg-primary/15 text-primary border-primary/20',
}

export function CourseCard({ course }: { course: Course }) {
  const instructor = instructors[course.instructor]
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={course.thumbnail || '/placeholder.svg'}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <Badge className={cn('border', levelColor[course.level])} variant="outline">
            {course.level}
          </Badge>
          {course.bestseller && (
            <Badge className="bg-secondary text-secondary-foreground">Bestseller</Badge>
          )}
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-secondary/40 opacity-0 transition-opacity group-hover:opacity-100">
          <PlayCircle className="size-12 text-white" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-medium text-primary">{course.category}</p>
        <h3 className="mt-1 line-clamp-2 font-heading text-base font-semibold leading-snug">
          {course.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{instructor?.name}</p>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-sm font-semibold text-chart-5">{course.rating.toFixed(1)}</span>
          <StarRating rating={course.rating} />
          <span className="text-xs text-muted-foreground">
            ({course.reviews.toLocaleString()})
          </span>
        </div>

        <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Users className="size-3.5" />
            {course.students.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="size-3.5" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <PlayCircle className="size-3.5" />
            {course.lessons}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
          {course.price === 0 ? (
            <span className="font-heading text-lg font-bold text-accent">Free</span>
          ) : (
            <span className="font-heading text-lg font-bold">${course.price}</span>
          )}
          <span className="text-sm font-medium text-primary group-hover:underline">
            View course
          </span>
        </div>
      </div>
    </Link>
  )
}
