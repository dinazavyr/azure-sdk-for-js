/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** The list of workspaces. */
export interface WorkspaceResourceList {
  /** The link used to get the next page of Workspace list. */
  nextLink?: string;
  /** The list of workspaces. */
  value?: WorkspaceResource[];
}

/** Resource base properties. */
export interface ResourceBaseProperties {
  /**
   * Resource provisioning state.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ResourceState;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /**
   * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * Azure Resource Manager metadata containing createdBy and modifiedBy information.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

/** The error detail. */
export interface ErrorDetail {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorDetail[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

/** Workspace patch properties. */
export interface WorkspacePatchResource {
  /** resource tags. */
  tags?: { [propertyName: string]: string };
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** The list of labels. */
export interface LabelResourceList {
  /** The list of labels. */
  value?: LabelResource[];
  /** The link used to get the next page of Label list. */
  nextLink?: string;
}

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface OperationListResult {
  /**
   * List of operations supported by the resource provider
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Operation[];
  /**
   * URL to get the next set of operation list results (if there are any).
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface Operation {
  /**
   * The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for ARM/control-plane operations.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  display?: OperationDisplay;
  /**
   * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly origin?: Origin;
  /**
   * Enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly actionType?: ActionType;
}

/** Localized display information for this particular operation. */
export interface OperationDisplay {
  /**
   * The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provider?: string;
  /**
   * The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resource?: string;
  /**
   * The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operation?: string;
  /**
   * The short, localized friendly description of the operation; suitable for tool tips and detailed views.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
}

/** Workspace properties. */
export interface WorkspaceResourceProperties extends ResourceBaseProperties {
  /**
   * Data plane endpoint.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly dataPlaneEndpoint?: string;
}

/** Label properties. */
export interface LabelResourceProperties extends ResourceBaseProperties {
  /** Label display name. */
  displayName?: string;
  /** Label color. */
  color?: string;
}

/** Task properties. */
export interface TaskResourceProperties extends ResourceBaseProperties {
  /** The time the task started */
  startedAt?: string;
  /** The time the task completed */
  completedAt?: string;
  /** The last time the task was polled */
  lastPolledAt?: string;
  /** the state the task is in */
  state?: string;
  /** the phase the task is in */
  phase?: string;
  /** The reason the task was moved into its current state, if the task wasn't completed. */
  reason?: string;
  /** The reason the task was moved into its current state, if the task wasn't completed. */
  metadata?: Record<string, unknown>;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The geo-location where the resource lives */
  location: string;
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

/** Workspace details. */
export interface WorkspaceResource extends TrackedResource {
  /**
   * Resource provisioning state.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ResourceState;
  /**
   * Data plane endpoint.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly dataPlaneEndpoint?: string;
}

/** Label details */
export interface LabelResource extends ProxyResource {
  /**
   * Resource provisioning state.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ResourceState;
  /** Label display name. */
  displayName?: string;
  /** Label color. */
  color?: string;
}

/** Task details */
export interface TaskResource extends ProxyResource {
  /**
   * Resource provisioning state.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ResourceState;
  /** The time the task started */
  startedAt?: string;
  /** The time the task completed */
  completedAt?: string;
  /** The last time the task was polled */
  lastPolledAt?: string;
  /** the state the task is in */
  state?: string;
  /** the phase the task is in */
  phase?: string;
  /** The reason the task was moved into its current state, if the task wasn't completed. */
  reason?: string;
  /** The reason the task was moved into its current state, if the task wasn't completed. */
  metadata?: Record<string, unknown>;
}

/** Label patch properties */
export interface LabelPatchResource extends LabelResource {}

/** Known values of {@link ResourceState} that the service accepts. */
export enum KnownResourceState {
  /** NotSpecified */
  NotSpecified = "NotSpecified",
  /** Accepted */
  Accepted = "Accepted",
  /** Creating */
  Creating = "Creating",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled",
  /** ProvisioningResources */
  ProvisioningResources = "ProvisioningResources",
  /** InstallingApplication */
  InstallingApplication = "InstallingApplication",
  /** ConfiguringApplication */
  ConfiguringApplication = "ConfiguringApplication",
  /** MigratingApplicationData */
  MigratingApplicationData = "MigratingApplicationData",
  /** RunningValidations */
  RunningValidations = "RunningValidations",
  /** CreatingArtifacts */
  CreatingArtifacts = "CreatingArtifacts",
  /** DeletingArtifacts */
  DeletingArtifacts = "DeletingArtifacts"
}

/**
 * Defines values for ResourceState. \
 * {@link KnownResourceState} can be used interchangeably with ResourceState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotSpecified** \
 * **Accepted** \
 * **Creating** \
 * **Succeeded** \
 * **Failed** \
 * **Canceled** \
 * **ProvisioningResources** \
 * **InstallingApplication** \
 * **ConfiguringApplication** \
 * **MigratingApplicationData** \
 * **RunningValidations** \
 * **CreatingArtifacts** \
 * **DeletingArtifacts**
 */
export type ResourceState = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key"
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Known values of {@link Origin} that the service accepts. */
export enum KnownOrigin {
  /** User */
  User = "user",
  /** System */
  System = "system",
  /** UserSystem */
  UserSystem = "user,system"
}

/**
 * Defines values for Origin. \
 * {@link KnownOrigin} can be used interchangeably with Origin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **user** \
 * **system** \
 * **user,system**
 */
export type Origin = string;

/** Known values of {@link ActionType} that the service accepts. */
export enum KnownActionType {
  /** Internal */
  Internal = "Internal"
}

/**
 * Defines values for ActionType. \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**
 */
export type ActionType = string;

/** Optional parameters. */
export interface WorkspacesListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type WorkspacesListBySubscriptionResponse = WorkspaceResourceList;

/** Optional parameters. */
export interface WorkspacesListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type WorkspacesListByResourceGroupResponse = WorkspaceResourceList;

/** Optional parameters. */
export interface WorkspacesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type WorkspacesGetResponse = WorkspaceResource;

/** Optional parameters. */
export interface WorkspacesCreateAndUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Workspace details. */
  workspaceResource?: WorkspaceResource;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createAndUpdate operation. */
export type WorkspacesCreateAndUpdateResponse = WorkspaceResource;

/** Optional parameters. */
export interface WorkspacesUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Workspace patch details. */
  workspacePatchResource?: WorkspacePatchResource;
}

/** Contains response data for the update operation. */
export type WorkspacesUpdateResponse = WorkspaceResource;

/** Optional parameters. */
export interface WorkspacesDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface WorkspacesListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type WorkspacesListBySubscriptionNextResponse = WorkspaceResourceList;

/** Optional parameters. */
export interface WorkspacesListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type WorkspacesListByResourceGroupNextResponse = WorkspaceResourceList;

/** Optional parameters. */
export interface LabelsListByWorkspaceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByWorkspace operation. */
export type LabelsListByWorkspaceResponse = LabelResourceList;

/** Optional parameters. */
export interface LabelsGetByWorkspaceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getByWorkspace operation. */
export type LabelsGetByWorkspaceResponse = LabelResource;

/** Optional parameters. */
export interface LabelsCreateAndUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Label details. */
  labelResource?: LabelResource;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createAndUpdate operation. */
export type LabelsCreateAndUpdateResponse = LabelResource;

/** Optional parameters. */
export interface LabelsUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Label patch details. */
  labelPatchResource?: LabelPatchResource;
}

/** Contains response data for the update operation. */
export type LabelsUpdateResponse = LabelResource;

/** Optional parameters. */
export interface LabelsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface LabelsListByWorkspaceNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByWorkspaceNext operation. */
export type LabelsListByWorkspaceNextResponse = LabelResourceList;

/** Optional parameters. */
export interface TasksGetByWorkspaceOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getByWorkspace operation. */
export type TasksGetByWorkspaceResponse = TaskResource;

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationListResult;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationListResult;

/** Optional parameters. */
export interface EasmMgmtClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
