"use client"

import { AppStore, makeStore } from "@/lib/redux/store";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";


export default function StoreProvider({ children }: { children: ReactNode; }) {
    const storeRef = useRef<AppStore>(null);
    if (!storeRef.current) {
        storeRef.current = makeStore();
        // storeRef.current.dispatch(setUserInformation(getCookie("token")));        
    }    
    return <Provider store={storeRef.current}>{children}</Provider>;
}