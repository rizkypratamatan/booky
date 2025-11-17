import {Button} from "@/components/ui/button.tsx";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group.tsx";
import {Input} from "@/components/ui/input.tsx";
import useRegister from "@/hooks/useRegister.ts";
import {Label} from "@radix-ui/react-label";
import {Eye, EyeOff} from "lucide-react";
import {useState} from "react";
import {Link} from "react-router";


export default function RegisterForm() {
    const [password, setPassword] = useState(false);
    const [passwordConfirm, setPasswordConfirm] = useState(false);

    const {register, handleSubmit, errors, onSubmit} = useRegister();

    return <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="flex flex-col gap-4">
            <div className="flex flex-col gap-0.5">
                <Label className="text-sm font-bold">Name</Label>
                <Input {...register('name')} className="h-12 px-4 py-2 border border-neutral-300 rounded-xl" type="text" aria-label="Name"/>
                <p className="text-sm font-medium text-error-100">{errors.name && errors.name.message}</p>
            </div>
            <div className="flex flex-col gap-0.5">
                <Label className="text-sm font-bold">Email</Label>
                <Input {...register('email')} className="h-12 px-4 py-2 border border-neutral-300 rounded-xl" type="text" aria-label="Email"/>
                <p className="text-sm font-medium text-error-100">{errors.email && errors.email.message}</p>
            </div>
            <div className="flex flex-col gap-0.5">
                <Label className="text-sm font-bold">Nomor Handphone</Label>
                <Input {...register('phone')} className="h-12 px-4 py-2 border border-neutral-300 rounded-xl" type="text" aria-label="Phone"/>
                <p className="text-sm font-medium text-error-100">{errors.phone && errors.phone.message}</p>
            </div>
            <div className="flex flex-col gap-0.5">
                <Label className="text-sm font-bold">Password</Label>
                <InputGroup className="h-12 px-4 py-2 border border-neutral-300 rounded-xl">
                    <InputGroupInput {...register('password')} className="p-0" type={password ? 'text' : 'password'} aria-label="Password"/>
                    <InputGroupAddon className="pr-0 cursor-pointer" align="inline-end" onClick={() => setPassword(!password)}>
                        {password ? <Eye className="size-5"/> : <EyeOff className="size-5"/>}
                    </InputGroupAddon>
                </InputGroup>
                <p className="text-sm font-medium text-error-100">{errors.password && errors.password.message}</p>
            </div>
            <div className="flex flex-col gap-0.5">
                <Label className="text-sm font-bold">Confirm Password</Label>
                <InputGroup className="h-12 px-4 py-2 border border-neutral-300 rounded-xl">
                    <InputGroupInput {...register('passwordConfirm')} className="p-0" type={passwordConfirm ? 'text' : 'password'} aria-label="Confirm Password"/>
                    <InputGroupAddon className="pr-0 cursor-pointer" align="inline-end" onClick={() => setPasswordConfirm(!passwordConfirm)}>
                        {passwordConfirm ? <Eye className="size-5"/> : <EyeOff className="size-5"/>}
                    </InputGroupAddon>
                </InputGroup>
                <p className="text-sm font-medium text-error-100">{errors.passwordConfirm && errors.passwordConfirm.message}</p>
            </div>
            <Button className="h-12 bg-primary-300 rounded-full text-sm font-bold text-neutral-25 md:text-base" type="submit">Submit</Button>
            <p className="text-sm font-semibold text-center md:text-base">Already have an
                account? <Link className="font-bold text-primary-300" to="/login">Log In</Link></p>
        </fieldset>
    </form>;
}
