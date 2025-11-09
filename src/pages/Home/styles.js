import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  overflow-x: hidden;
`;

export const Spacer = styled.div`
  height: 70px; /* mesma altura da navbar fixa */
`;
