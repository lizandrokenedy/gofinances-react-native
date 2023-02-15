import React from 'react';
import { Amount, Container, Title } from './styles';

interface IHistoryCard {
  title: string;
  amount: string;
  color: string;
}

export default function HistoryCard({ title, amount, color }: IHistoryCard) {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  );
}
