import styled from "styled-components";

export const HeaderWrap = styled.header`
  display: grid;
  gap: 16px;
`;

export const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  gap: 16px;
`;

export const TitleBlock = styled.div`
  display: grid;
  gap: 10px;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: clamp(26px, 4vw, 40px);
  letter-spacing: -0.02em;
  margin: 0;
`;

export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
`;

export const AuthorName = styled.span`
  font-weight: 700;
  font-size: 15px;
`;

export const AuthorDate = styled.span`
  font-size: 13px;
  color: rgba(0,0,0,0.6);
`;

export const Divider = styled.span`
  width: 1px;
  height: 22px;
  background: rgba(0,0,0,0.12);
`;

export const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid rgba(0,0,0,0.06);
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  font-size: 14px;
  font-weight: 600;
`;

export const RightActions = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

export const IconButton = styled.button`
  display: inline-grid;
  place-items: center;
  width: 40px; height: 40px;
  border-radius: 999px;
  border: 1px solid rgba(0,0,0,0.12);
  background: #fff;
  color: #000;
  cursor: pointer;
  transition: transform .12s ease, background .2s ease, border-color .2s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(0,0,0,0.03);
    border-color: rgba(0,0,0,0.18);
  }
`;

export const Description = styled.p`
  color: rgba(0,0,0,0.7);
  font-size: 15px;
  line-height: 1.7;
  margin: 0;
`;

export const HeroFigure = styled.figure`
  margin: 0;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: #f4f4f4;

  /* mantém proporção 16:9 */
  aspect-ratio: 16 / 9;
`;

export const HeroImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PlayOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
`;
