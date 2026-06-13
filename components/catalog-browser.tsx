'use client'

import * as React from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { courses, categories, levels, instructors, type Course } from '@/lib/data'
import { CourseCard } from '@/components/course-card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

type Price = 'all' | 'free' | 'paid'

export function CatalogBrowser({ initialLevel }: { initialLevel?: string }) {
  const [query, setQuery] = React.useState('')
  const [category, setCategory] = React.useState('All')
  const [activeLevels, setActiveLevels] = React.useState<string[]>(
    initialLevel ? [initialLevel] : [],
  )
  const [price, setPrice] = React.useState<Price>('all')
  const [instructor, setInstructor] = React.useState('all')
  const [sort, setSort] = React.useState('popular')
  const [showFilters, setShowFilters] = React.useState(false)

  const toggleLevel = (level: string) =>
    setActiveLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level],
    )

  const filtered = React.useMemo(() => {
    let result = courses.filter((c) => {
      const matchesQuery =
        !query ||
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        instructors[c.instructor]?.name.toLowerCase().includes(query.toLowerCase())
      const matchesCategory = category === 'All' || c.category === category
      const matchesLevel = activeLevels.length === 0 || activeLevels.includes(c.level)
      const matchesPrice =
        price === 'all' || (price === 'free' ? c.price === 0 : c.price > 0)
      const matchesInstructor = instructor === 'all' || c.instructor === instructor
      return matchesQuery && matchesCategory && matchesLevel && matchesPrice && matchesInstructor
    })

    result = [...result].sort((a, b) => {
      if (sort === 'rating') return b.rating - a.rating
      if (sort === 'students') return b.students - a.students
      if (sort === 'priceLow') return a.price - b.price
      if (sort === 'priceHigh') return b.price - a.price
      return b.students - a.students
    })
    return result
  }, [query, category, activeLevels, price, instructor, sort])

  const activeFilterCount =
    (category !== 'All' ? 1 : 0) +
    activeLevels.length +
    (price !== 'all' ? 1 : 0) +
    (instructor !== 'all' ? 1 : 0)

  const clearAll = () => {
    setCategory('All')
    setActiveLevels([])
    setPrice('all')
    setInstructor('all')
    setQuery('')
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Search + sort bar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses, topics, or instructors..."
            className="pl-9"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="lg:hidden"
            onClick={() => setShowFilters((s) => !s)}
          >
            <SlidersHorizontal className="size-4" />
            Filters
            {activeFilterCount > 0 && (
              <Badge className="ml-1 size-5 justify-center p-0">{activeFilterCount}</Badge>
            )}
          </Button>
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-[170px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most popular</SelectItem>
              <SelectItem value="rating">Highest rated</SelectItem>
              <SelectItem value="students">Most students</SelectItem>
              <SelectItem value="priceLow">Price: low to high</SelectItem>
              <SelectItem value="priceHigh">Price: high to low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[260px_1fr]">
        {/* Sidebar filters */}
        <aside className={cn('lg:block', showFilters ? 'block' : 'hidden')}>
          <div className="sticky top-24 space-y-6 rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <h2 className="font-heading font-semibold">Filters</h2>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearAll}
                  className="flex items-center gap-1 text-xs text-primary hover:underline"
                >
                  <X className="size-3" /> Clear
                </button>
              )}
            </div>

            <FilterGroup title="Category">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={cn(
                      'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
                      category === cat
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border text-muted-foreground hover:border-primary/40',
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </FilterGroup>

            <FilterGroup title="Level">
              <div className="space-y-2">
                {levels.map((level) => (
                  <label
                    key={level}
                    className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground"
                  >
                    <input
                      type="checkbox"
                      checked={activeLevels.includes(level)}
                      onChange={() => toggleLevel(level)}
                      className="size-4 accent-[var(--color-primary)]"
                    />
                    {level}
                  </label>
                ))}
              </div>
            </FilterGroup>

            <FilterGroup title="Price">
              <div className="flex gap-2">
                {(['all', 'free', 'paid'] as Price[]).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPrice(p)}
                    className={cn(
                      'flex-1 rounded-md border px-2 py-1.5 text-xs font-medium capitalize transition-colors',
                      price === p
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border text-muted-foreground hover:border-primary/40',
                    )}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </FilterGroup>

            <FilterGroup title="Instructor">
              <Select value={instructor} onValueChange={setInstructor}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="All instructors" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All instructors</SelectItem>
                  {Object.values(instructors).map((i) => (
                    <SelectItem key={i.id} value={i.id}>
                      {i.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FilterGroup>
          </div>
        </aside>

        {/* Results */}
        <div>
          <p className="mb-4 text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filtered.length}</span>{' '}
            {filtered.length === 1 ? 'course' : 'courses'}
          </p>
          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((course: Course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-20 text-center">
              <p className="font-heading text-lg font-semibold">No courses found</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Try adjusting your filters or search terms.
              </p>
              <Button variant="outline" className="mt-4" onClick={clearAll}>
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold">{title}</h3>
      {children}
    </div>
  )
}
