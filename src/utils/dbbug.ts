import envs from "@/libs/envs";
import debug from "debug";
export const initDebug = () => {
    if (envs.isDevelopment) return null;
    if (typeof window !== "undefined") {
        const currentDebug = localStorage.getItem("debug");
        if (!currentDebug) {
            localStorage.setItem("debug", "app:client:*");
        }
        debug.enable(localStorage.getItem("debug"));
        logClient("init")("Debug log mode enabled:", localStorage.getItem("debug"));
    } else {
        debug.enable("app:server:*");
    }
};

export const createLogger = (namespace: string) => debug("app:" + namespace);
export const logServer = (namespace: string) => debug("app:server:" + namespace);
export const logClient = (namespace: string) => debug("app:client:" + namespace);
export const logClientError = (namespace: string) => debug("app:client:Error:" + namespace);
export const logServerError = (namespace: string) => debug("app:server:Error:" + namespace);
