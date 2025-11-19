// src/pages/Register/styles.js
import styled from "styled-components";

export const RegisterContainer = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1.5rem;
  background: ${({ theme }) => theme.colors?.background || "#f3f4f6"};
`;

export const FormCard = styled.section`
  width: 100%;
  max-width: 480px;
  background: #fff;
  border-radius: 16px;
  padding: 2rem 1.8rem;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  margin: 0 0 0.3rem;
  color: ${({ theme }) => theme.colors?.text || "#0f172a"};
`;

export const Subtitle = styled.p`
  margin: 0 0 1.4rem;
  color: #6b7280;
  font-size: 0.95rem;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 0.9rem;
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

export const HelperText = styled.p`
  font-size: 0.8rem;
  color: #6b7280;
  margin: 0.2rem 0 0;
`;

export const ErrorText = styled.p`
  font-size: 0.9rem;
  color: #b91c1c;
  margin-bottom: 0.8rem;
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

export const LinkButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`;
