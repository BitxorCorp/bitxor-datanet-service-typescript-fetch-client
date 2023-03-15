/**
 * The summary of the number of nodes per role type.
 * @export
 * @interface NodeStats
 */
export interface NodeStats {
    /**
     * The number of nodes indexed by role type.
     * @type {{ [key: string]: object; }}
     * @memberof NodeStats
     */
    nodeTypes: {
        [key: string]: object;
    };
    /**
     * The number of nodes indexed by version.
     * @type {{ [key: string]: object; }}
     * @memberof NodeStats
     */
    nodeVersion: {
        [key: string]: object;
    };
}
export declare function NodeStatsFromJSON(json: any): NodeStats;
export declare function NodeStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeStats;
export declare function NodeStatsToJSON(value?: NodeStats | null): any;
