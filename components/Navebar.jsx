'use client';
import React, { useState, useEffect } from 'react';
import DropdownMenu from './DropdownMenu';

function Navbar({ onDropDown }) {
  // تحقق من الوضع المحفوظ في localStorage
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    // تفعيل أو تعطيل الوضع الداكن بناءً على الحالة المحفوظة
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // دالة لتبديل الوضع بين الفاتح والداكن
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-md transition-all">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse hover:opacity-80 transition-opacity">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 w-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-bold tracking-tight whitespace-nowrap dark:text-white">
            NewsSite
          </span>
        </a>

        {/* Navbar content */}
        <div className="flex items-center space-x-6">
          {/* Dropdown Menu for News Categories */}
          <DropdownMenu onDropDown={onDropDown} />

          {/* زر تبديل الوضع */}
          <button
            onClick={toggleTheme}
            className="relative w-10 h-5 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300 focus:outline-none"
          >
            <span className='absolute w-4 h-4 bg-gray-600 dark:bg-[#166ef5] rounded-full left-0 top-[1px] transition-transform transform translate-x-1 dark:translate-x-5  '></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
