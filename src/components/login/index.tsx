import LoginForm from "@/components/login/LoginForm.tsx";
import AuthenticationTitle from "@/components/ui/AuthenticationTitle.tsx";
import Logo from "@/components/ui/Logo.tsx";
import {useEffect} from "react";
import {type NavigateFunction, useNavigate} from "react-router";


export default function Login() {
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('token')) {
            navigate('/');
        }
    }, []);

    return <div className="flex flex-col gap-5 justify-center w-[calc(100%-3rem)] max-w-100 h-screen mx-auto">
        <Logo containerClass="gap-11.79" imageClass="size-8.25" fontClass="text-base"/>
        <AuthenticationTitle title="Login" description="Sign in to manage your library account."/>
        <LoginForm/>
    </div>;
}
