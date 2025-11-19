import type BaseResponse from "@/types/interfaces/BaseResponse.ts";
import type Book from "@/types/interfaces/Book.ts";


export default interface BookDetailResponse extends BaseResponse {
    data: Book;
}
