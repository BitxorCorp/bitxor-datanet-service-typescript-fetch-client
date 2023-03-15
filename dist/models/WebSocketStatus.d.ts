/**
 *
 * @export
 * @interface WebSocketStatus
 */
export interface WebSocketStatus {
    /**
     *
     * @type {boolean}
     * @memberof WebSocketStatus
     */
    isAvailable?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof WebSocketStatus
     */
    wss?: boolean;
    /**
     *
     * @type {string}
     * @memberof WebSocketStatus
     */
    url?: string;
}
export declare function WebSocketStatusFromJSON(json: any): WebSocketStatus;
export declare function WebSocketStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebSocketStatus;
export declare function WebSocketStatusToJSON(value?: WebSocketStatus | null): any;
