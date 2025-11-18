import type BaseResponse from "@/types/interfaces/BaseResponse.ts";
import type Book from "@/types/interfaces/Book.ts";
import type Pagination from "@/types/interfaces/Pagination.ts";


export default interface BooksResponse extends BaseResponse {
    data: BooksResponseData;
}


export interface BooksResponseData {
    books: Book[];

    pagination: Pagination;
}
