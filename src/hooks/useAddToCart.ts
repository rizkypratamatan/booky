import addToCartService from "@/services/addToCartService.ts";
import type AddToCartRequest from "@/types/interfaces/AddToCartRequest.ts";
import {type QueryClient, useMutation, useQueryClient} from "@tanstack/react-query";


export default function useAddToCart() {
    const queryClient: QueryClient = useQueryClient();

    const {mutate, isPending, isError, error, isSuccess} = useMutation({
        mutationFn: (data: AddToCartRequest) => addToCartService(data),
        onError: (error: Error) => {
            console.log(error);
        },
        onSettled: (data) => {
            if(data && data.success) {
                queryClient.invalidateQueries({queryKey: ['cart']}).then();
            }
        }
    });

    const onSubmit = async(data: AddToCartRequest) => {
        mutate(data);
    };

    return {onSubmit, isPending, isError, error, isSuccess};
}
