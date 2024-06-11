import React, { ChangeEvent, FC, useCallback, KeyboardEvent } from "react";
import { ClearIconContainer, InputContainer, StyledInput } from "./styles";

interface TSearchInputProps {
  searchValue: string;
  onSearchChange: (searchValue: string) => void;
  onEnter: () => void;
  onClear: () => void;
}

const SearchInput: FC<TSearchInputProps> = ({
  searchValue,
  onSearchChange,
  onEnter,
  onClear,
}) => {
  const onSearchChangeCallback = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onSearchChange(e.target.value);
    },
    [onSearchChange],
  );

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      onEnter();
    }
  };

  const handleClearClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    onClear();
  };

  return (
    <InputContainer>
      <StyledInput
        value={searchValue}
        onChange={onSearchChangeCallback}
        onKeyDown={handleKeyDown}
        placeholder="Search product"
      />
      <ClearIconContainer onClick={handleClearClick}>✖</ClearIconContainer>
    </InputContainer>
  );
};

export default SearchInput;
