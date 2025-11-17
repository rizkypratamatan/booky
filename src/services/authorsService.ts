import {apiClient} from "@/lib/apiClient.ts";
import type AuthorsResponse from "@/types/interfaces/AuthorsResponse.ts";


export default async function authorsService() {
    const {data} = await apiClient.get<AuthorsResponse>('/authors');

    return data;
}
