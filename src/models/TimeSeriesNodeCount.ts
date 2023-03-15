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
    TimeSeriesNodeCountAllOf,
    TimeSeriesNodeCountAllOfFromJSON,
    TimeSeriesNodeCountAllOfFromJSONTyped,
    TimeSeriesNodeCountAllOfToJSON,
} from './';

/**
 * Summary of the number of nodes per role over time.
 * @export
 * @interface TimeSeriesNodeCount
 */
export interface TimeSeriesNodeCount {
    /**
     * Total number of nodes
     * @type {number}
     * @memberof TimeSeriesNodeCount
     */
    total?: number;
}

export function TimeSeriesNodeCountFromJSON(json: any): TimeSeriesNodeCount {
    return TimeSeriesNodeCountFromJSONTyped(json, false);
}

export function TimeSeriesNodeCountFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeSeriesNodeCount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'total': !exists(json, 'total') ? undefined : json['total'],
    };
}

export function TimeSeriesNodeCountToJSON(value?: TimeSeriesNodeCount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'total': value.total,
    };
}

