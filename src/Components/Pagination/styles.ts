import styled from 'styled-components';

export const PaginationContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

export const PaginationItem = styled.div<{isSelected: boolean}>`
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${({isSelected}) => isSelected ? 'dodgerblue': 'transparent'};

    &:hover {
        background-color: ${({isSelected}) => isSelected ? 'dodgerblue': '#ddd'};
    }
`;

export const PaginationPlaceholder = styled.div`
    height: 40px;
    width: 40px;
    padding: 8px 16px;
`;