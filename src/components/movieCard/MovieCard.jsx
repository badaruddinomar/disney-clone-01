/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CloseIcon from "@mui/icons-material/Close";
import defaultMovieBanner from "../../images/default-movie-banner.jpg";
import ReactPlayer from "react-player/lazy";

const MovieCard = ({ movie }) => {
  const [movies, setMovies] = useState([]);
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [videoUrlKey, setVideoUrlKey] = useState("");

  const apiBaseUrl = import.meta.env.VITE_TMDB_BASE_URL;
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const imageBaseUrl = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

  // slider options/settings--
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 5000,
    focusOnSelect: false,
    lazyLoad: "progressive",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // get all movies--
  useEffect(() => {
    const url = `${apiBaseUrl}/discover/movie?api_key=${apiKey}&include_adult=false&sort_by=popularity.desc&with_genres=${movie.id}`;
    const fetchHandler = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    };
    fetchHandler();
  }, [apiBaseUrl, movie.id, apiKey]);

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
  return (
    <>
      <div className="w-full">
        {/* slider component-- */}
        <Slider {...settings}>
          {movies?.map((item) => {
            return (
              <div key={item.id} className="px-[10px] focus:outline-none">
                <img
                  src={
                    `${imageBaseUrl + item.backdrop_path}` || defaultMovieBanner
                  }
                  alt={item.title}
                  className="w-full sm:w-[250px] cursor-pointer block h-[150px] object-cover object-center rounded-md transition-all duration-300 hover:scale-110"
                  onClick={async () => {
                    backdropOpenHandler();
                    await getSingleMovie(movie?.id);
                  }}
                />
                <h4 className="my-5 leading-[1.5] text-[gray]">{item.title}</h4>
              </div>
            );
          })}
        </Slider>
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

export default MovieCard;
