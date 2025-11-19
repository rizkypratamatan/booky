import addToCartService from "@/services/addToCartService.ts";
import type AddToCartRequest from "@/types/interfaces/AddToCartRequest.ts";
import {useMutation} from "@tanstack/react-query";


export default function useAddToCart() {
    const {mutate, isPending, isError, error, isSuccess} = useMutation({
        mutationFn: (data: AddToCartRequest) => addToCartService(data),
        onError: (error: Error) => {
            console.log(error);
        },
        onSettled: (data) => {
            if(data && data.success) {
                console.log(data);
            }
        }
    });

    const onSubmit = async(data: AddToCartRequest) => {
        mutate(data);
    };

    return {onSubmit, isPending, isError, error, isSuccess};
}
