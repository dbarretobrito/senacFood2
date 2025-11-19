import styled from "styled-components";

export const Card = styled.article`
  width: 260px;              /* largura fixa “tijolinho” */
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;

  @media (max-width: 680px) {
    width: 100%;             /* no mobile pode ocupar a largura toda */
    max-width: 360px;
  }
`;


export const Cover = styled.div`
  position: relative;
  /* mais quadrado */
  aspect-ratio: 1 / 1;

  /* mesmo fundo “clarinho” vibe categories */
  background: #f9fafb;
  background-position: center;
  background-size: cover;
  border-bottom: 1px solid #f1f5f9;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlaceholderEmoji = styled.span`
  font-size: 3.2rem; /* emoji grande */
  @media (min-width: 768px) {
    font-size: 3.6rem;
  }
  line-height: 1;
  opacity: 0.98;
`;

export const HeartButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 0;
  background: ${({ $active }) => ($active ? "#fee2e2" : "#ffffffcc")};
  backdrop-filter: blur(4px);
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ $active, theme }) =>
    $active ? theme.colors?.primary || "#ef4444" : "#111827"};

  &:hover {
    background: ${({ $active }) => ($active ? "#fecaca" : "#fff")};
  }
`;

export const CardBody = styled.div`
  padding: 0.8rem 0.9rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  background: ${({ $featured }) => ($featured ? "#eaf9fd" : "#fff")};
`;

export const CardTitle = styled.h3`
  font-size: 0.98rem;
  line-height: 1.35;
  color: #0f172a;
  font-weight: 700;
`;

export const MetaRow = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const MetaPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.85rem;
  color: #0f172a;
  background: #f4f8f9;
  border-radius: 999px;
  padding: 0.38rem 0.75rem;
`;
