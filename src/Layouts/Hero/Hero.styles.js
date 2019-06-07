import { css } from '@emotion/core';

const layoutStyles = css`
#main {
    min-height: 350px;
    margin-top: 0;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 50px;

    &>p {
        text-align: center;
    }
}
#hero {
    height: 300px;
    margin-top: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    background-attachment: fixed;

    @media screen and (min-width: 1040px) {
        height: 80vh;
    }
}
.details {
    display: flex;
    width: 80%;
    margin: 20px auto 0;
}
section {
    h2 {
        font-size: 2.5em;
    }
    h3 {
        font-size: 1.5em;
    }
}
main {
    margin-top: 6%;
}
header {
    display: flex;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    .title {
        flex: 0 0 35%;

        h1 {
            margin-left: 20px;
        }
    }

    .date {
        color: #666;
        font-size: 0.8em;
        margin-left: 10px;
    }

    .back {
        text-align: right;
        width: 100%;
        margin-right: 20px;
    }

    a {
        text-decoration: none;
    }
}
footer {
    text-align: right;
    padding: 0 25px;
    background: #000;
    color: #fff;

    p {
        width: 100%;
        margin: 0;
        padding: 10px;
    }
}
img {
    max-width: 100%;
    height: auto;
}
`;

export default layoutStyles;
