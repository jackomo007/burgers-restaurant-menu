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
`;

export const ModalWrapper = styled.div`
  background-color: #fff;
  margin: 10% auto;
  padding: 20px;
  border-radius: 8px;
  width: 50%;
`;

export const CloseButton = styled.button`
  float: right;
  font-size: 1.5rem;
  border: none;
  background: none;
`;

export const ModalContent = styled.div`
  margin-top: 20px;
`;

export const Title = styled.h2`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  color: #666;
  margin-bottom: 20px;
`;

export const OptionsForm = styled.form`
  margin-bottom: 20px;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const QuantityButton = styled.button`
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  padding: 5px 10px;
`;

export const QuantityInput = styled.input`
  max-width: 50px;
  text-align: center;
  margin: 0 10px;
  padding: 5px;
  border: 1px solid #ddd;
`;

export const AddToOrderButton = styled.button`
  background-color: #ff8c00;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
`;

export const SizeOptionLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const SizeOptionRadio = styled.input`
  margin-right: 10px;
`;

export const SizeOptionPrice = styled.span`
  font-weight: bold;
  margin-left: 5px;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 320px;
`;
