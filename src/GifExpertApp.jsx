import { useState } from "react";
import FormCategory from "./components/FormCategory";

function GifExpertApp() {
  const [categories, setCategories] = useState([]);
  return (
    <>
      <h1>GifExpertApp</h1>
      <FormCategory setCategories={setCategories} />
      <hr />
    </>
  );
}

export default GifExpertApp;
