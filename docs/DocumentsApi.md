# ClarivateWosStarterJsClient.DocumentsApi

All URIs are relative to *http://example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**documentsGet**](DocumentsApi.md#documentsGet) | **GET** /documents | Query Web of Science documents 
[**documentsUidGet**](DocumentsApi.md#documentsUidGet) | **GET** /documents/{uid} | 



## documentsGet

> DocumentsList documentsGet(q, opts)

Query Web of Science documents 

TODO 

### Example

```javascript
import ClarivateWosStarterJsClient from 'clarivate-wos-starter-js-client';

let apiInstance = new ClarivateWosStarterJsClient.DocumentsApi();
let q = "q_example"; // String | 
let opts = {
  'db': "db_example", // String | 
  'page': 56, // Number | 
  'limit': 56, // Number | 
  'sortField': "sortField_example" // String | Order by field(s). Field name and order by clause separated by '+', use A for ASC and D for DESC, ex: PY+D. Multiple values are separated by comma. Supported fields:  * **LD** - Load Date * **PY** - Publication Year * **RS** - Relevance * **TS** - Times Cited 
};
apiInstance.documentsGet(q, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**|  | 
 **db** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **sortField** | **String**| Order by field(s). Field name and order by clause separated by &#39;+&#39;, use A for ASC and D for DESC, ex: PY+D. Multiple values are separated by comma. Supported fields:  * **LD** - Load Date * **PY** - Publication Year * **RS** - Relevance * **TS** - Times Cited  | [optional] 

### Return type

[**DocumentsList**](DocumentsList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## documentsUidGet

> Document documentsUidGet(uid)



### Example

```javascript
import ClarivateWosStarterJsClient from 'clarivate-wos-starter-js-client';

let apiInstance = new ClarivateWosStarterJsClient.DocumentsApi();
let uid = "uid_example"; // String | 
apiInstance.documentsUidGet(uid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **String**|  | 

### Return type

[**Document**](Document.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

