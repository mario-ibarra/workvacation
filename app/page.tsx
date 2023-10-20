import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PopularDestinations from './components/PopularDestinations'

export default function Home() {
  return (
    <main className="">
      <div className='px-10'>
      <Navbar />

      </div>
      <section className="m-4">
        <Hero />
      </section>
      <section className="bg-gray-200 m-0 px-8">
        <PopularDestinations />
      </section>
    </main>
  )
}
