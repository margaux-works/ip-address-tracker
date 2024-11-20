import { useState } from 'react';
import arrowIcon from '../assets/icon-arrow.svg';

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center py-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for any IP address or domain "
        className="border px-4 py-2 rounded-l-md w-96"
      />
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded-r-lg flex justify-center items-center"
      >
        <img src={arrowIcon} alt="submit button" className="w-3 h-3" />
      </button>
    </form>
  );
}
