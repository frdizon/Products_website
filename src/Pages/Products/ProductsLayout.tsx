import React, { FC, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import GlobalLayout from "../../Components/GlobalLayout/GlobalLayout";
import SearchInput from "../../Components/SearchInput/SearchInput";
import Pagination from "../../Components/Pagination/Pagination";
import Table from "../../Components/Table/Table";
import useProductsApi from "./useProductsApi/useProductsApi";

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

  const {
    data,
    isLoading,
    numOfPages,
    onApiCall,
    handleApiPagination,
    handleNewSearch,
  } = useProductsApi();

  useEffect(() => {
    onApiCall();
  }, [onApiCall]);

  const handleSearchChange = useCallback((newSearchValue: string) => {
    setSearchValue(newSearchValue);
  }, []);

  const handleSearchEnter = useCallback(() => {
    handleNewSearch(searchValue);
    setPaginationValue(1);
  }, [handleNewSearch, searchValue]);

  const handlePageChange = useCallback(
    (newPageValue: number) => {
      handleApiPagination(newPageValue);
      setPaginationValue(newPageValue);
    },
    [handleApiPagination],
  );

  const handleSearchClear = useCallback(() => {
    if (searchValue !== "") {
      setSearchValue("");
      handleNewSearch("");
      setPaginationValue(1);
    }
  }, [searchValue, handleNewSearch]);

  return (
    <GlobalLayout appHeader="PRODUCTS DEMO">
      <ProductsLayoutContainer>
        <SearchInput
          searchValue={searchValue}
          onSearchChange={handleSearchChange}
          onEnter={handleSearchEnter}
          onClear={handleSearchClear}
        />
        <Table products={data} isLoading={isLoading} />
        <Pagination
          numberOfPages={numOfPages}
          paginationValue={paginationValue}
          onPageChange={handlePageChange}
        />
      </ProductsLayoutContainer>
    </GlobalLayout>
  );
};

export default ProductsLayout;
