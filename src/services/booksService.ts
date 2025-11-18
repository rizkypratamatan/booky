import {apiClient} from "@/lib/apiClient.ts";
import type BooksRequest from "@/types/interfaces/BooksRequest.ts";
import type BooksResponse from "@/types/interfaces/BooksResponse.ts";


export default async function booksService(params: BooksRequest) {
    const url: string = `page=${params.page}&limit=${params.limit}${params.q ? `&q=${params.q}` : ''}${params.authorId ? `&authorId=${params.authorId}` : ''}${params.categoryId ? `&categoryId=${params.categoryId}` : ''}`;
    const {data} = await apiClient.get<BooksResponse>(`/books?${url}`);

    return data;
}
