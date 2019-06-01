/** @jsx jsx */
// @flow
import { jsx } from '@emotion/core';
import { Component, Fragment } from 'react';
import engine from 'store/src/store-engine';
import store from 'store/storages/cookieStorage';
import defaults from 'store/plugins/defaults';
import expire from 'store/plugins/expire';

import Api from '../../Utils/Api';
import Layout from '../../Layouts/OneColum';
import { formatItemDetails } from '../../Utils/Formatters';

/**
 * Item Details.
 *
 * @extends {Component<Props>}
 */

type Props = {
    match: {
        params: Object,
    },
    item: Object,
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
        if (!this.state.details) {
            return null;
        }

        const { details } = this.state;

        return (
            <Layout
                header={<a href='/' className='back'>Back to Home</a>}
                hero={details.bgImg}
                title={
                    <Fragment>
                        {details.title}
                        <span className='date'>{details.date}</span>
                    </Fragment>
                }
                content={
                    <div className='details'>
                        <div className='poster'>
                            <img src={details.poster} alt={details.title} />
                        </div>
                        <div className='info'>
                            {details.tagline && <p className='tagline'>- {details.tagline}</p>}
                            <p>{details.overview}</p>
                            <div>
                                {details.duration && <p>{details.duration}</p>}
                                {details.genres && details.genres.length && <p><strong>Genres:</strong> {details.genres.join(', ')}</p>}
                            </div>
                            {details.creators && details.creators.length &&
                                <div className='creators'>
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
                }
            />
        );
    }
}

export default Details;
