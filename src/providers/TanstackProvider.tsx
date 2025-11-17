import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import React from "react";


const queryClient: QueryClient = new QueryClient();

type Props = {
    children: React.ReactNode;
};

export default function TanstackProvider({children}: Props) {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
