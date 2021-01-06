import './style.css'

const SearchLast = ({ placeholder, handleChange }) => {
    return (
      <input
        className="searchlast"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    );
  };
  
  export default SearchLast;