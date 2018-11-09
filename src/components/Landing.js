import React, {Component} from 'react'
import apiConfig from '../config/api-config'
import MovieList from './MovieList'
import JsonP from 'fetch-jsonp'

class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieList: []
        }
    }

    componentDidMount() {
        const path = 'discover/movie'
        const params = [
            {key: 'sort_by', value: 'popularity.desc'}
        ]
        const api = apiConfig.getApiUrl(path, params)
        JsonP(api).then((response) => {
            return response.json().then((data) => {
                this.setState({movieList: data['results']})
            })
        })
    }

    render() {
        return (
            <div className="container">
                <MovieList title={"List of Popular Movie"} movieList={this.state.movieList}/>
            </div>
        )
    }
}

export default Landing