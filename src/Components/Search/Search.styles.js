import { css } from '@emotion/core';

const searchStyles = css`
position: relative;
width: 100%;
margin-top: 7px;

input[type=radio] {
    margin-right: 5px;
}

label {
    margin-right: 15px;
}

.open>.dropdown-menu {
    max-height: none !important;
}
.form-check-inline {
    display: inline;
}
`;

export default searchStyles;
