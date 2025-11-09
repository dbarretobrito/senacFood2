import styled from "styled-components";

/* Wrapper geral — centraliza o cartão bipartido */
export const HeroWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 6.5rem 4rem 4rem;
  background: #fff;
  min-height: calc(100vh - 70px);

  @media (max-width: 1100px) {
    padding: 6rem 1.5rem 2.5rem;
  }
`;

/* SplitCard: une os dois lados sem frestas */
export const SplitCard = styled.div`
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  width: min(1200px, 100%);
  border-radius: 24px;
  overflow: hidden; /* garante que os fundos fiquem colados */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06);

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

/* Lado esquerdo (azul-claro) */
export const LeftPane = styled.div`
  background: #eaf9fd;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;

  @media (max-width: 1100px) {
    padding: 2rem 1.5rem 2.2rem;
  }
`;

/* Lado direito (rosado) */
export const RightPane = styled.div`
  position: relative;
  background: #f8d2d2; /* cor de fundo, visível caso a imagem não carregue */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0; /* removemos padding para colar a imagem nas bordas */

  /* a imagem interna agora ocupa todo o espaço */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0 24px 24px 0; /* arredondamento do canto direito do card */
    display: block;
  }

  @media (max-width: 1100px) {
    border-radius: 0 0 24px 24px; /* bordas inferiores no mobile */
    img {
      border-radius: 0 0 24px 24px;
      height: 320px; /* define altura mínima no mobile */
    }
  }
`;


/* Tag “Receitas Quentes” */
export const TagPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: #ffffff;
  border-radius: 30px;
  padding: 0.55rem 1rem;
  box-shadow: 0 10px 20px rgba(41, 64, 70, 0.1);
  width: fit-content;
`;

export const TagIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
`;

export const TagText = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: #000;
`;

/* Título e descrição */
export const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 800;
  font-size: 3.5rem;
  color: #000;
  line-height: 1.15;

  @media (max-width: 1100px) {
    font-size: 2.4rem;
  }
`;

export const Description = styled.p`
  color: #5b6677;
  font-size: 1.1rem;
  line-height: 1.7;
  max-width: 46ch;
`;

/* Chips (categoria e tempo) */
export const ChipRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #f4f8f9;
  color: #000;
  border-radius: 999px;
  padding: 0.6rem 1.2rem;
  font-size: 0.95rem;
  font-weight: 500;
`;

/* Rodapé do card (autor + botão CTA) */
export const FooterRow = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
`;

export const AuthorAvatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;

  strong {
    color: #000;
    font-weight: 700;
    font-size: 0.98rem;
  }

  span {
    color: #6b7280;
    font-size: 0.85rem;
  }
`;

export const CtaButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 14px;
  padding: 0.95rem 1.6rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.15s ease;

  &:hover {
    opacity: 0.93;
    transform: translateY(-1px);
  }
`;

export const CtaIcon = styled.img`
  width: 16px;
  height: 16px;
`;


