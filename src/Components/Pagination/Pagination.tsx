import React, { FC, useCallback } from 'react';
import { PaginationContainer, PaginationItem, PaginationPlaceholder } from './styles';
import { generateCountArray } from './utilts';

interface TPaginationProps {
    paginationValue: number;
    numberOfPages: number;
    onPageChange: (pageNumber: number) => void;
}

const Pagination: FC<TPaginationProps> = ({paginationValue, numberOfPages, onPageChange}) => {
    const handlePageChange = useCallback((pageVal: number) => () => {
        onPageChange(pageVal);
    }, [])

    const handlePreviousPage = useCallback(() => {
        onPageChange(paginationValue - 1);
    }, [paginationValue])

    const handleNextPage = useCallback(() => {
        onPageChange(paginationValue + 1);
    }, [paginationValue])

    const leftButtonComponent = paginationValue > 1 ? (<PaginationItem isSelected={false} onClick={handlePreviousPage}>&laquo;</PaginationItem>) : <PaginationPlaceholder />

    const rightButtonComponent = paginationValue < numberOfPages ? (<PaginationItem isSelected={false} onClick={handleNextPage}>&raquo;</PaginationItem>) : <PaginationPlaceholder />

    return (
        <PaginationContainer>
            {leftButtonComponent}
            {generateCountArray(numberOfPages).map((pageNumber) => (
                <PaginationItem isSelected={pageNumber === paginationValue} onClick={handlePageChange(pageNumber)}>
                    {pageNumber}
                </PaginationItem>
            ))}
            {rightButtonComponent}
        </PaginationContainer>
    );
};

export default Pagination;