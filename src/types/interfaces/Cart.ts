import type Base from "@/types/interfaces/Base.ts";
import type Book from "@/types/interfaces/Book.ts";


export default interface Cart {
    cartId: number;

    items: CartItem[];

    grandTotal: number;
}


export interface CartItem extends Base {
    book: Book;

    bookId: number;

    priceSnapshot: number;

    qty: number;

    subtotal: number;
}
