import { useState, useEffect } from "react";

const useMovieSearch = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch("http://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((shows) => {
        setShows(shows);
        setLoading(false);
        localStorage.setItem("shows", JSON.stringify(shows));
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { shows, loading, error };
};

export default useMovieSearch;
