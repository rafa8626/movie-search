/** @jsx jsx */
// @flow
import { jsx } from '@emotion/core';
import { Component } from 'react';
import Api from '../../Utils/Api';

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

    constructor() {
        super();
        this.api = new Api();
    }

    state = {
        details: {}
    }

    async componentDidMount() {
        const { type, item } = this.props.match.params;
        const response = await this.api.get(`${type}/${item}`, { append_to_response: 'videos,images' });
        console.log(response);
        if (response.data) {
            this.setState({ details: response.data });
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
