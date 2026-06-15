import { SiteShell } from '@/components/site-shell'
import { Hero } from '@/components/home/hero'
import { Stats } from '@/components/home/stats'
import { FeaturedCourses } from '@/components/home/featured-courses'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { Testimonials } from '@/components/home/testimonials'
import { CallToAction } from '@/components/home/call-to-action'

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <Stats />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </SiteShell>
  )
}
