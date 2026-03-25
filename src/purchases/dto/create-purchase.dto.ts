import { PurchaseItem } from "../purchase.interface"
export class CreateDTOPurchase{
    customerName: string
    purchaseDate: string
    items: PurchaseItem[]
}