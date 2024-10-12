import { GlobEnvConfig } from "#/global.d";

export function getAppEnvConfig() {
    // 未知类型unknown
    const ENV = import.meta.env as unknown as GlobEnvConfig
    const {
        VITE_API_URL,
    } = ENV;
    
    return {
        VITE_API_URL,
    }
}