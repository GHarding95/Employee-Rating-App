import React, { useState } from 'react';
import SearchList from './SearchList';
import { Person } from '../data/initialDetails';

interface SearchProps {
    details: Person[];
}

export default function Search({ details }: SearchProps) {
  const [searchField, setSearchField] = useState('');

  const filteredPersons = details.filter((person) => {
    return (
      person.name.toLowerCase().includes(searchField.toLowerCase()) ||
      person.email.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return <SearchList filteredPersons={filteredPersons} />;
  }

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Employee Rating App</h2>
      </div>
      <div className="pa2">
        <input
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type="search"
          placeholder="Search People"
          onChange={handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}