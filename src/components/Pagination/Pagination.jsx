import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";

const Pagination = ({ gifs, pageCount, changePage }) => {
  return (
    <>
      {gifs.length > 0 && (
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
      )}
    </>
  );
};

Pagination.propTypes = {
  gifs: PropTypes.array.isRequired,
  pageCount: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
};

export default Pagination;
