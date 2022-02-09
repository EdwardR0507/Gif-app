import { useState } from "react";
import PropTypes from "prop-types";
const SearchBar = ({ setCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inputValue.trim() !== "" && setCategory(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
    </form>
  );
};
SearchBar.propTypes = {
  setCategory: PropTypes.func.isRequired,
};
export default SearchBar;
