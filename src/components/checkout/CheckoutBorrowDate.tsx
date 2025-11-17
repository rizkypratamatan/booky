import {Button} from "@/components/ui/button.tsx";
import {Calendar} from "@/components/ui/calendar.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.tsx";
import {CalendarIcon} from "lucide-react";
import {useState} from "react";


export default function CheckoutBorrowDate() {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState<Date | undefined>(undefined);

    return <div className="flex flex-col gap-0.5">
        <Label className="text-sm font-bold">Borrow Date</Label>
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button className="gap-2 justify-between px-4 py-2 bg-neutral-300 rounded-xl font-semibold">
                    {date ? date.toLocaleDateString() : "Select date"}
                    <CalendarIcon/>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                <Calendar mode="single" selected={date} captionLayout="dropdown" onSelect={(date) => {
                    setDate(date);
                    setOpen(false);
                }}/>
            </PopoverContent>
        </Popover>
    </div>;
}
