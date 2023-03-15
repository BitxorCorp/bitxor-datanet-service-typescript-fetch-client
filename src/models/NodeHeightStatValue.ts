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
 * A single value of the Node Height Stats.
 * @export
 * @interface NodeHeightStatValue
 */
export interface NodeHeightStatValue {
    /**
     * Height, as a string because it represents a 64-bit integer.
     * @type {string}
     * @memberof NodeHeightStatValue
     */
    value?: string;
    /**
     * Number of nodes currently at that height.
     * @type {number}
     * @memberof NodeHeightStatValue
     */
    count?: number;
}

export function NodeHeightStatValueFromJSON(json: any): NodeHeightStatValue {
    return NodeHeightStatValueFromJSONTyped(json, false);
}

export function NodeHeightStatValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeHeightStatValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
        'count': !exists(json, 'count') ? undefined : json['count'],
    };
}

export function NodeHeightStatValueToJSON(value?: NodeHeightStatValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'count': value.count,
    };
}

