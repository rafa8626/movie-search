/** @jsx jsx */
// @flow
import { jsx } from '@emotion/core';

import notFoundStyles from './NotFound.styles';

const NotFound = () => (
    <div id="not-found" css={notFoundStyles}>
        <div className="not-found">
            <div className="not-found-404"></div>
            <h1>404</h1>
            <h2>Oops! Page Not Be Found</h2>
            <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
            <a href="/">Back to homepage</a>
        </div>
    </div>
);

export default NotFound;
