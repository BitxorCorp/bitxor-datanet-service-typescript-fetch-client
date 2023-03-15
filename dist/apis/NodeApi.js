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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeApi = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class NodeApi extends runtime.BaseAPI {
    /**
     * Returns information about the node with the given main account.
     */
    getNodeRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.publicKey === null || requestParameters.publicKey === undefined) {
                throw new runtime.RequiredError('publicKey', 'Required parameter requestParameters.publicKey was null or undefined when calling getNode.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/nodes/{publicKey}`.replace(`{${"publicKey"}}`, encodeURIComponent(String(requestParameters.publicKey))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.NodeInfoFromJSON(jsonValue));
        });
    }
    /**
     * Returns information about the node with the given main account.
     */
    getNode(publicKey, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNodeRaw({ publicKey: publicKey }, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns the node information for the given transport public key.
     */
    getNodeByNodePublicKeyRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.nodePublicKey === null || requestParameters.nodePublicKey === undefined) {
                throw new runtime.RequiredError('nodePublicKey', 'Required parameter requestParameters.nodePublicKey was null or undefined when calling getNodeByNodePublicKey.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/nodes/nodePublicKey/{nodePublicKey}`.replace(`{${"nodePublicKey"}}`, encodeURIComponent(String(requestParameters.nodePublicKey))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.NodeInfoFromJSON(jsonValue));
        });
    }
    /**
     * Returns the node information for the given transport public key.
     */
    getNodeByNodePublicKey(nodePublicKey, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNodeByNodePublicKeyRaw({ nodePublicKey: nodePublicKey }, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns the summary of the number of nodes per role over time.
     */
    getNodeCountRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/timeSeries/nodeCount`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.TimeSeriesNodeCountFromJSON));
        });
    }
    /**
     * Returns the summary of the number of nodes per role over time.
     */
    getNodeCount(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNodeCountRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns the summary of the number of nodes per height and finalized height.
     */
    getNodeHeightStatsRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/nodesHeightStats`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.NodeHeightStatsFromJSON(jsonValue));
        });
    }
    /**
     * Returns the summary of the number of nodes per height and finalized height.
     */
    getNodeHeightStats(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNodeHeightStatsRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns the summary of the number of nodes per role type.
     */
    getNodeStatsRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/nodesStats`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.NodeStatsFromJSON(jsonValue));
        });
    }
    /**
     * Returns the summary of the number of nodes per role type.
     */
    getNodeStats(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNodeStatsRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns the list of known nodes that are compatible with the current bitxorcore version.
     */
    getNodesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
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
            const headerParameters = {};
            const response = yield this.request({
                path: `/nodes`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.NodeInfoFromJSON));
        });
    }
    /**
     * Returns the list of known nodes that are compatible with the current bitxorcore version.
     */
    getNodes(filter, limit, ssl, order, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNodesRaw({ filter: filter, limit: limit, ssl: ssl, order: order }, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns the list of hosting details for all the known nodes.
     */
    getNodesHostDetailRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/nodesHostDetail`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.HostDetailFromJSON));
        });
    }
    /**
     * Returns the list of hosting details for all the known nodes.
     */
    getNodesHostDetail(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNodesHostDetailRaw(initOverrides);
            return yield response.value();
        });
    }
}
exports.NodeApi = NodeApi;
