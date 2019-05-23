/** @jsx jsx */
// @flow
import { jsx } from '@emotion/core';
import { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../../Layouts/OneColum';
import Search from '../../Components/Search/Search';
import * as itemActions from '../../Store/Movie/Movie';
import mainStyles from './Main.styles';
import MovieItem from '../../Components/Item/Item';

type Props = {
    items: Array<Object>,
    addItem: Function,
};

class Main extends Component<Props> {
    static defaultProps = {
        movies: [],
        addItem: () => { },
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
                    />
                }
                content={this.props.items.length ?
                    this.props.items.map(item => (
                        <MovieItem key={item.id} item={item} />
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
