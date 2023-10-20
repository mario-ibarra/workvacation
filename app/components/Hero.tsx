import Image from "next/image"
import woman from '../../public/beach-work.jpg'


const Hero = () => {
  return (
    <div className="md:grid lg:grid-cols-2 gap-4 2xl:grid-cols-5 ">
      <div className="mb-6 lg:hidden">
        <Image src={woman} alt="woman working" className="rounded-lg" />
      </div>
      <div className="sm:max-w-xl sm:px-10 sm:py-8 lg:max-w-full xl:pr-0 2xl:col-span-2 2xl:pr-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-wider mb-4  lg:text-5xl xl:text-6xl">
          You can work from anywhere.{' '}
          <span className="text-brand">
            <br className="sm:inline-block" />
            Take advantage of it
          </span>
        </h1>
        <p className="text-gray-900 text-lg sm:text-xl lg:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          voluptatibus obcaecati consequuntur repudiandae expedita itaque
          tenetur suscipit explicabo repellendus
        </p>
        <div className="mt-6 space-x-4">
          <button
            type="submit"
            className="btn btn-primary shadow-lg hover:-translate-y-0.5 transform transition
"
          >
            Book your scape
          </button>
          <button type="submit" className="btn btn-secondary">
            Learn More
          </button>
        </div>
      </div>
      <div className="hidden lg:block 2xl:col-span-3">
        <Image src={woman} alt="woman working" className="rounded-lg" />
      </div>
    </div>
  )
}

export default Hero