/**
 * An error has occurred processing the request.
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     *
     * @type {string}
     * @memberof ModelError
     */
    code: string;
    /**
     *
     * @type {string}
     * @memberof ModelError
     */
    message: string;
}
export declare function ModelErrorFromJSON(json: any): ModelError;
export declare function ModelErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelError;
export declare function ModelErrorToJSON(value?: ModelError | null): any;
