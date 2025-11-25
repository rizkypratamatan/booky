import type BaseResponse from "@/types/interfaces/BaseResponse.ts";
import type Cart from "@/types/interfaces/Cart.ts";


export default interface CartResponse extends BaseResponse {
    data: Cart;
}
