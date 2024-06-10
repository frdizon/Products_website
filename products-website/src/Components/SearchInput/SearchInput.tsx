import React, { ChangeEvent, FC, useCallback } from 'react';
import { StyledInput } from './styles';

interface TSearchInputProps {
    searchValue: string;
    onSearchChange: (searchValue: string) => void;
}

const SearchInput: FC<TSearchInputProps> = ({searchValue, onSearchChange}) => {

    const onSearchChangeCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        onSearchChange(e.target.value);
    }, []);
    
    return (
        <StyledInput value={searchValue} onChange={onSearchChangeCallback} />
    );
};

export default SearchInput;