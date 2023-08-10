import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import { coffee } from '@app/data/coffee';
import { useCart } from '@app/hooks/use-cart';
import * as S from './styles';

export function Home() {
  const { addToCart, removeItem, isInCart } = useCart();

  return (
    <S.Container>
      <S.Content>
        <S.HeroText>
          <S.Title>Encontre o café perfeito para qualquer hora do dia</S.Title>
          <S.Subtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</S.Subtitle>

          <S.HeroList>
            <li>
              <span>
                <ShoppingCart size={16} />
              </span>
              Compra simples e segura
            </li>
            <li>
              <span>
                <Package size={16} />
              </span>
              Embalagem mantém o café intacto
            </li>
            <li>
              <span>
                <Timer size={16} />
              </span>
              Entrega rápida e rastreada
            </li>
            <li>
              <span>
                <Coffee size={16} />
              </span>
              O café chega fresquinho até você
            </li>
          </S.HeroList>
        </S.HeroText>
        <S.HeroImage>
          <img src="/images/hero.png" alt="Coffee Delivery" />
        </S.HeroImage>
      </S.Content>

      <S.Coffee>
        <h2>Nossos cafés</h2>
        <S.CoffeeList>
          {coffee.map((item) => {
            return (
              <S.Card key={item.id}>
                <S.CarImage>
                  <img src={`/images/${item.image}`} alt={`Coffee: ${item.title}`} />
                </S.CarImage>
                <S.Tags>
                  {item.tags.map((tag, index) => (
                    <S.Tag key={index}>{tag}</S.Tag>
                  ))}
                </S.Tags>
                <S.CardTitle>{item.title}</S.CardTitle>
                <S.CardDescription>{item.description}</S.CardDescription>
                <S.CarFooter>
                  <S.CardPrice>
                    R$ <span>{item.price}</span>
                  </S.CardPrice>
                  {isInCart(item.id) ? (
                    <S.Cart type="button" onClick={() => removeItem(item.id)}>
                      <ShoppingCart size={18} weight="fill" />
                    </S.Cart>
                  ) : (
                    <S.Cart type="button" onClick={() => addToCart(item)}>
                      <ShoppingCart size={18} />
                    </S.Cart>
                  )}
                </S.CarFooter>
              </S.Card>
            );
          })}
        </S.CoffeeList>
      </S.Coffee>
    </S.Container>
  );
}
