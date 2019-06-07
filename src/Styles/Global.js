import { css } from '@emotion/core';

const global = css`
* {
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
}
html {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
body {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
}
`;

export default global;
