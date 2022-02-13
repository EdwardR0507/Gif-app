import PropTypes from "prop-types";
import Gif from "../Gif/Gif";
import styles from "./ListOfGifs.module.css";
const ListOfGifs = ({ gifs }) => {
  return (
    <section className={styles.grid}>
      {gifs.length > 0 ? (
        gifs.map((gif) => <Gif key={gif.id} title={gif.title} url={gif.url} />)
      ) : (
        <p className={styles.noGifs}>No gifs found</p>
      )}
    </section>
  );
};

ListOfGifs.propTypes = {
  gifs: PropTypes.array.isRequired,
};

export default ListOfGifs;
