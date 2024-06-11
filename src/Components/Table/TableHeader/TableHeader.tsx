import React, { FC } from "react";
import { TABLE_FLEX_VALUES } from "../constants";
import { TableCell } from "../styles";
import { HeaderContainer } from "./styles";

const TableHeader: FC = () => {
  return (
    <HeaderContainer>
      <TableCell flex={TABLE_FLEX_VALUES[0]}>
        <b>Thumbnail</b>
      </TableCell>
      <TableCell flex={TABLE_FLEX_VALUES[1]}>
        <b>Name</b>
      </TableCell>
      <TableCell flex={TABLE_FLEX_VALUES[2]}>
        <b>Price</b>
      </TableCell>
    </HeaderContainer>
  );
};

export default TableHeader;
