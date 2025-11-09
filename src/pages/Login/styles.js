import styled from "styled-components";

export const LoginContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    height: auto;
    padding: 3rem 1rem;
  }
`;

export const FormArea = styled.div`
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.9rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  padding: 0.9rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    opacity: 0.9;
  }
`;

export const ImageArea = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;

  img {
    width: 100%;
    max-width: 600px;
    object-fit: cover;
    border-radius: 10px;
  }
`;
