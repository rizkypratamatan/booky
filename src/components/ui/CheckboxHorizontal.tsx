import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Label} from "@radix-ui/react-label";
import type {Dispatch, ReactNode, SetStateAction} from "react";


type Props = {
    children: ReactNode;
    checked: boolean;
    containerClass?: string,
    labelClass?: string;
    setChecked?: Dispatch<SetStateAction<boolean>>;
    value: string;
};

export default function CheckboxHorizontal({children, containerClass, checked, labelClass, value, setChecked, ...props}: Props) {
    return <div className={`${containerClass} flex`}>
        <Checkbox className="size-5" value={value} checked={checked} onCheckedChange={(value) => setChecked ? setChecked(value === true) : {}} {...props}/>
        <Label className={labelClass}>{children}</Label>
    </div>;
}
