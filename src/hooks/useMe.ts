import meService from "@/services/meService.ts";
import {useQuery} from "@tanstack/react-query";


export default function useMe(token: string) {
    const {data, isLoading, isError, error} = useQuery({
        enabled: token !== '',
        queryKey: ['me'],
        queryFn: meService
    });

    return {data, isLoading, isError, error};
}
