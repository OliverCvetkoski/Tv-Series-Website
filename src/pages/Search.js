import React, { useState } from "react";
import LatestMoviesModal from "../Components/UI/LatestMoviesModal";
import classes from "./Search.module.css";
import ErrorDiv from "../Components/UI/ErrorDiv";
import LoadingDiv from "../Components/UI/LoadingDiv";


function Search(props) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        fetch(`https://api.tvmaze.com/search/shows?q=${query}`).then(res => res.json()).then(shows => {
            setResults(shows);
            setLoading(false);
        })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }

    if (loading) {
        return <LoadingDiv />;
    }

    if (error) {
        return <ErrorDiv
            error={error.message}></ErrorDiv>
    }

    const filteredResults = results.filter(show => show.show.image != null && show.show.image.medium != null && show.show.rating.average != null)

    return (

        <div className={classes.content}>
            <form className={classes.input_form} onSubmit={handleSubmit}>
                <input
                    className={classes.input}
                    type="text"
                    placeholder="Search for a movie"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className={classes.btn}>Search</button>
            </form>
            <div className={classes.container}>
                {filteredResults.map(movie => (
                    <LatestMoviesModal
                        key={movie.show.id}
                        name={movie.show.name}
                        genre={movie.show.genres[0]}
                        img={movie.show.image.medium}
                        rating={JSON.stringify(movie.show.rating.average)} />
                ))}
            </div>
        </div>

    );
};

export default Search;