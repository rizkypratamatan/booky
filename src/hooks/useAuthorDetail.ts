import authorDetailService from "@/services/authorDetailService.ts";
import {useQuery} from "@tanstack/react-query";


export default function useAuthorDetail(id: number) {
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['authorDetail', id],
        queryFn: ({queryKey}) => {
            const [, id] = queryKey;
            return authorDetailService(id as number);
        }
    });

    return {data, isLoading, isError, error};
}
