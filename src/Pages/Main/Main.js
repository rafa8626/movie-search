/** @jsx jsx */
// @flow
import { jsx } from '@emotion/core';
import { Component } from 'react';

import Search from '../../Components/Search/Search';
import mainStyles from './Main.styles';

class Main extends Component<{}> {
    render() {
        return (
            <div id="main" css={mainStyles}>
                <Search
                    labelKey='name'
                    addedMessage='(selected)'
                    filterItems
                    changeHandler={() => { }}
                />
            </div>
        );
    }
}

export default Main;
