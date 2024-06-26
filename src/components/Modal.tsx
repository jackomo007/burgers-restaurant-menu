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
  ModifierHeader,
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
import { addItemToCart } from "../features/cart/cartSlice";
import { CartItem } from "../types/cartTypes";

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

  const [quantity, setQuantity] = useState<number>(0);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    if (selectedSize && quantity > 0) {
      setTotalPrice(selectedSize.price * quantity);
    }
  }, [selectedSize, quantity]);

  useEffect(() => {
    if (
      selectedItem &&
      selectedItem.modifiers &&
      selectedItem.modifiers.length > 0
    ) {
      const firstModifier = selectedItem.modifiers[0];
      if (
        firstModifier &&
        firstModifier.items &&
        firstModifier.items.length > 0
      ) {
        handleSizeChange(firstModifier.items[0]);
      }
    } else {
      setSelectedSize({
        ...defaultBurgerOption,
        price: selectedItem ? selectedItem.price : 0,
      });
      setQuantity(1);
      setTotalPrice(selectedItem ? selectedItem.price : 0);
    }
  }, [selectedItem]);

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
    if (selectedItem && quantity > 0) {
      const price = selectedSize ? selectedSize.price : selectedItem.price;
      const itemToAdd: CartItem = {
        id: String(selectedItem.id),
        name:
          selectedItem.name +
          (selectedSize && selectedSize.name ? " - " + selectedSize.name : ""),
        price: price,
        quantity,
        total: price * quantity,
        additionalInfo: selectedItem.description || "",
      };

      dispatch(addItemToCart(itemToAdd));
    }
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
          {selectedItem.images && selectedItem.images.length > 0 && (
            <ItemImage
              src={selectedItem.images[0].image}
              alt={`${selectedItem.images[0].id}`}
            />
          )}
          <Title>{selectedItem.name}</Title>
          <Description>{selectedItem.description}</Description>
          <OptionsForm>
            {selectedItem.modifiers &&
              selectedItem.modifiers.map((modifier, modifierIndex) => (
                <div key={modifierIndex}>
                  <ModifierHeader>
                    <span>{modifier.name}</span>
                    <p>Select 1 option</p>
                  </ModifierHeader>
                  {modifier.items.map((option, index) => (
                    <SizeOptionLabel key={index}>
                      <div>
                        <span>{option.name}</span>
                        <SizeOptionPrice>
                          R$ {option.price.toFixed(2)}
                        </SizeOptionPrice>
                      </div>
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
              data-icon="minus"
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
              data-icon="plus"
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
