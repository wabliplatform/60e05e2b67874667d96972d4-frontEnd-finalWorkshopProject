# TempApi.DeliverableApi

All URIs are relative to *http://localhost:8090/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createdeliverable**](DeliverableApi.md#createdeliverable) | **POST** /deliverable | Creates the data
[**deletedeliverable**](DeliverableApi.md#deletedeliverable) | **DELETE** /deliverable/{deliverableId} | Delete the element
[**getAlldeliverable**](DeliverableApi.md#getAlldeliverable) | **GET** /deliverable/getAll | Get all the data
[**getdeliverable**](DeliverableApi.md#getdeliverable) | **GET** /deliverable/{deliverableId} | Get the element
[**updatedeliverable**](DeliverableApi.md#updatedeliverable) | **PUT** /deliverable/{deliverableId} | Updates the element



## createdeliverable

> Deliverable createdeliverable(deliverable)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DeliverableApi();
let deliverable = new TempApi.Deliverable(); // Deliverable | data to be created
apiInstance.createdeliverable(deliverable, (error, data, response) => {
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
 **deliverable** | [**Deliverable**](Deliverable.md)| data to be created | 

### Return type

[**Deliverable**](Deliverable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletedeliverable

> deletedeliverable(deliverableId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DeliverableApi();
let deliverableId = "deliverableId_example"; // String | the Id parameter
apiInstance.deletedeliverable(deliverableId, (error, data, response) => {
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
 **deliverableId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAlldeliverable

> [Deliverable] getAlldeliverable()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DeliverableApi();
apiInstance.getAlldeliverable((error, data, response) => {
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

[**[Deliverable]**](Deliverable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getdeliverable

> Deliverable getdeliverable(deliverableId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DeliverableApi();
let deliverableId = "deliverableId_example"; // String | the Id parameter
apiInstance.getdeliverable(deliverableId, (error, data, response) => {
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
 **deliverableId** | **String**| the Id parameter | 

### Return type

[**Deliverable**](Deliverable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatedeliverable

> Deliverable updatedeliverable(deliverableId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DeliverableApi();
let deliverableId = "deliverableId_example"; // String | the Id parameter
let opts = {
  'deliverable': new TempApi.Deliverable() // Deliverable | data to be updated
};
apiInstance.updatedeliverable(deliverableId, opts, (error, data, response) => {
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
 **deliverableId** | **String**| the Id parameter | 
 **deliverable** | [**Deliverable**](Deliverable.md)| data to be updated | [optional] 

### Return type

[**Deliverable**](Deliverable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

