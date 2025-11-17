import type BaseResponse from "@/types/interfaces/BaseResponse.ts";
import type Category from "@/types/interfaces/Category.ts";


export default interface CategoriesResponse extends BaseResponse {
    data: CategoriesResponseData;
}


export interface CategoriesResponseData {
    categories: Category[];
}
