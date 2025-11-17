import {apiClient} from "@/lib/apiClient.ts";
import type MeResponse from "@/types/interfaces/MeResponse.ts";


export default async function myLoansService() {
    const {data} = await apiClient.get<MeResponse>('/loans/my');

    return data;
}
