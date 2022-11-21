/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { WebPubSubCustomCertificates } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WebPubSubManagementClient } from "../webPubSubManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  CustomCertificate,
  WebPubSubCustomCertificatesListNextOptionalParams,
  WebPubSubCustomCertificatesListOptionalParams,
  WebPubSubCustomCertificatesListResponse,
  WebPubSubCustomCertificatesGetOptionalParams,
  WebPubSubCustomCertificatesGetResponse,
  WebPubSubCustomCertificatesCreateOrUpdateOptionalParams,
  WebPubSubCustomCertificatesCreateOrUpdateResponse,
  WebPubSubCustomCertificatesDeleteOptionalParams,
  WebPubSubCustomCertificatesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing WebPubSubCustomCertificates operations. */
export class WebPubSubCustomCertificatesImpl
  implements WebPubSubCustomCertificates {
  private readonly client: WebPubSubManagementClient;

  /**
   * Initialize a new instance of the class WebPubSubCustomCertificates class.
   * @param client Reference to the service client
   */
  constructor(client: WebPubSubManagementClient) {
    this.client = client;
  }

  /**
   * List all custom certificates.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubCustomCertificatesListOptionalParams
  ): PagedAsyncIterableIterator<CustomCertificate> {
    const iter = this.listPagingAll(resourceGroupName, resourceName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          resourceName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubCustomCertificatesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<CustomCertificate[]> {
    let result: WebPubSubCustomCertificatesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, resourceName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        resourceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubCustomCertificatesListOptionalParams
  ): AsyncIterableIterator<CustomCertificate> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      resourceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List all custom certificates.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubCustomCertificatesListOptionalParams
  ): Promise<WebPubSubCustomCertificatesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      listOperationSpec
    );
  }

  /**
   * Get a custom certificate.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param certificateName Custom certificate name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    options?: WebPubSubCustomCertificatesGetOptionalParams
  ): Promise<WebPubSubCustomCertificatesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, certificateName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update a custom certificate.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param certificateName Custom certificate name
   * @param parameters A custom certificate.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    parameters: CustomCertificate,
    options?: WebPubSubCustomCertificatesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<WebPubSubCustomCertificatesCreateOrUpdateResponse>,
      WebPubSubCustomCertificatesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<WebPubSubCustomCertificatesCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, resourceName, certificateName, parameters, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update a custom certificate.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param certificateName Custom certificate name
   * @param parameters A custom certificate.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    parameters: CustomCertificate,
    options?: WebPubSubCustomCertificatesCreateOrUpdateOptionalParams
  ): Promise<WebPubSubCustomCertificatesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      resourceName,
      certificateName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a custom certificate.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param certificateName Custom certificate name
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    options?: WebPubSubCustomCertificatesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, certificateName, options },
      deleteOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    resourceName: string,
    nextLink: string,
    options?: WebPubSubCustomCertificatesListNextOptionalParams
  ): Promise<WebPubSubCustomCertificatesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/customCertificates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CustomCertificateList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/customCertificates/{certificateName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CustomCertificate
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.certificateName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/customCertificates/{certificateName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.CustomCertificate
    },
    201: {
      bodyMapper: Mappers.CustomCertificate
    },
    202: {
      bodyMapper: Mappers.CustomCertificate
    },
    204: {
      bodyMapper: Mappers.CustomCertificate
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.certificateName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/customCertificates/{certificateName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.certificateName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CustomCertificateList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};