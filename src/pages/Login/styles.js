import styled from "styled-components";

export const LoginContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2rem;
`;

export const LoginCard = styled.div`
  width: 100%;
  max-width: 980px;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 22px 60px rgba(15, 23, 42, 0.12);

  display: grid;
  grid-template-columns: minmax(0, 380px) minmax(0, 1fr);
  overflow: hidden;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const FormArea = styled.div`
  padding: 2.5rem 2.5rem 2.2rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  background: #ffffff;

  @media (max-width: 900px) {
    padding: 2rem 1.5rem 1.8rem;
  }

  form {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem; /* Espaço entre email, senha e botão */
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const Subtitle = styled.p`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.95rem;
  line-height: 1.5;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const FormLabel = styled.label`
  font-size: 0.88rem;
  font-weight: 600;
  color: #111827;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.9rem 0.95rem;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  font-size: 0.95rem;
  background: #f9fafb;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary}20;
    background: #ffffff;
  }
`;

export const ForgotPasswordLink = styled.button`
  align-self: flex-end;
  margin-top: 0.15rem;
  border: none;
  background: none;
  padding: 0;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  margin-top: 0.2rem;
  background-color: #0f172a;
  color: #ffffff;
  border: none;
  padding: 0.9rem;
  border-radius: 999px;
  cursor: pointer;
  font-size: 0.98rem;
  font-weight: 600;
  text-align: center;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.35);

  &:hover {
    opacity: 0.96;
  }

  &:disabled {
    opacity: 0.7;
    cursor: default;
    box-shadow: none;
  }
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

export const ImageArea = styled.div`
  position: relative;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ImageLogo = styled.div`
  position: absolute;
  top: 1.1rem;
  right: 1.5rem;
  z-index: 5;

  font-family: "Lobster", cursive;
  font-size: 1.6rem;
  color: #000;

  padding: 0.3rem 1rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.35);

  user-select: none;
  pointer-events: none;
`;
