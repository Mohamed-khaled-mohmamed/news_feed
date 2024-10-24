'use client';
import { useState } from 'react';

function DropdownMenu({onDropDown}) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState('Technology');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value) => {
    setDropdown(value);
    setIsOpen(false);
    onDropDown(value);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {dropdown}
        <svg className="w-5 h-5 ml-2 -mr-1 text-gray-400 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.293 7.707a1 1 0 011.414 0L10 11.414l3.293-3.707a1 1 0 011.414 0l.003.003a1 1 0 01-.003 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button onClick={() => handleSelect('Sports')} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
            Sports
            </button>
            <button onClick={() => handleSelect('Technology')} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
            Technology
            </button>
            <button onClick={() => handleSelect('Politics')} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
            Politics
            </button>
            <button onClick={() => handleSelect('Entertainment')} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
            Entertainment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;


<ul className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 space-y-2">
<li>
  <a href="#" className="block py-2 px-4 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-600 rounded transition-colors">
    Sports
  </a>
</li>
<li>
  <a href="#" className="block py-2 px-4 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-600 rounded transition-colors">
    Technology
  </a>
</li>
<li>
  <a href="#" className="block py-2 px-4 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-600 rounded transition-colors">
    Politics
  </a>
</li>
<li>
  <a href="#" className="block py-2 px-4 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-600 rounded transition-colors">
    Entertainment
  </a>
</li>
</ul>
