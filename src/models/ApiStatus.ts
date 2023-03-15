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
    Finalization,
    FinalizationFromJSON,
    FinalizationFromJSONTyped,
    FinalizationToJSON,
    NodeStatus,
    NodeStatusFromJSON,
    NodeStatusFromJSONTyped,
    NodeStatusToJSON,
    WebSocketStatus,
    WebSocketStatusFromJSON,
    WebSocketStatusFromJSONTyped,
    WebSocketStatusToJSON,
} from './';

/**
 * The status of the API node. Information comes from the REST gateway.
 * @export
 * @interface ApiStatus
 */
export interface ApiStatus {
    /**
     * 
     * @type {WebSocketStatus}
     * @memberof ApiStatus
     */
    webSocket: WebSocketStatus;
    /**
     * The REST gateway URL ready to be connected to.
     * @type {string}
     * @memberof ApiStatus
     */
    restGatewayUrl: string;
    /**
     * Whether the API is ready to accept queries.
     * @type {boolean}
     * @memberof ApiStatus
     */
    isAvailable: boolean;
    /**
     * When was the API last checked, in milliseconds elapsed since UNIX epoch (January 1, 1970 00:00:00 UTC).
     * @type {number}
     * @memberof ApiStatus
     */
    lastStatusCheck: number;
    /**
     * 
     * @type {NodeStatus}
     * @memberof ApiStatus
     */
    nodeStatus?: NodeStatus;
    /**
     * Whether the API accepts connections through HTTPS.
     * @type {boolean}
     * @memberof ApiStatus
     */
    isHttpsEnabled: boolean;
    /**
     * Node's public key used to stablish TLS connections and
     * [delegated harvesting](https://docs.bitxor.org/guides/harvesting/activating-delegated-harvesting-manual.html), for example.
     * @type {string}
     * @memberof ApiStatus
     */
    nodePublicKey: string;
    /**
     * Current chain height as reported by this node.
     * @type {number}
     * @memberof ApiStatus
     */
    chainHeight: number;
    /**
     * 
     * @type {Finalization}
     * @memberof ApiStatus
     */
    finalization: Finalization;
    /**
     * Version of the REST API used by this node.
     * @type {string}
     * @memberof ApiStatus
     */
    restVersion: string;
}

export function ApiStatusFromJSON(json: any): ApiStatus {
    return ApiStatusFromJSONTyped(json, false);
}

export function ApiStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'webSocket': WebSocketStatusFromJSON(json['webSocket']),
        'restGatewayUrl': json['restGatewayUrl'],
        'isAvailable': json['isAvailable'],
        'lastStatusCheck': json['lastStatusCheck'],
        'nodeStatus': !exists(json, 'nodeStatus') ? undefined : NodeStatusFromJSON(json['nodeStatus']),
        'isHttpsEnabled': json['isHttpsEnabled'],
        'nodePublicKey': json['nodePublicKey'],
        'chainHeight': json['chainHeight'],
        'finalization': FinalizationFromJSON(json['finalization']),
        'restVersion': json['restVersion'],
    };
}

export function ApiStatusToJSON(value?: ApiStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'webSocket': WebSocketStatusToJSON(value.webSocket),
        'restGatewayUrl': value.restGatewayUrl,
        'isAvailable': value.isAvailable,
        'lastStatusCheck': value.lastStatusCheck,
        'nodeStatus': NodeStatusToJSON(value.nodeStatus),
        'isHttpsEnabled': value.isHttpsEnabled,
        'nodePublicKey': value.nodePublicKey,
        'chainHeight': value.chainHeight,
        'finalization': FinalizationToJSON(value.finalization),
        'restVersion': value.restVersion,
    };
}

