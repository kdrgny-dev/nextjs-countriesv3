import React from 'react'

export default function SelectFilter({handleSelect}) {
  return (
    <select
      name="filter"
      id="filter"
      onChange={handleSelect}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
    >
      <option value="all">All</option>
      <option value="az">A-Z</option>
      <option value="population">Population</option>
      <option value="africa">Africa</option>
      <option value="americas">Americas</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  )
}
