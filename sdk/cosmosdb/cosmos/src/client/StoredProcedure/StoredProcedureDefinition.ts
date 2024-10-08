// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
export interface StoredProcedureDefinition {
  /**
   * The id of the {@link StoredProcedure}.
   */
  id?: string;
  /**
   * The body of the {@link StoredProcedure}. This is a JavaScript function.
   */
  body?: string | ((...inputs: any[]) => void);
}
