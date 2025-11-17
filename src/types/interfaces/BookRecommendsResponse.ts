import type Author from "@/types/interfaces/Author.ts";
import type Base from "@/types/interfaces/Base.ts";
import type BaseResponse from "@/types/interfaces/BaseResponse.ts";
import type Category from "@/types/interfaces/Category.ts";


export default interface BookRecommendsResponse extends BaseResponse {
    data: BookRecommendResponseData;
}


export interface BookRecommendResponseData {
    books: BookRecommendResponseDataBook[];

    mode: string;
}


export interface BookRecommendResponseDataBook extends Base {
    author: Author;

    authorId: number;

    availableCopies: number;

    borrowCount: number;

    category: Category;

    categoryId: number;

    coverImage: string;

    description: string;

    isbn: string;

    publishedYear: number;

    rating: number;

    reviewCount: number;

    title: string;

    totalCopies: number;
}
