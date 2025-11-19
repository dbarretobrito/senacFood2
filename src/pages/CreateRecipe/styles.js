import styled from "styled-components";

export const PageWrapper = styled.main`
  min-height: 100vh;
  padding: 5.5rem 1.5rem 2.5rem; 
  /* 5.5rem dá espaço pra navbar fixa (70px) + um respiro visual */
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors?.background || "#f9fafb"};

  @media (max-width: 768px) {
    padding: 5rem 1rem 2rem;
  }
`;

export const FormCard = styled.section`
  width: 100%;
  max-width: 720px;
  background: #fff;
  border-radius: 16px;
  padding: 2rem 1.8rem;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 800;
  margin: 0 0 0.3rem;
  color: ${({ theme }) => theme.colors?.text || "#0f172a"};
`;

export const Subtitle = styled.p`
  margin: 0 0 1.5rem;
  color: #6b7280;
  font-size: 0.95rem;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1.1rem;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 0.92rem;
  color: #111827;
`;

export const Input = styled.input`
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  padding: 0.7rem 0.8rem;
  font-size: 0.95rem;
  outline: none;
  &:focus {
    border-color: ${({ theme }) => theme.colors?.primary || "#7c3aed"};
    box-shadow: 0 0 0 1px
      ${({ theme }) => theme.colors?.primary || "#7c3aed"}20;
  }
`;

export const Textarea = styled.textarea`
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  padding: 0.7rem 0.8rem;
  font-size: 0.95rem;
  resize: vertical;
  outline: none;
  &:focus {
    border-color: ${({ theme }) => theme.colors?.primary || "#7c3aed"};
    box-shadow: 0 0 0 1px
      ${({ theme }) => theme.colors?.primary || "#7c3aed"}20;
  }
`;

export const Select = styled.select`
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  padding: 0.7rem 0.8rem;
  font-size: 0.95rem;
  outline: none;
  background: #fff;
  &:focus {
    border-color: ${({ theme }) => theme.colors?.primary || "#7c3aed"};
    box-shadow: 0 0 0 1px
      ${({ theme }) => theme.colors?.primary || "#7c3aed"}20;
  }
`;

export const CheckboxList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.4rem 1rem;
  margin-top: 0.3rem;
`;

export const CheckboxItem = styled.div`
  label {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.9rem;
    color: #374151;
  }

  input[type="checkbox"] {
    accent-color: ${({ theme }) => theme.colors?.primary || "#7c3aed"};
  }
`;

export const ActionsRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
  margin-top: 1.2rem;
`;

export const ButtonPrimary = styled.button`
  border: 0;
  border-radius: 999px;
  padding: 0.7rem 1.4rem;
  background: ${({ theme }) => theme.colors?.primary || "#7c3aed"};
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.95rem;

  &:disabled {
    opacity: 0.7;
    cursor: default;
  }
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

export const HelperText = styled.p`
  font-size: 0.85rem;
  color: #6b7280;
  margin-bottom: 0.8rem;
`;

export const ErrorText = styled.p`
  font-size: 0.9rem;
  color: #b91c1c;
  margin-bottom: 0.8rem;
`;

export const InlineRow = styled.div`
  margin-top: 0.4rem;
  display: flex;
  gap: 0.5rem;

  > ${Input} {
    flex: 1;
  }
`;

export const SmallButton = styled.button`
  border-radius: 999px;
  padding: 0.55rem 1rem;
  border: 0;
  background: ${({ theme }) => theme.colors?.primary || "#7c3aed"};
  color: #fff;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: default;
  }
`;
