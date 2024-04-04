export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  additionalInfo?: string;
  total: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
}
