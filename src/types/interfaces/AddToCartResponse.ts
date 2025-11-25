import type Base from "@/types/interfaces/Base.ts";
import type BaseResponse from "@/types/interfaces/BaseResponse.ts";


export default interface AddToCartResponse extends BaseResponse {
    data: AddToCartResponseData;
}


export interface AddToCartResponseData extends Base {
    bookId: number;

    cartId: number;

    priceSnapshot: number;

    qty: number;
}
