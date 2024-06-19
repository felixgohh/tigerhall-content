import React, { useState, useEffect, ChangeEvent } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CONTENT_CARDS } from '../graphql/queries';
import {
  GetContentCardsData,
  GetContentCardsVars,
} from '../shared/content.type';
import SearchBar from './SearchBar';
import ContentCards from './ContentCards';

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
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-[24px]">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && <ContentCards cards={data.contentCards.edges} />}
      </section>
    </main>
  );
};

export default Content;
