import styled from 'styled-components';
import { css } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 40rem;
  padding: 4rem;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  text-align: center;
`;

export const Link = styled.a`
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
    text-decoration: none;
  `};
`;
