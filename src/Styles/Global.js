import { css } from '@emotion/core';

const global = css`
* {
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
}
body {
    margin: 0;
    margin-top: 50px;
    font-family: sans-serif;
}

header {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    background-color: #eee;
}

section {
    height: 65vh;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

footer {
    text-align: center;
    padding: 50px;
}
#hero h1 {
    font-size: 3em;
}

section h2 {
    font-size: 2.5em;
}

section h3 {
    font-size: 1.5em;
}

header a {
    text-decoration: none;
    color: black;
}

#hero {
    background-image: linear-gradient(rgba(255,255,255,0.75),rgba(255,255,255,0.75)), url('/images/posters.jpg');
}
`;

export default global;
