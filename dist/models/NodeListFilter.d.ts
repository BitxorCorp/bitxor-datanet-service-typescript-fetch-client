/**
 * `suggested`: All available API nodes that have a REST endpoint and are online.
 * `preferred`: Preferred API nodes that have a REST endpoint and are online. Preferred nodes match some specific domains.
 * @export
 * @enum {string}
 */
export declare enum NodeListFilter {
    Suggested = "suggested",
    Preferred = "preferred"
}
export declare function NodeListFilterFromJSON(json: any): NodeListFilter;
export declare function NodeListFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeListFilter;
export declare function NodeListFilterToJSON(value?: NodeListFilter | null): any;
