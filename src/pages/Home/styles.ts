import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 54.4rem;
  background: url('images/background.png') no-repeat bottom center;
  background-size: cover;
`;

export const Content = styled.div`
  max-width: 111.2rem;
  padding: 3.2rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

///
/// Hero
///
export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors['base-title']};
    font-family: 'Baloo 2';
    font-size: 4.8rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  `};
`;

export const Subtitle = styled.p`
  margin-top: 1.6rem;
  flex-shrink: Roboto;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

export const HeroList = styled.ul`
  margin-top: 6.6rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 2rem;

    span {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0.8rem;
      border-radius: 100%;
      background-color: orangered;

      font-family: Roboto;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;

      color: white;
    }
  }
`;

export const HeroText = styled.div``;

export const HeroImage = styled.div``;

///
/// Coffee
///
export const Coffee = styled.div`
  max-width: 111.2rem;
  padding: 3.2rem;
  margin: 0 auto;
`;

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25.6rem);
  grid-column-gap: 3.2rem;
  grid-row-gap: 4rem;
  margin-top: 3.2rem;
`;

export const Card = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: #ccc;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    border-radius: 6px 36px;
    background: ${theme.colors['base-card']};
    padding: 0 2rem 2.4rem;
  `};
`;

export const CarImage = styled.div`
  margin-top: -2rem;
`;

export const CardTitle = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors['base-subtitle']};
    text-align: center;
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  `};
`;

export const CardDescription = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors['base-label']};
    text-align: center;
    font-family: Roboto;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin: 1.2rem 0;
  `};
`;

export const CarFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const CardPrice = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors['base-text']};
    font-family: Roboto;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;

    span {
      color: ${theme.colors['base-text']};
      font-family: 'Baloo 2';
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 800;
      line-height: 130%;
    }
  `};
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  margin: 1.2rem 0;
`;

export const Tag = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 4px 8px;
    border-radius: 100px;
    background: ${theme.colors['primary-light']};
    text-transform: uppercase;
    font-size: 1.2rem;
  `};
`;

export const Cart = styled.button`
  ${({ theme }) => css`
    border: none;
    cursor: pointer;
    padding: 0.8rem;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 0.6rem;
    background: ${theme.colors['secondary-dark']};
  `}
`;
