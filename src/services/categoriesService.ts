import {apiClient} from "@/lib/apiClient.ts";
import type CategoriesResponse from "@/types/interfaces/CategoriesResponse.ts";


export default async function categoriesService() {
    const {data} = await apiClient.get<CategoriesResponse>('/categories');

    return data;
}
