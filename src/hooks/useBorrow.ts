import borrowService from "@/services/borrowService.ts";
import type BorrowRequest from "@/types/interfaces/BorrowRequest.ts";
import {useMutation} from "@tanstack/react-query";


export default function useBorrow() {
    const {mutate, isPending, isError, error, isSuccess} = useMutation({
        mutationFn: (data: BorrowRequest) => borrowService(data),
        onError: (error: Error) => {
            console.log(error);
        },
        onSettled: (data) => {
            if(data && data.success) {
                console.log(data);
            }
        }
    });

    const onSubmit = async(data: BorrowRequest) => {
        mutate(data);
    };

    return {onSubmit, isPending, isError, error, isSuccess};
}
