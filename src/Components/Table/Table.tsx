import React, { FC } from "react";
import TableHeader from "./TableHeader/TableHeader";
import TableRow from "./TableRow/TableRow";
import { TableContainer } from "./styles";
import { TProduct } from "../../Pages/Products/useProductsApi/types";

interface TTableProps {
  products: TProduct[];
}

const Table: FC<TTableProps> = ({ products }) => {
  return (
    <TableContainer>
      <TableHeader />
      {products.map((datum) => (
        <TableRow
          key={datum.id}
          title={datum.title}
          description={datum.description}
          price={datum.price}
          thumbnail={datum.thumbnail}
        />
      ))}
    </TableContainer>
  );
};

export default Table;
