import styled from "styled-components";

export const Section = styled.section`
  margin-top: 24px;
`;

export const Title = styled.h2`
  font-weight: 800;
  font-size: clamp(18px, 2.6vw, 22px);
  margin: 0 0 10px 0;
  letter-spacing: -0.02em;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid rgba(0,0,0,0.08);
`;

export const Item = styled.li`
  border-bottom: 1px solid rgba(0,0,0,0.08);
`;

export const Label = styled.label`
  display: grid;
  grid-template-columns: 22px 1fr;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  cursor: pointer;
`;

export const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

export const Circle = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1.8px solid rgba(0,0,0,0.4);
  display: inline-block;
  position: relative;
  transition: all .15s ease;

  &[data-checked="true"] {
    border-color: ${({ theme }) => theme.colors?.primary || "#000"};
    background: ${({ theme }) => theme.colors?.primary || "#000"};
  }

  &[data-checked="true"]::after {
    content: "";
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: #fff;
  }
`;

export const Text = styled.span`
  color: #111;
  font-size: 15px;
  line-height: 1.7;
  transition: color .15s ease, opacity .15s ease, text-decoration-color .15s ease;

  ${({ $checked }) =>
    $checked
      ? `
    color: rgba(0,0,0,.55);
    text-decoration: line-through;
    text-decoration-thickness: 1.5px;
    text-decoration-color: rgba(0,0,0,.4);
  `
      : ""}
`;
