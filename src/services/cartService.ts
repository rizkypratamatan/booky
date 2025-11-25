import {apiClient} from "@/lib/apiClient.ts";
import type CartResponse from "@/types/interfaces/CartResponse.ts";


export default async function cartService() {
    const {data} = await apiClient.get<CartResponse>('/cart');

    return data;
}
