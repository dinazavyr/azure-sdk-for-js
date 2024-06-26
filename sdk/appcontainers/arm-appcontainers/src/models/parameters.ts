/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter,
} from "@azure/core-client";
import {
  AppResiliency as AppResiliencyMapper,
  AuthConfig as AuthConfigMapper,
  BuilderResource as BuilderResourceMapper,
  BuilderResourceUpdate as BuilderResourceUpdateMapper,
  BuildResource as BuildResourceMapper,
  ConnectedEnvironment as ConnectedEnvironmentMapper,
  CheckNameAvailabilityRequest as CheckNameAvailabilityRequestMapper,
  Certificate as CertificateMapper,
  CertificatePatch as CertificatePatchMapper,
  DaprComponent as DaprComponentMapper,
  ConnectedEnvironmentStorage as ConnectedEnvironmentStorageMapper,
  ContainerApp as ContainerAppMapper,
  Job as JobMapper,
  JobPatchProperties as JobPatchPropertiesMapper,
  JobExecutionTemplate as JobExecutionTemplateMapper,
  ManagedEnvironment as ManagedEnvironmentMapper,
  ManagedCertificate as ManagedCertificateMapper,
  ManagedCertificatePatch as ManagedCertificatePatchMapper,
  DaprComponentResiliencyPolicy as DaprComponentResiliencyPolicyMapper,
  DaprSubscription as DaprSubscriptionMapper,
  ManagedEnvironmentStorage as ManagedEnvironmentStorageMapper,
  SourceControl as SourceControlMapper,
  JavaComponent as JavaComponentMapper,
  DotNetComponent as DotNetComponentMapper,
} from "../models/mappers";

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const resiliencyEnvelope: OperationParameter = {
  parameterPath: "resiliencyEnvelope",
  mapper: AppResiliencyMapper,
};

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "Uuid",
    },
  },
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1,
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const appName: OperationURLParameter = {
  parameterPath: "appName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$"),
    },
    serializedName: "appName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const name: OperationURLParameter = {
  parameterPath: "name",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$"),
    },
    serializedName: "name",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2023-11-02-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String",
    },
  },
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const containerAppName: OperationURLParameter = {
  parameterPath: "containerAppName",
  mapper: {
    serializedName: "containerAppName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const authConfigName: OperationURLParameter = {
  parameterPath: "authConfigName",
  mapper: {
    serializedName: "authConfigName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const authConfigEnvelope: OperationParameter = {
  parameterPath: "authConfigEnvelope",
  mapper: AuthConfigMapper,
};

export const location: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    constraints: {
      MinLength: 1,
    },
    serializedName: "location",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const builderName: OperationURLParameter = {
  parameterPath: "builderName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$"),
      MaxLength: 32,
      MinLength: 2,
    },
    serializedName: "builderName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const builderEnvelope: OperationParameter = {
  parameterPath: "builderEnvelope",
  mapper: BuilderResourceMapper,
};

export const builderEnvelope1: OperationParameter = {
  parameterPath: "builderEnvelope",
  mapper: BuilderResourceUpdateMapper,
};

export const buildName: OperationURLParameter = {
  parameterPath: "buildName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$"),
      MaxLength: 64,
      MinLength: 2,
    },
    serializedName: "buildName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const buildEnvelope: OperationParameter = {
  parameterPath: "buildEnvelope",
  mapper: BuildResourceMapper,
};

export const connectedEnvironmentName: OperationURLParameter = {
  parameterPath: "connectedEnvironmentName",
  mapper: {
    serializedName: "connectedEnvironmentName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const environmentEnvelope: OperationParameter = {
  parameterPath: "environmentEnvelope",
  mapper: ConnectedEnvironmentMapper,
};

export const checkNameAvailabilityRequest: OperationParameter = {
  parameterPath: "checkNameAvailabilityRequest",
  mapper: CheckNameAvailabilityRequestMapper,
};

export const certificateName: OperationURLParameter = {
  parameterPath: "certificateName",
  mapper: {
    serializedName: "certificateName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const certificateEnvelope: OperationParameter = {
  parameterPath: ["options", "certificateEnvelope"],
  mapper: CertificateMapper,
};

export const certificateEnvelope1: OperationParameter = {
  parameterPath: "certificateEnvelope",
  mapper: CertificatePatchMapper,
};

export const componentName: OperationURLParameter = {
  parameterPath: "componentName",
  mapper: {
    serializedName: "componentName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const daprComponentEnvelope: OperationParameter = {
  parameterPath: "daprComponentEnvelope",
  mapper: DaprComponentMapper,
};

export const storageName: OperationURLParameter = {
  parameterPath: "storageName",
  mapper: {
    serializedName: "storageName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const storageEnvelope: OperationParameter = {
  parameterPath: "storageEnvelope",
  mapper: ConnectedEnvironmentStorageMapper,
};

export const containerAppEnvelope: OperationParameter = {
  parameterPath: "containerAppEnvelope",
  mapper: ContainerAppMapper,
};

export const customHostname: OperationQueryParameter = {
  parameterPath: ["options", "customHostname"],
  mapper: {
    serializedName: "customHostname",
    type: {
      name: "String",
    },
  },
};

export const containerAppName1: OperationURLParameter = {
  parameterPath: "containerAppName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$"),
    },
    serializedName: "containerAppName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String",
    },
  },
};

