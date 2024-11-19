import { useState } from 'react';

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
        className="bg-blue-600 text-white px-4 py-2 rounded-r-md"
      ></button>
    </form>
  );
}
