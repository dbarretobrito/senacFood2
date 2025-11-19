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
  background: #0f172a; /* preto azulado, combinando com a navbar */
  color: #fff;
  font-weight: 700;
  border: 0;
  border-radius: 12px;
  padding: 0.8rem 1.4rem;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.3);
  letter-spacing: 0.04em;
  font-size: 0.9rem;

  transition:
    background 0.15s ease,
    transform 0.15s ease,
    box-shadow 0.15s ease,
    opacity 0.15s ease;

  &:hover {
    background: #020617; /* mais escuro no hover */
    transform: translateY(-1px);
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.25);
    background: #111827; /* cinza bem escuro no clique */
  }

  &:focus-visible {
    outline: 2px solid #e5e7eb;
    outline-offset: 3px;
  }
`;

/* Barra de busca */
export const SearchRow = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 340px;
  border-radius: 999px;
  border: 1px solid #e5e7eb;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  outline: none;
  background: #f9fafb;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 0 1px #7c3aed20;
    background: #ffffff;
  }
`;

/* GRID: responsivo */
export const CardsGrid = styled.div`
  margin-top: 2rem;
  width: 100%;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;

  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  justify-items: center;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const EmptyState = styled.div`
  margin-top: 1.8rem;
  padding: 1.5rem;
  border-radius: 16px;
  background: #f9fafb;
  border: 1px dashed #e5e7eb;
  text-align: center;
  color: #6b7280;
  font-size: 0.95rem;

  strong {
    color: #374151;
  }
`;
