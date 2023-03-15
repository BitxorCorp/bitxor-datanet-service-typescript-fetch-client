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
exports.NodeInfoToJSON = exports.NodeInfoFromJSONTyped = exports.NodeInfoFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function NodeInfoFromJSON(json) {
    return NodeInfoFromJSONTyped(json, false);
}
exports.NodeInfoFromJSON = NodeInfoFromJSON;
function NodeInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'publicKey': json['publicKey'],
        'roles': json['roles'],
        'version': json['version'],
        'friendlyName': json['friendlyName'],
        'networkGenerationHashSeed': json['networkGenerationHashSeed'],
        'port': json['port'],
        'networkIdentifier': !runtime_1.exists(json, 'networkIdentifier') ? undefined : _1.NetworkTypeFromJSON(json['networkIdentifier']),
        'host': json['host'],
        'peerStatus': _1.PeerStatusFromJSON(json['peerStatus']),
        'apiStatus': !runtime_1.exists(json, 'apiStatus') ? undefined : _1.ApiStatusFromJSON(json['apiStatus']),
        'hostDetail': _1.HostDetailFromJSON(json['hostDetail']),
    };
}
exports.NodeInfoFromJSONTyped = NodeInfoFromJSONTyped;
function NodeInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'publicKey': value.publicKey,
        'roles': value.roles,
        'version': value.version,
        'friendlyName': value.friendlyName,
        'networkGenerationHashSeed': value.networkGenerationHashSeed,
        'port': value.port,
        'networkIdentifier': _1.NetworkTypeToJSON(value.networkIdentifier),
        'host': value.host,
        'peerStatus': _1.PeerStatusToJSON(value.peerStatus),
        'apiStatus': _1.ApiStatusToJSON(value.apiStatus),
        'hostDetail': _1.HostDetailToJSON(value.hostDetail),
    };
}
exports.NodeInfoToJSON = NodeInfoToJSON;
