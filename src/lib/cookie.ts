import CryptoJS from "crypto-js";
import { jwtDecode, JwtPayload } from "jwt-decode";
export const key = process.env.NEXT_PUBLIC_SECRET_KEY || 'BOOM'

export const setCookie = (name: string, value: string, time: number) => {
    const encryptedValue = CryptoJS.AES.encrypt(
        JSON.stringify(value),
        key
    ).toString();

    const date = new Date();
    date.setTime(date.getTime() + time * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${encryptedValue}; ${expires}; path=/; Secure`;
};

export const getCookie = (name: string) => {
    if (typeof document === "undefined") return null;
    const nameEQ = name + "=";
    const cookiesArray = document.cookie.split(";");

    for (let i = 0; i < cookiesArray.length; i++) {
        const cookie = cookiesArray[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            const encryptedValue = cookie.substring(
                nameEQ.length,
                cookie.length
            );
            const decryptedValue = CryptoJS.AES.decrypt(
                encryptedValue,
                key
            ).toString(CryptoJS.enc.Utf8);
            return JSON.parse(decryptedValue);
        }
    }
    return null;
};

export const clearCookie = (name: string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; Secure; SameSite=Strict;`;
};

export const isCookieExpired = (name: string): boolean => {
    const cookie = getCookie(name);
    if (!cookie) {
        console.log("Cookie has expired or is not set.");
        return true;
    }
    try {
        const decodedToken: JwtPayload = jwtDecode<JwtPayload>(cookie);
        const currentTime = Date.now() / 1000;
        if (!decodedToken.exp) {
            console.log("Token does not have an expiration field.");
            return true;
        }
        return decodedToken.exp < currentTime;
    } catch (error) {
        console.log("isCookieExpired", error);
        return true;
    }
};

// Function to handle cookie expiration (remove expired cookies)
export const handleExpiredCookie = (name: string) => {
    if (isCookieExpired(name)) {
        clearCookie(name);
        console.log(`Cookie ${name} has expired. It has been removed.`);
    } else {
        console.log(`Cookie ${name} is still valid.`);
    }
};