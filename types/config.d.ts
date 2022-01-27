import { IConfig } from 'config';

declare module 'config' {
    interface AppConfig extends IConfig {
        prop1: string;
    }
}
