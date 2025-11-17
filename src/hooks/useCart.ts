import cartService from "@/services/cartService.ts";
import {useQuery} from "@tanstack/react-query";


export default function useCart(token: string) {
    const {data, isLoading, isError, error} = useQuery({
        enabled: token !== '',
        queryKey: ['cart'],
        queryFn: cartService
    });

    return {data, isLoading, isError, error};
}
