import type BaseResponse from "@/types/interfaces/BaseResponse.ts";
import type {Loan} from "@/types/interfaces/Loan.ts";


export default interface MyLoansResponse extends BaseResponse {
    data: MyLoansResponseData;
}


export interface MyLoansResponseData {
    loans: Loan[];
}
