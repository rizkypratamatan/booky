import type BaseResponse from "@/types/interfaces/BaseResponse.ts";


export default interface LoginResponse extends BaseResponse {
    data: LoginResponseData;
}


export interface LoginResponseData {
    token: string;

    user: LoginResponseDataUser;
}


export interface LoginResponseDataUser {
    id: number;

    name: string;

    email: string;

    role: string;
}
