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
exports.HostDetailToJSON = exports.HostDetailFromJSONTyped = exports.HostDetailFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function HostDetailFromJSON(json) {
    return HostDetailFromJSONTyped(json, false);
}
exports.HostDetailFromJSON = HostDetailFromJSON;
function HostDetailFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'host': json['host'],
        'coordinates': !runtime_1.exists(json, 'coordinates') ? undefined : _1.CoordinatesFromJSON(json['coordinates']),
        'location': !runtime_1.exists(json, 'location') ? undefined : json['location'],
        'ip': !runtime_1.exists(json, 'ip') ? undefined : json['ip'],
        'organization': !runtime_1.exists(json, 'organization') ? undefined : json['organization'],
        'as': !runtime_1.exists(json, 'as') ? undefined : json['as'],
        'continent': !runtime_1.exists(json, 'continent') ? undefined : json['continent'],
        'country': !runtime_1.exists(json, 'country') ? undefined : json['country'],
        'region': !runtime_1.exists(json, 'region') ? undefined : json['region'],
        'city': !runtime_1.exists(json, 'city') ? undefined : json['city'],
        'district': !runtime_1.exists(json, 'district') ? undefined : json['district'],
        'zip': !runtime_1.exists(json, 'zip') ? undefined : json['zip'],
    };
}
exports.HostDetailFromJSONTyped = HostDetailFromJSONTyped;
function HostDetailToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'host': value.host,
        'coordinates': _1.CoordinatesToJSON(value.coordinates),
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
exports.HostDetailToJSON = HostDetailToJSON;
