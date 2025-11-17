import {registerValidation} from "@/lib/validations/registerValidation.ts";
import registerService from "@/services/registerService";
import type RegisterRequest from "@/types/interfaces/RegisterRequest.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {useMutation} from "@tanstack/react-query";
import {useForm} from "react-hook-form";
import {type NavigateFunction, useNavigate} from "react-router";


export default function useRegister() {
    const navigate: NavigateFunction = useNavigate();

    const {register, handleSubmit, formState: {errors}, reset} = useForm({resolver: zodResolver(registerValidation)});

    const {mutate, isPending, isError, error, isSuccess} = useMutation({
        mutationFn: (data: RegisterRequest) => registerService(data),
        onError: (error: Error) => {
            console.log(error);
        },
        onSettled: (data) => {
            if(data && data.success) {
                navigate('/login');
            }
        }
    });

    const onSubmit = async(data: RegisterRequest) => {
        mutate(data);
    };

    return {register, handleSubmit, errors, reset, onSubmit, isPending, isError, error, isSuccess};
}
