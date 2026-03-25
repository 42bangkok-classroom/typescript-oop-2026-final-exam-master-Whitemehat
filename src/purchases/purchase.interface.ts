export interface PurchaseItem{
    producId: number,
    purchaseDate: string
}
export interface Purchase{
    id: number,
    customerName: string,
    purchaseDate: string,
    items: PurchaseItem[],
    totalPrice: number
}