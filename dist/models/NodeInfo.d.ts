import { ApiStatus, HostDetail, NetworkType, PeerStatus } from './';
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
     * [Hash Seed](https://docs.bitxor.org/guides/network/configuring-network-properties.html#network-configuration).
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
export declare function NodeInfoFromJSON(json: any): NodeInfo;
export declare function NodeInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeInfo;
export declare function NodeInfoToJSON(value?: NodeInfo | null): any;
