/**
 * Status of the [finalization](https://docs.bitxor.org/concepts/block.html#finalization) gadget.
 * @export
 * @interface Finalization
 */
export interface Finalization {
    /**
     * The latest finalized block of the blockchain.
     * This block and all blocks before it are immutable and cannot be rolled back.
     * @type {number}
     * @memberof Finalization
     */
    height?: number;
    /**
     * Current [finalization epoch](https://docs.bitxor.org/concepts/block.html#finalization).
     * @type {number}
     * @memberof Finalization
     */
    epoch?: number;
    /**
     * Current [finalization point](https://docs.bitxor.org/concepts/block.html#finalization).
     * @type {number}
     * @memberof Finalization
     */
    point?: number;
    /**
     *
     * @type {string}
     * @memberof Finalization
     */
    hash?: string;
}
export declare function FinalizationFromJSON(json: any): Finalization;
export declare function FinalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Finalization;
export declare function FinalizationToJSON(value?: Finalization | null): any;
