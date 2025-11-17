import {apiClient} from "@/lib/apiClient.ts";
import type MeResponse from "@/types/interfaces/MeResponse.ts";


export default async function cartService() {
    const {data} = await apiClient.get<MeResponse>('/cart');

    return data;
}
