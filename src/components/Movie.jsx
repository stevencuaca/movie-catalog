import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header';

const Movies = () => {
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])
    const API_KEY = '89604591'

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?apikey=${API_KEY
        }&s=${search ? search : 'superman'}`)
        .then(res => {
            const fetchMovies = res.data.Search
            const modifiedMovies = fetchMovies.map(movie => {
                return {...movie}
            })
            setMovies(modifiedMovies)
        })
    }, [search])

    const setMovieSearch = (value) => {
        setSearch(value)
    }

    return (
        <>
        <div className='header'>
            <Header setSearchingProps={setMovieSearch}/>
        </div>
        <div className="container mt-3">
            <h1>Show your favorite Movies</h1>
            <div className="row mt-5">
                <div className='row'>
                    {movies?.map((movie) => (
                        <div className="col-3" key={movie.imdbID}>
                            <div className="card">
                                <img src={movie.Poster} alt={movie.Title} />
                                <div className="card-body">
                                    <h3>{movie.Title}</h3>
                                </div>
                            </div>
                        </div>        
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default Movies;
