import { createGlobalStyle } from "styled-components";

import CircularStdMediumWoff from "./fonts/CircularStd-Medium.woff";
import CircularStdMediumWoff2 from "./fonts/CircularStd-Medium.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'CircularStdMedium';
        src: local('CircularStdMedium'), local('FontName'),
        url(${CircularStdMediumWoff2}) format('woff2'),
        url(${CircularStdMediumWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
