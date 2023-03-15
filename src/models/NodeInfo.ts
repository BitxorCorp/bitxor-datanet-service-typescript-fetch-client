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
    ApiStatus,
    ApiStatusFromJSON,
    ApiStatusFromJSONTyped,
    ApiStatusToJSON,
    HostDetail,
    HostDetailFromJSON,
    HostDetailFromJSONTyped,
    HostDetailToJSON,
    NetworkType,
    NetworkTypeFromJSON,
    NetworkTypeFromJSONTyped,
    NetworkTypeToJSON,
    PeerStatus,
    PeerStatusFromJSON,
    PeerStatusFromJSONTyped,
    PeerStatusToJSON,
} from './';

/**
 * Node information gathered from the chain by the statistics service.
 * @export
 * @interface NodeInfo
 */
export interface NodeInfo {
    /**
     * Node's main account's public key.
     * @type {string}
     * @memberof NodeInfo
     */
    publicKey: string;
    /**
     * A number that defines the different roles the node provides. Possible roles are:
     * * 1 - Peer node.
     * * 2 - API node.
     * * 4 - Voting node.
     * * 64 - IPv4 compatible node
     * * 128 - IPv6 compatible node.
     * 
     * The values are bitwise added together, for example:
     * 1 = Only Peer.
     * 2 = Only API.
     * 3 = Both Peer and API node.
     * 7 = Peer, API and Voting node.
     * 65 = IPv4 and Peer node.
     * @type {number}
     * @memberof NodeInfo
     */
    roles: number;
    /**
     * The version is encoded as a single 4-byte integer, where the Most-Significant Byte
     * encodes the Major version, and the rest of bytes are the Minor, the Micro and the Patch version.
     * For example, version 16777472 (decimal) is 01000100h (hex), which corresponds to version 1.0.1.0.
     * @type {number}
     * @memberof NodeInfo
     */
    version: number;
    /**
     * Node friendly name.
     * @type {string}
     * @memberof NodeInfo
     */
    friendlyName: string;
    /**
     * Hash seed of the network this node is connected to.
     * All nodes connected to the same network have the same
     * [Hash Seed](https://docs.bitxor.org/en/guides/network/configuring-network-properties.html#network-configuration).
     * @type {string}
     * @memberof NodeInfo
     */
    networkGenerationHashSeed: string;
    /**
     * Port used for the communication.
     * @type {number}
     * @memberof NodeInfo
     */
    port: number;
    /**
     * 
     * @type {NetworkType}
     * @memberof NodeInfo
     */
    networkIdentifier?: NetworkType;
    /**
     * Server IP or Hostname
     * @type {string}
     * @memberof NodeInfo
     */
    host: string;
    /**
     * 
     * @type {PeerStatus}
     * @memberof NodeInfo
     */
    peerStatus: PeerStatus;
    /**
     * 
     * @type {ApiStatus}
     * @memberof NodeInfo
     */
    apiStatus?: ApiStatus;
    /**
     * 
     * @type {HostDetail}
     * @memberof NodeInfo
     */
    hostDetail: HostDetail;
}

export function NodeInfoFromJSON(json: any): NodeInfo {
    return NodeInfoFromJSONTyped(json, false);
}

export function NodeInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeInfo {
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
        'networkIdentifier': !exists(json, 'networkIdentifier') ? undefined : NetworkTypeFromJSON(json['networkIdentifier']),
        'host': json['host'],
        'peerStatus': PeerStatusFromJSON(json['peerStatus']),
        'apiStatus': !exists(json, 'apiStatus') ? undefined : ApiStatusFromJSON(json['apiStatus']),
        'hostDetail': HostDetailFromJSON(json['hostDetail']),
    };
}

export function NodeInfoToJSON(value?: NodeInfo | null): any {
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
        'networkIdentifier': NetworkTypeToJSON(value.networkIdentifier),
        'host': value.host,
        'peerStatus': PeerStatusToJSON(value.peerStatus),
        'apiStatus': ApiStatusToJSON(value.apiStatus),
        'hostDetail': HostDetailToJSON(value.hostDetail),
    };
}

