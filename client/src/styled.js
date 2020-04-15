import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'ProximaNova';
    src: url('ProximaNova.ttf') format('truetype');
  }
  body {
    background-color: #F2F2F2;
  }
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  h1,h2,h3,h4 {
    margin: 0;
  }
`;

export const H1 = styled.h1`
  font-family: ProximaNova;
  font-size: 60px;
  line-height: 70px;
  letter-spacing: -1.44706px;
`;
export const H3 = styled.h3`
  font-family: ProximaNova;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.36px;
`;
export const H4 = styled.h4`
  font-family: Helvetica, Sans serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.578824px;
`;

export const CardStyled = styled.div`
  background-color: #fff;
  border-radius: 14px;
  padding: 24px;
`;

export const TextGray = styled.span`
  font-family: Helvetica, Sans serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.0861538px;
  color: #8e8e93;
`;

export const Text18 = styled.span`
  font-family: ProximaNova;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.288px;
`;

export const PageStyled = styled.div`
  padding-left: 124px;
  padding-right: 124px;
`;

export const PaddingBottomSmall = styled.div`
  padding-bottom: 10px;
`;

export const PaddingBottomMedium = styled.div`
  padding-bottom: 20px;
`;

export const PaddingBottomLarge = styled.div`
  padding-bottom: 40px;
`;
