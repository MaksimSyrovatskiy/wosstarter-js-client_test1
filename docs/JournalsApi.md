# ClarivateWosStarterJsClient.JournalsApi

All URIs are relative to *http://example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**journalsGet**](JournalsApi.md#journalsGet) | **GET** /journals | 
[**journalsUidGet**](JournalsApi.md#journalsUidGet) | **GET** /journals/{uid} | 



## journalsGet

> JournalsList journalsGet(opts)



### Example

```javascript
import ClarivateWosStarterJsClient from 'clarivate-wos-starter-js-client';

let apiInstance = new ClarivateWosStarterJsClient.JournalsApi();
let opts = {
  'issn': "issn_example" // String | 
};
apiInstance.journalsGet(opts, (error, data, response) => {
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
 **issn** | **String**|  | [optional] 

### Return type

[**JournalsList**](JournalsList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## journalsUidGet

> Journal journalsUidGet(uid)



### Example

```javascript
import ClarivateWosStarterJsClient from 'clarivate-wos-starter-js-client';

let apiInstance = new ClarivateWosStarterJsClient.JournalsApi();
let uid = "uid_example"; // String | 
apiInstance.journalsUidGet(uid, (error, data, response) => {
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

[**Journal**](Journal.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

