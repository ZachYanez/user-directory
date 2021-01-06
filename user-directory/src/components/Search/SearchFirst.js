import './style.css'; 



const SearchFirst = ({ placeholder, handleChange }) => {
    return (
      <input
        className="searchFirst"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    );
  };
  
  export default SearchFirst;