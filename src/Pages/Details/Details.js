/** @jsx jsx */
// @flow
import { jsx } from '@emotion/core';
import { Component, Fragment } from 'react';
import engine from 'store/src/store-engine';
import store from 'store/storages/cookieStorage';
import defaults from 'store/plugins/defaults';
import expire from 'store/plugins/expire';
import Rating from 'react-rating';

import Api from '../../Utils/Api';
import Layout from '../../Layouts/OneColum';
import { formatItemDetails } from '../../Utils/Formatters';
import isEmpty from '../../Utils/Common';

/**
 * Item Details.
 *
 * @extends {Component<Props>}
 */

type Props = {
    match: {
        params: Object,
    },
};

type State = {
    details: Object,
};

class Details extends Component<Props, State> {
    api: Api;

    cookie: engine;

    constructor() {
        super();
        this.api = new Api();
        this.cookie = engine.createStore([store], [defaults, expire]);
    }

    state = {
        details: {}
    }

    async componentDidMount() {
        const { type, item } = this.props.match.params;
        const response = await this.api.get(`${type}/${item}`, { append_to_response: 'videos,images' });

        if (!this.cookie.get('ms-search-config')) {
            const config = await this.api.get('configuration');
            this.cookie.set('ms-search-config', config.data, new Date().getTime() + (1000 * 60 * 60 * 24 * 3));
        }
        if (response.data) {
            this.setState({ details: formatItemDetails(response.data, this.cookie.get('ms-search-config')) });
        }
    }

    render() {
        if (isEmpty(this.state.details)) {
            return null;
        }

        const { details } = this.state;
        const genres = (details.genres && details.genres.length > 0) ? details.genres.join(', ') : '';

        return (
            <Layout
                header={<a href='/' className='back'>Back to Home</a>}
                hero={details.bgImg}
                title={
                    <Fragment>
                        {details.title}
                        <span className='date'>({details.date})</span>
                        <Rating readonly stop={10} step={2} placeholderRating={details.rating} />
                    </Fragment>
                }
                content={
                    <Fragment>
                        <div className='details'>
                            <div className='poster'>
                                <img src={details.poster} alt={details.title} />
                            </div>
                            <div className='info'>
                                {details.tagline && <p className='tagline'>- {details.tagline}</p>}
                                <p>{details.overview}</p>
                                <div>
                                    {details.duration && <p>{details.duration}</p>}
                                    {genres && <p><strong>Genres:</strong> {genres}</p>}
                                    {details.homepage &&
                                    <p><a href={details.homepage} target='_blank' rel='noopener noreferrer'>Homepage</a></p>
                                    }
                                </div>
                                {(details.creators && details.creators.length > 0) &&
                                    <div className='creators'>
                                        <h2>Creator(s)</h2>
                                        {details.creators.map(creator => (
                                            <div className='creator' key={creator.id}>
                                                { creator.profile && <img src={creator.profile} alt={creator.name} />}
                                                <span>{creator.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                }
                            </div>
                        </div>
                        {details.videos.length && <div className='videos'>
                            <h2>Videos</h2>
                            {details.videos.map((video, index) => (
                                <div key={`video-${index}`} className='video-container'>
                                    <iframe title={`${details.title}-${index}`} width='560' height='315'
                                        src={video} frameBorder='0'
                                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                                        allowFullScreen></iframe>
                                </div>
                            ))}
                        </div>}
                    </Fragment>
                }
            />
        );
    }
}

export default Details;
