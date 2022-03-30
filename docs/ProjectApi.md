# TempApi.ProjectApi

All URIs are relative to *http://83.212.100.226:3002/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createproject**](ProjectApi.md#createproject) | **POST** /project | Creates the data
[**deleteproject**](ProjectApi.md#deleteproject) | **DELETE** /project/{projectId} | Delete the element
[**getAllproject**](ProjectApi.md#getAllproject) | **GET** /project/getAll | Get all the data
[**getproject**](ProjectApi.md#getproject) | **GET** /project/{projectId} | Get the element
[**updateproject**](ProjectApi.md#updateproject) | **PUT** /project/{projectId} | Updates the element



## createproject

> Project createproject(project)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ProjectApi();
let project = new TempApi.Project(); // Project | data to be created
apiInstance.createproject(project, (error, data, response) => {
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
 **project** | [**Project**](Project.md)| data to be created | 

### Return type

[**Project**](Project.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteproject

> deleteproject(projectId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ProjectApi();
let projectId = "projectId_example"; // String | the Id parameter
apiInstance.deleteproject(projectId, (error, data, response) => {
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
 **projectId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllproject

> [Project] getAllproject()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ProjectApi();
apiInstance.getAllproject((error, data, response) => {
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

[**[Project]**](Project.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getproject

> Project getproject(projectId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ProjectApi();
let projectId = "projectId_example"; // String | the Id parameter
apiInstance.getproject(projectId, (error, data, response) => {
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
 **projectId** | **String**| the Id parameter | 

### Return type

[**Project**](Project.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateproject

> Project updateproject(projectId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ProjectApi();
let projectId = "projectId_example"; // String | the Id parameter
let opts = {
  'project': new TempApi.Project() // Project | data to be updated
};
apiInstance.updateproject(projectId, opts, (error, data, response) => {
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
 **projectId** | **String**| the Id parameter | 
 **project** | [**Project**](Project.md)| data to be updated | [optional] 

### Return type

[**Project**](Project.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

