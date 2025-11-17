import {reduxStore} from "@/stores/store.ts";
import type {ReactNode} from "react";
import {Provider} from "react-redux";


type Props = {
    children: ReactNode;
};

export default function ReduxProvider({children}: Props) {
    return <Provider store={reduxStore}>{children}</Provider>;
}
