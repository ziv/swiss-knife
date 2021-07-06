"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const from_string_1 = require("@sk/streams/from-string");
const stream_1 = require("stream");
// fake request
const request = (url, _, callback) => {
    callback(from_string_1.default(url));
    return new stream_1.Writable();
};
exports.request = request;
