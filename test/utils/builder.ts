import { AddressLike } from "ethers";
import { SafeRootAccess, SafeTransaction } from "./dataTypes";
export const buildSingleTx = (
    address: AddressLike,
    value: bigint,
    data: string,
    nonce: bigint,
    metadataHash: Uint8Array | string,
): SafeTransaction => {
    return {
        actions: [
            {
                to: address,
                value: value,
                data: data,
            },
        ],
        nonce: nonce,
        metadataHash: metadataHash,
    };
};

export const buildRootTx = (
    address: AddressLike,
    value: bigint,
    data: string,
    nonce: bigint,
    metadataHash: Uint8Array | string,
): SafeRootAccess => {
    return {
        action: {
            to: address,
            value: value,
            data: data,
        },
        nonce: nonce,
        metadataHash: metadataHash,
    };
};
