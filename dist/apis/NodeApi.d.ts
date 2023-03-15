import * as runtime from '../runtime';
import { HostDetail, NodeHeightStats, NodeInfo, NodeListFilter, NodeListOrder, NodeStats, TimeSeriesNodeCount } from '../models';
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
export declare class NodeApi extends runtime.BaseAPI {
    /**
     * Returns information about the node with the given main account.
     */
    getNodeRaw(requestParameters: GetNodeRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<NodeInfo>>;
    /**
     * Returns information about the node with the given main account.
     */
    getNode(publicKey: string, initOverrides?: RequestInit): Promise<NodeInfo>;
    /**
     * Returns the node information for the given transport public key.
     */
    getNodeByNodePublicKeyRaw(requestParameters: GetNodeByNodePublicKeyRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<NodeInfo>>;
    /**
     * Returns the node information for the given transport public key.
     */
    getNodeByNodePublicKey(nodePublicKey: string, initOverrides?: RequestInit): Promise<NodeInfo>;
    /**
     * Returns the summary of the number of nodes per role over time.
     */
    getNodeCountRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<TimeSeriesNodeCount>>>;
    /**
     * Returns the summary of the number of nodes per role over time.
     */
    getNodeCount(initOverrides?: RequestInit): Promise<Array<TimeSeriesNodeCount>>;
    /**
     * Returns the summary of the number of nodes per height and finalized height.
     */
    getNodeHeightStatsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<NodeHeightStats>>;
    /**
     * Returns the summary of the number of nodes per height and finalized height.
     */
    getNodeHeightStats(initOverrides?: RequestInit): Promise<NodeHeightStats>;
    /**
     * Returns the summary of the number of nodes per role type.
     */
    getNodeStatsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<NodeStats>>;
    /**
     * Returns the summary of the number of nodes per role type.
     */
    getNodeStats(initOverrides?: RequestInit): Promise<NodeStats>;
    /**
     * Returns the list of known nodes that are compatible with the current bitxorcore version.
     */
    getNodesRaw(requestParameters: GetNodesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<NodeInfo>>>;
    /**
     * Returns the list of known nodes that are compatible with the current bitxorcore version.
     */
    getNodes(filter?: NodeListFilter, limit?: number, ssl?: boolean, order?: NodeListOrder, initOverrides?: RequestInit): Promise<Array<NodeInfo>>;
    /**
     * Returns the list of hosting details for all the known nodes.
     */
    getNodesHostDetailRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<HostDetail>>>;
    /**
     * Returns the list of hosting details for all the known nodes.
     */
    getNodesHostDetail(initOverrides?: RequestInit): Promise<Array<HostDetail>>;
}
