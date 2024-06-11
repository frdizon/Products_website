import styled from "styled-components";
import { TableCell } from "../styles";

export const RowContainer = styled.div`
  height: 120px;
  width: 100%;
  background-color: white;
  padding: 0 8px;

  display: flex;

  &:hover {
    background-color: lightblue;
  }
`;
export const StyledImage = styled.img`
  height: 100%;
  width: auto;
`;

export const StyledNameCell = styled(TableCell)`
  padding-right: 24px;
`;
