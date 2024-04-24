import React from 'react'
import Cards from './Cards'

export default function SearchList({filteredPersons}) {

    const filtered = filteredPersons.map(person => <Cards key={person.id} person={person}/>)

  return (
    <div className='flex'>
      {filtered}
    </div>
  )
}
