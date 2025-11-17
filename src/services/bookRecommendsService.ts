import {apiClient} from "@/lib/apiClient.ts";
import type BookRecommendsRequest from "@/types/interfaces/BookRecommendsRequest.ts";
import type BookRecommendsResponse from "@/types/interfaces/BookRecommendsResponse.ts";


export default async function bookRecommendsService(params: BookRecommendsRequest) {
    const url: string = `limit=${params.limit}${params.categoryId ? `&categoryId=${params.categoryId}` : ''}`;
    const {data} = await apiClient.get<BookRecommendsResponse>(`/books/recommend?${url}`);

    return data;
}
