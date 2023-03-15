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


import * as runtime from '../runtime';
import {
    HostDetail,
    HostDetailFromJSON,
    HostDetailToJSON,
    NodeHeightStats,
    NodeHeightStatsFromJSON,
    NodeHeightStatsToJSON,
    NodeInfo,
    NodeInfoFromJSON,
    NodeInfoToJSON,
    NodeListFilter,
    NodeListFilterFromJSON,
    NodeListFilterToJSON,
    NodeListOrder,
    NodeListOrderFromJSON,
    NodeListOrderToJSON,
    NodeStats,
    NodeStatsFromJSON,
    NodeStatsToJSON,
    TimeSeriesNodeCount,
    TimeSeriesNodeCountFromJSON,
    TimeSeriesNodeCountToJSON,
} from '../models';

export interface GetNodeRequest {
    publicKey: string;
}

export interface GetNodeByNodePublicKeyRequest {
    nodePublicKey: string;
}

export interface GetNodesRequest {
    filter?: NodeListFilter;
    limit?: number;
    ssl?: boolean;
    order?: NodeListOrder;
}

/**
 * 
 */
export class NodeApi extends runtime.BaseAPI {

    /**
     * Returns information about the node with the given main account.
     */
    async getNodeRaw(requestParameters: GetNodeRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<NodeInfo>> {
        if (requestParameters.publicKey === null || requestParameters.publicKey === undefined) {
            throw new runtime.RequiredError('publicKey','Required parameter requestParameters.publicKey was null or undefined when calling getNode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/nodes/{publicKey}`.replace(`{${"publicKey"}}`, encodeURIComponent(String(requestParameters.publicKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NodeInfoFromJSON(jsonValue));
    }

    /**
     * Returns information about the node with the given main account.
     */
    async getNode(publicKey: string, initOverrides?: RequestInit): Promise<NodeInfo> {
        const response = await this.getNodeRaw({ publicKey: publicKey }, initOverrides);
        return await response.value();
    }

    /**
     * Returns the node information for the given transport public key.
     */
    async getNodeByNodePublicKeyRaw(requestParameters: GetNodeByNodePublicKeyRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<NodeInfo>> {
        if (requestParameters.nodePublicKey === null || requestParameters.nodePublicKey === undefined) {
            throw new runtime.RequiredError('nodePublicKey','Required parameter requestParameters.nodePublicKey was null or undefined when calling getNodeByNodePublicKey.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/nodes/nodePublicKey/{nodePublicKey}`.replace(`{${"nodePublicKey"}}`, encodeURIComponent(String(requestParameters.nodePublicKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NodeInfoFromJSON(jsonValue));
    }

    /**
     * Returns the node information for the given transport public key.
     */
    async getNodeByNodePublicKey(nodePublicKey: string, initOverrides?: RequestInit): Promise<NodeInfo> {
        const response = await this.getNodeByNodePublicKeyRaw({ nodePublicKey: nodePublicKey }, initOverrides);
        return await response.value();
    }

    /**
     * Returns the summary of the number of nodes per role over time.
     */
    async getNodeCountRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<TimeSeriesNodeCount>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/timeSeries/nodeCount`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TimeSeriesNodeCountFromJSON));
    }

    /**
     * Returns the summary of the number of nodes per role over time.
     */
    async getNodeCount(initOverrides?: RequestInit): Promise<Array<TimeSeriesNodeCount>> {
        const response = await this.getNodeCountRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns the summary of the number of nodes per height and finalized height.
     */
    async getNodeHeightStatsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<NodeHeightStats>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/nodesHeightStats`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NodeHeightStatsFromJSON(jsonValue));
    }

    /**
     * Returns the summary of the number of nodes per height and finalized height.
     */
    async getNodeHeightStats(initOverrides?: RequestInit): Promise<NodeHeightStats> {
        const response = await this.getNodeHeightStatsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns the summary of the number of nodes per role type.
     */
    async getNodeStatsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<NodeStats>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/nodesStats`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NodeStatsFromJSON(jsonValue));
    }

    /**
     * Returns the summary of the number of nodes per role type.
     */
    async getNodeStats(initOverrides?: RequestInit): Promise<NodeStats> {
        const response = await this.getNodeStatsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns the list of known nodes that are compatible with the current bitxorcore version.
     */
    async getNodesRaw(requestParameters: GetNodesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<NodeInfo>>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.ssl !== undefined) {
            queryParameters['ssl'] = requestParameters.ssl;
        }

        if (requestParameters.order !== undefined) {
            queryParameters['order'] = requestParameters.order;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/nodes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(NodeInfoFromJSON));
    }

    /**
     * Returns the list of known nodes that are compatible with the current bitxorcore version.
     */
    async getNodes(filter?: NodeListFilter, limit?: number, ssl?: boolean, order?: NodeListOrder, initOverrides?: RequestInit): Promise<Array<NodeInfo>> {
        const response = await this.getNodesRaw({ filter: filter, limit: limit, ssl: ssl, order: order }, initOverrides);
        return await response.value();
    }

    /**
     * Returns the list of hosting details for all the known nodes.
     */
    async getNodesHostDetailRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<HostDetail>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/nodesHostDetail`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(HostDetailFromJSON));
    }

    /**
     * Returns the list of hosting details for all the known nodes.
     */
    async getNodesHostDetail(initOverrides?: RequestInit): Promise<Array<HostDetail>> {
        const response = await this.getNodesHostDetailRaw(initOverrides);
        return await response.value();
    }

}
