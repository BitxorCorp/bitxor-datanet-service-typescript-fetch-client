/**
 * The status of the REST gateway.
 * @export
 * @interface NodeStatus
 */
export interface NodeStatus {
    /**
     * Whether the front-end REST gateway is up and running. Possible values are `up` and `down`. Node needs to be restarted if `down`.
     * @type {string}
     * @memberof NodeStatus
     */
    apiNode?: string;
    /**
     * Whether the back-end database is up and running. Possible values are `up` and `down`. Node needs to be restarted if `down`.
     * @type {string}
     * @memberof NodeStatus
     */
    db?: string;
}
export declare function NodeStatusFromJSON(json: any): NodeStatus;
export declare function NodeStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeStatus;
export declare function NodeStatusToJSON(value?: NodeStatus | null): any;
