/** @jsx jsx */
// @flow
import { jsx } from '@emotion/core';
import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import engine from 'store/src/store-engine';
import store from 'store/storages/cookieStorage';
import defaults from 'store/plugins/defaults';
import expire from 'store/plugins/expire';
import defaultStore from 'store';

import Layout from '../../Layouts/OneColum';
import Search from '../../Components/Search/Search';
import * as itemActions from '../../Store/Item/Item';
import mainStyles from './Main.styles';
import Item from '../../Components/Item/Item';
import Api from '../../Utils/Api';

type Props = {
    items: Array<Object>,
    addItem: Function,
    loadItems: Function,
};

type State = {
    config: Object,
}

class Main extends Component<Props, State> {
    api: Api;

    cookie: engine;

    constructor() {
        super();
        this.api = new Api();
        this.cookie = engine.createStore([store], [defaults, expire]);
    }

    static defaultProps = {
        items: [],
        addItem: () => { },
        loadItems: () => { },
    }

    state = {
        config: {},
    }

    /**
     * Load previous search if saved in local storage.
     *
     * Also, stores configuration for 3 days in a cookie variable.
     * @returns {void}
     */
    async componentDidMount() {
        if (defaultStore.get('ms-search-items')) {
            this.props.loadItems(defaultStore.get('ms-search-items'));
        }
        if (!this.cookie.get('ms-search-config')) {
            const response = await this.api.get('configuration');
            this.cookie.set('ms-search-config', response.data, new Date().getTime() + (1000 * 60 * 60 * 24 * 3));
        }
        this.setState({ config: this.cookie.get('ms-search-config') });
    }

    render() {
        return (
            <Layout
                css={mainStyles}
                title='Movie Search'
                hero='/images/posters.jpg'
                header={
                    <Search
                        labelKey='name'
                        addedMessage='(selected)'
                        filterItems
                        changeHandler={this.props.addItem}
                        api={this.api}
                        config={this.state.config}
                    />
                }
                content={
                    <Fragment>
                        {this.props.items.length ?
                            this.props.items.map(item => (
                                <Item
                                    key={item.id}
                                    item={item}
                                />
                            )) :
                            <p>No items searched yet</p>
                        }
                    </Fragment>
                }
            />
        );
    }
}

// Connection with Redux
const mapStateToProps = state => ({
    ...state.movieSearch,
});

const mapDispatchToProps = {
    ...itemActions,
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Main);

export default Container;
