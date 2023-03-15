import { Finalization, NodeStatus, WebSocketStatus } from './';
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
export declare function ApiStatusFromJSON(json: any): ApiStatus;
export declare function ApiStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiStatus;
export declare function ApiStatusToJSON(value?: ApiStatus | null): any;
