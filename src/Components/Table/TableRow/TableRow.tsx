import React, { FC } from "react";
import { TABLE_FLEX_VALUES } from "../constants";
import { TableCell } from "../styles";
import { RowContainer, StyledImage, StyledNameCell } from "./styles";

interface TTableHeaderProps {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  onClick: () => void;
}

const TableHeader: FC<TTableHeaderProps> = ({
  title,
  description,
  price,
  thumbnail,
  onClick,
}) => {
  return (
    <RowContainer onClick={onClick}>
      <TableCell flex={TABLE_FLEX_VALUES[0]} isCentered>
        <StyledImage src={thumbnail} alt={title} />
      </TableCell>
      <StyledNameCell flex={TABLE_FLEX_VALUES[1]}>
        <b>{title}</b>
        <p>{description}</p>
      </StyledNameCell>
      <TableCell flex={TABLE_FLEX_VALUES[2]}>&#8369; {price}</TableCell>
    </RowContainer>
  );
};

export default TableHeader;
