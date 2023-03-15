/**
 *
 * @export
 * @interface TimeSeriesNodeCountAllOf
 */
export interface TimeSeriesNodeCountAllOf {
    /**
     * Total number of nodes
     * @type {number}
     * @memberof TimeSeriesNodeCountAllOf
     */
    total?: number;
}
export declare function TimeSeriesNodeCountAllOfFromJSON(json: any): TimeSeriesNodeCountAllOf;
export declare function TimeSeriesNodeCountAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeSeriesNodeCountAllOf;
export declare function TimeSeriesNodeCountAllOfToJSON(value?: TimeSeriesNodeCountAllOf | null): any;
