import { atom } from "recoil";

export const homeState = atom({
    key: 'homeState', 
    default: 0,
});

export const aboutState = atom({
    key: 'aboutState', 
    default: 0,
});