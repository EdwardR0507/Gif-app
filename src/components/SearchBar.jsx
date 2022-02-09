import PropTypes from "prop-types";
import useField from "../hooks/useField";
import { useLocation } from "wouter";
const SearchBar = ({ setCategory }) => {
  const category = useField({ type: "text" });
  const [, pushLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    category.value.trim() !== "" && setCategory(category.value);
    pushLocation(`/category/${category.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Type something..." {...category} name="category" />
    </form>
  );
};
SearchBar.propTypes = {
  setCategory: PropTypes.func.isRequired,
};
export default SearchBar;
