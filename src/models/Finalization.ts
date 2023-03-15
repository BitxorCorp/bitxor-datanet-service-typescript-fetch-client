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
 * Status of the [finalization](https://docs.bitxor.org/concepts/block.html#finalization) gadget.
 * @export
 * @interface Finalization
 */
export interface Finalization {
    /**
     * The latest finalized block of the blockchain.
     * This block and all blocks before it are immutable and cannot be rolled back.
     * @type {number}
     * @memberof Finalization
     */
    height?: number;
    /**
     * Current [finalization epoch](https://docs.bitxor.org/concepts/block.html#finalization).
     * @type {number}
     * @memberof Finalization
     */
    epoch?: number;
    /**
     * Current [finalization point](https://docs.bitxor.org/concepts/block.html#finalization).
     * @type {number}
     * @memberof Finalization
     */
    point?: number;
    /**
     * 
     * @type {string}
     * @memberof Finalization
     */
    hash?: string;
}

export function FinalizationFromJSON(json: any): Finalization {
    return FinalizationFromJSONTyped(json, false);
}

export function FinalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Finalization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'height': !exists(json, 'height') ? undefined : json['height'],
        'epoch': !exists(json, 'epoch') ? undefined : json['epoch'],
        'point': !exists(json, 'point') ? undefined : json['point'],
        'hash': !exists(json, 'hash') ? undefined : json['hash'],
    };
}

export function FinalizationToJSON(value?: Finalization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'height': value.height,
        'epoch': value.epoch,
        'point': value.point,
        'hash': value.hash,
    };
}

