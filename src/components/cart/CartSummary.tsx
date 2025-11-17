import {Button} from "@/components/ui/button.tsx";


export default function CartSummary() {
    return <section className="fixed left-0 bottom-0 flex gap-6 justify-between items-center w-full h-18 p-5 bg-background-100 blur-20 md:static md:flex-col md:items-stretch md:w-79.5 md:h-auto md:rounded-2xl">
        <p className="hidden text-xl font-bold md:block">Loan Summary</p>
        <div className="flex flex-col justify-between md:flex-row md:gap-3">
            <p className="text-sm font-medium md:text-base">Total Book</p>
            <p className="text-sm font-bold md:text-base">2 Items</p>
        </div>
        <Button className="h-10 bg-primary-300 rounded-full text-sm font-bold text-neutral-25 md:h-12 md:text-base">Borrow
            Book</Button>
    </section>;
}
