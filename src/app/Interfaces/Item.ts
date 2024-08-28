export interface Item {
  id: string; // Updated from number to string to match the JSON
  name: string; // Changed from ItemName to name
  salesprice: number; // Changed from SalesPrice to salesprice
  purchasePrice?: number;
  categoryName?: string;
  imgename?: string;
  categoryId?: number;
  quantity?: number;  // Optional quantity property

}
