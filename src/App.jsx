import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ListOfGifs from "./components/ListOfGifs/ListOfGifs";
import { usePagination } from "./hooks/usePagination";
import Pagination from "./components/Pagination/Pagination";
import styles from "./App.module.css";
import { useFetchGifs } from "./hooks/useFetchGifs";
function App() {
  const [category, setCategory] = useState("Dreamcatcher");
  const { data: gifs, loading } = useFetchGifs(category);
  const [gifsSelected, pageCount, changePage] = usePagination({
    data: gifs,
    itemsPerPage: 9,
  });

  return (
    <>
      <h1 className={styles.title}>Gif App</h1>
      <SearchBar setCategory={setCategory} />
      {loading ? (
        <span className={styles.spinner}></span>
      ) : (
        <>
          <ListOfGifs gifs={gifsSelected} />
          <Pagination
            gifs={gifsSelected}
            pageCount={pageCount}
            changePage={changePage}
          />
        </>
      )}
    </>
  );
}

export default App;
