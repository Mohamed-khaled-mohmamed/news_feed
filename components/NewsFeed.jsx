'use client';

import { useState, useEffect } from 'react';
import Pagination from './Pagination';
import Loading from '@/loading';

export default function NewsFeed({ searchQuery }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const placeholderImage = 'https://via.placeholder.com/150';

  useEffect(() => {
    fetchNews(searchQuery);
  }, [searchQuery]);

  const fetchNews = async (query = '') => {
    try {
      setLoading(true);
      const response = await fetch(`/api/news${query ? `?query=${query}` : ''}`);
      console.log({ response });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      // Filter articles
      console.log({ data });

      const filteredData = data.articles.filter((article) => article !== null && !article.removed && article.title !== '[Removed]');

      setNews(filteredData);
      setCurrentPage(1);
      setError(null);
    } catch (err) {
      setError('An error occurred while loading news.', err);
    } finally {
      setLoading(false);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = news.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {news.length === 0 ? (
        <p className="text-center text-xl mt-4 dark:text-white">No search results</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentItems.map((article, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <img src={article.urlToImage || placeholderImage} alt={article.title} className="w-full h-48 object-cover" />
                  {article.hasWomen && <div className="absolute top-0 right-0 bg-pink-500 text-white px-2 py-1 text-xs font-bold">Women</div>}
                </div>

                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 dark:text-white">{article.title}</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{article.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Source: {article.source.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Published on: {new Date(article.publishedAt).toLocaleDateString('en-US')}</p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="block mt-4 text-blue-500 dark:text-blue-400 hover:underline">
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>

          <Pagination itemsPerPage={itemsPerPage} totalItems={news.length} paginate={setCurrentPage} currentPage={currentPage} />
        </>
      )}
    </div>
  );
}
