let apiDeliverableApi = new TempApi.DeliverableApi();import TempApi from '../src/index';document.getElementById('iskq').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/homePage' ;}};document.getElementById('i62kh').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/createProject' ;}};document.getElementById('ibwdb').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/createWorkpackage' ;}};document.getElementById('ijl2k').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/createEmployee' ;}};document.getElementById('i5kjk').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/createDeliverable' ;}};document.getElementById('inq1b').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/viewEmployees' ;}};document.getElementById('iukqu').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/viewWorkpackages' ;}};document.getElementById('ic0w6').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/viewDeliverables' ;}};$(
      function () { $("#datepicker").datepicker({format: 'dd-mm-yyyy'}); }
    );document.getElementById('iwh0h').onclick = (event) => {
    event.preventDefault();
    let deliverableId = window.location.pathname.replace('/updateDeliverable/','');let deliverable = new TempApi.Deliverable();deliverable['dName'] = document.querySelector("[annotationname = 'dName']").value;deliverable['dEnd'] = document.querySelector("[annotationname = 'dEnd']").value;deliverable['dStatus'] = document.querySelector("[annotationname = 'dStatus']").value; let opts = {deliverable};apiDeliverableApi.updatedeliverable( deliverableId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = dName]').value = response.body.query.dName ;document.querySelector('[annotationname = dEnd]').value = response.body.query.dEnd ;document.querySelector('[annotationname = dStatus]').value = response.body.query.dStatus ;{   location.href= '/homePage' ;}}});};window.onload = () => {let deliverableId = window.location.pathname.replace('/updateDeliverable/','');apiDeliverableApi.getdeliverable( deliverableId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); try { document.querySelector('[annotationname = dName]').value = response.body.query.dName; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = dEnd]').value = response.body.query.dEnd; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = dStatus]').value = response.body.query.dStatus; } catch (e) { console.log(e) };}});};