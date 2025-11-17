import authorsService from "@/services/authorsService.ts";
import {useQuery} from "@tanstack/react-query";


export default function useAuthors() {
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['authors'],
        queryFn: authorsService
    });

    return {data, isLoading, isError, error};
}
