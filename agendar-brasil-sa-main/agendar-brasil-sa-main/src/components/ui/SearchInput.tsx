
import { Search } from "lucide-react";
import { useState } from "react";

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
  className?: string;
}

export function SearchInput({ placeholder = "Buscar...", onSearch, className = "" }: SearchInputProps) {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchValue);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative flex items-center w-full ${className}`}
    >
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-full py-3 pl-12 pr-4 text-gray-700 bg-white border rounded-full 
        border-gray-300 focus:outline-none focus:ring-2 focus:ring-medical-300 
        focus:border-transparent transition-all duration-200"
        placeholder={placeholder}
      />
      <Search
        className="absolute left-4 text-gray-400"
        size={20}
      />
      <button
        type="submit"
        className="absolute right-2 bg-medical-500 text-white p-2 rounded-full 
        hover:bg-medical-600 focus:outline-none focus:ring-2 focus:ring-medical-300 
        transition-colors duration-200"
      >
        <Search size={18} />
      </button>
    </form>
  );
}
