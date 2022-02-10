import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ListOfGifs from "./components/ListOfGifs/ListOfGifs";
import { usePagination } from "./hooks/usePagination";
import Pagination from "./components/Pagination/Pagination";
function GifExpertApp() {
  const [category, setCategory] = useState("Aespa");
  const [gifs, pageCount, changePage, loading] = usePagination({
    category,
    gifsPerPage: 9,
  });

  return (
    <>
      <h1>GifExpertApp</h1>
      <SearchBar setCategory={setCategory} />
      <ListOfGifs gifs={gifs} loading={loading} />
      <Pagination pageCount={pageCount} changePage={changePage} gifs={gifs} />
    </>
  );
}

export default GifExpertApp;
