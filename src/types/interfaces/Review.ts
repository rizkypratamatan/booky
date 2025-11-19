import type Base from "@/types/interfaces/Base.ts";


export default interface Review extends Base {
    bookId: number;

    comment: string;

    star: number;

    user: ReviewUser;

    userId: number;
}


export interface ReviewUser {
    id: number;

    name: string;
}
