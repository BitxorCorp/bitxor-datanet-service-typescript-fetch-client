/**
 * Network type:
 * * 0x68 (104 decimal) - Public main network.
 * * 0x98 (152 decimal) - Public test network.
 * @export
 * @enum {string}
 */
export declare enum NetworkType {
    NUMBER_104 = 0x0de2,
    NUMBER_152 = 0x9924
}
export declare function NetworkTypeFromJSON(json: any): NetworkType;
export declare function NetworkTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkType;
export declare function NetworkTypeToJSON(value?: NetworkType | null): any;
