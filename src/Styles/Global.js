import { css } from '@emotion/core';

const global = css`
* {
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
}
html, body, #root, #header-footer {
    height: 100%;
    overflow: inherit;
    margin: 0;
}
body {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    font-size: 16px;
    line-height: 20px;
    font-family: Arial, sans-serif;
    -webkit-touch-callout: none;
    -webkit-text-size-adjust: none;
    -webkit-backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -ms-backface-visibility: hidden;
    text-rendering: optimizeLegibility;
}`;

export default global;
