export default function SearchBar({ setSearchTerm }) {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Search books..."
          className="p-2 border rounded w-full"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    );
  }
  