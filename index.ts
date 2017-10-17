export class LibDataBroker {
    public Register(addon: string, broker: any, data: any) {}
    public Refresh(addon: string, minimap: any) {}
    public Hide(addon: string) {}
    public Show(addon: string) {}
}
const lib = new LibDataBroker();
export default lib;
