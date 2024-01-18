import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import LiveTvIcon from "@mui/icons-material/LiveTv";

export const navlinks = [
  {
    title: "Home",
    path: "/",
    icon: HomeIcon,
  },
  {
    title: "Search",
    path: "/search",
    icon: SearchIcon,
  },
  {
    title: "Watchlist",
    path: "#",
    icon: AddIcon,
  },
  {
    title: "Originals",
    path: "#",
    icon: StarIcon,
  },
  {
    title: "Movies",
    path: "#",
    icon: LocalMoviesIcon,
  },
  {
    title: "Series",
    path: "#",
    icon: LiveTvIcon,
  },
];

// BRANDS DATA--

import starwar from "../images/logo/starwar.png";
import pixar from "../images/logo/pixar.png";
import nationalGeo from "../images/logo/nationalG.png";
import marvel from "../images/logo/marvel.png";
import disney from "../images/logo/disney.png";

import disneyVideo from "../images/Videos/disney.mp4";
import marvelVideo from "../images/Videos/marvel.mp4";
import nationalGeoVideo from "../images/Videos/national-geographic.mp4";
import pixarVideo from "../images/Videos/pixar.mp4";
import starWarsVideo from "../images/Videos/star-wars.mp4";

export const brandsData = [
  {
    id: 1,
    image: disney,
    video: disneyVideo,
  },
  {
    id: 2,
    image: pixar,
    video: pixarVideo,
  },
  {
    id: 3,
    image: marvel,
    video: marvelVideo,
  },
  {
    id: 4,
    image: starwar,
    video: starWarsVideo,
  },
  {
    id: 5,
    image: nationalGeo,
    video: nationalGeoVideo,
  },
];
