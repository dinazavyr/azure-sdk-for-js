let nock = require('nock');

module.exports.hash = "0b380ec49ea2252e1bfbaa30e93be775";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fcognitiveservices.azure.com%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '1331',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'e6f2060d-6b7a-4911-963b-95b0b7632300',
  'x-ms-ests-server',
  '2.1.11562.10 - WUS2 ProdSlices',
  'Set-Cookie',
  'fpc=AjzFVQ1mzahOgLFbzhWoi1fGLH8mDgAAAPal9dcOAAAA; expires=Thu, 29-Apr-2021 23:10:17 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 30 Mar 2021 23:10:16 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.3/custom/models')
  .query(true)
  .reply(200, {"modelList":[{"modelId":"02eee989-5839-4774-9662-e062d77d7acf","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2021-02-26T17:47:01Z","lastUpdatedDateTime":"2021-02-26T17:47:02Z"},{"modelId":"034db383-ad35-4fa2-b209-4dc68f012a6e","modelName":"input1","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2021-03-05T18:31:10Z","lastUpdatedDateTime":"2021-03-05T18:31:13Z"},{"modelId":"047cf3ac-8bf7-44e4-a9da-30916f0a98d8","modelName":"modelName161496465891301145","status":"ready","createdDateTime":"2021-03-05T17:17:39Z","lastUpdatedDateTime":"2021-03-05T17:17:55Z"},{"modelId":"071e528e-f6c2-4703-8513-9022c6e4772a","modelName":"customFormModelName161496507667508963","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2021-03-05T17:24:37Z","lastUpdatedDateTime":"2021-03-05T17:24:39Z"},{"modelId":"073b0bda-ddd7-4192-8f9f-0df153243092","modelName":"input2","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2021-03-05T18:35:38Z","lastUpdatedDateTime":"2021-03-05T18:35:42Z"},{"modelId":"073d38cb-4cfd-468f-9bce-88b2ace4bf57","modelName":"input1","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2021-03-05T18:37:53Z","lastUpdatedDateTime":"2021-03-05T18:37:56Z"},{"modelId":"08645769-a97f-4886-8053-24ecc7696906","modelName":"composedModelName161496990590002498","attributes":{"isComposed":true},"status":"ready","createdDateTime":"2021-03-05T18:45:06Z","lastUpdatedDateTime":"2021-03-05T18:45:06Z"},{"modelId":"09249d90-6df3-4dfa-aa3d-73b09a0d0888","modelName":"input2","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2021-03-05T18:45:12Z","lastUpdatedDateTime":"2021-03-05T18:45:15Z"},{"modelId":"0b00f5e9-0044-4427-83de-cfee1d19cef2","modelName":"composedModelName161497580731500618","attributes":{"isComposed":true},"status":"ready","createdDateTime":"2021-03-05T20:23:27Z","lastUpdatedDateTime":"2021-03-05T20:23:27Z"},{"modelId":"0b95a006-4496-4577-b043-87cb8a6b004c","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2021-03-02T19:51:12Z","lastUpdatedDateTime":"2021-03-02T19:51:14Z"},{"modelId":"0fe21160-5113-4dd5-b232-16262bd19dc5","modelName":"input2","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2021-03-05T20:23:14Z","lastUpdatedDateTime":"2021-03-05T20:23:18Z"},{"modelId":"13076719-7c6d-45ea-98cd-9bfc53903d28","modelName":"input1","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2021-03-05T18:47:33Z","lastUpdatedDateTime":"2021-03-05T18:47:36Z"},{"modelId":"138056a4-0599-43c6-a6ee-3238249e897d","modelName":"modelName161714570792206901","status":"ready","createdDateTime":"2021-03-30T23:08:28Z","lastUpdatedDateTime":"2021-03-30T23:08:45Z"},{"modelId":"14d46f7e-a1f2-45fe-90f6-c6fd62223df8","modelName":"copyModelName161496770604808005","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2021-03-05T18:08:26Z","lastUpdatedDateTime":"2021-03-05T18:08:29Z"},{"modelId":"14d738e4-e2cd-4e13-90cc-24ff03ab8ffc","modelName":"composedModelName161496890778300693","attributes":{"isComposed":true},"status":"ready","createdDateTime":"2021-03-05T18:28:27Z","lastUpdatedDateTime":"2021-03-05T18:28:28Z"},{"modelId":"18327ed2-0fbc-4dd8-bb3c-d5308e04bda8","modelName":"modelName161496473041001400","status":"ready","createdDateTime":"2021-03-05T17:18:50Z","lastUpdatedDateTime":"2021-03-05T17:19:05Z"},{"modelId":"2ad9f016-dc72-4390-90f3-e4532e16c0d3","modelName":"composedModelName161496946764709435","attributes":{"isComposed":true},"status":"ready","createdDateTime":"2021-03-05T18:37:47Z","lastUpdatedDateTime":"2021-03-05T18:37:48Z"},{"modelId":"2d801649-55ba-4c1b-a023-cfce191fcb68","modelName":"customFormModelName161714475475403157","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2021-03-30T22:52:34Z","lastUpdatedDateTime":"2021-03-30T22:52:38Z"},{"modelId":"2e4f52d4-235e-46ef-ba7f-f5af63bea2ab","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2021-02-25T23:41:19Z","lastUpdatedDateTime":"2021-02-25T23:41:20Z"},{"modelId":"2f577ac3-a7ed-4f0d-808e-1a6398cc635a","modelName":"modelName161496780708205650","status":"ready","createdDateTime":"2021-03-05T18:10:07Z","lastUpdatedDateTime":"2021-03-05T18:10:26Z"},{"modelId":"32b056b2-5169-4dbf-89f5-6a167dad6d29","modelName":"modelName161496464144900180","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2021-03-05T17:17:22Z","lastUpdatedDateTime":"2021-03-05T17:17:24Z"},{"modelId":"3f9e1157-3454-4700-80de-5aa0b6192e89","modelName":"input2","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2021-03-05T20:23:21Z","lastUpdatedDateTime":"2021-03-05T20:23:25Z"},{"modelId":"41151a63-d5c1-4e0a-a42b-48206fd761fd","modelName":"modelName161496773325309942","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2021-03-05T18:08:53Z","lastUpdatedDateTime":"2021-03-05T18:08:56Z"},{"modelId":"42375b9b-1122-40ef-ad1f-576abc73b12f","modelName":"modelName161496775077700907","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2021-03-05T18:09:11Z","lastUpdatedDateTime":"2021-03-05T18:09:13Z"},{"modelId":"4321a87f-473e-44d7-bc65-f1daf6c46b38","modelName":"input2","status":"invalid","createdDateTime":"2021-03-16T17:42:47Z","lastUpdatedDateTime":"2021-03-16T17:42:48Z"},{"modelId":"4a3f7c93-1769-4af0-8c83-b11ab2b470d3","modelName":"input2","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2021-03-05T18:35:45Z","lastUpdatedDateTime":"2021-03-05T18:35:48Z"}],"nextLink":"https://endpoint/formrecognizer/v2.1-preview.3/custom/models?nextLink=2!204!MDAwMTA4IXN1YnNjcmlwdGlvbnMvNGE5OTc1MTJhYjI3NGEzMWE5NDBjZTZiNTAyYTczYTYvbW9kZWxzLzRhM2Y3YzkzLTE3NjktNGFmMC04YzgzLWIxMWFiMmI0NzBkMy91c2VMYWJlbEZpbGUuanNvbiEwMDAwMjghOTk5OS0xMi0zMVQyMzo1OTo1OS45OTk5OTk5WiE-"}, [
  'Content-Length',
  '5898',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '278',
  'apim-request-id',
  '5076b2ae-c9ad-4e0b-bc94-018e2b68e2b9',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 30 Mar 2021 23:10:17 GMT'
]);
