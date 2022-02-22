import { useState } from "react";

export const usePagination = ({ data, itemsPerPage }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const pagesVisited = pageNumber * itemsPerPage;

  const selectedItems = data?.slice(pagesVisited, pagesVisited + itemsPerPage);

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return [selectedItems, pageCount, changePage];
};
