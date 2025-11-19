import {apiClient} from "@/lib/apiClient.ts";
import type AddToCartRequest from "@/types/interfaces/AddToCartRequest.ts";
import type BorrowResponse from "@/types/interfaces/BorrowResponse.ts";


export default async function addToCartService(params: AddToCartRequest) {
    const {data} = await apiClient.post<BorrowResponse>('/cart/items', params);

    return data;
}
