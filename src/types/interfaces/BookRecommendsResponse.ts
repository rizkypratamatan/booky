import type BaseResponse from "@/types/interfaces/BaseResponse.ts";
import type Book from "@/types/interfaces/Book.ts";


export default interface BookRecommendsResponse extends BaseResponse {
    data: BookRecommendResponseData;
}


export interface BookRecommendResponseData {
    books: Book[];

    mode: string;
}
