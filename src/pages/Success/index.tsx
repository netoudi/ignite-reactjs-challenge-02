import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
import * as S from './styles';

export function Success() {
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
                Entrega em <strong>Rua João Daniel Martinelli</strong>, 102
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
              <strong>Cartão de Crédito</strong>
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
