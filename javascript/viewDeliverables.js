let apiDeliverableApi = new TempApi.DeliverableApi();import TempApi from '../src/index';document.getElementById('i3hm').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/homePage' ;}};document.getElementById('iuegv').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/createProject' ;}};document.getElementById('iaw4g').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/createWorkpackage' ;}};document.getElementById('ika04e').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/createEmployee' ;}};document.getElementById('i0us1').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/createDeliverable' ;}};document.getElementById('ilqkve').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/viewEmployees' ;}};document.getElementById('iensmm').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/viewWorkpackages' ;}};const onClickPaginationButton = (chunk, pagination) => {
    for (let i = 0; i < pagination.children.length; i++) {
      if (
        pagination.children[i].classList.value.includes("active") === true
      ) {
        pagination.children[i].classList.remove("active");
      }
    }

    let numberOfFrontButtons =  findTypeOfPagination(pagination);
    pagination.children[chunk+numberOfFrontButtons-1].classList.add("active");

  apiDeliverableApi.getAlldeliverable((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i1r9f").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();[...subDataElements].forEach((element, index) => {
        if (index >= data.length - (chunk-1)*subDataElements.length) {
            subDataElements[index].style.display = 'none';
        }
        else {
            subDataElements[index].style.display = "";
        }
      });data.forEach((item, i) => {

        let revertIndex = data.length - i -1;

        if(data.length - chunk*subDataElements.length <= revertIndex && revertIndex < data.length - (chunk-1)*subDataElements.length){
            try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'dName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].dName;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'dName'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].dName;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'dEnd']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].dEnd;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'dEnd'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].dEnd;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'dStatus']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].dStatus;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'dStatus'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].dStatus;
        
      }
     } catch (e) { console.log(e) };
            map.set(subDataElements[i-(chunk-1) * subDataElements.length].getAttribute('id'), data[data.length-i-1])
        }
        window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    })
    }});}

    const findTypeOfPagination = (pagination) => {

      let firstChild = pagination.children[0];
      let secondChild = pagination.children[1];

      if (
        (firstChild.attributes.getNamedItem("pagination-first") !== null ||
          firstChild.attributes.getNamedItem("pagination-previous") !== null) &&
        (secondChild.attributes.getNamedItem("pagination-first") !== null ||
          secondChild.attributes.getNamedItem("pagination-previous") !== null)
      ) {
        return 2;
      } else if  (
        (firstChild.attributes.getNamedItem("pagination-first") !== null ||
          firstChild.attributes.getNamedItem("pagination-previous") !== null) ||
        (secondChild.attributes.getNamedItem("pagination-first") !== null ||
          secondChild.attributes.getNamedItem("pagination-previous") !== null)
      ) {
        return 1;
      }
      else{
        return 0;
      }

    }
  

    const returnChunkIndex = (chunk, numberOfPages, cause) => {

      if(cause === '+'){
        if(chunk < numberOfPages){
          return chunk + 1;
        }
        else{
          return chunk;
        }
      }
      else if(cause === '-'){
        if(chunk > 2){
          return chunk - 1;
        }
        else{
          return 1;
        }
      }
    }
  document.getElementById('iqjth').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("iqjth")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateDeliverable/' + transitionId;}};document.getElementById('iu5ir').onclick = (event) => {
    event.preventDefault();
    let deliverableId = window.location.pathname.replace('/viewDeliverables/','');
      if(deliverableId === '/viewDeliverables' || deliverableId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("iu5ir")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            deliverableId = value._id;
            parentId = key;
          }
        });
      }
    apiDeliverableApi.deletedeliverable( deliverableId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/viewDeliverables' ;}}});};document.getElementById('i9jmi8').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("i9jmi8")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateDeliverable/' + transitionId;}};document.getElementById('ibiukl').onclick = (event) => {
    event.preventDefault();
    let deliverableId = window.location.pathname.replace('/viewDeliverables/','');
      if(deliverableId === '/viewDeliverables' || deliverableId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ibiukl")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            deliverableId = value._id;
            parentId = key;
          }
        });
      }
    apiDeliverableApi.deletedeliverable( deliverableId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/viewDeliverables' ;}}});};document.getElementById('i9ufzl').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("i9ufzl")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateDeliverable/' + transitionId;}};document.getElementById('i1jucj').onclick = (event) => {
    event.preventDefault();
    let deliverableId = window.location.pathname.replace('/viewDeliverables/','');
      if(deliverableId === '/viewDeliverables' || deliverableId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i1jucj")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            deliverableId = value._id;
            parentId = key;
          }
        });
      }
    apiDeliverableApi.deletedeliverable( deliverableId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/viewDeliverables' ;}}});};document.getElementById('issrks').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("issrks")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateDeliverable/' + transitionId;}};document.getElementById('ikx9sc').onclick = (event) => {
    event.preventDefault();
    let deliverableId = window.location.pathname.replace('/viewDeliverables/','');
      if(deliverableId === '/viewDeliverables' || deliverableId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ikx9sc")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            deliverableId = value._id;
            parentId = key;
          }
        });
      }
    apiDeliverableApi.deletedeliverable( deliverableId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/viewDeliverables' ;}}});};document.getElementById('ittfs').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("ittfs")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateDeliverable/' + transitionId;}};document.getElementById('i6g02z').onclick = (event) => {
    event.preventDefault();
    let deliverableId = window.location.pathname.replace('/viewDeliverables/','');
      if(deliverableId === '/viewDeliverables' || deliverableId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i6g02z")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            deliverableId = value._id;
            parentId = key;
          }
        });
      }
    apiDeliverableApi.deletedeliverable( deliverableId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/viewDeliverables' ;}}});};window.onload = () => {apiDeliverableApi.getAlldeliverable((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i1r9f").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();let chunk = 1;  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'dName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].dName;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'dName'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].dName;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'dEnd']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].dEnd;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'dEnd'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].dEnd;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'dStatus']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].dStatus;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'dStatus'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].dStatus;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
  let numberOfPages = Math.ceil(data.length/subDataElements.length);
  let pagination = document.querySelector('[pagination-list="true"]');

    let paginationAttributes = [
      "pagination-first",
      "pagination-last",
      "pagination-previous",
      "pagination-next",
    ];

    for (let i = 0; i < pagination.children.length; ) {
      let foundAttr = false;

      paginationAttributes.forEach((attr) => {
        if (pagination.children[i].attributes.getNamedItem(attr) !== null) {
          foundAttr = true;
        }
      });
      if (foundAttr === false) {
        pagination.removeChild(pagination.children[i]);
      } else {
        i++;
      }
    }

    for (let i = 0; i < numberOfPages; i++) {
      let child = document.createElement("li");
      child.classList.add("page-item");
      if (i === numberOfPages - 1) {
        child.classList.add("active");
      }
      let insideChild = document.createElement("a");
      insideChild.classList.add("page-link");
      let textnode = document.createTextNode(numberOfPages - i);
      insideChild.appendChild(textnode);
      insideChild.setAttribute("href", "#!");
      child.appendChild(insideChild);
      child.onclick = function () {
        if (chunk !== numberOfPages - i) {
          chunk = numberOfPages - i;
          onClickPaginationButton(chunk, pagination);
        }
      };

      let numberOfFrontButtons =  findTypeOfPagination(pagination);
      pagination.insertBefore(child, pagination.children[numberOfFrontButtons]);

    }

    for (let i = 0; i < pagination.children.length; i++) {
      let child = pagination.children[i];
      if ( child.getAttribute("pagination-first") === "true" && numberOfPages > 0 ) {
        child.onclick = function () {
          if(chunk !== 1){
            chunk = 1;
            onClickPaginationButton(1, pagination);
          }
        };
      }

      if ( child.getAttribute( "pagination-last" ) === "true" && numberOfPages > 0 ) {
        child.onclick = function () {
          if(chunk !== numberOfPages){
            chunk = numberOfPages;
            onClickPaginationButton( numberOfPages, pagination);
          }
        };
      }

      if ( child.getAttribute("pagination-previous") === "true" && numberOfPages > 0 ) {
        child.onclick = function () {
          if(chunk !== returnChunkIndex(chunk,numberOfPages,'-')){
            chunk = returnChunkIndex(chunk,numberOfPages,'-');
            onClickPaginationButton(chunk, pagination);
          }
        };
      }

      if ( child.getAttribute("pagination-next") === "true" && numberOfPages > 0) {
        child.onclick = function () {
          if(chunk !== returnChunkIndex(chunk,numberOfPages,'+')){
            chunk = returnChunkIndex(chunk,numberOfPages,'+');
            onClickPaginationButton(chunk, pagination);
          }
        };
      }
    };
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};