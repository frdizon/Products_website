import styled from 'styled-components';

export const GlobalLayoutContainer = styled.div`
    height: 100vh;
    width: 100vw;
    flex-direction: column;

    box-sizing: border-box;
    div, input {
        box-sizing: border-box;
    }
`;

export const AppHeader = styled.div`
    height: 50px;
    width: 100%;
    background-color: dodgerblue;

    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    font-size: 18px;
    font-weight: bold;
`;

export const ContentContainer = styled.div`
    height: calc(100% - 50px);
    width: 100%;
    padding: 12px;
`;