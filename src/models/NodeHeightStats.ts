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
import {
    NodeHeightStatValue,
    NodeHeightStatValueFromJSON,
    NodeHeightStatValueFromJSONTyped,
    NodeHeightStatValueToJSON,
} from './';

/**
 * The summary of the number of nodes per height and finalized height.
 * @export
 * @interface NodeHeightStats
 */
export interface NodeHeightStats {
    /**
     * Histogram of chain heights.
     * @type {Array<NodeHeightStatValue>}
     * @memberof NodeHeightStats
     */
    height: Array<NodeHeightStatValue>;
    /**
     * Histogram of chain [finalization](https://docs.bitxor.org/concepts/block.html#finalization) heights.
     * @type {Array<NodeHeightStatValue>}
     * @memberof NodeHeightStats
     */
    finalizedHeight: Array<NodeHeightStatValue>;
    /**
     * Date and time when the data was collected.
     * @type {string}
     * @memberof NodeHeightStats
     */
    date: string;
}

export function NodeHeightStatsFromJSON(json: any): NodeHeightStats {
    return NodeHeightStatsFromJSONTyped(json, false);
}

export function NodeHeightStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeHeightStats {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'height': ((json['height'] as Array<any>).map(NodeHeightStatValueFromJSON)),
        'finalizedHeight': ((json['finalizedHeight'] as Array<any>).map(NodeHeightStatValueFromJSON)),
        'date': json['date'],
    };
}

export function NodeHeightStatsToJSON(value?: NodeHeightStats | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'height': ((value.height as Array<any>).map(NodeHeightStatValueToJSON)),
        'finalizedHeight': ((value.finalizedHeight as Array<any>).map(NodeHeightStatValueToJSON)),
        'date': value.date,
    };
}

