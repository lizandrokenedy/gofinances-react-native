import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import Input from '../Input';
import { Container, Error } from './styles';

interface IInputForm extends TextInputProps {
  control: Control;
  name: string;
  error?: string;
}

export default function InputForm({
  control,
  name,
  error,
  ...rest
}: IInputForm) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input {...rest} onChangeText={onChange} value={value} />
        )}
        name={name}
      />

      {error && <Error>{error}</Error>}
    </Container>
  );
}
