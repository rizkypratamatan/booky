import booksService from "@/services/booksService.ts";
import type BooksRequest from "@/types/interfaces/BooksRequest.ts";
import {useQuery} from "@tanstack/react-query";


export default function useBooks(params: BooksRequest) {
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['books', params],
        queryFn: ({queryKey}) => {
            const [, params] = queryKey;
            return booksService(params as BooksRequest);
        }
    });

    return {data, isLoading, isError, error};
}
