import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: calc(100% - 40px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

export const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

// Styled component for the spinner
export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${rotate} 1s linear infinite;
`;
