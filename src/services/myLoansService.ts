import {apiClient} from "@/lib/apiClient.ts";
import type MyLoansResponse from "@/types/interfaces/MyLoansResponse.ts";


export default async function myLoansService() {
    const {data} = await apiClient.get<MyLoansResponse>('/loans/my');

    return data;
}
