import styled from "styled-components";

export const Card = styled.article`
  border-radius: 18px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
`;

export const Cover = styled.div`
  position: relative;
  /* Ajuste fácil de “mais quadrado”: mude para 1 / 1 */
  aspect-ratio: 4 / 3;
  background-size: cover;
  background-position: center;
  background-color: #e5e7eb;
  border-bottom: 1px solid #f1f5f9;
`;

export const HeartButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 0;
  background: #ffffffcc;
  backdrop-filter: blur(4px);
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);

  &:hover {
    background: #fff;
  }
`;

export const CardBody = styled.div`
  padding: 1rem 1rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  background: ${({ $featured }) => ($featured ? "#eaf9fd" : "#fff")};
`;

export const CardTitle = styled.h3`
  font-size: 1.05rem;
  line-height: 1.35;
  color: #0f172a;
  font-weight: 700;
`;

export const MetaRow = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
`;

export const MetaPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.9rem;
  color: #0f172a;
  background: #f4f8f9;
  border-radius: 999px;
  padding: 0.45rem 0.8rem;
`;
