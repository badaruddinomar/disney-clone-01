import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";

const Hero = () => {
  const [movieList, setMovieList] = useState([]);
  const apiBaseUrl = import.meta.env.VITE_TMDB_BASE_URL;
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const imageBaseUrl = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

  // GET MOIVELIST NAME--
  useEffect(() => {
    const fetchHandler = async () => {
      const url = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}&language=en-US&page=1`;
      const response = await fetch(url);
      const data = await response.json();
      setMovieList(data.results);
    };
    fetchHandler();
  }, [apiBaseUrl, apiKey]);

  return (
    <Carousel
      swipe={true}
      animation="slide"
      duration={500}
      navButtonsAlwaysVisible={true}
      indicatorContainerProps={{
        style: {
          position: "absolute",
          bottom: "5%",
          right: "5%",
          zIndex: 10,
          textAlign: "right",
        },
      }}
    >
      {movieList.map((movie) => {
        return (
          <div key={movie.id}>
            <img
              src={imageBaseUrl + movie?.backdrop_path}
              alt={movie?.title}
              className="w-full cursor-pointer block h-[300px] md:h-[450px] object-cover object-left-top"
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Hero;
