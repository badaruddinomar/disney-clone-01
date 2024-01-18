import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import SearchMovieCard from "../components/searchedMovieCard/SearchMovieCard";
import Pagination from "react-js-pagination";
import "../styles/pagination.css";

const SearchPage = () => {
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [movies, setMovies] = useState([]);
  const [totalMovie, setTotalMovie] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const apiBaseUrl = import.meta.env.VITE_TMDB_BASE_URL;
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  // backdrop handlers--
  useEffect(() => {
    const backdropOpenHandler = () => {
      setBackdropOpen(true);
    };
    backdropOpenHandler();
  }, []);

  const backdropCloseHandler = () => {
    setBackdropOpen(false);
  };
  // movie serach handler--
  const searchHandler = async (e) => {
    try {
      e.preventDefault();
      const url = `${apiBaseUrl}/search/movie?query=${searchKeyword}&api_key=${apiKey}&page=${currentPage}`;
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
      setTotalMovie(data.total_results);
      backdropCloseHandler();
    } catch (err) {
      console.log(err);
    }
  };
  // handler pagination --
  const setCurrentPageNo = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Header />
      <div>
        {/* search backdrop-- */}
        <div
          className={`w-full h-[100vh] backdrop-sepia-0 bg-black/70  fixed top-0 left-0 z-10 ${
            backdropOpen ? "visible opacity-[1px]" : "invisible opacity-0"
          }`}
        >
          <div className="relative flex items-center justify-center w-full h-[100vh] p-3">
            <form>
              <input
                type="text"
                placeholder="Search"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="flex-1 md:w-[350px] h-[50px] px-5 rounded-s-sm border-none outline-none text-[16px]"
              />
              <button
                onClick={searchHandler}
                className="text-white h-[52px] bg-slate-500 px-5 rounded-e-sm text-[16px] hover:opacity-70"
              >
                Search
              </button>
            </form>
          </div>
          <CloseIcon
            className="absolute text-white cursor-pointer top-[30px] right-[25px] bg-[gray] rounded-full w-[30px] h-[30px]"
            onClick={backdropCloseHandler}
          />
        </div>
        <div className="flex flex-wrap items-center justify-center w-full">
          {movies.map((item, ind) => {
            return <SearchMovieCard movie={item} key={ind} />;
          })}
        </div>
        {/* pagination div */}
        <div onClick={searchHandler}>
          {/* pagination box */}
          {movies.length != 0 && (
            <div className="pagination-box" onClick={searchHandler}>
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={20}
                totalItemsCount={totalMovie || 0}
                onChange={setCurrentPageNo}
                nextPageText={">"}
                prevPageText={"<"}
                firstPageText={"<<"}
                lastPageText={">>"}
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
