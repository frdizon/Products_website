import React, { FC, useCallback, useState } from "react";
import TableHeader from "./TableHeader/TableHeader";
import TableRow from "./TableRow/TableRow";
import { TableContainer } from "./styles";
import { TProduct } from "../../Pages/Products/useProductsApi/types";
import EmptyContent from "./EmptyContent/EmptyContent";
import ProductDialog from "../ProductDialog/ProductDialog";

interface TTableProps {
  products: TProduct[];
  isLoading: boolean;
}

const Table: FC<TTableProps> = ({ products, isLoading }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const selectedProduct = selectedIndex >= 0 ? products[selectedIndex] : null;

  const handleCloseDialog = useCallback(() => {
    setSelectedIndex(-1);
  }, []);

  const handleRowClick = useCallback(
    (index: number) => () => {
      setSelectedIndex(index);
    },
    [],
  );

  const contentComponent =
    products.length > 0 ? (
      <>
        {products.map((datum, idx) => (
          <TableRow
            key={datum.id}
            title={datum.title}
            description={datum.description}
            price={datum.price}
            thumbnail={datum.thumbnail}
            onClick={handleRowClick(idx)}
          />
        ))}
      </>
    ) : (
      <EmptyContent isLoading={isLoading} />
    );

  return (
    <>
      <TableContainer>
        <TableHeader />
        {contentComponent}
      </TableContainer>
      <ProductDialog product={selectedProduct} onClose={handleCloseDialog} />
    </>
  );
};

export default Table;
