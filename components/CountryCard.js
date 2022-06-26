import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function CountryCard({ country }) {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (country) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [country])

  return (
    <>
      {loading ? (
        <div className='rounded-lg shadow flex flex-col justify-center items-center gap-2 p-3 bg-gray-50 animate-pulse'>
          <div className='flex flex-col items-center text-center gap-1'>
            <div className='w-20 h-20 rounded-full shadow-md bg-gray-100'></div>
            <div className="font-bold text-xl h-5 bg-gray-100"></div>
          </div>
          <div className="flex gap-6">
            <div className='flex flex-col w-5 h-5 bg-gray-100'></div>
            <div className='flex flex-col w-5 h-5 bg-gray-100'></div>
            <div className='flex flex-col w-5 h-5 bg-gray-100'></div>
          </div>
        </div>
      ) : (
        <div
          className='rounded-lg 
                  border-2
                  border-blue-100 
                  shadow
                  bg-white 
                  flex 
                  flex-col 
                  justify-center 
                  items-center 
                  gap-2 
                  p-3
                  hover:bg-blue-200
                  hover:border-blue-300
                  transition-all duration-200
                  hover:cursor-pointer
                  hover:shadow-xl'
          key={country.name.common}
        >
          <div className='flex flex-col items-center text-center gap-1'>
            <div className='w-20 h-20 rounded-full shadow-md'>
              <Image src={country.flags.svg} className='rounded-full w-full h-full object-cover' alt={country.name.common} layout="responsive" width={'100%'} height={'100%'} />
            </div>
            <div className="font-bold text-xl">
              {country.name.common}
            </div>
          </div>
          <div className="flex gap-6">
            <div className='flex flex-col text-center'>
              <span className='text-gray-500'>Capital</span>
              <span className='font-bold text-gray-700'>{country.capital ? country.capital : '-'}</span>
            </div>
            <div className='flex flex-col text-center'>
              <span className='text-gray-500'>Population</span>
              <span className='font-bold text-gray-700'>{country.population.toLocaleString('tr')}</span>
            </div>
            <div className='flex flex-col text-center'>
              <span className='text-gray-500'>Region</span>
              <span className='font-bold text-gray-700'>{country.region}</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
