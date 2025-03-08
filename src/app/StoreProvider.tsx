"use client"

import { getCookie } from "@/lib/cookie";
import { setUserInformation } from "@/lib/redux/features/auth/authSlice";
import { AppStore, makeStore } from "@/lib/redux/store";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";


export default function StoreProvider({ children }: { children: ReactNode; }) {
    const storeRef = useRef<AppStore>(null);
    if (!storeRef.current) {
        storeRef.current = makeStore();        
        storeRef.current.dispatch(setUserInformation(JSON.parse(getCookie('userInformation'))));        
    }    
    return <Provider store={storeRef.current}>{children}</Provider>;
}