'use client';
import { useState } from 'react';
import NewsFeed from '../components/NewsFeed';
import SearchBar from '../components/SearchBar';
import Navebar from 'components/Navebar';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Navebar onDropDown={handleSearch}/>
      <main className="container mx-auto px-4">
        <SearchBar onSearch={handleSearch} />
        <NewsFeed searchQuery={searchQuery} />
      </main>
    </>
  );
}
