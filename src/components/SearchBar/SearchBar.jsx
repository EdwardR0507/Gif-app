import PropTypes from "prop-types";
import useField from "../../hooks/useField";
import styles from "./SearchBar.module.css";
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
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        placeholder="Type something..."
        {...category}
        name="category"
      />
      <button type="submit">
        <span className="material-icons">search</span>
      </button>
    </form>
  );
};
SearchBar.propTypes = {
  setCategory: PropTypes.func.isRequired,
};
export default SearchBar;
