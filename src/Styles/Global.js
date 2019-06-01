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

header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}

main {
    margin-top: 6%;
}

img {
    max-width: 100%;
    height: auto;
}

#main {
    height: auto;
    margin-top: 0;
    flex-direction: column;
    align-items: flex-start;
}

footer {
    text-align: right;
    padding: 0 50px;
}
#hero {
    height: 100vh;
    margin-top: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    background-attachment: fixed;
}

section h2 {
    font-size: 2.5em;
}

section h3 {
    font-size: 1.5em;
}

header {
    display: flex;
    background: white;

    .title {
        flex: 0 0 30%;
    }

    .date {
        color: #666;
        font-size: 0.8em;
        margin-left: 10px;
    }

    .details {
        width: 50%;
        margin: auto;
    }

    .back {
        text-align: right;
        width: 100%;
    }

    a {
        text-decoration: none;
    }
}
mark {
    padding: .2em;
    background-color: #fcf8e3;
}
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0;
    font-size: 14px;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ccc;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 4px;
    box-shadow: 0 6px 12px rgba(0,0,0,.175);

    .divider {
        height: 1px;
        margin: 9px 0;
        overflow: hidden;
        background-color: #e5e5e5;
    }
}
ol, ul {
    margin-top: 0;
    margin-bottom: 10px;
}
.dropdown-menu>li>a {
    display: block;
    padding: 3px 20px;
    clear: both;
    font-weight: 400;
    line-height: 1.42857143;
    color: #333;
    white-space: nowrap;
}
.form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
}
.details {
    display: flex;
    width: 80%;
    margin: 20px auto 0;

    .poster {
        margin-right: 15px;
    }

    .tagline {
        font-size: 0.8em;
        text-align: right;
        font-style: italic;
        text-decoration: underline;
    }
}

`;

export default global;
