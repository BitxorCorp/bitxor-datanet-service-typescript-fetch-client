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
 * The status of the REST gateway.
 * @export
 * @interface NodeStatus
 */
export interface NodeStatus {
    /**
     * Whether the front-end REST gateway is up and running. Possible values are `up` and `down`. Node needs to be restarted if `down`.
     * @type {string}
     * @memberof NodeStatus
     */
    apiNode?: string;
    /**
     * Whether the back-end database is up and running. Possible values are `up` and `down`. Node needs to be restarted if `down`.
     * @type {string}
     * @memberof NodeStatus
     */
    db?: string;
}

export function NodeStatusFromJSON(json: any): NodeStatus {
    return NodeStatusFromJSONTyped(json, false);
}

export function NodeStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiNode': !exists(json, 'apiNode') ? undefined : json['apiNode'],
        'db': !exists(json, 'db') ? undefined : json['db'],
    };
}

export function NodeStatusToJSON(value?: NodeStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiNode': value.apiNode,
        'db': value.db,
    };
}

