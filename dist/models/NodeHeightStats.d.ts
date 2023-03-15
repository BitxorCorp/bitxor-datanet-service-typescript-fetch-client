import { NodeHeightStatValue } from './';
/**
 * The summary of the number of nodes per height and finalized height.
 * @export
 * @interface NodeHeightStats
 */
export interface NodeHeightStats {
    /**
     * Histogram of chain heights.
     * @type {Array<NodeHeightStatValue>}
     * @memberof NodeHeightStats
     */
    height: Array<NodeHeightStatValue>;
    /**
     * Histogram of chain [finalization](https://docs.bitxor.org/concepts/block.html#finalization) heights.
     * @type {Array<NodeHeightStatValue>}
     * @memberof NodeHeightStats
     */
    finalizedHeight: Array<NodeHeightStatValue>;
    /**
     * Date and time when the data was collected.
     * @type {string}
     * @memberof NodeHeightStats
     */
    date: string;
}
export declare function NodeHeightStatsFromJSON(json: any): NodeHeightStats;
export declare function NodeHeightStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeHeightStats;
export declare function NodeHeightStatsToJSON(value?: NodeHeightStats | null): any;
