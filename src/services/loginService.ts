import {apiClient} from "@/lib/apiClient.ts";
import type LoginRequest from "@/types/interfaces/LoginRequest.ts";
import type LoginResponse from "@/types/interfaces/LoginResponse.ts";


export default async function loginService(params: LoginRequest) {
    const {data} = await apiClient.post<LoginResponse>('/auth/login', params);

    return data;
}
