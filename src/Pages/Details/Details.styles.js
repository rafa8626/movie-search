import { css } from '@emotion/core';

const detailsStyles = css`

.poster {
    margin-right: 15px;
}

.tagline {
    font-size: 0.8em;
    text-align: right;
    font-style: italic;
    text-decoration: underline;
}
.creators {
    h2 {
        font-size: 0.95em;
    }
    .creator {
        span {
            display: block;
            font-weight: 700;
            font-size: 0.8em;
        }
    }
}
img {
    max-width: none;
}

.videos {
    width: 80%;
    margin: 20px auto 0;

    .video-container {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
        margin-bottom: 20px;

        &>iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
}
`;

export default detailsStyles;
