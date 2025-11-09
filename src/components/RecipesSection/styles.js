import styled from "styled-components";

export const Section = styled.section`
  padding: 3rem 4rem 5rem;
  background: #fff;

  @media (max-width: 992px) {
    padding: 2rem 1.5rem 3rem;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 1.75rem;
`;

export const Title = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 800;
  font-size: 2.2rem;
  letter-spacing: -0.02em;
  color: #000;
  margin: 0 0 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const Subtitle = styled.p`
  color: #667085;
  margin: 0 auto;
  font-size: 1rem;
`;

export const CtaRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const CtaButton = styled.button`
  background: #7c3aed;
  color: #fff;
  font-weight: 700;
  border: 0;
  border-radius: 12px;
  padding: 0.8rem 1.4rem;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(124, 58, 237, 0.25);
  transition: transform 0.15s ease, opacity 0.15s ease;

  &:hover {
    opacity: 0.95;
    transform: translateY(-1px);
  }
`;

/* GRID: responsivo */
export const CardsGrid = styled.div`
  margin-top: 2rem;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

/* Card de anúncio (última coluna) */
export const AdCard = styled.article`
  border-radius: 18px;
  overflow: hidden;
  background: #0f766e;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
`;

export const AdInner = styled.div`
  text-align: center;
  padding: 1.8rem;
`;

export const AdTitle = styled.h4`
  font-weight: 800;
  font-size: 1.4rem;
  line-height: 1.3;
`;

export const AdSubtitle = styled.p`
  margin-top: 0.6rem;
  opacity: 0.85;
`;
