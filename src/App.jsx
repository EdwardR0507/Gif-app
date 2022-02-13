import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ListOfGifs from "./components/ListOfGifs/ListOfGifs";
import { usePagination } from "./hooks/usePagination";
import Pagination from "./components/Pagination/Pagination";
import styles from "./App.module.css";
function App() {
  const [category, setCategory] = useState("Dreamcatcher");
  const [gifs, pageCount, changePage, loading] = usePagination({
    category,
    gifsPerPage: 9,
  });

  return (
    <>
      <h1 className={styles.title}>Gif App</h1>
      <SearchBar setCategory={setCategory} />
      {loading ? (
        <span className={styles.spinner}></span>
      ) : (
        <>
          <ListOfGifs gifs={gifs} />
          <Pagination
            gifs={gifs}
            pageCount={pageCount}
            changePage={changePage}
          />
        </>
      )}
    </>
  );
}

export default App;
