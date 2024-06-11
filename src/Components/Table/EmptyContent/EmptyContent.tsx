import React, { FC } from "react";
import { Container, Spinner } from "./styles";

interface TEmptyContentProps {
  isLoading: boolean;
}

const EmptyContent: FC<TEmptyContentProps> = ({ isLoading }) => {
  if (isLoading) {
    return (
      <Container>
        <Spinner />
      </Container>
    );
  }
  return <Container>No products matched your search keyword.</Container>;
};

export default EmptyContent;
