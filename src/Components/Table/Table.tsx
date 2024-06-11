import React, { FC } from "react";
import TableHeader from "./TableHeader/TableHeader";
import TableRow from "./TableRow/TableRow";
import { TableContainer } from "./styles";
import { TProduct } from "../../Pages/Products/useProductsApi/types";
import EmptyContent from "./EmptyContent/EmptyContent";

interface TTableProps {
  products: TProduct[];
  isLoading: boolean;
}

const Table: FC<TTableProps> = ({ products, isLoading }) => {
  const contentComponent =
    products.length > 0 ? (
      <>
        {products.map((datum) => (
          <TableRow
            key={datum.id}
            title={datum.title}
            description={datum.description}
            price={datum.price}
            thumbnail={datum.thumbnail}
          />
        ))}
      </>
    ) : (
      <EmptyContent isLoading={isLoading} />
    );

  return (
    <TableContainer>
      <TableHeader />
      {contentComponent}
    </TableContainer>
  );
};

export default Table;
