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
    Coordinates,
    CoordinatesFromJSON,
    CoordinatesFromJSONTyped,
    CoordinatesToJSON,
} from './';

/**
 * Location details of the node.
 * @export
 * @interface HostDetail
 */
export interface HostDetail {
    /**
     * The IP or hostname of the node.
     * @type {string}
     * @memberof HostDetail
     */
    host: string;
    /**
     * 
     * @type {Coordinates}
     * @memberof HostDetail
     */
    coordinates?: Coordinates;
    /**
     * Text description of the host's location.
     * @type {string}
     * @memberof HostDetail
     */
    location?: string;
    /**
     * 
     * @type {string}
     * @memberof HostDetail
     */
    ip?: string;
    /**
     * Text description of the organization managing this node.
     * @type {string}
     * @memberof HostDetail
     */
    organization?: string;
    /**
     * AS number and organization, separated by space (RIR).
     * @type {string}
     * @memberof HostDetail
     */
    as?: string;
    /**
     * 
     * @type {string}
     * @memberof HostDetail
     */
    continent?: string;
    /**
     * 
     * @type {string}
     * @memberof HostDetail
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof HostDetail
     */
    region?: string;
    /**
     * 
     * @type {string}
     * @memberof HostDetail
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof HostDetail
     */
    district?: string;
    /**
     * 
     * @type {string}
     * @memberof HostDetail
     */
    zip?: string;
}

export function HostDetailFromJSON(json: any): HostDetail {
    return HostDetailFromJSONTyped(json, false);
}

export function HostDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): HostDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'host': json['host'],
        'coordinates': !exists(json, 'coordinates') ? undefined : CoordinatesFromJSON(json['coordinates']),
        'location': !exists(json, 'location') ? undefined : json['location'],
        'ip': !exists(json, 'ip') ? undefined : json['ip'],
        'organization': !exists(json, 'organization') ? undefined : json['organization'],
        'as': !exists(json, 'as') ? undefined : json['as'],
        'continent': !exists(json, 'continent') ? undefined : json['continent'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'region': !exists(json, 'region') ? undefined : json['region'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'district': !exists(json, 'district') ? undefined : json['district'],
        'zip': !exists(json, 'zip') ? undefined : json['zip'],
    };
}

export function HostDetailToJSON(value?: HostDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'host': value.host,
        'coordinates': CoordinatesToJSON(value.coordinates),
        'location': value.location,
        'ip': value.ip,
        'organization': value.organization,
        'as': value.as,
        'continent': value.continent,
        'country': value.country,
        'region': value.region,
        'city': value.city,
        'district': value.district,
        'zip': value.zip,
    };
}

