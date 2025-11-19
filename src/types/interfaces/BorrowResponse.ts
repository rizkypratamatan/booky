import type BaseResponse from "@/types/interfaces/BaseResponse.ts";


export default interface BorrowResponse extends BaseResponse {
    data: BorrowResponseData;
}


export interface BorrowResponseData {
    loan: BorrowResponseDataLoan;
}


export interface BorrowResponseDataLoan {
    bookId: number;

    borrowedAt: Date;

    dueAt: Date;

    id: number;

    returnedAt: Date;

    status: string;

    userId: number;
}
