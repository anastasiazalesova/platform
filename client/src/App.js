import React from 'react';
import 'normalize.css/normalize.css';

import Flex, { FlexItem } from 'styled-flex-component';

import { PaddingBottomLarge, PaddingBottomMedium, GlobalStyle, H1, H3, PageStyled } from './styled';
import { Card } from './Card';

function App() {
  return (
    <>
      <GlobalStyle />
      <PageStyled>
        <PaddingBottomLarge>
          <H1>Главная</H1>
        </PaddingBottomLarge>

        <PaddingBottomMedium>
          <H3>Новости</H3>
        </PaddingBottomMedium>

        <PaddingBottomLarge>
          <Flex justifyBetween>
            <FlexItem basis="32%">
              <Card />
            </FlexItem>
            <FlexItem basis="32%">
              <Card />
            </FlexItem>
            <FlexItem basis="32%">
              <Card />
            </FlexItem>
          </Flex>
        </PaddingBottomLarge>

        <PaddingBottomMedium>
          <H3>События</H3>
        </PaddingBottomMedium>

        <PaddingBottomMedium>
          <H3>Сообщения</H3>
        </PaddingBottomMedium>
      </PageStyled>
    </>
  );
}

export default App;
