import Image from 'next/image'
import Link from 'next/link'

interface DestinationsProps {
  imageUrl: string
  imageAlt: string
  city: string
  propertyCount: number
  averagePrice: number
}

const sizeClasses = {
  height:'h-32',
  width:'w-32'
}

const DestinationCard = ({
  imageUrl,
  imageAlt,
  city,
  propertyCount,
  averagePrice,
}:DestinationsProps) => {
  return (
    <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
      <Link href="/" className="cursor-pointer">
        {/* <Image
            src={imageUrl}
            alt={imageAlt}
            width={`128`}
            height={128}
            className="rounded-l-lg p-0 m-0"
          /> */}
        <img
          src={imageUrl}
          alt={imageAlt}
          className="{`h-${sizeClasses.height} w-${sizeClasses.width}`} sm:h-36 w-36 flex-shrink-0"
        />
      </Link>

      <div>
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-800 uppercase">
            {city}
          </h3>
          <p className="text-gray-600">${averagePrice}/night average</p>
          <div>
            <a
              href="#"
              className="text-md semi-bold text-branddark hover:text-brand sm:text-lg"
            >
              Explore {propertyCount} properties
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DestinationCard
