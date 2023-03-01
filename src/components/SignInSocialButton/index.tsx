import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Button, ImageContainer, Title } from './styles';
import { SvgProps } from 'react-native-svg';

interface ISignInSocialButton extends TouchableOpacityProps {
  title: string;
  svg: React.FC<SvgProps>;
}

export default function SignInSocialButton({
  title,
  svg: Svg,
  ...rest
}: ISignInSocialButton) {
  return (
    <Button {...rest} activeOpacity={0.7}>
      <ImageContainer>
        <Svg />
      </ImageContainer>

      <Title>{title}</Title>
    </Button>
  );
}
