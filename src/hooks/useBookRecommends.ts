import bookRecommendsService from "@/services/bookRecommendsService.ts";
import type BookRecommendsRequest from "@/types/interfaces/BookRecommendsRequest.ts";
import {useQuery} from "@tanstack/react-query";


export default function useBookRecommends(params: BookRecommendsRequest) {
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['bookRecommends', params],
        queryFn: ({queryKey}) => {
            const [, params] = queryKey;
            return bookRecommendsService(params as BookRecommendsRequest);
        }
    });

    return {data, isLoading, isError, error};
}
