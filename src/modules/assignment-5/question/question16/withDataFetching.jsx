import axios from "axios";
import React, { useState } from "react";

const withDataFetching = (WrappedComponent) => {
  return () => {
    const [movieData, setMovieData] = useState([]);

    const options = {
      method: "GET",
      url: "https://imdb-top-100-movies.p.rapidapi.com/",
      headers: {
        "X-RapidAPI-Key": "a751c5151amshb89a31e7e7bdb07p141368jsnb8f10878d806",
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
      },
    };

    const fetchData = async () => {
      try {
        const response = await axios.request(options);

        setMovieData(
          response.data.map((movie, index) => ({
            id: index + 1,
            title: movie.title,
            year: movie.year,
            genre: movie.genre.join(", "),
            rating: movie.rating,
          }))
        );
      } catch (error) {
        console.error(error);
      }
    };

    const movieColumns = [
      { field: "id", headerName: "Rank", width: 150 },
      { field: "title", headerName: "Title", width: 450 },
      { field: "year", headerName: "Year", width: 150 },
      { field: "genre", headerName: "Genre", width: 350 },
      { field: "rating", headerName: "Rating", width: 200 },
    ];

    return (
      <>
        <button onClick={fetchData}>Get Data</button>

        {movieData.length > 0 && (
          <WrappedComponent
            heading="IMDB TOP 100 MOVIES"
            rows={movieData}
            columns={movieColumns}
          />
        )}
      </>
    );
  };
};

export default withDataFetching;