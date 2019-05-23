import { css } from '@emotion/core';

const notFoundStyles = css`
#not-found {
    position: relative;
    height: 100vh;
  }
  
  #not-found .not-found {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
  }
  
  .not-found {
    max-width: 560px;
    width: 100%;
    padding-left: 160px;
    line-height: 1.1;
  }
  
  .not-found .not-found-404 {
    position: absolute;
    left: 0;
    top: 0;
    display: inline-block;
    width: 140px;
    height: 140px;
    background-image: url('/images/emoji.png');
    background-size: cover;
  }
  
  .not-found .not-found-404:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-transform: scale(2.4);
        -ms-transform: scale(2.4);
            transform: scale(2.4);
    border-radius: 50%;
    background-color: #f2f5f8;
    z-index: -1;
  }
  
  .not-found h1 {
    font-family: 'Nunito', sans-serif;
    font-size: 65px;
    font-weight: 700;
    margin-top: 0px;
    margin-bottom: 10px;
    color: #151723;
    text-transform: uppercase;
  }
  
  .not-found h2 {
    font-family: 'Nunito', sans-serif;
    font-size: 21px;
    font-weight: 400;
    margin: 0;
    text-transform: uppercase;
    color: #151723;
  }
  
  .not-found p {
    font-family: 'Nunito', sans-serif;
    color: #999fa5;
    font-weight: 400;
  }
  
  .not-found a {
    font-family: 'Nunito', sans-serif;
    display: inline-block;
    font-weight: 700;
    border-radius: 40px;
    text-decoration: none;
    color: #388dbc;
  }
  
  @media only screen and (max-width: 767px) {
    .not-found .not-found-404 {
      width: 110px;
      height: 110px;
    }
    .not-found {
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 110px;
    }
  }
`;

export default notFoundStyles;
