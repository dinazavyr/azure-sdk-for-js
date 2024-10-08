// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Encodes a string in base64 format.
 * @param value - the string to encode
 * @internal
 */
export function encodeString(value: string): string {
  return Buffer.from(value).toString("base64");
}

/**
 * Encodes a byte array in base64 format.
 * @param value - the Uint8Aray to encode
 * @internal
 */
export function encodeByteArray(value: Uint8Array): string {
  const bufferValue = value instanceof Buffer ? value : Buffer.from(value.buffer as ArrayBuffer);
  return bufferValue.toString("base64");
}

/**
 * Decodes a base64 string into a byte array.
 * @param value - the base64 string to decode
 * @internal
 */
export function decodeString(value: string): Uint8Array {
  return Buffer.from(value, "base64");
}

/**
 * Decodes a base64 string into a string.
 * @param value - the base64 string to decode
 * @internal
 */
export function decodeStringToString(value: string): string {
  return Buffer.from(value, "base64").toString();
}
