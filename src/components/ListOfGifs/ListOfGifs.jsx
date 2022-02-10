import PropTypes from "prop-types";
import Gif from "../Gif/Gif";
import styles from "./ListOfGifs.module.css";
const ListOfGifs = ({ loading, gifs }) => {
  return (
    <section className={styles.grid}>
      {loading && <div className={styles.spinner}></div>}
      {gifs.length > 0 ? (
        gifs.map((gif) => <Gif key={gif.id} title={gif.title} url={gif.url} />)
      ) : (
        <p className={styles.error}>No gifs found</p>
      )}
    </section>
  );
};

ListOfGifs.propTypes = {
  loading: PropTypes.bool.isRequired,
  gifs: PropTypes.array.isRequired,
};

export default ListOfGifs;
