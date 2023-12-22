import React, { useState, useEffect } from "react";
import LatestMoviesModal from "../Components/UI/LatestMoviesModal";
import classes from "./Popular.module.css";
import useMovieSearch from "../Components/Hooks/useSearchMovies";
import ErrorDiv from "../Components/UI/ErrorDiv";
import LoadingDiv from "../Components/UI/LoadingDiv";

const Popular = () => {
  const [movies, setMovies] = useState([]);
  const { shows, loading, error } = useMovieSearch();

  useEffect(() => {
    const transformedMovies = shows
      .filter((movieData) => movieData.rating.average > 8.4)
      .map((movieData) => ({
        id: movieData.id,
        name: movieData.name,
        genre: movieData.genres[0],
        rating: movieData.rating.average,
        img: movieData.image.medium,
      }));
    setMovies(transformedMovies);
  }, [shows]);

  const filteredMovies = movies.filter((item) => item !== undefined);

  return (
    <>
      <h1 className={classes.pageTitle}>Popular Series</h1>
      <div className={classes.container}>
        {loading ? (
          <LoadingDiv />
        ) : error ? (
          <ErrorDiv error={error.message} />
        ) : (
          filteredMovies.map((movie) => (
            <LatestMoviesModal
              key={movie.id}
              name={movie.name}
              genre={movie.genre}
              rating={movie.rating}
              img={movie.img}
              id={movie.id}
            />
          ))
        )}
      </div>
    </>
  );
};
export default Popular;
