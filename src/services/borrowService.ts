import {apiClient} from "@/lib/apiClient.ts";
import type BorrowRequest from "@/types/interfaces/BorrowRequest.ts";
import type BorrowResponse from "@/types/interfaces/BorrowResponse.ts";


export default async function borrowService(params: BorrowRequest) {
    const {data} = await apiClient.post<BorrowResponse>('/loans', params);

    return data;
}
