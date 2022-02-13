import { useState, useEffect, useRef } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const isMounted = useRef(true);
  const [gifs, setGifs] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setGifs({
      data: [],
      loading: true,
    });
    getGifs(category).then((imgs) => {
      isMounted.current &&
        setGifs({
          data: imgs,
          loading: false,
        });
    });
  }, [category]);

  return gifs;
};
