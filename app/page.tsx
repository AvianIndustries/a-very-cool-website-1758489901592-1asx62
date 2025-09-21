import Link from 'next/link'
import { HeroSection, WhaleFacts, Footer } from '../components'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <WhaleFacts />
      <Footer />
    </div>
  )
}
