import React, { FC } from "react";
import {
  BackgroundBlur,
  CategoryWrapper,
  CloseIconContainer,
  ContentContainer,
  ImagesContainer,
  MoreImagesTextWrapper,
  PriceWrapper,
  TitleWrapper,
} from "./styles";
import { TProduct } from "../../Pages/Products/useProductsApi/types";

interface TDialogContentProps {
  product: TProduct;
  onClose: () => void;
}

const DialogContent: FC<TDialogContentProps> = ({ product, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <BackgroundBlur>
      <ContentContainer>
        <CategoryWrapper>{product.category.toUpperCase()}</CategoryWrapper>
        <TitleWrapper>{product.title}</TitleWrapper>
        <p>{product.description}</p>
        <PriceWrapper>&#8369; {product.price}</PriceWrapper>
        <ImagesContainer>
          <MoreImagesTextWrapper>MORE IMAGES</MoreImagesTextWrapper>
          {product.images.map((imgSrc, idx) => (
            <img key={idx} src={imgSrc} alt={product.description} />
          ))}
        </ImagesContainer>
        <CloseIconContainer onClick={handleClose}>✖</CloseIconContainer>
      </ContentContainer>
    </BackgroundBlur>
  );
};

export default DialogContent;
