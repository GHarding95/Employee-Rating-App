import Cards from './Cards';
import { Person } from '../data/initialDetails';

interface SearchListProps {
    filteredPersons: Person[];
}

export default function SearchList({ filteredPersons }: SearchListProps) {
  const filtered = filteredPersons.map((person) => (
    <Cards key={person.id} person={person} />
  ));

  return <div className="flex">{filtered}</div>;
}