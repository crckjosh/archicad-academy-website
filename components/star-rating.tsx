import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function StarRating({
  rating,
  className,
  size = 14,
}: {
  rating: number
  className?: string
  size?: number
}) {
  return (
    <div className={cn('flex items-center gap-0.5', className)} aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          style={{ width: size, height: size }}
          className={cn(
            i < Math.round(rating)
              ? 'fill-chart-5 text-chart-5'
              : 'fill-muted text-muted',
          )}
        />
      ))}
    </div>
  )
}
