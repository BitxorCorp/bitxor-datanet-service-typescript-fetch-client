/**
 * 'natural': Nodes are returned in the order they are stored in the database.
 * `random`: Default list order when a limit is specified. Returns {limit} number of random nodes, ordering falls back to 'natural' when limit is not specified.
 * @export
 * @enum {string}
 */
export declare enum NodeListOrder {
    Natural = "natural",
    Random = "random"
}
export declare function NodeListOrderFromJSON(json: any): NodeListOrder;
export declare function NodeListOrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeListOrder;
export declare function NodeListOrderToJSON(value?: NodeListOrder | null): any;
