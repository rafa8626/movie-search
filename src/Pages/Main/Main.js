/** @jsx jsx */
// @flow
import { jsx } from '@emotion/core';
import { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../../Layouts/OneColum';
import Search from '../../Components/Search/Search';
import * as itemActions from '../../Store/Movie/Movie';
import mainStyles from './Main.styles';
import Item from '../../Components/Item/Item';
import Api from '../../Utils/Api';

type Props = {
    items: Array<Object>,
    addItem: Function,
};

type State = {
    config: Object,
}

class Main extends Component<Props, State> {
    api: Api;

    constructor() {
        super();
        this.api = new Api();
    }

    static defaultProps = {
        items: [],
        addItem: () => { },
    }

    state = {
        config: {},
    }

    async componentDidMount() {
        const response = await this.api.get('configuration');
        this.setState({ config: response.data });
    }

    render() {
        return (
            <Layout
                css={mainStyles}
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
                content={this.props.items.length ?
                    this.props.items.map(item => (
                        <Item
                            key={item.id}
                            item={item}
                        />
                    )) :
                    <p>No results found</p>
                }
            />
        );
    }
}

// Connection with Redux
const mapStateToProps = state => ({
    ...state.movies,
});

const mapDispatchToProps = {
    ...itemActions,
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Main);

export default Container;
