import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from '@phosphor-icons/react';
import { Box } from '@app/components/Box';
import { Divider } from '@app/components/Divider';
import * as S from './styles';

export function Checkout() {
  return (
    <S.Wrapper>
      <S.ColumnLeft>
        <h2>Complete seu pedido</h2>
        <Box>
          <S.Header>
            <S.HeaderIcon>
              <MapPinLine data-icon="map" size={22} />
            </S.HeaderIcon>
            <S.HeaderTitle>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </S.HeaderTitle>
          </S.Header>
          <S.Form action="">
            <S.FormControl>
              <input type="text" placeholder="CEP" />
            </S.FormControl>
            <S.FormControl>
              <input type="text" placeholder="Rua" />
            </S.FormControl>
            <S.FormControl>
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
            </S.FormControl>
            <S.FormControl>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </S.FormControl>
          </S.Form>
        </Box>
        <Box>
          <S.Header>
            <S.HeaderIcon>
              <CurrencyDollar data-icon="currency" size={22} />
            </S.HeaderIcon>
            <S.HeaderTitle>
              <h3>Pagamento</h3>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </S.HeaderTitle>
          </S.Header>
          <S.PaymentType>
            <S.Select type="button">
              <CreditCard size={16} /> Cartão de crédito
            </S.Select>
            <S.Select type="button">
              <Bank size={16} /> Cartão de débito
            </S.Select>
            <S.Select type="button">
              <Money size={16} /> Dinheiro
            </S.Select>
          </S.PaymentType>
        </Box>
      </S.ColumnLeft>
      <S.ColumnRight>
        <h2>Cafés selecionados</h2>
        <Box>
          <S.Cart>
            <S.CartItem>
              <div>
                <img src="/images/expresso-tradicional.png" alt="" />
              </div>
              <div>
                <span>Expresso Tradicional</span>
                <S.Actions>
                  <S.Counter>
                    <button>
                      <Minus size={14} />
                    </button>
                    <span>0</span>
                    <button>
                      <Plus size={14} />
                    </button>
                  </S.Counter>
                  <S.Remove>
                    <Trash size={16} /> Remover
                  </S.Remove>
                </S.Actions>
              </div>
              <div>
                <strong>R$ 9,90</strong>
              </div>
            </S.CartItem>
            <Divider />
            <S.CartItem>
              <div>
                <img src="/images/expresso-tradicional.png" alt="" />
              </div>
              <div>
                <span>Expresso Tradicional</span>
                <S.Actions>
                  <S.Counter>
                    <button>
                      <Minus size={14} />
                    </button>
                    <span>0</span>
                    <button>
                      <Plus size={14} />
                    </button>
                  </S.Counter>
                  <S.Remove>
                    <Trash size={16} /> Remover
                  </S.Remove>
                </S.Actions>
              </div>
              <div>
                <strong>R$ 9,90</strong>
              </div>
            </S.CartItem>
            <Divider />
          </S.Cart>
          <S.Summary>
            <div>
              <div>Total de itens</div>
              <div>R$ 29,70</div>
            </div>
            <div>
              <div>Entrega</div>
              <div>R$ 3,50</div>
            </div>
            <div>
              <div>
                <strong>Total</strong>
              </div>
              <div>
                <strong>R$ 33,20</strong>
              </div>
            </div>
          </S.Summary>
          <S.PaymentButton type="submit">Confirmar pedido</S.PaymentButton>
        </Box>
      </S.ColumnRight>
    </S.Wrapper>
  );
}
