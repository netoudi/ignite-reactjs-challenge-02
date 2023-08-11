import styled, { css } from 'styled-components';
import { Container } from '@app/components/Container';

export const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a``;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`;

export const Location = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;

    padding: 0.8rem;
    border-radius: 0.6rem;

    font-family: Roboto, sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;

    color: ${theme.colors['secondary-dark']};
    background: ${theme.colors['secondary-light']};
  `}
`;

export const Cart = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    padding: 0.8rem;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;

    border-radius: 0.6rem;
    color: ${theme.colors['primary-dark']};
    background: ${theme.colors['primary-light']};
  `}
`;

export const CartItems = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: -0.8rem;
    right: -0.8rem;

    width: 2rem;
    height: 2rem;
    border-radius: 100%;

    font-family: Roboto, sans-serif;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors['primary-light']};
    background: ${theme.colors['primary-dark']};
  `}
`;
