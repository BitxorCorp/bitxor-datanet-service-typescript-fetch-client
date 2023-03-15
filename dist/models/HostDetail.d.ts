import { Coordinates } from './';
/**
 * Location details of the node.
 * @export
 * @interface HostDetail
 */
export interface HostDetail {
    /**
     * The IP or hostname of the node.
     * @type {string}
     * @memberof HostDetail
     */
    host: string;
    /**
     *
     * @type {Coordinates}
     * @memberof HostDetail
     */
    coordinates?: Coordinates;
    /**
     * Text description of the host's location.
     * @type {string}
     * @memberof HostDetail
     */
    location?: string;
    /**
     *
     * @type {string}
     * @memberof HostDetail
     */
    ip?: string;
    /**
     * Text description of the organization managing this node.
     * @type {string}
     * @memberof HostDetail
     */
    organization?: string;
    /**
     * AS number and organization, separated by space (RIR).
     * @type {string}
     * @memberof HostDetail
     */
    as?: string;
    /**
     *
     * @type {string}
     * @memberof HostDetail
     */
    continent?: string;
    /**
     *
     * @type {string}
     * @memberof HostDetail
     */
    country?: string;
    /**
     *
     * @type {string}
     * @memberof HostDetail
     */
    region?: string;
    /**
     *
     * @type {string}
     * @memberof HostDetail
     */
    city?: string;
    /**
     *
     * @type {string}
     * @memberof HostDetail
     */
    district?: string;
    /**
     *
     * @type {string}
     * @memberof HostDetail
     */
    zip?: string;
}
export declare function HostDetailFromJSON(json: any): HostDetail;
export declare function HostDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): HostDetail;
export declare function HostDetailToJSON(value?: HostDetail | null): any;
