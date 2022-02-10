import { useState } from "react";
import { useFetchGifs } from "./useFetchGifs";

export const usePagination = ({ category, gifsPerPage }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const { loading, data: gifs } = useFetchGifs(category);
  const pagesVisited = pageNumber * gifsPerPage;

  const selectedgifs = gifs?.slice(pagesVisited, pagesVisited + gifsPerPage);

  const pageCount = Math.ceil(gifs.length / gifsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return [selectedgifs, pageCount, changePage, loading];
};
