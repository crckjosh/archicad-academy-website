import type { Metadata } from 'next'
import { SiteShell } from '@/components/site-shell'
import { CatalogBrowser } from '@/components/catalog-browser'

export const metadata: Metadata = {
  title: 'Course Catalog',
  description:
    'Browse ArchiCAD, BIM, rendering, and construction documentation courses for every skill level.',
}

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<{ level?: string }>
}) {
  const { level } = await searchParams

  return (
    <SiteShell>
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl font-bold sm:text-4xl">Course Catalog</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Explore expert-led courses in ArchiCAD, BIM, rendering, and construction
            documentation. Filter by level, price, and instructor to find your next skill.
          </p>
        </div>
      </section>
      <CatalogBrowser initialLevel={level} />
    </SiteShell>
  )
}
