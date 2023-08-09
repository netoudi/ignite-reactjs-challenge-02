import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import logo from '@app/assets/logo.svg';
import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <S.Logo href="/">
        <img src={logo} alt="Coffee Delivery" />
      </S.Logo>
      <S.Actions>
        <S.Location>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </S.Location>
        <S.Cart>
          <ShoppingCart size={22} weight="fill" />
          <S.CartItems>3</S.CartItems>
        </S.Cart>
      </S.Actions>
    </S.Container>
  );
}
