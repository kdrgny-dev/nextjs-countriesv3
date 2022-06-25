import React from 'react'

export default function SearchInput({query, searchCountry}) {
  return (
    <input
      type="text"
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
      placeholder="Search Country..."
      value={query}
      onChange={searchCountry}
    />
  )
}
