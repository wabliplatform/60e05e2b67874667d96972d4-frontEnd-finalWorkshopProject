let apiEmployeeApi = new TempApi.EmployeeApi();import TempApi from '../src/index';document.getElementById('iwhz').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/homePage' ;}};document.getElementById('i5t0g').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createProject' ;}};document.getElementById('i4moe').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createWorkpackage' ;}};document.getElementById('iaonc').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createEmployee' ;}};document.getElementById('ixnmg').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createDeliverable' ;}};document.getElementById('i9os3g').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewWorkpackages' ;}};document.getElementById('iqxri').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewDeliverables' ;}};const onClickPaginationButton = (chunk, pagination) => {
    for (let i = 0; i < pagination.children.length; i++) {
      if (
        pagination.children[i].classList.value.includes("active") === true
      ) {
        pagination.children[i].classList.remove("active");
      }
    }

    let numberOfFrontButtons =  findTypeOfPagination(pagination);
    pagination.children[chunk+numberOfFrontButtons-1].classList.add("active");

  apiEmployeeApi.getAllemployee((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iooqf").querySelectorAll( "[dataitem='true']" )].filter(
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
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'eImage']");
      if(insideSubDataElement !== null){
        insideSubDataElement.src = data[data.length -i -1].eImage;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'eImage'){
        subDataElements[i-(chunk-1) *subDataElements.length].src = data[data.length -i -1].eImage;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'eSurname']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].eSurname;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'eSurname'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].eSurname;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'eName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].eName;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'eName'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].eName;
        
      }
     } catch (e) { console.log(e) };try { 
        
        const insideSubdocument = subDataElements[i-(chunk-1) * subDataElements.length].querySelector("[annotationname = 'eProject']");
        if (insideSubdocument !==null) {
          const tableData = data[data.length - i - 1].eProject;
    
    const tableDataElement = insideSubdocument.querySelectorAll("[dataitem='true']");
    tableData.forEach((data,index) => {
      if(tableDataElement.length < index) {
        return;
      }
       try {
      const attributeSubdocumentElement = tableDataElement[
        index
      ].querySelector("[annotationname = 'pTitle']");
      if (attributeSubdocumentElement !== null) {
        attributeSubdocumentElement.textContent = tableData[tableData.length - index -1].pTitle;
      }
    }
    catch(e) {console.log(e);};
      
      map.set(
        tableDataElement[index].getAttribute("id"),
        tableData[tableData.length - index -1]
      );
    
    });
    
      [...tableDataElement].forEach((element, index) => {
        if (index >= tableData.length) {
          tableDataElement[index].style.display = "none";
        }
        else {
          tableDataElement[index].style.display = "";
        }
      });
    
    
        }
      if(data[data.length-i-1].eProject._id){
        map.set(
           subDataElements[i-(chunk-1) * subDataElements.length].querySelector(
            "[annotationname = 'eProject']"
          ).getAttribute("id"),
          data[data.length-i-1].eProject
        );
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
  document.getElementById('i28g0o').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("i28g0o")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewProject/' + transitionId;}};document.getElementById('iiwzxh').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("iiwzxh")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewProject/' + transitionId;}};document.getElementById('i0hrg').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("i0hrg")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewProject/' + transitionId;}};document.getElementById('iyuo9v').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("iyuo9v")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewProject/' + transitionId;}};document.getElementById('ilhapl').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("ilhapl")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewProject/' + transitionId;}};document.getElementById('iqhshh').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("iqhshh")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewProject/' + transitionId;}};document.getElementById('iqduy5').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("iqduy5")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewProject/' + transitionId;}};document.getElementById('isxrjj').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("isxrjj")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewProject/' + transitionId;}};document.getElementById('i2qdj7').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("i2qdj7")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewProject/' + transitionId;}};document.getElementById('ix04s3').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("ix04s3")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewProject/' + transitionId;}};document.getElementById('iqr44n').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("iqr44n")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewProject/' + transitionId;}};document.getElementById('ipahwi').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("ipahwi")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewProject/' + transitionId;}};document.getElementById('iykjnj').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("iykjnj")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewProject/' + transitionId;}};document.getElementById('iripfu').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("iripfu")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewProject/' + transitionId;}};document.getElementById('ih07mb').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("ih07mb")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewProject/' + transitionId;}};document.getElementById('i2v99b').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("i2v99b")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewProject/' + transitionId;}};document.getElementById('ic6f9z').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("ic6f9z")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewProject/' + transitionId;}};document.getElementById('idyt9u').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("idyt9u")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewProject/' + transitionId;}};document.getElementById('i020lf').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("i020lf")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewProject/' + transitionId;}};document.getElementById('iz95pj').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("iz95pj")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewProject/' + transitionId;}};document.getElementById('i5z4iy').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("i5z4iy")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewProject/' + transitionId;}};document.getElementById('id18fm').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("id18fm")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewProject/' + transitionId;}};document.getElementById('ig4q0b').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("ig4q0b")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewProject/' + transitionId;}};document.getElementById('ic33pi').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("ic33pi")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewProject/' + transitionId;}};window.onload = () => {apiEmployeeApi.getAllemployee((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iooqf").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();let chunk = 1;  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'eImage']");
      if(insideSubDataElement !== null){
        insideSubDataElement.src = data[data.length -i -1].eImage;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'eImage'){
        subDataElements[i-(chunk-1) *subDataElements.length].src = data[data.length -i -1].eImage;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'eSurname']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].eSurname;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'eSurname'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].eSurname;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i-(chunk-1) *subDataElements.length].querySelector("[annotationname = 'eName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].eName;
        
      }
      else if(subDataElements[i-(chunk-1) *subDataElements.length].getAttribute('annotationname') === 'eName'){
        subDataElements[i-(chunk-1) *subDataElements.length].textContent = data[data.length -i -1].eName;
        
      }
     } catch (e) { console.log(e) };try { 
        
        const insideSubdocument = subDataElements[i-(chunk-1) * subDataElements.length].querySelector("[annotationname = 'eProject']");
        if (insideSubdocument !==null) {
          const tableData = data[data.length - i - 1].eProject;
    
    const tableDataElement = insideSubdocument.querySelectorAll("[dataitem='true']");
    tableData.forEach((data,index) => {
      if(tableDataElement.length < index) {
        return;
      }
       try {
      const attributeSubdocumentElement = tableDataElement[
        index
      ].querySelector("[annotationname = 'pTitle']");
      if (attributeSubdocumentElement !== null) {
        attributeSubdocumentElement.textContent = tableData[tableData.length - index -1].pTitle;
      }
    }
    catch(e) {console.log(e);};
      
      map.set(
        tableDataElement[index].getAttribute("id"),
        tableData[tableData.length - index -1]
      );
    
    });
    
      [...tableDataElement].forEach((element, index) => {
        if (index >= tableData.length) {
          tableDataElement[index].style.display = "none";
        }
        else {
          tableDataElement[index].style.display = "";
        }
      });
    
    
        }
      if(data[data.length-i-1].eProject._id){
        map.set(
           subDataElements[i-(chunk-1) * subDataElements.length].querySelector(
            "[annotationname = 'eProject']"
          ).getAttribute("id"),
          data[data.length-i-1].eProject
        );
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