"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LibDataBroker {
    Register(addon, broker, data) { }
    Refresh(addon, minimap) { }
    Hide(addon) { }
    Show(addon) { }
}
exports.LibDataBroker = LibDataBroker;
const lib = new LibDataBroker();
exports.default = lib;
