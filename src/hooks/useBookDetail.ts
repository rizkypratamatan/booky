import bookDetailService from "@/services/bookDetailService.ts";
import {useQuery} from "@tanstack/react-query";


export default function useBookDetail(id: number) {
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['bookDetail', id],
        queryFn: ({queryKey}) => {
            const [, id] = queryKey;
            return bookDetailService(id as number);
        }
    });

    return {data, isLoading, isError, error};
}
