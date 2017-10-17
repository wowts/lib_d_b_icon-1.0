export declare class LibDataBroker {
    Register(addon: string, broker: any, data: any): void;
    Refresh(addon: string, minimap: any): void;
    Hide(addon: string): void;
    Show(addon: string): void;
}
declare const lib: LibDataBroker;
export default lib;
