import React from 'react'

import SearchBar from '../SearchBar/SearchBar'
import MovieItem from '../MovieItem/MovieItem'
import OMBD from '../../apis/OMBD'
import  './App.css'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: null,
            error: ''
        }
        this.baseState= this.state
    }

    //Submit HTTP request with the form values to OMBD api
    onSubmit = async formValues => {
        const response = await OMBD.get('', {
            params: {
                t: formValues.title,
                y: formValues.realseYear
            }
        })

        if (response.data.Response === 'False') {
            this.setState({ movie: null, error: response.data.Error })
            return 
        }

        this.setState({ movie: response.data, error: '' })
    }
    //Reset component state
    resetState = () => {
        this.setState(this.baseState);
    }

    render() {
        return (
            <div className="app-root">
                <h1>Movie Search</h1>
                <SearchBar onFormSubmit={this.onSubmit} resetApp={this.resetState} />
                <MovieItem movie={this.state.movie} error={this.state.error} />
            </div>
        )
    }
}

export default App