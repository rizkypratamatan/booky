import {Label} from "@/components/ui/label.tsx";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group.tsx";


export default function CheckoutBorrowDuration() {
    return <div className="flex flex-col gap-3">
        <p className="text-sm font-bold md:text-base">Borrow Duration</p>
        <RadioGroup defaultValue="3 Days">
            <div className="flex items-center gap-3">
                <RadioGroupItem className="border-neutral-400 text-background-100 data-[state=checked]:bg-primary-300" value="3 Days" aria-label="3 Days"/>
                <Label className="text-sm md:text-base">3 Days</Label>
            </div>
            <div className="flex items-center gap-3">
                <RadioGroupItem className="border-neutral-400 text-background-100 data-[state=checked]:bg-primary-300" value="5 Days" aria-label="5 Days"/>
                <Label className="text-sm md:text-base">5 Days</Label>
            </div>
            <div className="flex items-center gap-3">
                <RadioGroupItem className="border-neutral-400 text-background-100 data-[state=checked]:bg-primary-300" value="10 Days" aria-label="10 Days"/>
                <Label className="text-sm md:text-base">10 Days</Label>
            </div>
        </RadioGroup>
    </div>;
}
