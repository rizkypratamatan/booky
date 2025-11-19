import {Button} from "@/components/ui/button.tsx";
import Image from "@/components/ui/Image.tsx";


export default function Success() {
    return <div className="flex flex-col gap-8 justify-center items-center h-screen px-6">
        <Image src="/images/icons/icon-check-blue.png" alt="Check Icon"/>
        <div className="flex flex-col gap-2 text-center">
            <p className="text-2xxl font-bold">Borrowing Successful!</p>
            <p className="text-lg font-semibold">Your book has been successfully borrowed. Please return it
                by <span className="text-error-100">31 August 2025</span></p>
        </div>
        <Button className="w-full max-w-71.25 h-12 bg-primary-300 rounded-full text-neutral-25 font-bold">See Borrow
            List</Button>
    </div>;
}
