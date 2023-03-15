/**
 * A single value of the Node Height Stats.
 * @export
 * @interface NodeHeightStatValue
 */
export interface NodeHeightStatValue {
    /**
     * Height, as a string because it represents a 64-bit integer.
     * @type {string}
     * @memberof NodeHeightStatValue
     */
    value?: string;
    /**
     * Number of nodes currently at that height.
     * @type {number}
     * @memberof NodeHeightStatValue
     */
    count?: number;
}
export declare function NodeHeightStatValueFromJSON(json: any): NodeHeightStatValue;
export declare function NodeHeightStatValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeHeightStatValue;
export declare function NodeHeightStatValueToJSON(value?: NodeHeightStatValue | null): any;
