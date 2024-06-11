import React, { ChangeEvent, FC, useCallback, KeyboardEvent } from "react";
import { StyledInput } from "./styles";

interface TSearchInputProps {
  searchValue: string;
  onSearchChange: (searchValue: string) => void;
  onEnter: () => void;
}

const SearchInput: FC<TSearchInputProps> = ({
  searchValue,
  onSearchChange,
  onEnter,
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

  return (
    <StyledInput
      value={searchValue}
      onChange={onSearchChangeCallback}
      onKeyDown={handleKeyDown}
    />
  );
};

export default SearchInput;
