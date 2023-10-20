import { popularDestinatios } from '../data/popularDestinations'
import DestinationCard from './DestinationCard'

const PopularDestinations = () => {
  return (
    <>
      <h2 className="text-4xl font-bold mb-4 pt-4 ">
        Popular Destinations
      </h2>
      <p className='text-lg font-semibold sm:text-2xl'>A selection of great work-friendly cities with lots to see and explore.</p>
      <div className="mt-6 grid gap-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {popularDestinatios.map((destination) => (
            <DestinationCard key={destination.city} {...destination} />
          ))}
        </div>
      </div>
    </>
  )
}

export default PopularDestinations
