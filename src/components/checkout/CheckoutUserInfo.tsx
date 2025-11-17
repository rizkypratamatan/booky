import AccountDetailItem from "@/components/ui/AccountDetailItem.tsx";


export default function CheckoutUserInfo() {
    return <div className="flex flex-col gap-2 md:gap-4">
        <p className="text-lg font-bold md:text-2xl">User Information</p>
        <AccountDetailItem title="Name" value="John Doe"/>
        <AccountDetailItem title="Email" value="johndoe@email.com"/>
        <AccountDetailItem title="Nomor Handphone" value="081234567890"/>
    </div>;
}
