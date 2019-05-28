/** @jsx jsx */
// @flow
import { jsx } from '@emotion/core';
import { Component } from 'react';
import engine from 'store/src/store-engine';
import store from 'store/storages/cookieStorage';
import defaults from 'store/plugins/defaults';
import expire from 'store/plugins/expire';

import Api from '../../Utils/Api';
import formatItem from '../../Utils/Formatters';

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
            this.setState({ details: formatItem(response.data, this.cookie.get('ms-search-config')) });
        }
    }

    render() {
        if (!this.state.details) {
            return null;
        }

        return (
            <div className='details'>
                <h1>{this.state.details.name}</h1>
                <a href='/'>Back to Home</a>
            </div>
        );
    }
}

export default Details;
