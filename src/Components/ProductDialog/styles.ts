import styled from "styled-components";

export const BackgroundBlur = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
`;

export const ContentContainer = styled.div`
    height: 440px;
    width: 800px;
    box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
    background-color: white;
    border: 2px solid rgb(240, 240, 240);
    border-radius: 12px;
    position:  absolute;
    top: calc(50% - 220px);
    left: calc(50% - 400px);
    bottom: 70px;
    padding: 24px;
    box-sizing: border-box;
    div {
        box-sizing: border-box;
    }
`;

export const CloseIconContainer = styled.div`
    position: absolute;
    top: 12px;
    right: 12px;
    cursor: pointer;
    &:hover {
        color: red;
    }
`;

export const CategoryWrapper = styled.div`
    font-size: 12px;
    color: gray;
`;

export const TitleWrapper = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

export const PriceWrapper = styled.p`
    font-weight: 500;
`;

export const MoreImagesTextWrapper = styled.div`
    position: absolute;
    top: 8px;
    left: 8px;
    font-weight: 700;
    font-size: 12px;
`;

export const ImagesContainer = styled.div`
    height: 200px;
    width: 100%;
    margin-top: 12px;
    padding: 8px;

    background-color: rgba(0, 0, 0, 0.05);

    position: relative;
    display: flex;
    align-items: flex-end;
    gap: 24px;

    img {
        height: 150px;
        width: auto;
        background-color: rgba(0, 0, 0, 0.08);
    }
`;