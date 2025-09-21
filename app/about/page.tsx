import Link from 'next/link'
import { Footer } from '../../components/Footer'

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-blue-600 text-white py-20 px-10 text-center">
        <h1 className="text-4xl mb-5">About Whales</h1>
        <p className="text-xl">Whales are a widely distributed and diverse group of fully aquatic placental marine mammals. They are an informal grouping within the infraorder Cetacea, usually excluding dolphins and porpoises.</p>
        <Link href="/"><button className="mt-5 bg-white text-blue-600 px-5 py-2 rounded text-lg">Home</button></Link>
      </div>
      <Footer />
    </div>
  )
}
