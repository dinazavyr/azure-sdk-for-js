/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { ApiVersion73, KeyVaultClientOptionalParams } from "./models";

const packageName = "@azure/keyvault-certificates";
export const packageVersion = "4.4.1";

/** @internal */
export class KeyVaultClientContext extends coreHttp.ServiceClient {
  apiVersion: ApiVersion73;

  /**
   * Initializes a new instance of the KeyVaultClientContext class.
   * @param apiVersion Api Version
   * @param options The parameter options
   */
  constructor(
    apiVersion: ApiVersion73,
    options?: KeyVaultClientOptionalParams
  ) {
    if (apiVersion === undefined) {
      throw new Error("'apiVersion' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }

    const defaultUserAgent = `azsdk-js-${packageName.replace(
      /@.*\//,
      ""
    )}/${packageVersion} ${coreHttp.getDefaultUserAgentValue()}`;

    super(undefined, {
      ...options,
      userAgent: options.userAgent
        ? `${options.userAgent} ${defaultUserAgent}`
        : `${defaultUserAgent}`
    });

    this.requestContentType = "application/json; charset=utf-8";
    this.baseUri = options.endpoint || "{vaultBaseUrl}";
    // Parameter assignments
    this.apiVersion = apiVersion;
  }
}
