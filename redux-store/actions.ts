import { THEME_CHANGE } from "./constants";

export const switchMode = (mode: string) => {
    return {
        type: THEME_CHANGE,
        payload: mode,
    }
}