// src/components/AIInsightModal/styles.js
import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(2px);
  display: grid;
  place-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  width: min(640px, 100% - 32px);
  max-height: calc(100vh - 80px);
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.35);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Header = styled.header`
  padding: 16px 20px;
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0;
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  width: 32px;
  height: 32px;
  border-radius: 999px;
  display: inline-grid;
  place-items: center;
  cursor: pointer;
  color: rgba(15, 23, 42, 0.7);
  transition: background 0.15s ease, transform 0.1s ease;

  &:hover {
    background: rgba(148, 163, 184, 0.18);
    transform: translateY(-1px);
  }
`;

export const Body = styled.div`
  padding: 16px 20px 20px;
  overflow-y: auto;
`;

export const Greeting = styled.p`
  margin: 0 0 12px;
  font-size: 14px;
  color: rgba(15, 23, 42, 0.85);
`;

export const MealGrid = styled.div`
  display: grid;
  gap: 12px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const MealCard = styled.article`
  border-radius: 14px;
  border: 1px solid rgba(15, 23, 42, 0.06);
  background: #f9fafb;
  padding: 12px 12px 10px;
  display: grid;
  gap: 6px;
`;

export const MealTitle = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.01em;
`;

export const MealFieldLabel = styled.span`
  display: block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(15, 23, 42, 0.6);
  margin-bottom: 2px;
`;

export const MealText = styled.p`
  margin: 0 0 6px;
  font-size: 13px;
  line-height: 1.5;
  color: rgba(15, 23, 42, 0.9);
`;

export const TimePill = styled.div`
  align-self: flex-end;
  margin-top: 4px;
  padding: 4px 8px;
  border-radius: 999px;
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #e0f2fe;
  color: #0369a1;
`;

export const LoadingBox = styled.div`
  padding: 12px 0 4px;
  font-size: 14px;
  color: rgba(15, 23, 42, 0.8);
`;

export const ErrorBox = styled.div`
  margin-top: 6px;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #fecaca;
  background: #fef2f2;
  font-size: 13px;
  color: #b91c1c;
`;
