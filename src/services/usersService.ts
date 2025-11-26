import {apiClient} from "@/lib/apiClient.ts";
import type CategoriesResponse from "@/types/interfaces/CategoriesResponse.ts";
import type UsersRequest from "@/types/interfaces/UsersRequest.ts";


export default async function usersService(params: UsersRequest) {
    const url: string = `page=${params.page}&limit=${params.limit}${params.search ? `&search=${params.search}` : ''}`;
    const {data} = await apiClient.get<CategoriesResponse>(`/admin/users?${url}`);

    return data;
}
