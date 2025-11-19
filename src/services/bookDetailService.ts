import {apiClient} from "@/lib/apiClient.ts";
import type BookDetailResponse from "@/types/interfaces/BookDetailResponse.ts";


export default async function bookDetailService(id: number) {
    const {data} = await apiClient.get<BookDetailResponse>(`/books/${id}?${id}`);

    return data;
}
