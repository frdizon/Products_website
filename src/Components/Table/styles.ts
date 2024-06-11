import styled from "styled-components";

export const TableContainer = styled.div`
  flex: 1;
  width: 100%;
  margin: 8px 0;
  border: 1px solid gray;
  background-color: aliceblue;
  overflow-y: auto;
`;

export const HeaderCell = styled.div<{ flex: number }>`
  height: 100%;
  flex: ${({ flex }) => flex};

  display: flex;
  align-items: center;
`;

export const RowCell = styled.div<{ flex: number; isCentered?: boolean }>`
  height: 100%;
  flex: ${({ flex }) => flex};

  display: flex;
  flex-direction: column;
  align-items: ${({ isCentered }) => (isCentered ? "center" : "flex-start")};
  justify-content: center;
`;

export const TableCell = styled.div<{ flex: number; isCentered?: boolean }>`
  height: 100%;
  flex: ${({ flex }) => flex};

  display: flex;
  flex-direction: column;
  align-items: ${({ isCentered }) => (isCentered ? "center" : "flex-start")};
  justify-content: center;
`;