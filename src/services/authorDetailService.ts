import {apiClient} from "@/lib/apiClient.ts";
import type AuthorDetailResponse from "@/types/interfaces/AuthorDetailResponse.ts";


export default async function authorDetailService(id: number) {
    const {data} = await apiClient.get<AuthorDetailResponse>(`/authors/${id}/books?${id}`);

    return data;
}
