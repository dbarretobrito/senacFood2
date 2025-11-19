import styled from "styled-components";

export const Page = styled.main`
  padding: 24px 16px 40px;
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const HeaderRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 18px;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
  }
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: clamp(24px, 4vw, 32px);
  letter-spacing: -0.02em;
  margin: 0;
`;

export const Count = styled.span`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
`;

export const Grid = styled.div`
  display: grid;
  gap: 18px;

  /* 1 col */
  grid-template-columns: minmax(0, 1fr);

  @media (min-width: 640px) {
    /* 2 colunas */
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 992px) {
    /* 3 colunas */
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const CardWrapper = styled.div`
  height: 100%;
`;

export const EmptyState = styled.div`
  margin-top: 24px;
  padding: 24px 20px;
  border-radius: 16px;
  border: 1px dashed rgba(0, 0, 0, 0.12);
  background: #f9fafb;

  p {
    margin: 0;
    text-align: center;
    font-size: 14px;
    color: rgba(15, 23, 42, 0.8);
    line-height: 1.6;
  }
`;
