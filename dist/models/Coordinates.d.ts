/**
 * The world coordinates of the node based on its IP address.
 * @export
 * @interface Coordinates
 */
export interface Coordinates {
    /**
     *
     * @type {number}
     * @memberof Coordinates
     */
    latitude: number;
    /**
     *
     * @type {number}
     * @memberof Coordinates
     */
    longitude: number;
}
export declare function CoordinatesFromJSON(json: any): Coordinates;
export declare function CoordinatesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Coordinates;
export declare function CoordinatesToJSON(value?: Coordinates | null): any;
