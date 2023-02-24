import React, { useState, useEffect } from "react";
import LatestMoviesModal from "../Components/UI/LatestMoviesModal";
import classes from "./Popular.module.css";
import useMovieSearch from "../Components/Hooks/useSearchMovies";
import ErrorDiv from "../Components/UI/ErrorDiv";
import LoadingDiv from "../Components/UI/LoadingDiv";

const Popular = (props) => {

    const [movies, setMovies] = useState([]);
    const { shows, loading, error } = useMovieSearch();

    useEffect(() => {
        const transformedMovies = shows.map((movieData) => {
            if (movieData.rating.average > '8.4')
                return {
                    id: movieData.id,
                    name: movieData.name,
                    genre: movieData.genres[0],
                    rating: movieData.rating.average,
                    img: movieData.image.medium,
                };

        }); setMovies(transformedMovies)
    }, [shows])

    if (loading) {
        return <LoadingDiv />;
    }

    if (error) {
        return <ErrorDiv
            error={error.message}></ErrorDiv>
    }

    const filteredMovies = movies.filter(item => item !== undefined)

    return (

        <div className={classes.screen_container}>
            <h1>Popular Series</h1>
            {filteredMovies.map(movie => (
                <LatestMoviesModal
                    key={movie.id}
                    name={movie.name}
                    genre={movie.genre}
                    rating={movie.rating}
                    img={movie.img}
                    id={movie.id}
                />
            ))}
        </div>
    )
}
export default Popular;