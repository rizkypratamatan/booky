import ReduxProvider from "@/providers/ReduxProvider.tsx";
import {type ReactNode} from "react";
import TanstackProvider from "./TanstackProvider";


type Props = {
    children: ReactNode;
};

export default function Providers({children}: Props) {
    return <ReduxProvider>
        <TanstackProvider>{children}</TanstackProvider>
    </ReduxProvider>;
}
