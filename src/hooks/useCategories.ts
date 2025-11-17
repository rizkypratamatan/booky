import categoriesService from "@/services/categoriesService.ts";
import {useQuery} from "@tanstack/react-query";


export default function useCategories() {
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['categories'],
        queryFn: categoriesService
    });

    return {data, isLoading, isError, error};
}
