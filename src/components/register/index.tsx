import RegisterForm from "@/components/register/RegisterForm.tsx";
import AuthenticationTitle from "@/components/ui/AuthenticationTitle.tsx";
import Logo from "@/components/ui/Logo.tsx";


export default function Register() {
    return <div className="flex flex-col gap-5 justify-center w-[calc(100%-3rem)] max-w-100 h-screen mx-auto">
        <Logo containerClass="gap-11.79" imageClass="size-8.25" fontClass="text-base"/>
        <AuthenticationTitle title="Register" description="Create your account to start borrowing books."/>
        <RegisterForm/>
    </div>;
}
