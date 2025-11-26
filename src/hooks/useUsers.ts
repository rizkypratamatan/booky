import usersService from "@/services/usersService.ts";
import type UsersRequest from "@/types/interfaces/UsersRequest.ts";
import {useQuery} from "@tanstack/react-query";


export default function useUsers(params: UsersRequest) {
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['users', params],
        queryFn: ({queryKey}) => {
            const [, params] = queryKey;
            return usersService(params as UsersRequest);
        }
    });

    return {data, isLoading, isError, error};
}
