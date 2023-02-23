import React, { useState, useEffect, Fragment } from "react";
import classes from './LatestMovies.module.css'
import LatestMoviesModal from "../Components/UI/LatestMoviesModal";
import useMovieSearch from "../Components/Hooks/useSearchMovies";
import ErrorDiv from "../Components/UI/ErrorDiv";
import LoadingDiv from "../Components/UI/LoadingDiv";


const LatestMovies = (props) => {

    const [movies, setMovies] = useState([]);
    const { shows, loading, error } = useMovieSearch();

    useEffect(() => {
        const transformedMovies = shows.map((movieData) => {
            if (movieData.ended > '2021 - 01 - 01')
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
        <Fragment>
            <h2>Latest Series</h2>
            <div className={classes.container}>
                {filteredMovies.map(movie => (
                    <LatestMoviesModal
                        key={movie.id}
                        name={movie.name}
                        genre={movie.genre}
                        rating={movie.rating}
                        img={movie.img}

                    />
                ))}
            </div>
        </Fragment>
    );
};


export default LatestMovies;