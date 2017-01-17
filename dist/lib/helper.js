"use strict";
class Helper {
    isUrl(str) {
        const urlRegex = '(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})';
        let url = new RegExp(urlRegex, 'i');
        return str.length < 2083 && url.test(str);
    }
    isXml(str) {
        return str.includes('.xml');
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Helper;
