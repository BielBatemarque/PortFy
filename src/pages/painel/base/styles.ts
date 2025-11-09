import styled from "styled-components";

export const MainSection = styled.main`
  width: 100%;
  height: 100vh;

  @media print {
    overflow: visible !important;
    height: auto;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: calc(100vh - 71px);
  overflow: auto;

  @media print {
    height: auto;
  }
`;
