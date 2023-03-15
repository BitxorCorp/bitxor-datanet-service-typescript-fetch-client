/**
 * Summary of the number of nodes per role over time.
 * @export
 * @interface TimeSeriesNodeCount
 */
export interface TimeSeriesNodeCount {
    /**
     * Total number of nodes
     * @type {number}
     * @memberof TimeSeriesNodeCount
     */
    total?: number;
}
export declare function TimeSeriesNodeCountFromJSON(json: any): TimeSeriesNodeCount;
export declare function TimeSeriesNodeCountFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeSeriesNodeCount;
export declare function TimeSeriesNodeCountToJSON(value?: TimeSeriesNodeCount | null): any;
