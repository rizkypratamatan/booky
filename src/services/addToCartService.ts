import {apiClient} from "@/lib/apiClient.ts";
import type AddToCartRequest from "@/types/interfaces/AddToCartRequest.ts";
import type AddToCartResponse from "@/types/interfaces/AddToCartResponse.ts";


export default async function addToCartService(params: AddToCartRequest) {
    const {data} = await apiClient.post<AddToCartResponse>('/cart/items', params);

    return data;
}
