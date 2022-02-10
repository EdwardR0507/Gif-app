import { useState } from "react";
import ReactPaginate from "react-paginate";
import SearchBar from "./components/SearchBar/SearchBar";
import ListOfGifs from "./components/ListOfGifs/ListOfGifs";
import { usePagination } from "./hooks/usePagination";
import styles from "./GifExpertApp.module.css";
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
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        onPageChange={changePage}
        containerClassName={styles.paginationBttns}
        previousLinkClassName={styles.previousBttn}
        nextLinkClassName={styles.nextBttn}
        disabledClassName={styles.paginationDisabled}
        activeClassName={styles.paginationActive}
      />
    </>
  );
}

export default GifExpertApp;
