import React, { FC, ReactNode } from 'react';
import { AppHeader, ContentContainer, GlobalLayoutContainer } from './styles';

interface TGlobalLayout {
    appHeader: string;
    children: ReactNode;
}

const GlobalLayout: FC<TGlobalLayout> = ({appHeader, children}) => {
    return (
        <GlobalLayoutContainer>
            <AppHeader>{appHeader}</AppHeader>
            <ContentContainer>{children}</ContentContainer>
        </GlobalLayoutContainer>
    );
};

export default GlobalLayout;