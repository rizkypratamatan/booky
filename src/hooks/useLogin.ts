import {loginValidation} from "@/lib/validations/loginValidation.ts";
import loginService from "@/services/loginService.ts";
import {setToken} from "@/stores/slices/tokenSlice.ts";
import type LoginRequest from "@/types/interfaces/LoginRequest.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import type {UnknownAction} from "@reduxjs/toolkit";
import {useMutation} from "@tanstack/react-query";
import type {Dispatch} from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {type NavigateFunction, useNavigate} from "react-router";


export default function useLogin() {
    const dispatch: Dispatch<UnknownAction> = useDispatch();
    const navigate: NavigateFunction = useNavigate();

    const {register, handleSubmit, formState: {errors}, reset} = useForm({resolver: zodResolver(loginValidation)});

    const {mutate, isPending, isError, error, isSuccess} = useMutation({
        mutationFn: (data: LoginRequest) => loginService(data),
        onError: (error: Error) => {
            console.log(error);
        },
        onSettled: (data) => {
            if(data && data.success) {
                localStorage.setItem('token', data.data.token);
                dispatch(setToken(data.data.token));

                navigate('/');
            }
        }
    });

    const onSubmit = async(data: LoginRequest) => {
        mutate(data);
    };

    return {register, handleSubmit, errors, reset, onSubmit, isPending, isError, error, isSuccess};
}
