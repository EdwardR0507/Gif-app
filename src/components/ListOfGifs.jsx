import PropTypes from "prop-types";
import Gif from "./Gif/Gif";

const ListOfGifs = ({ loading, gifs }) => {
  return (
    <section>
      <h2>Gifs</h2>
      {loading && <p>Loading...</p>}
      {gifs.map((gif) => (
        <Gif key={gif.id} id={gif.id} title={gif.title} url={gif.url} />
      ))}
    </section>
  );
};

ListOfGifs.propTypes = {
  loading: PropTypes.bool.isRequired,
  gifs: PropTypes.array.isRequired,
};

export default ListOfGifs;
