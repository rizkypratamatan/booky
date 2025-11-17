import AccountDetailItem from "@/components/ui/AccountDetailItem.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {Button} from "@/components/ui/button.tsx";
import type {RootState} from "@/stores/store.ts";
import {useSelector} from "react-redux";


export default function AccountProfile() {
    const {email, name} = useSelector((state: RootState) => state.account);

    return <div className="flex flex-col gap-4 md:gap-6">
        <h2 className="text-2xl font-bold md:text-2xxl">Profile</h2>
        <div className="flex flex-col gap-4 max-w-139.25 p-5 rounded-2xl blur-20 md:gap-6">
            <div className="flex flex-col gap-2 md:gap-3">
                <Avatar className="size-16">
                    <AvatarImage src="/images/avatar-default.png" alt="Avatar"/>
                    <AvatarFallback>Avatar</AvatarFallback>
                </Avatar>
                <AccountDetailItem title="Name" value={name}/>
                <AccountDetailItem title="Email" value={email}/>
                <AccountDetailItem title="Nomor Handphone" value="081234567890"/>
            </div>
            <Button className="h-11 bg-primary-300 rounded-full text-sm font-bold text-neutral-25 md:text-base">Update
                Profile</Button>
        </div>
    </div>;
}
