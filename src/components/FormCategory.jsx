import { useState } from "react";
import PropTypes from "prop-types";
const FormCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inputValue.trim() !== "" &&
      setCategories((categories) => [...categories, inputValue]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
    </form>
  );
};
FormCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
export default FormCategory;
