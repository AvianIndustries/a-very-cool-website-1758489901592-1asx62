export function HeroSection() {
  return (
    <div className="bg-blue-600 text-white py-20 px-10 text-center">
      <h1 className="text-4xl mb-5">Welcome to the World of Whales</h1>
      <p className="text-xl">Dive in to explore more about these magnificent creatures of the sea.</p>
      <Link href="/about"><button className="mt-5 bg-white text-blue-600 px-5 py-2 rounded text-lg">Learn More</button></Link>
    </div>
  )
}
