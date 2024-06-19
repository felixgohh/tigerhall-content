import IonIcon from '@reacticons/ionicons';
import React, { ChangeEvent, FormEvent } from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
  };

  return (
    <form role="search" autoComplete="off" onSubmit={handleSubmit}>
      <div className="flex flex-row items-center p-[14px] bg-grey-900 rounded-[4px] border border-grey-700">
        <IonIcon name="search" className="mr-[10px]"></IonIcon>
        <input
          type="text"
          value={searchTerm}
          onChange={onSearchChange}
          aria-label="Search podcasts"
          className="bg-transparent outline-none"
        />
      </div>
    </form>
  );
};

export default SearchBar;
