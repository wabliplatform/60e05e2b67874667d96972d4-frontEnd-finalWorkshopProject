let apiDeliverableApi = new TempApi.DeliverableApi();import TempApi from '../src/index';let deliverable = new TempApi.Deliverable();document.getElementById('iskq').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/homePage' ;}};document.getElementById('i62kh').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/createProject' ;}};document.getElementById('ibwdb').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/createWorkpackage' ;}};document.getElementById('ijl2k').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/createEmployee' ;}};document.getElementById('ihrbj').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/viewEmployees' ;}};document.getElementById('i4hsa').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/viewWorkpackages' ;}};document.getElementById('ic0w6').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/viewDeliverables' ;}};$(
      function () { $("#datepicker").datepicker({format: 'dd-mm-yyyy'}); }
    );document.getElementById('iwh0h').onclick = (event) => {
    event.preventDefault();
    deliverable['dName'] = document.querySelector("[annotationname = 'dName']").value;deliverable['dEnd'] = document.querySelector("[annotationname = 'dEnd']").value;deliverable['dStatus'] = document.querySelector("[annotationname = 'dStatus']").value;apiDeliverableApi.createdeliverable( deliverable, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {   location.href= '/homePage' ;}}});};window.onload = () => {};