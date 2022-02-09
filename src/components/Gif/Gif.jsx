import PropTypes from "prop-types";
import style from "./Gif.module.css";
const Gif = ({ title, url }) => {
  return (
    <div className={style.card}>
      <div className={style.image_container}>
        <img className={style.image} src={url} alt={title} />
      </div>
      <p className={style.title}>{title}</p>
    </div>
  );
};

Gif.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Gif;
