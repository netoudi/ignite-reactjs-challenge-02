import { Link } from 'react-router-dom';
import { ShoppingCart } from '@phosphor-icons/react';
import * as S from './styles';

export type EmptyProps = {
  title: string;
  description: string;
};

export function Empty(props: EmptyProps) {
  return (
    <S.Wrapper>
      <ShoppingCart size={56} />
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <S.Link as={Link} to="/">
        só se for agora!
      </S.Link>
    </S.Wrapper>
  );
}
