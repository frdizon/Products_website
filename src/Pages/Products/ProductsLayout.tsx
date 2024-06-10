import React, { FC, useCallback, useState } from "react";
import styled from "styled-components";
import GlobalLayout from "../../Components/GlobalLayout/GlobalLayout";
import SearchInput from "../../Components/SearchInput/SearchInput";
import Pagination from "../../Components/Pagination/Pagination";
import Table from "../../Components/Table/Table";

const ProductsLayoutContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 4px 0 0;

  display: flex;
  flex-direction: column;
`;

const ProductsLayout: FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [paginationValue, setPaginationValue] = useState(1);

  const handleSearchChange = useCallback((newSearchValue: string) => {
    setSearchValue(newSearchValue);
  }, []);

  const handlePageChange = useCallback((newPageValue: number) => {
    setPaginationValue(newPageValue);
  }, []);

  return (
    <GlobalLayout appHeader="PRODUCTS DEMO">
      <ProductsLayoutContainer>
        <SearchInput
          searchValue={searchValue}
          onSearchChange={handleSearchChange}
        />
        <Table />
        <Pagination
          numberOfPages={8}
          paginationValue={paginationValue}
          onPageChange={handlePageChange}
        />
      </ProductsLayoutContainer>
    </GlobalLayout>
  );
};

export default ProductsLayout;
