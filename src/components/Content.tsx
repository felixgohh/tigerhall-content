import React, { useState, useEffect, ChangeEvent } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CONTENT_CARDS } from '../graphql/queries';
import {
  GetContentCardsData,
  GetContentCardsVars,
} from '../shared/content.type';
import SearchBar from './SearchBar';

const Content: React.FC = () => {
  const [searchKey, setSearchKey] = useState<string>('');
  const [debounceSearch, setDebouncedSearch] = useState<string>(searchKey);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchKey);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchKey]);

  const { loading, error, data } = useQuery<
    GetContentCardsData,
    GetContentCardsVars
  >(GET_CONTENT_CARDS, {
    variables: { keywords: debounceSearch },
  });

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKey(event.target.value);
  };

  return (
    <main>
      <SearchBar searchTerm={searchKey} onSearchChange={handleSearchChange} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data &&
        data.contentCards.edges.map((edge) => (
          <div key={edge.name}>
            <h2>{edge.name}</h2>
            <img src={edge.image.uri} alt={edge.name} />
          </div>
        ))}
    </main>
  );
};

export default Content;
