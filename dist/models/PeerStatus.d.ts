/**
 * The status of the peer node.
 * @export
 * @interface PeerStatus
 */
export interface PeerStatus {
    /**
     * When was the peer last contacted, in milliseconds elapsed since UNIX epoch (January 1, 1970 00:00:00 UTC).
     * @type {number}
     * @memberof PeerStatus
     */
    lastStatusCheck: number;
    /**
     * Whether the node is currently available (reachable and answering queries).
     * @type {boolean}
     * @memberof PeerStatus
     */
    isAvailable: boolean;
}
export declare function PeerStatusFromJSON(json: any): PeerStatus;
export declare function PeerStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): PeerStatus;
export declare function PeerStatusToJSON(value?: PeerStatus | null): any;
