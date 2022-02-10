import PropTypes from "prop-types";
import style from "./Gif.module.css";
const Gif = ({ title, url }) => {
  return (
    <div className={style.card}>
      <figure className={style.image_container}>
        <img className={style.image} src={url} alt={title} />
        <figcaption className={style.caption}>{title}</figcaption>
      </figure>
    </div>
  );
};

Gif.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Gif;
