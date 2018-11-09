import React, {Component} from 'react'
import apiConfig from '../config/api-config'


class MovieList extends Component {
    render() {
        const listItems = this.props.movieList.map((item) => {
            return (
                <div className="column is-one-quarter" key={item.id}>
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                            <img src={apiConfig.getImageUrl(item.poster_path, apiConfig.imageSize.large)} 
                                alt={item.title + " image"}/>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                <img src={apiConfig.getImageUrl(item.backdrop_path, apiConfig.imageSize.small)} 
                                    alt={item.title + " image"}/>
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">{item.title}</p>
                                <p className="subtitle is-6">Rating: {item.vote_average}</p>
                            </div>
                            </div>

                            <div className="content">{item.overview}</div>
                        </div>
                    </div>
                </div>
            )
        })

        
        return (
            <div>
                <p className="title center">{ this.props.title }</p>
               <div className="columns is-multiline is-mobile is-desktop">
                    {listItems}
               </div>
            </div>
        )
    }
}

export default MovieList