// src/components/CategoriesSection/styles.js
import styled, { css } from "styled-components";

/* usa theme se existir; senão, fallback */
const color = (picker, fallback) => ({ theme }) => picker(theme) ?? fallback;

export const Section = styled.section`
  width: 100%;
  padding: 24px 16px 8px;

  @media (min-width: 768px) {
    padding: 32px 24px 12px;
  }

  @media (min-width: 1200px) {
    padding: 40px 0 16px;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const HeadRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* centralizado */
  margin-bottom: 14px;
  text-align: center;
`;

export const Title = styled.h2`
  font-weight: 800;
  font-size: clamp(22px, 4vw, 36px);
  letter-spacing: -0.02em;
  color: ${color((t) => t.colors?.text, "#000")};
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  margin-top: 8px;

  @media (min-width: 960px) {
    gap: 18px;
  }
`;

const toneStyles = {
  greenSoft: css`
    background: linear-gradient(
      180deg,
      rgba(112, 130, 70, 0) 0%,
      rgba(112, 130, 70, 0.1) 100%
    );
  `,
  green: css`
    background: linear-gradient(
      180deg,
      rgba(108, 198, 63, 0) 0%,
      rgba(108, 198, 63, 0.1) 100%
    );
  `,
  red: css`
    background: linear-gradient(
      180deg,
      rgba(204, 38, 27, 0) 0%,
      rgba(204, 38, 27, 0.1) 100%
    );
  `,
  yellow: css`
    background: linear-gradient(
      180deg,
      rgba(240, 158, 0, 0) 0%,
      rgba(240, 158, 0, 0.1) 100%
    );
  `,
  neutral: css`
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.05) 100%
    );
  `,
};

export const Card = styled.article`
  height: 152px;
  border-radius: 24px;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-rows: 1fr auto;
  align-items: center;
  justify-items: center;
  padding: 16px;
  transition: transform 0.15s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  ${({ $tone }) => toneStyles[$tone || "neutral"]}

  border: 2px solid
    ${({ $selected, theme }) =>
      $selected ? theme.colors?.primary || "#7c3aed" : "transparent"};
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 26px rgba(0, 0, 0, 0.08);
  }
`;

export const IconWrap = styled.div`
  width: 100%;
  height: 90px;
  display: grid;
  place-items: center;
  margin-top: 4px;

  img {
    width: 86px;
    height: 86px;
    object-fit: contain;
    filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.12));
    user-select: none;
    pointer-events: none;
  }
`;

export const Emoji = styled.span`
  font-size: 64px;
  line-height: 1;
  user-select: none;
`;

export const Label = styled.span`
  align-self: end;
  font-weight: 600;
  font-size: 16px;
  color: ${color((t) => t.colors?.text, "#000")};
  text-transform: capitalize;
`;
