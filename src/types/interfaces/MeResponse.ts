import type BaseResponse from "@/types/interfaces/BaseResponse.ts";


export default interface MeResponse extends BaseResponse {
    data: MeResponseData;
}


export interface MeResponseData {
    loanStats: MeResponseLoanStats;

    profile: MeResponseDataProfile;

    reviewsCount: number;
}


export interface MeResponseLoanStats {
    borrowed: number;

    late: number;

    returned: number;

    total: number;
}


export interface MeResponseDataProfile {
    id: number;

    createdAt: Date;

    email: string;

    name: string;

    role: string;
}
