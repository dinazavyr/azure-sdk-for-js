/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets a database's automatic tuning.
 *
 * @summary Gets a database's automatic tuning.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/DatabaseAutomaticTuningGet.json
 */
async function getADatabaseAutomaticTuningSettings() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "c3aa9078-0000-0000-0000-e36f151182d7";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "default-sql-onebox";
  const serverName = "testsvr11";
  const databaseName = "db1";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.databaseAutomaticTuningOperations.get(
    resourceGroupName,
    serverName,
    databaseName
  );
  console.log(result);
}

async function main() {
  getADatabaseAutomaticTuningSettings();
}

main().catch(console.error);