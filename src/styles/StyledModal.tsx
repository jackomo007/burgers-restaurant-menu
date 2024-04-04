import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  @media (max-width: 600px) {
    overflow: hidden;
  }
`;

export const ModalWrapper = styled.div`
  background-color: #fff;
  margin: 10% auto;
  width: 50%;
  max-width: 480px;
  position: relative;
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    margin: 0;
    max-width: none;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.5rem;
  border: none;
  background: white;
  color: black;
  cursor: pointer;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  margin-right: 15px;
  margin-top: 15px;
  @media (max-width: 600px) {
    top: 10px;
    right: 10px;
    margin-right: 0;
    margin-top: 0;
  }
`;

export const ModalContent = styled.div`
  margin-top: 20px;
  @media (max-width: 600px) {
    margin-top: 0;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.titlePrimary};
  font-size: 24px;
  margin: 10px 10px 0 10px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.shadowColor};
  font-size: 16px;
  margin: 0 10px 0 10px;
`;

export const OptionsForm = styled.form`
  margin-bottom: 20px;
`;

export const ModifierHeader = styled.div`
  background-color: ${({ theme }) => theme.containerColor};
  padding: 20px 20px 0 20px;
  font-size: 16px;
  span {
    font-weight: bold;
    display: block;
    color: ${({ theme }) => theme.textColorPrimary};
  }

  p {
    color: ${({ theme }) => theme.signDisabled};
    margin: 0;
  }
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const QuantityButton = styled.button`
  background-color: ${({ theme }) => theme.primaryColour};
  border: none;
  color: transparent;
  font-size: 0;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.lightColor};
  }

  &::before {
    width: 15px;
    height: 4px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
  }

  &::after {
    width: 4px;
    height: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
  }

  &[data-icon="plus"]::after {
    display: block;
  }

  &[data-icon="minus"]::after {
    display: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.textDisabled};
    &::before,
    &::after {
      background-color: ${({ theme }) => theme.signDisabled};
    }
  }
`;

export const QuantityInput = styled.input.attrs({ type: "number" })`
  max-width: 50px;
  font-weight: bolder;
  font-size: 24px;
  text-align: center;
  border: none;
  outline: none;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
  &:focus {
    border: none;
    outline: none;
    caret-color: transparent;
  }
  &:hover,
  &:active {
    border: none;
    outline: none;
  }
  caret-color: transparent;
`;

export const AddToOrderButton = styled.button`
  background-color: ${({ theme }) => theme.primaryColour};
  color: #fff;
  padding: 10px 20px;
  margin: 0 20px 20px;
  border: none;
  border-radius: 40px;
  font-size: 1rem;
  cursor: pointer;
  width: calc(100% - 40px);
  font-size: 18px;
  font-weight: 500;
`;

export const SizeOptionLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  cursor: pointer;

  span {
    font-weight: 500;
    font-size: 16px;
    margin: 0;
  }
`;

export const SizeOptionPrice = styled.p`
  display: block;
  font-weight: normal;
  margin: 0;
  font-size: 16px;
  color: ${({ theme }) => theme.textColorPrimary};
`;

export const SizeOptionRadio = styled.input.attrs({ type: "radio" })`
  appearance: none;
  background-color: ${({ theme }) => theme.lightColor};
  margin-left: 10px;
  width: 20px;
  height: 20px;
  border: 3px solid ${({ theme }) => theme.signDisabled};
  border-radius: 50%;
  cursor: pointer;

  &:checked {
    border: 5px solid ${({ theme }) => theme.primaryColour};
  }

  &:checked::after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    margin: 1px;
    background: ${({ theme }) => theme.primaryColour};
    border-radius: 50%;
  }
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 320px;
`;
