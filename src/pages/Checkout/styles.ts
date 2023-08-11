import * as RadioGroup from '@radix-ui/react-radio-group';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 115.2rem;
    padding: 3.2rem 1.6rem;
    margin: 0 auto;

    display: flex;
    gap: 3.2rem;

    h2 {
      color: ${theme.colors['base-subtitle']};
      font-family: 'Baloo 2';
      font-size: 1%.;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
    }

    h3 {
      color: ${theme.colors['base-subtitle']};
      font-family: Roboto;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    }

    p {
      color: ${theme.colors['base-text']};
      font-family: Roboto;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    }
  `};
`;

export const ColumnLeft = styled.div`
  width: 100%;
  max-width: 64rem;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const ColumnRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
`;

export const HeaderIcon = styled.div`
  ${({ theme }) => css`
    svg[data-icon='map'] {
      color: ${theme.colors['primary-dark']};
    }

    svg[data-icon='currency'] {
      color: ${theme.colors['secondary']};
    }
  `};
`;

export const HeaderTitle = styled.div``;

export const Form = styled.form`
  ${({ theme }) => css`
    margin-top: 3.2rem;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    input {
      display: flex;
      width: 100%;
      padding: 1.2rem;
      align-items: center;
      gap: 0.4rem;

      border-radius: 0.4rem;
      border: 1px solid ${theme.colors['base-button']};
      background: ${theme.colors['base-input']};
    }
  `};
`;

export const FormControl = styled.div`
  display: flex;
  gap: 1.6rem;
`;

export const PaymentType = styled(RadioGroup.Root)`
  display: flex;
  gap: 1.2rem;
  margin-top: 3.2rem;
`;

export const Select = styled(RadioGroup.Item)`
  ${({ theme }) => css`
    border: none;
    cursor: pointer;

    display: flex;
    padding: 1.6rem;
    align-items: center;
    gap: 1.2rem;
    flex: 1 0 0;

    border-radius: 0.6rem;
    background: ${theme.colors['base-button']};
    border: 1px solid ${theme.colors['base-button']};

    color: ${theme.colors['base-text']};
    font-family: Roboto;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;

    svg {
      color: ${theme.colors['secondary']};
    }

    &[data-state='unchecked']:hover {
      transition: background-color 0.2s;
      background: ${theme.colors['base-hover']};
    }

    &[data-state='checked'] {
      color: ${theme.colors['base-subtitle']};
      background: ${theme.colors['secondary-light']};
      border: 1px solid ${theme.colors.secondary};
    }
  `};
`;

export const PaymentButton = styled.button`
  ${({ theme }) => css`
    border: none;
    cursor: pointer;

    width: 100%;

    display: flex;
    padding: 1.2rem 0.8rem;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    align-self: stretch;

    border-radius: 0.6rem;
    background: ${theme.colors.primary};

    color: ${theme.colors.white};
    font-family: Roboto;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;
  `};
`;

///
/// Cart
///
export const Cart = styled.div``;

export const CartItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1.6rem;

    img {
      width: 6.4rem;
      height: auto;
    }

    & > div:last-child {
      margin-left: auto;
    }

    color: ${theme.colors['base-subtitle']};
    font-family: Roboto;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;

    strong {
      color: ${theme.colors['base-text']};
      font-family: Roboto;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
    }
  `};
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  margin-top: 0.8rem;
`;

export const Counter = styled.div`
  ${({ theme }) => css`
    height: 3.2rem;
    padding: 0 0.8rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;

    border-radius: 0.6rem;
    background: ${theme.colors['base-button']};

    color: ${theme.colors['base-title']};

    font-family: Roboto;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;

    button {
      cursor: pointer;
      width: 1.4rem;
      height: 1.4rem;
      border: none;
      background: transparent;
      line-height: 0;
    }

    span {
      width: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 0;
    }
  `};
`;

export const Remove = styled.button`
  ${({ theme }) => css`
    border: none;
    background: transparent;
    cursor: pointer;
    line-height: 0;

    color: ${theme.colors['base-text']};

    display: flex;
    height: 3.2rem;
    padding: 0 0.8rem;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;

    border-radius: 0.6rem;
    background: ${theme.colors['base-button']};

    font-family: Roboto;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;

    svg {
      color: ${theme.colors.secondary};
    }
  `};
`;

export const Summary = styled.div`
  ${({ theme }) => css`
    margin-bottom: 2.4rem;

    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    color: ${theme.colors['base-text']};
    font-family: Roboto;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;

    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    strong {
      color: ${theme.colors['base-subtitle']};
      font-family: Roboto;
      font-size: 2rem;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
    }
  `};
`;
