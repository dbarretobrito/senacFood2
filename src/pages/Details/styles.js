import styled from "styled-components";

export const PageWrapper = styled.main`
  min-height: calc(100vh - 80px);
  padding: 2.5rem 1.5rem;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors?.background || "#f3f4f6"};
`;

export const Card = styled.section`
  width: 100%;
  max-width: 800px;
  background: #fff;
  border-radius: 16px;
  padding: 2rem 1.8rem;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
`;

/* linha do título + emoji */
export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.3rem;
`;

export const RecipeEmoji = styled.span`
  font-size: 2rem;
  line-height: 1;
`;

export const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: 800;
  margin: 0;
  color: ${({ theme }) => theme.colors?.text || "#0f172a"};
`;

export const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
`;

export const MetaTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  background: #f3f4f6;
  color: #374151;
  font-size: 0.9rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 1.2rem 0 0.4rem;
  color: #111827;
`;

export const TextBlock = styled.p`
  margin: 0 0 0.8rem;
  color: #4b5563;
  font-size: 0.95rem;
  line-height: 1.55;
`;

export const IngredientsList = styled.ul`
  margin: 0 0 0.8rem;
  padding-left: 1.2rem;
`;

export const IngredientItem = styled.li`
  color: #374151;
  font-size: 0.95rem;
  margin-bottom: 0.25rem;
`;

export const ActionsRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
  margin-top: 1.5rem;
`;

export const ButtonGhost = styled.button`
  border-radius: 999px;
  padding: 0.7rem 1.2rem;
  border: 1px solid #e5e7eb;
  background: #fff;
  color: #374151;
  font-size: 0.95rem;
  cursor: pointer;
`;

export const ButtonDanger = styled.button`
  border: 0;
  border-radius: 999px;
  padding: 0.7rem 1.4rem;
  background: #dc2626;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.95rem;

  &:disabled {
    opacity: 0.7;
    cursor: default;
  }
`;

export const HelperText = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  margin-bottom: 0.8rem;
`;

export const ErrorText = styled.p`
  font-size: 0.9rem;
  color: #b91c1c;
  margin-bottom: 0.8rem;
`;
