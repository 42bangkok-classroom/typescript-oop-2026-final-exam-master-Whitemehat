export interface PurchaseItem {
  producId: number;
  quantity: number;
  price: number;
}
export interface Purchase {
  id: number;
  customerName: string;
  purchaseDate: string;
  items: PurchaseItem[];
  totalPrice: number;
}
