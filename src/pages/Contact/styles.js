import styled from "styled-components";

export const Page = styled.main`
  padding: 24px 16px 40px;
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 28px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftPane = styled.aside`
  border-radius: 18px;
  overflow: hidden;
  background: #eaf9fd;
`;

export const ChefImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1;
`;

export const RightPane = styled.section`
  display: grid;
  gap: 16px;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: clamp(26px, 4vw, 44px);
  letter-spacing: -0.02em;
  margin: 0 0 6px;
`;

export const Form = styled.form`
  display: grid;
  gap: 16px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: grid;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: rgba(0, 0, 0, 0.7);
  text-transform: uppercase;
`;

export const Input = styled.input`
  height: 44px;
  border-radius: 10px;
  border: 1px solid #eee;
  background: #fff;
  padding: 0 14px;
  font-size: 14px;
  color: #111;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors?.primary || "#000"};
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.06);
  }
`;

export const Textarea = styled.textarea`
  border-radius: 10px;
  border: 1px solid #eee;
  background: #fff;
  padding: 10px 14px;
  font-size: 14px;
  color: #111;
  outline: none;
  resize: vertical;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors?.primary || "#000"};
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.06);
  }
`;

export const Actions = styled.div`
  margin-top: 4px;
`;

export const Button = styled.button`
  border: 0;
  border-radius: 12px;
  padding: 12px 24px;
  font-weight: 700;
  background: ${({ theme }) => theme.colors?.primary || "#000"};
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s ease, opacity 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.95;
  }
`;

export const Error = styled.span`
  color: #e11d48;
  font-size: 12px;
`;
