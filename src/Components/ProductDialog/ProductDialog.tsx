import React, { FC } from "react";
import { createPortal } from "react-dom";
import DialogContent from "./DialogContent";
import { TProduct } from "../../Pages/Products/useProductsApi/types";

interface TProductDialog {
  product: TProduct | null;
  onClose: () => void;
}

const ProductDialog: FC<TProductDialog> = ({ product, onClose }) => {
  const handleCloseDialog = () => {
    onClose();
  };

  return (
    <>
      {product !== null &&
        createPortal(
          <DialogContent product={product} onClose={handleCloseDialog} />,
          document.body,
        )}
    </>
  );
};

export default ProductDialog;
