import React, { useState, useEffect } from "react";
import classes from "./LatestMovies.module.css";
import LatestMoviesModal from "../Components/UI/LatestMoviesModal";
import useMovieSearch from "../Components/Hooks/useSearchMovies";
import ErrorDiv from "../Components/UI/ErrorDiv";
import LoadingDiv from "../Components/UI/LoadingDiv";

const LatestMovies = () => {
  const [movies, setMovies] = useState([]);
  const { shows, loading, error } = useMovieSearch();

  useEffect(() => {
    const transformedMovies = shows
      .filter((movieData) => new Date(movieData.ended) > new Date("2021-01-01"))
      .map(({ id, name, genres, rating, image }) => ({
        id,
        name,
        genre: genres[0],
        rating: rating.average,
        img: image.medium,
      }));

    setMovies(transformedMovies);
  }, [shows]);

  const filteredMovies = movies.filter((item) => item !== undefined);

  return (
    <>
      <h1 className={classes.pageTitle}>Latest Series</h1>
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
export default LatestMovies;