export const revisionName: OperationURLParameter = {
  parameterPath: "revisionName",
  mapper: {
    serializedName: "revisionName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const replicaName: OperationURLParameter = {
  parameterPath: "replicaName",
  mapper: {
    serializedName: "replicaName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const detectorName: OperationURLParameter = {
  parameterPath: "detectorName",
  mapper: {
    serializedName: "detectorName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const environmentName: OperationURLParameter = {
  parameterPath: "environmentName",
  mapper: {
    serializedName: "environmentName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const jobName: OperationURLParameter = {
  parameterPath: "jobName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$"),
    },
    serializedName: "jobName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const detectorName1: OperationURLParameter = {
  parameterPath: "detectorName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$"),
    },
    serializedName: "detectorName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const apiName: OperationURLParameter = {
  parameterPath: "apiName",
  mapper: {
    defaultValue: "rootApi",
    isConstant: true,
    serializedName: "apiName",
    type: {
      name: "String",
    },
  },
};

export const jobEnvelope: OperationParameter = {
  parameterPath: "jobEnvelope",
  mapper: JobMapper,
};

export const jobEnvelope1: OperationParameter = {
  parameterPath: "jobEnvelope",
  mapper: JobPatchPropertiesMapper,
};

export const template: OperationParameter = {
  parameterPath: ["options", "template"],
  mapper: JobExecutionTemplateMapper,
};

export const jobExecutionName: OperationURLParameter = {
  parameterPath: "jobExecutionName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$"),
    },
    serializedName: "jobExecutionName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const environmentEnvelope1: OperationParameter = {
  parameterPath: "environmentEnvelope",
  mapper: ManagedEnvironmentMapper,
};

export const managedCertificateName: OperationURLParameter = {
  parameterPath: "managedCertificateName",
  mapper: {
    serializedName: "managedCertificateName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const managedCertificateEnvelope: OperationParameter = {
  parameterPath: ["options", "managedCertificateEnvelope"],
  mapper: ManagedCertificateMapper,
};

export const managedCertificateEnvelope1: OperationParameter = {
  parameterPath: "managedCertificateEnvelope",
  mapper: ManagedCertificatePatchMapper,
};

export const environmentName1: OperationURLParameter = {
  parameterPath: "environmentName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$"),
    },
    serializedName: "environmentName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const componentName1: OperationURLParameter = {
  parameterPath: "componentName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$"),
    },
    serializedName: "componentName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const name1: OperationURLParameter = {
  parameterPath: "name",
  mapper: {
    serializedName: "name",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const daprComponentResiliencyPolicyEnvelope: OperationParameter = {
  parameterPath: "daprComponentResiliencyPolicyEnvelope",
  mapper: DaprComponentResiliencyPolicyMapper,
};

export const daprSubscriptionEnvelope: OperationParameter = {
  parameterPath: "daprSubscriptionEnvelope",
  mapper: DaprSubscriptionMapper,
};

export const storageEnvelope1: OperationParameter = {
  parameterPath: "storageEnvelope",
  mapper: ManagedEnvironmentStorageMapper,
};

export const sourceControlName: OperationURLParameter = {
  parameterPath: "sourceControlName",
  mapper: {
    serializedName: "sourceControlName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const sourceControlEnvelope: OperationParameter = {
  parameterPath: "sourceControlEnvelope",
  mapper: SourceControlMapper,
};

export const location1: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._]+$"),
    },
    serializedName: "location",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const environmentName2: OperationURLParameter = {
  parameterPath: "environmentName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._]+$"),
    },
    serializedName: "environmentName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const javaComponentEnvelope: OperationParameter = {
  parameterPath: "javaComponentEnvelope",
  mapper: JavaComponentMapper,
};

export const dotNetComponentEnvelope: OperationParameter = {
  parameterPath: "dotNetComponentEnvelope",
  mapper: DotNetComponentMapper,
};
