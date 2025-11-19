import styled from "styled-components";

export const Section = styled.section`
  margin-top: 32px;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 800;
  font-size: clamp(18px, 2.6vw, 22px);
  letter-spacing: -0.02em;
  margin: 0 0 14px 0;
`;

export const Rail = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(240px, 1fr);
  gap: 3rem;
  overflow-x: auto;
  padding: 8px 8px 4px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  /* esconder barra sem quebrar acessibilidade */
  scrollbar-width: thin;
  &::-webkit-scrollbar { height: 8px; }
  &::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 8px; }
`;

export const Slide = styled.div`
  scroll-snap-align: start;
  min-width: 260px;
`;

export const SeeAllRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;

  a {
    font-weight: 600;
    color: ${({ theme }) => theme.colors?.primary || "#0ea5e9"};
    text-decoration: none;
  }
`;
