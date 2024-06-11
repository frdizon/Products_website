import { useCallback, useState } from "react";
import { TProduct } from "./types";
import { productsUrlQueryBuilder } from "./utils";

const URL_DELAY = 0;
const URL_LIMIT = 30;
const PRODUCTS_URL = `https://dummyjson.com/products/search?limit=${URL_LIMIT}&delay=${URL_DELAY}`;

const useProductsApi = () => {
  const [data, setData] = useState<TProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [numOfPages, setNumOfPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const onApiCall = useCallback(() => {
    setIsLoading(true);
    setData([]);
    fetch(PRODUCTS_URL)
      .then((res) => res.json())
      .then((json) => {
        setData(json.products);
        setNumOfPages(Math.ceil(json.total / URL_LIMIT) - 1);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleApiPagination = useCallback(
    (pageNum: number) => {
      const urlSkipValue = (pageNum - 1) * URL_LIMIT;
      setIsLoading(true);
      setData([]);
      fetch(
        `${PRODUCTS_URL}${productsUrlQueryBuilder(urlSkipValue, searchQuery)}`,
      )
        .then((res) => res.json())
        .then((json) => setData(json.products))
        .finally(() => setIsLoading(false));
    },
    [searchQuery],
  );

  const handleNewSearch = useCallback((newSearchQuery: string) => {
    const urlSkipValue = 0;
    setIsLoading(true);
    setData([]);
    setSearchQuery(newSearchQuery);
    fetch(
      `${PRODUCTS_URL}${productsUrlQueryBuilder(urlSkipValue, newSearchQuery)}`,
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json.products);
        setNumOfPages(Math.ceil(json.total / URL_LIMIT) - 1);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return {
    data,
    isLoading,
    numOfPages,
    onApiCall,
    handleApiPagination,
    handleNewSearch,
  };
};

export default useProductsApi;
