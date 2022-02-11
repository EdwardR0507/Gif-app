import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ListOfGifs from "./components/ListOfGifs/ListOfGifs";
import { usePagination } from "./hooks/usePagination";
import Pagination from "./components/Pagination/Pagination";
function App() {
  const [category, setCategory] = useState("Dreamcatcher");
  const [gifs, pageCount, changePage, loading] = usePagination({
    category,
    gifsPerPage: 9,
  });

  return (
    <>
      <h1 className="title">Gif App</h1>
      <SearchBar setCategory={setCategory} />
      <ListOfGifs gifs={gifs} loading={loading} />
      <Pagination pageCount={pageCount} changePage={changePage} gifs={gifs} />
    </>
  );
}

export default App;
