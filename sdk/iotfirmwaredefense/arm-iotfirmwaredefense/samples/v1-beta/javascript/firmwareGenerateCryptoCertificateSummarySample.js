/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { IoTFirmwareDefenseClient } = require("@azure/arm-iotfirmwaredefense");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to The operation to provide a high level summary of the discovered cryptographic certificates reported for the firmware image.
 *
 * @summary The operation to provide a high level summary of the discovered cryptographic certificates reported for the firmware image.
 * x-ms-original-file: specification/fist/resource-manager/Microsoft.IoTFirmwareDefense/preview/2023-02-08-preview/examples/Firmware_GenerateCryptoCertificateSummary_MaximumSet_Gen.json
 */
async function firmwareGenerateCryptoCertificateSummaryMaximumSetGen() {
  const subscriptionId =
    process.env["IOTFIRMWAREDEFENSE_SUBSCRIPTION_ID"] || "C589E84A-5C11-4A25-9CF9-4E9C2F1EBFCA";
  const resourceGroupName =
    process.env["IOTFIRMWAREDEFENSE_RESOURCE_GROUP"] || "FirmwareAnalysisRG";
  const workspaceName = "default";
  const firmwareId = "DECAFBAD-0000-0000-0000-BADBADBADBAD";
  const credential = new DefaultAzureCredential();
  const client = new IoTFirmwareDefenseClient(credential, subscriptionId);
  const result = await client.firmwareOperations.generateCryptoCertificateSummary(
    resourceGroupName,
    workspaceName,
    firmwareId
  );
  console.log(result);
}

/**
 * This sample demonstrates how to The operation to provide a high level summary of the discovered cryptographic certificates reported for the firmware image.
 *
 * @summary The operation to provide a high level summary of the discovered cryptographic certificates reported for the firmware image.
 * x-ms-original-file: specification/fist/resource-manager/Microsoft.IoTFirmwareDefense/preview/2023-02-08-preview/examples/Firmware_GenerateCryptoCertificateSummary_MinimumSet_Gen.json
 */
async function firmwareGenerateCryptoCertificateSummaryMinimumSetGen() {
  const subscriptionId =
    process.env["IOTFIRMWAREDEFENSE_SUBSCRIPTION_ID"] || "C589E84A-5C11-4A25-9CF9-4E9C2F1EBFCA";
  const resourceGroupName =
    process.env["IOTFIRMWAREDEFENSE_RESOURCE_GROUP"] || "rgworkspaces-firmwares";
  const workspaceName = "j5QE_";
  const firmwareId = "wujtpcgypfpqseyrsebolarkspy";
  const credential = new DefaultAzureCredential();
  const client = new IoTFirmwareDefenseClient(credential, subscriptionId);
  const result = await client.firmwareOperations.generateCryptoCertificateSummary(
    resourceGroupName,
    workspaceName,
    firmwareId
  );
  console.log(result);
}

async function main() {
  firmwareGenerateCryptoCertificateSummaryMaximumSetGen();
  firmwareGenerateCryptoCertificateSummaryMinimumSetGen();
}

main().catch(console.error);
