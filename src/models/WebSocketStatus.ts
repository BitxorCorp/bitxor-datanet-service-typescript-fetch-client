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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface WebSocketStatus
 */
export interface WebSocketStatus {
    /**
     * 
     * @type {boolean}
     * @memberof WebSocketStatus
     */
    isAvailable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof WebSocketStatus
     */
    wss?: boolean;
    /**
     * 
     * @type {string}
     * @memberof WebSocketStatus
     */
    url?: string;
}

export function WebSocketStatusFromJSON(json: any): WebSocketStatus {
    return WebSocketStatusFromJSONTyped(json, false);
}

export function WebSocketStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebSocketStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isAvailable': !exists(json, 'isAvailable') ? undefined : json['isAvailable'],
        'wss': !exists(json, 'wss') ? undefined : json['wss'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function WebSocketStatusToJSON(value?: WebSocketStatus | null): any {
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

