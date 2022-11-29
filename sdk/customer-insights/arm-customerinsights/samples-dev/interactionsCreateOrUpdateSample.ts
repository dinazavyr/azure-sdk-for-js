/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  InteractionResourceFormat,
  CustomerInsightsManagementClient
} from "@azure/arm-customerinsights";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates an interaction or updates an existing interaction within a hub.
 *
 * @summary Creates an interaction or updates an existing interaction within a hub.
 * x-ms-original-file: specification/customer-insights/resource-manager/Microsoft.CustomerInsights/stable/2017-04-26/examples/InteractionsCreateOrUpdate.json
 */
async function interactionsCreateOrUpdate() {
  const subscriptionId = "subid";
  const resourceGroupName = "TestHubRG";
  const hubName = "sdkTestHub";
  const interactionName = "TestProfileType396";
  const parameters: InteractionResourceFormat = {
    apiEntitySetName: "TestInteractionType6358",
    fields: [
      {
        fieldName: "TestInteractionType6358",
        fieldType: "Edm.String",
        isArray: false,
        isRequired: true
      },
      { fieldName: "profile1", fieldType: "Edm.String" }
    ],
    idPropertyNames: ["TestInteractionType6358"],
    largeImage: "\\\\Images\\\\LargeImage",
    mediumImage: "\\\\Images\\\\MediumImage",
    primaryParticipantProfilePropertyName: "profile1",
    smallImage: "\\\\Images\\\\smallImage"
  };
  const credential = new DefaultAzureCredential();
  const client = new CustomerInsightsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.interactions.beginCreateOrUpdateAndWait(
    resourceGroupName,
    hubName,
    interactionName,
    parameters
  );
  console.log(result);
}

interactionsCreateOrUpdate().catch(console.error);