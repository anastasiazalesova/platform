import React from 'react';
import Flex, { FlexItem } from 'styled-flex-component';
import { CardStyled, H4, TextGray, Text18 } from './styled';

export const Card = () => (
  <CardStyled>
    <Flex justifyBetween>
      <FlexItem>
        <H4>Студенческая оценка преподавания за 1 модуль у всех студентов</H4>
      </FlexItem>
      <FlexItem basis="50px" noShrink>
        <TextGray>45 мин</TextGray>
      </FlexItem>
    </Flex>
    <Flex>
      <FlexItem>
        <Text18>
          Внимание! Стартовала Студенческая оценка преподавания за 1 модуль. Всем студентам
          необходимо оценить те дисциплины, по которым проводились аудиторные занятия и
          запланированы зачеты.
        </Text18>
      </FlexItem>
    </Flex>
  </CardStyled>
);
