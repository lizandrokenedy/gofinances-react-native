import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';

interface IButton extends TouchableOpacityProps {
  title: string;
}

export default function Button({ title, ...rest }: IButton) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
