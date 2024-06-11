import React, { FC } from "react";
import { TABLE_FLEX_VALUES } from "../constants";
import { TableCell } from "../styles";
import { HeaderContainer } from "./styles";

const TableHeader: FC = () => {
  return (
    <HeaderContainer>
      <TableCell flex={TABLE_FLEX_VALUES[0]}>Thumbnail</TableCell>
      <TableCell flex={TABLE_FLEX_VALUES[1]}>Name</TableCell>
      <TableCell flex={TABLE_FLEX_VALUES[2]}>Price</TableCell>
    </HeaderContainer>
  );
};

export default TableHeader;
