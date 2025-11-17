import {apiClient} from "@/lib/apiClient.ts";
import type RegisterRequest from "@/types/interfaces/RegisterRequest.ts";
import type RegisterResponse from "@/types/interfaces/RegisterResponse.ts";


export default async function registerService(params: RegisterRequest) {
    const {data} = await apiClient.post<RegisterResponse>('/auth/register', params);

    return data;
}
