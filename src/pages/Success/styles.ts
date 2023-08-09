import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 115.2rem;
  padding: 3.2rem 1.6rem;
  margin: 0 auto;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Title = styled.div`
  ${({ theme }) => css`
    margin-bottom: 4rem;

    h2 {
      color: ${theme.colors['primary-dark']};
      font-family: 'Baloo 2';
      font-size: 3.2rem;
      font-style: normal;
      font-weight: 800;
      line-height: 130%;
    }

    p {
      color: ${theme.colors['base-subtitle']};
      font-family: Roboto;
      font-size: 2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    }
  `};
`;

export const Box = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3.2rem;

    padding: 4rem;
    border: 1px solid ${theme.colors['primary-dark']};
    border-radius: 0.6rem 3.6rem;
  `};
`;

export const Item = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 1.2rem;

    color: ${theme.colors['base-text']};

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

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.background};
    padding: 0.8rem;
    border-radius: 100%;

    &[data-icon='map'] {
      background-color: ${theme.colors.secondary};
    }

    &[data-icon='time'] {
      background-color: ${theme.colors.primary};
    }

    &[data-icon='currency'] {
      background-color: ${theme.colors['primary-dark']};
    }
  `};
`;
