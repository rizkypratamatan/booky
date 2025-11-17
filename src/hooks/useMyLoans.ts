import myLoansService from "@/services/myLoansService.ts";
import {useQuery} from "@tanstack/react-query";


export default function useMyLoans() {
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['myLoans'],
        queryFn: myLoansService
    });

    return {data, isLoading, isError, error};
}
