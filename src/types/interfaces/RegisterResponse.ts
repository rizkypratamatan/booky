import type BaseResponse from "@/types/interfaces/BaseResponse.ts";


export default interface RegisterResponse extends BaseResponse {
    data: RegisterResponseData;
}


export interface RegisterResponseData {
    id: number;

    name: string;

    email: string;

    role: string;
}
