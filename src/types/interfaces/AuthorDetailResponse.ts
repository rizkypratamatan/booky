import type Author from "@/types/interfaces/Author.ts";
import type BaseResponse from "@/types/interfaces/BaseResponse.ts";
import type Book from "@/types/interfaces/Book.ts";


export default interface AuthorDetailResponse extends BaseResponse {
    data: AuthorDetailResponseData;
}


export interface AuthorDetailResponseData {
    author: Author;

    books: Book[];
}
