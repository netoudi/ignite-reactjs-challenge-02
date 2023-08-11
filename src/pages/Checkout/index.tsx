import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from '@phosphor-icons/react';
import { Box } from '@app/components/Box';
import { Divider } from '@app/components/Divider';
import { useCart } from '@app/hooks/use-cart';
import { CheckoutFormInputs, checkoutFormSchema } from '@app/pages/Checkout/constants';
import { centsFormatter } from '@app/utils/formatter';
import * as S from './styles';

export function Checkout() {
  const navigate = useNavigate();
  const { items, minusItem, plusItem, removeItem, itemsTotal, deliveryFee, cartTotal } = useCart();

  const form = useForm<CheckoutFormInputs>({
    resolver: zodResolver(checkoutFormSchema),
  });

  const errors = form.formState.errors;

  async function handleCheckout(data: CheckoutFormInputs) {
    console.log(data);

    navigate('/success', {
      state: { data },
      replace: true,
    });
  }

  React.useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      alert('Preenche corretamente o endereço de entrega e a forma de pagamento.');
    }
  }, [errors]);

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
          <S.Form id="form-checkout" onSubmit={form.handleSubmit(handleCheckout)}>
            <S.FormControl>
              <input type="text" placeholder="CEP" {...form.register('zipcode')} />
            </S.FormControl>
            <S.FormControl>
              <input type="text" placeholder="Rua" {...form.register('street')} />
            </S.FormControl>
            <S.FormControl>
              <input type="text" placeholder="Número" {...form.register('number')} />
              <input type="text" placeholder="Complemento" {...form.register('complement')} />
            </S.FormControl>
            <S.FormControl>
              <input type="text" placeholder="Bairro" {...form.register('district')} />
              <input type="text" placeholder="Cidade" {...form.register('city')} />
              <input type="text" placeholder="UF" {...form.register('state')} />
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
          <Controller
            control={form.control}
            name="payment"
            render={({ field }) => {
              return (
                <S.PaymentType onValueChange={field.onChange}>
                  <S.Select value="credit">
                    <CreditCard size={16} /> Cartão de crédito
                  </S.Select>
                  <S.Select value="debit">
                    <Bank size={16} /> Cartão de débito
                  </S.Select>
                  <S.Select value="money">
                    <Money size={16} /> Dinheiro
                  </S.Select>
                </S.PaymentType>
              );
            }}
          />
        </Box>
      </S.ColumnLeft>
      <S.ColumnRight>
        <h2>Cafés selecionados</h2>
        <Box>
          <S.Cart>
            {items.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <S.CartItem>
                    <div>
                      <img src={`/images/${item.image}`} alt="" />
                    </div>
                    <div>
                      <span>{item.title}</span>
                      <S.Actions>
                        <S.Counter>
                          <button type="button" onClick={() => minusItem(item.id)}>
                            <Minus size={14} />
                          </button>
                          <span>{item.quantity}</span>
                          <button type="button" onClick={() => plusItem(item.id)}>
                            <Plus size={14} />
                          </button>
                        </S.Counter>
                        <S.Remove type="button" onClick={() => removeItem(item.id)}>
                          <Trash size={16} /> Remover
                        </S.Remove>
                      </S.Actions>
                    </div>
                    <div>
                      <strong>{centsFormatter(item.total)}</strong>
                    </div>
                  </S.CartItem>
                  <Divider />
                </React.Fragment>
              );
            })}
          </S.Cart>
          <S.Summary>
            <div>
              <div>Total de itens</div>
              <div>{centsFormatter(itemsTotal)}</div>
            </div>
            <div>
              <div>Entrega</div>
              <div>{centsFormatter(deliveryFee)}</div>
            </div>
            <div>
              <div>
                <strong>Total</strong>
              </div>
              <div>
                <strong>{centsFormatter(cartTotal)}</strong>
              </div>
            </div>
          </S.Summary>
          <S.PaymentButton type="submit" form="form-checkout">
            Confirmar pedido
          </S.PaymentButton>
        </Box>
      </S.ColumnRight>
    </S.Wrapper>
  );
}
