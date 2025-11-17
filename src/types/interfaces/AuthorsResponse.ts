import type Author from "@/types/interfaces/Author.ts";
import type BaseResponse from "@/types/interfaces/BaseResponse.ts";


export default interface AuthorsResponse extends BaseResponse {
    data: AuthorsResponseData;
}


export interface AuthorsResponseData {
    authors: Author[];
}
