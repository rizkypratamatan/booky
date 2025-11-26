import type {CartItem} from "@/types/interfaces/Cart.ts";


export default function useTotalCart(items?: CartItem[]) {
    return items ? items.reduce((sum, item) => sum + item.qty, 0) : 0;
}
