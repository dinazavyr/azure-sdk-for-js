// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ClientContext } from "../ClientContext";
import { HTTPMethod, OperationType, ResourceType } from "../common";
import { Agent } from "../CosmosClientOptions";
import { ConnectionPolicy, PartitionKey } from "../documents";
import { GlobalEndpointManager } from "../globalEndpointManager";
import { PluginConfig } from "../plugins/Plugin";
import { CosmosHeaders } from "../queryExecutionContext/CosmosHeaders";
import { FeedOptions } from "./FeedOptions";
import { RequestOptions } from "./RequestOptions";
import { HttpClient, Pipeline } from "@azure/core-rest-pipeline";

/**
 * @hidden
 */
export interface RequestContext {
  path?: string;
  operationType?: OperationType;
  client?: ClientContext;
  retryCount?: number;
  resourceType?: ResourceType;
  resourceId?: string;
  globalEndpointManager: GlobalEndpointManager;
  connectionPolicy: ConnectionPolicy;
  requestAgent: Agent;
  body?: any;
  headers?: CosmosHeaders;
  endpoint?: string;
  method: HTTPMethod;
  partitionKeyRangeId?: string;
  options: FeedOptions | RequestOptions;
  plugins: PluginConfig[];
  partitionKey?: PartitionKey;
  pipeline?: Pipeline;
  httpClient?: HttpClient;
}
