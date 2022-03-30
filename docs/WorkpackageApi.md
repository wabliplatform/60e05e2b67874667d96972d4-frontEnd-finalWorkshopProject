# TempApi.WorkpackageApi

All URIs are relative to *http://83.212.100.226:3002/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createworkpackage**](WorkpackageApi.md#createworkpackage) | **POST** /workpackage | Creates the data
[**deleteworkpackage**](WorkpackageApi.md#deleteworkpackage) | **DELETE** /workpackage/{workpackageId} | Delete the element
[**getAllworkpackage**](WorkpackageApi.md#getAllworkpackage) | **GET** /workpackage/getAll | Get all the data
[**getworkpackage**](WorkpackageApi.md#getworkpackage) | **GET** /workpackage/{workpackageId} | Get the element
[**updateworkpackage**](WorkpackageApi.md#updateworkpackage) | **PUT** /workpackage/{workpackageId} | Updates the element



## createworkpackage

> Workpackage createworkpackage(workpackage)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WorkpackageApi();
let workpackage = new TempApi.Workpackage(); // Workpackage | data to be created
apiInstance.createworkpackage(workpackage, (error, data, response) => {
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
 **workpackage** | [**Workpackage**](Workpackage.md)| data to be created | 

### Return type

[**Workpackage**](Workpackage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteworkpackage

> deleteworkpackage(workpackageId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WorkpackageApi();
let workpackageId = "workpackageId_example"; // String | the Id parameter
apiInstance.deleteworkpackage(workpackageId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workpackageId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllworkpackage

> [Workpackage] getAllworkpackage()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WorkpackageApi();
apiInstance.getAllworkpackage((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Workpackage]**](Workpackage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getworkpackage

> Workpackage getworkpackage(workpackageId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WorkpackageApi();
let workpackageId = "workpackageId_example"; // String | the Id parameter
apiInstance.getworkpackage(workpackageId, (error, data, response) => {
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
 **workpackageId** | **String**| the Id parameter | 

### Return type

[**Workpackage**](Workpackage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateworkpackage

> Workpackage updateworkpackage(workpackageId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WorkpackageApi();
let workpackageId = "workpackageId_example"; // String | the Id parameter
let opts = {
  'workpackage': new TempApi.Workpackage() // Workpackage | data to be updated
};
apiInstance.updateworkpackage(workpackageId, opts, (error, data, response) => {
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
 **workpackageId** | **String**| the Id parameter | 
 **workpackage** | [**Workpackage**](Workpackage.md)| data to be updated | [optional] 

### Return type

[**Workpackage**](Workpackage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

