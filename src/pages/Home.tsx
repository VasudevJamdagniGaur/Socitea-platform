import { Seo } from '@/components/seo/Seo'
import { Hero } from '@/components/home/Hero'
import { ProductShowcase } from '@/components/home/ProductShowcase'
import { Features } from '@/components/home/Features'
import { HowItWorks } from '@/components/home/HowItWorks'
import { PlatformCards } from '@/components/home/PlatformCards'
import { FAQPreview } from '@/components/home/FAQPreview'
import { FinalCTA } from '@/components/home/FinalCTA'
import { products } from '@/config/products'

export function Home() {
  return (
    <>
      <Seo
        title={`${products.brand.name} — Discover. Create. Share.`}
        description={products.brand.description}
        path="/"
      />
      <Hero />
      <ProductShowcase />
      <Features />
      <HowItWorks />
      <PlatformCards />
      <FAQPreview />
      <FinalCTA />
    </>
  )
}
