import styled from 'styled-components';

export const StyledInput = styled.input`
    height: 40px;
    width: 100%;
    padding: 0 12px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid black;
    &:focus {
        outline: none;
        border: 2px solid dodgerblue;
    }
`;