/* eslint-disable react/prop-types */
import { useState } from "react";
import defaultMovieBanner from "../../images/default-movie-banner.jpg";
import ReactPlayer from "react-player/lazy";
import CloseIcon from "@mui/icons-material/Close";

const SearchMovieCard = ({ movie }) => {
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [videoUrlKey, setVideoUrlKey] = useState("");

  const apiBaseUrl = import.meta.env.VITE_TMDB_BASE_URL;
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const imageBaseUrl = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

  // get single movie--
  const getSingleMovie = async (movieId) => {
    try {
      const url = `${apiBaseUrl}/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`;
      const response = await fetch(url);
      const data = await response.json();
      setVideoUrlKey(data?.videos?.results[0]?.key);
    } catch (err) {
      console.log(err);
    }
  };
  // backdrop handlers--
  const backdropOpenHandler = () => {
    setBackdropOpen(true);
  };
  const backdropCloseHandler = () => {
    setBackdropOpen(false);
  };
  const moviePosterPath = movie?.poster_path
    ? imageBaseUrl + movie?.poster_path
    : defaultMovieBanner;
  return (
    <>
      <div className="w-full sm:w-[250px] px-[10px] mx-2 my-5 focus:outline-none">
        <img
          src={moviePosterPath}
          alt={movie.title}
          className="w-full sm:w-[250px] cursor-pointer block h-[250px] sm:h-[150px] object-cover object-center rounded-md transition-all duration-300 hover:scale-110"
          onClick={async () => {
            backdropOpenHandler();
            await getSingleMovie(movie?.id);
          }}
        />
        <h4 className="my-5 leading-[1.5] text-[gray]">
          {movie.title.slice(0, 29)}
        </h4>
      </div>
      {/* Backdrop component-- */}
      <div
        className={`w-full h-[100vh] backdrop-sepia-0 bg-black/70  fixed top-0 left-0 z-10 ${
          backdropOpen ? "visible opacity-[1px]" : "invisible opacity-0"
        }`}
      >
        <div className="relative flex items-center justify-center w-full h-full p-3">
          <ReactPlayer
            url={` https://www.youtube.com/watch?v=${videoUrlKey}`}
            controls={true}
            playing={backdropOpen}
          />
        </div>
        <CloseIcon
          className="absolute text-white cursor-pointer top-5 right-5 bg-[gray] rounded-full w-[30px] h-[30px]"
          onClick={backdropCloseHandler}
        />
      </div>
    </>
  );
};

export default SearchMovieCard;
