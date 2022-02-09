import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ListOfGifs from "./components/ListOfGifs/ListOfGifs";
import { useFetchGifs } from "./hooks/useFetchGifs";

function GifExpertApp() {
  const [category, setCategory] = useState("Aespa");

  const { loading, data: gifs } = useFetchGifs(category);

  return (
    <>
      <h1>GifExpertApp</h1>
      <SearchBar setCategory={setCategory} />
      <ListOfGifs gifs={gifs} loading={loading} />
      <hr />
    </>
  );
}

export default GifExpertApp;
