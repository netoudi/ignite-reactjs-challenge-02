import React from 'react';
import * as S from './styles';

export type BoxProps = {
  children: React.ReactNode;
};

export function Box(props: BoxProps) {
  return <S.Wrapper>{props.children}</S.Wrapper>;
}
