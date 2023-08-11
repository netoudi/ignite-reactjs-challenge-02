import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
import { useCart } from '@app/hooks/use-cart';
import { Order } from '@app/utils/models';
import { payment } from '@app/utils/payment';
import * as S from './styles';

export function Success() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { itemsTotal, clearCart } = useCart();

  React.useEffect(() => {
    if (!state) {
      navigate('/');
    }
  }, [navigate, state]);

  React.useEffect(() => {
    if (itemsTotal !== 0) {
      clearCart();
    }
  }, [clearCart, itemsTotal]);

  if (!state) {
    return null;
  }

  const order: Order = state.data;

  return (
    <S.Wrapper>
      <div>
        <S.Title>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </S.Title>
        <S.Box>
          <S.Item>
            <div>
              <S.Icon data-icon="map">
                <MapPin size={16} weight="fill" />
              </S.Icon>
            </div>
            <div>
              <p>
                Entrega em <strong>{order.street}</strong>, {order.number}
              </p>
              <p>
                {order.district} - {order.city}, {order.state}
              </p>
            </div>
          </S.Item>
          <S.Item>
            <div>
              <S.Icon data-icon="time">
                <Timer size={16} weight="fill" />
              </S.Icon>
            </div>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </S.Item>
          <S.Item>
            <div>
              <S.Icon data-icon="currency">
                <CurrencyDollar size={16} />
              </S.Icon>
            </div>
            <div>
              <p>Pagamento na entrega</p>
              <strong>{payment[order.payment]}</strong>
            </div>
          </S.Item>
        </S.Box>
      </div>
      <div>
        <img src="/images/delivery.png" alt="Motoboy acelerando pra entregar seu pedido!" />
      </div>
    </S.Wrapper>
  );
}
