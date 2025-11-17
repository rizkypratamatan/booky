import {apiClient} from "@/lib/apiClient.ts";
import type MeResponse from "@/types/interfaces/MeResponse.ts";


export default async function meService() {
    const {data} = await apiClient.get<MeResponse>('/me');

    return data;
}
