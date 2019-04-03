import React from 'react'
import './MovieItem.css'

const MovieItem = ({ movie, error }) => {
    return <div >
        {
            movie ?
                (
                    <div className="movie-item"> 
                        <img alt={movie.Title} src={movie.Poster} />
                        <div className="table-details">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th>Title</th>
                                    
                                        <td>{movie.Title}</td>
                                    </tr>
                                    <tr>
                                    
                                        <th>imdb rating</th>
                                        
                                        <td>{movie.imdbRating}</td>
                                    </tr>
                                    <tr>
                                        <th>Vote count</th>
                                        <td>{movie.imdbVotes}</td>
                                    </tr>
                                    <tr>
                                        <th>Year</th>
                                        <td>{movie.Year}</td>
                                    </tr>
                                    <tr>
                                        <th>Length</th>
                                        <td>{movie.Runtime}</td>
                                    </tr>
                                    <tr>
                                        <th>Country</th>
                                        <td>{movie.Country}</td>
                                    </tr>
                                    <tr>
                                        <th>Actors</th>
                                        <td><div>{movie.Actors}</div></td>
                                    </tr>
                                    <tr>
                                        <th>Director</th>
                                        <td>{movie.Director}</td>
                                    </tr>
                                    <tr>
                                        <th>Plot</th>
                                        <td>{movie.Plot}</td>
                                    </tr>
                                    {
                                        movie.Website !== 'N/A' ?
                                            <tr>

                                                <th>Website</th>
                                                <td>
                                                    <a href={movie.Website} >
                                                        {movie.Website}
                                                    </a>

                                                </td>


                                            </tr> : null
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
                : <div className="err">
                    {error}
                </div>
        }
    </div>
}

export default MovieItem