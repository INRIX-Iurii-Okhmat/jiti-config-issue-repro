import '@nuxt/types';

declare module '@nuxt/types/config/runtime' {
    export interface NuxtRuntimeConfig {
        testProp: string;
    }
}
