import React, { useState, useEffect, ChangeEvent } from 'react';
import SearchBar from './SearchBar';

const Content: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedSearch, setDebouncedSearch] = useState<string>(searchQuery);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <main>
      <SearchBar searchTerm={searchQuery} onSearchChange={handleSearchChange} />
    </main>
  );
};

export default Content;
