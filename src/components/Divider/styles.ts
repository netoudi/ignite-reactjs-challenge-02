import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 1px;
    margin: 2.4rem 0;
    background-color: ${theme.colors['base-button']};
  `}
`;
