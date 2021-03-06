import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Detail({ country }) {

  return (
    <>
      <Head>
        <title>{ country?.name?.common} - Countries v3 - NextJS - TailwindCSS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sticky w-full top-0 bg-white z-10 py-5 shadoy-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between lg:items-center flex-col gap-5 lg:flex-row">
            <h1 className='text-3xl font-bold flex flex-col gap-2'>{country?.name?.official}
              <span className="text-xl text-gray-300 font-light">
                {country?.name?.common}
              </span>
            </h1>
            <Link href={'/'}>
              <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-full lg:w-auto">Back to List</button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <iframe
          width={"100%"}
          height={"300"}
          frameBorder={"0"}
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.googleApiKey}&q=${country.name.common}&zoom=4`}>
        </iframe>
      </div>
      
      <div className="container mx-auto my-5 px-4">
        <div className="bg-white shadow overflow-hidden">
          <div className="px-4 py-5 flex justify-between items-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">{country.name.official} Information</h3>
            <div className='w-20 h-20 rounded-full'>
              <Image src={country.flags.svg} alt={country.name.common} className='rounded-full object-cover' layout="responsive" width={'100%'} height={'100%'} />
            </div>
          </div>
          <div className="border-t border-gray-200 grid grid-cols-1 lg:grid-cols-2">
            <dl>
              <div className="bg-gray-50 px-4 py-5 flex lg:gap-20 gap-2 lg:items-center lg:flex-row flex-col">
                <dt className="text-sm font-bold text-gray-400 lg:min-w-[200px] min-w-full">Official Name</dt>
                <dd className="text-medium text-gray-900">{country.name.official}</dd>
              </div>
              <div className="bg-white px-4 py-5 flex lg:gap-20 gap-2 lg:items-center lg:flex-row flex-col">
                <dt className="text-sm font-bold text-gray-400 lg:min-w-[200px] min-w-full">Common Name</dt>
                <dd className="text-medium text-gray-900">{country.name.common}</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 flex lg:gap-20 gap-2 lg:items-center lg:flex-row flex-col">
                <dt className="text-sm font-bold text-gray-400 lg:min-w-[200px] min-w-full">Capital</dt>
                <dd className="text-medium text-gray-900">{country.capital}</dd>
              </div>
              <div className="bg-white px-4 py-5 flex lg:gap-20 gap-2 lg:items-center lg:flex-row flex-col">
                <dt className="text-sm font-bold text-gray-400 lg:min-w-[200px] min-w-full">Population</dt>
                <dd className="text-medium text-gray-900">{country.population.toLocaleString()}</dd>
              </div>
            </dl>
            <dl>
              <div className="bg-gray-50 px-4 py-5 flex lg:gap-20 gap-2 lg:items-center lg:flex-row flex-col">
                <dt className="text-sm font-bold text-gray-400 lg:min-w-[200px] min-w-full">Region</dt>
                <dd className="text-medium text-gray-900">{country.region}</dd>
              </div>
              <div className="bg-white px-4 py-5 flex lg:gap-20 gap-2 lg:items-center lg:flex-row flex-col">
                <dt className="text-sm font-bold text-gray-400 lg:min-w-[200px] min-w-full">Sub Region</dt>
                <dd className="text-medium text-gray-900">{country.subregion}</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 flex lg:gap-20 gap-2 lg:items-center lg:flex-row flex-col">
                <dt className="text-sm font-bold text-gray-400 lg:min-w-[200px] min-w-full">Time Zones</dt>
                <dd className="text-medium text-gray-900">{country.timezones.map((item, index) => (
                  <span className='pr-1' key={index}>{item}</span>
                ))}</dd>
              </div>
              <div className="bg-white px-4 py-5 flex lg:gap-20 gap-2 lg:items-center lg:flex-row flex-col">
                <dt className="text-sm font-bold text-gray-400 lg:min-w-[200px] min-w-full">Area</dt>
                <dd className="text-medium text-gray-900">{country.area.toLocaleString()} &#x33A2;</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://restcountries.com/v3.1/all')
  const data = await res.json()
  return {
    paths: data.map(country => ({ params: { id: country.cca3?.toLowerCase().toString() } })),
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const res = await fetch('https://restcountries.com/v3.1/alpha/' + params.id)
  const data = await res.json()
  return {
    props: {
      country: data[0],
    },
  }
}

