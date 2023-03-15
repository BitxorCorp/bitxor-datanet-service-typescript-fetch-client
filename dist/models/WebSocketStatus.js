"use strict";
/* tslint:disable */
/* eslint-disable */
/*
 * Bitxor DataNet Service API Documentation
 *
 * The version of the OpenAPI document: 1.1.3
 *
 * MIT License
 *
 * Copyright 2022 Bitxor Community
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketStatusToJSON = exports.WebSocketStatusFromJSONTyped = exports.WebSocketStatusFromJSON = void 0;
const runtime_1 = require("../runtime");
function WebSocketStatusFromJSON(json) {
    return WebSocketStatusFromJSONTyped(json, false);
}
exports.WebSocketStatusFromJSON = WebSocketStatusFromJSON;
function WebSocketStatusFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'isAvailable': !runtime_1.exists(json, 'isAvailable') ? undefined : json['isAvailable'],
        'wss': !runtime_1.exists(json, 'wss') ? undefined : json['wss'],
        'url': !runtime_1.exists(json, 'url') ? undefined : json['url'],
    };
}
exports.WebSocketStatusFromJSONTyped = WebSocketStatusFromJSONTyped;
function WebSocketStatusToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'isAvailable': value.isAvailable,
        'wss': value.wss,
        'url': value.url,
    };
}
exports.WebSocketStatusToJSON = WebSocketStatusToJSON;
