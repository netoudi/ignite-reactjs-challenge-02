import { Link } from 'react-router-dom';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import logo from '@app/assets/logo.svg';
import { useCart } from '@app/hooks/use-cart';
import * as S from './styles';

export function Header() {
  const { cartQuantity } = useCart();

  return (
    <S.Wrapper>
      <S.Logo href="/">
        <img src={logo} alt="Coffee Delivery" />
      </S.Logo>
      <S.Actions>
        <S.Location>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </S.Location>
        <S.Cart as={Link} to="/checkout">
          <ShoppingCart size={22} weight={cartQuantity > 0 ? 'fill' : 'regular'} />
          {cartQuantity > 0 && <S.CartItems>{cartQuantity}</S.CartItems>}
        </S.Cart>
      </S.Actions>
    </S.Wrapper>
  );
}
