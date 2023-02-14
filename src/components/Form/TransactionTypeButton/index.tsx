import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Icon, Title } from './styles';

interface ITransactionTypeButton extends TouchableOpacityProps {
  type: 'up' | 'down';
  title: string;
  isActive: boolean;
}

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};

export default function TransactionTypeButton({
  type,
  title,
  isActive,
  ...rest
}: ITransactionTypeButton) {
  return (
    <Container {...rest} type={type} isActive={isActive}>
      <Icon type={type} name={icons[type]} />
      <Title>{title}</Title>
    </Container>
  );
}
