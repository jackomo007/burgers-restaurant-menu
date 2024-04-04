import React, { useState, useEffect } from "react";
import { MenuItem } from "../types/menuTypes";
import {
  AddToOrderButton,
  CloseButton,
  Description,
  ModalBackdrop,
  ModalContent,
  ModalWrapper,
  OptionsForm,
  QuantityButton,
  QuantityInput,
  QuantityWrapper,
  SizeOptionLabel,
  SizeOptionPrice,
  SizeOptionRadio,
  Title,
  ItemImage,
} from "../styles/StyledModal";
import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { updateTotalPrice } from "../features/order/orderSlice";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem: MenuItem;
}

type BurgerOption = {
  id: number;
  name: string;
  price: number;
  maxChoices?: number;
  position: number;
  visible: number;
  availabilityType: string;
  available: boolean;
};

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  selectedItem,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const defaultBurgerOption: BurgerOption = {
    id: 0,
    name: "",
    price: 0,
    maxChoices: 0,
    position: 0,
    visible: 1,
    availabilityType: "always",
    available: true,
  };

  const [selectedSize, setSelectedSize] = useState<BurgerOption | null>(
    defaultBurgerOption
  );

  const [quantity, setQuantity] = useState<number>(1);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    if (selectedSize && quantity > 0) {
      setTotalPrice(selectedSize.price * quantity);
    }
  }, [selectedSize, quantity]);

  useEffect(() => {
    dispatch(updateTotalPrice(totalPrice));
  }, [totalPrice, dispatch]);

  const handleSizeChange = (option: BurgerOption) => {
    const safeOption: BurgerOption = {
      ...option,
      maxChoices: option.maxChoices ?? 0,
    };

    setSelectedSize(safeOption);
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToOrder = () => {
    // Logic to add to order
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ModalBackdrop>
      <ModalWrapper>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalContent>
          <ItemImage
            src={selectedItem.images[0].image}
            alt={`${selectedItem.images[0].id}`}
          />
          <Title>{selectedItem.name}</Title>
          <Description>{selectedItem.description}</Description>
          <OptionsForm>
            {selectedItem.modifiers &&
              selectedItem.modifiers.map((modifier, modifierIndex) => (
                <div key={modifierIndex}>
                  {modifier.name}
                  {modifier.items.map((option, index) => (
                    <SizeOptionLabel key={index}>
                      <SizeOptionRadio
                        type="radio"
                        name="burgerSize"
                        value={option.name}
                        checked={
                          selectedSize
                            ? selectedSize.name === option.name
                            : false
                        }
                        onChange={() => handleSizeChange(option)}
                      />
                      {option.name}
                      <SizeOptionPrice>
                        R$ {option.price.toFixed(2)}
                      </SizeOptionPrice>
                    </SizeOptionLabel>
                  ))}
                </div>
              ))}
          </OptionsForm>
          <QuantityWrapper>
            <QuantityButton
              onClick={() => {
                const newQuantity = quantity - 1;
                newQuantity >= 0 && setQuantity(newQuantity);
              }}
            >
              -
            </QuantityButton>
            <QuantityInput
              type="number"
              min={0}
              onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
              value={quantity}
            />
            <QuantityButton
              onClick={() => {
                const newQuantity = quantity + 1;
                setQuantity(newQuantity);
              }}
            >
              +
            </QuantityButton>
          </QuantityWrapper>
          <AddToOrderButton onClick={handleAddToOrder}>
            Add to Order - ${totalPrice.toFixed(2)}
          </AddToOrderButton>
        </ModalContent>
      </ModalWrapper>
    </ModalBackdrop>
  );
};

export default ProductModal;
