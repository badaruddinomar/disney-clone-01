import { useEffect, useState } from "react";
import MovieCard from "../movieCard/MovieCard";

const MovieList = () => {
  const [movieListName, setMovieListName] = useState([]);
  const apiBaseUrl = import.meta.env.VITE_TMDB_BASE_URL;
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  //   const imageBaseUrl = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;
  useEffect(() => {
    const fetchHandler = async () => {
      const url = `${apiBaseUrl}/genre/movie/list?api_key=${apiKey}&language=en`;
      const response = await fetch(url);
      const data = await response.json();
      setMovieListName(data.genres);
    };
    fetchHandler();
  }, [apiKey, apiBaseUrl]);

  return (
    <div className="w-full px-[40px] md:px-[50px]">
      {movieListName?.map((item) => {
        return (
          <div key={item.id}>
            <h4 className="font-semibold text-[18px] my-5 text-white">
              {item.name}
            </h4>
            <MovieCard movie={item} />
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
