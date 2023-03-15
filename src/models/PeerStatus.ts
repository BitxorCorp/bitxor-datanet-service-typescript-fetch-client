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
 * The status of the peer node.
 * @export
 * @interface PeerStatus
 */
export interface PeerStatus {
    /**
     * When was the peer last contacted, in milliseconds elapsed since UNIX epoch (January 1, 1970 00:00:00 UTC).
     * @type {number}
     * @memberof PeerStatus
     */
    lastStatusCheck: number;
    /**
     * Whether the node is currently available (reachable and answering queries).
     * @type {boolean}
     * @memberof PeerStatus
     */
    isAvailable: boolean;
}

export function PeerStatusFromJSON(json: any): PeerStatus {
    return PeerStatusFromJSONTyped(json, false);
}

export function PeerStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): PeerStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastStatusCheck': json['lastStatusCheck'],
        'isAvailable': json['isAvailable'],
    };
}

export function PeerStatusToJSON(value?: PeerStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lastStatusCheck': value.lastStatusCheck,
        'isAvailable': value.isAvailable,
    };
}

