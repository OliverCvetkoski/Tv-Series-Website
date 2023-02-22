import React from 'react'
import classes from "./SearchBarHeader.module.css"
import SearchCard from './UI/SearchCard';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const SearchBarHeader = (props) => {

    const [query, setQuery] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);
    const [searchInitiated, setSearchInitiated] = useState(true);
    const [showResults, setShowResults] = useState(false);

    const handleChange = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        setSearchInitiated(true);
        setShowResults(true);
        setLoading(true);
        setError(null);

        if (newQuery.trim() !== "") {
            fetch(`https://api.tvmaze.com/search/shows?q=${newQuery}`)
                .then(res => res.json())
                .then(shows => {
                    setResults(shows);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });
        } else {
            setResults([]);
            setSearchInitiated(false);
        }
    };

    const handleBlur = () => {
        setShowResults(false);
    };

    const handleFocus = () => {
        setShowResults(true);
        setSearchInitiated(false);
    };

    const location = useLocation();

    useEffect(() => {
        setQuery("");
        setResults([]);
    }, [location]);

    return (
        <div className={classes.container}>
            <input
                className={classes.input}
                value={query}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                type="text"
                placeholder="Quick Search" />
            {searchInitiated && showResults && results.length === 0 ? (
                <div className={classes.noResultsDiv}>No Results Found</div>) : showResults ? (
                    results.slice(0, 5).filter(show => show.show.image != null && show.show.image.medium != null).map(show => (
                        <SearchCard
                            key={show.show.id}
                            img={show.show.image.medium}
                            name={show.show.name}
                            releaseDate={show.show.premiered}
                        />
                    ))) : null}
        </div>
    );
};
export default SearchBarHeader;