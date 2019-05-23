/** @jsx jsx */
// @flow
import { jsx } from '@emotion/core';
import loaderStyles from './Loader.styles';

/**
 * Loader.
 *
 * @returns {React.ReactNode}
 */
const Loader = () => (
    <div className="loader-container" css={loaderStyles}>
        <div className="lds-ripple">
            <div></div>
            <div></div>
        </div>
    </div>
);

export default Loader;
