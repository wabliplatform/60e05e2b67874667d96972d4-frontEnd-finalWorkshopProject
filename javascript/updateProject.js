let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';let apiWorkpackageApi = new TempApi.WorkpackageApi();let apiDeliverableApi = new TempApi.DeliverableApi();document.getElementById('icaj').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/homePage' ;}};document.getElementById('ijs0k').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/createProject' ;}};document.getElementById('i2lyj').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/createWorkpackage' ;}};document.getElementById('i4jic').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/createEmployee' ;}};document.getElementById('ix1q7').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/createDeliverable' ;}};document.getElementById('ieckyh').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/viewEmployees' ;}};document.getElementById('ilb0al').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/viewWorkpackages' ;}};document.getElementById('ie6a5').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/viewDeliverables' ;}};
 function calculateSize(img, maxWidth, maxHeight) {
      let width = img.width;
      let height = img.height;
    
      // calculate the width and height, constraining the proportions
      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }
      return [width, height];
    }const convertBase64 = (file) => {
          return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
          });
        };
document.getElementById('formFile').addEventListener("change", async(e) => {
            
      const MAX_WIDTH = 300;
      const MAX_HEIGHT = 300;
      const MIME_TYPE = "image/jpeg";
      const QUALITY = 0.9;
      const file = e.target.files[0]; // get the file
      const blobURL = URL.createObjectURL(file);
      const img = new Image();
      img.src = blobURL;
      img.onerror = function () {
        URL.revokeObjectURL(this.src);
        console.log("Cannot load image");
      };
      img.onload = function () {
        URL.revokeObjectURL(this.src);
        const [newWidth, newHeight] = calculateSize(img, MAX_WIDTH, MAX_HEIGHT);
        const canvas = document.createElement("canvas");
        canvas.width = newWidth;
        canvas.height = newHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, newWidth, newHeight);
        canvas.toBlob(
          async (blob) => {
            const base64 = await convertBase64(blob);
    
            document
              .getElementById('formFile')
              .setAttribute("data-image-base64", base64);
            document
              .getElementById('formFile')
              .setAttribute("name", e.target.files[0].name);
          },
          MIME_TYPE,
          QUALITY
        );
      };});
$(
      function () { $("#datepicker").datepicker({format: 'dd-mm-yyyy'}); }
    );$(
      function () { $("#datepicker-2").datepicker({format: 'dd-mm-yyyy'}); }
    );let arrayik5phk = [];
document.getElementById("i4l8rv").onclick = event => {
  event.preventDefault();
  const select = document.getElementById("i19dcl")
  arrayik5phk.push({
      value: select.value,
      liValue: select.selectedOptions[0].textContent
  });
  select.value = "";
  select.selectedIndex = 0;
  refreshULi10lnu();
};

function refreshULi10lnu() {
let e=``;
for (let y=0; y<arrayik5phk.length; y++)
 {
   e += `<li index='${y}' arrayvalue='${arrayik5phk[y].value}'><p style="display: inline-block">${arrayik5phk[y].liValue}</p><button class="btn pointer bi bi-trash delete-btn" style="display: inline-block;float: right;background-color: red;color: white;" index='${y}'>&nbsp;Delete</button></li>`;
 }
document.getElementById("i10lnu").innerHTML = e;
}

document.getElementById("i10lnu").addEventListener("click", event => {
  event.preventDefault();
  arrayik5phk = arrayik5phk.filter(
    (item, index) => +event.target.getAttribute("index") !== index
  );
  refreshULi10lnu();
});
function initializearrayik5phk(data) {
  arrayik5phk = data.map(item => ({
    value: item._id,
    liValue: item['wName']
  }));
}
document.addEventListener('alignpWorkpackage', function(e) {
  const advanceSelect = document.getElementById('i19dcl');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.addEventListener('alignpDeliverable', function(e) {
  const advanceSelect = document.getElementById('igd0fv');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});let arrayikq3hg = [];
document.getElementById("ieyr2r").onclick = event => {
  event.preventDefault();
  const select = document.getElementById("idfbfi")
  arrayikq3hg.push({
      value: select.value,
      liValue: select.selectedOptions[0].textContent
  });
  select.value = "";
  select.selectedIndex = 0;
  refreshULij2cs2();
};

function refreshULij2cs2() {
let e=``;
for (let y=0; y<arrayikq3hg.length; y++)
 {
   e += `<li index='${y}' arrayvalue='${arrayikq3hg[y].value}'><p style="display: inline-block">${arrayikq3hg[y].liValue}</p><button class="btn pointer bi bi-trash delete-btn" style="display: inline-block;float: right;background-color: red;color: white;" index='${y}'>&nbsp;Delete</button></li>`;
 }
document.getElementById("ij2cs2").innerHTML = e;
}

document.getElementById("ij2cs2").addEventListener("click", event => {
  event.preventDefault();
  arrayikq3hg = arrayikq3hg.filter(
    (item, index) => +event.target.getAttribute("index") !== index
  );
  refreshULij2cs2();
});
function initializearrayikq3hg(data) {
  arrayikq3hg = data.map(item => ({
    value: item._id,
    liValue: item['dName']
  }));
}
document.addEventListener('alignpDeliverable', function(e) {
  const advanceSelect = document.getElementById('idfbfi');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.getElementById('i7w1n').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/updateProject/','');let project = new TempApi.Project();project['pImage'] = {
        data: document.querySelector("[annotationname = 'pImage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'pImage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'pImage']").src,
        name: document.querySelector("[annotationname = 'pImage']").getAttribute("name")
      };project['pTitle'] = document.querySelector("[annotationname = 'pTitle']").value;project['pEnd'] = document.querySelector("[annotationname = 'pEnd']").value;project['pWebsite'] = document.querySelector("[annotationname = 'pWebsite']").value;project['pStart'] = document.querySelector("[annotationname = 'pStart']").value;project['pDuration'] = document.querySelector("[annotationname = 'pDuration']").value;project['pGA'] = document.querySelector("[annotationname = 'pGA']").value;project['pWorkpackage'] = arrayik5phk.map(item => item.value);project['pDeliverable'] = arrayikq3hg.map(item => item.value);project['pAbstract'] = document.querySelector("[annotationname = 'pAbstract']").value;project['pDescription'] = document.querySelector("[annotationname = 'pDescription']").value; let opts = {project};apiProjectApi.updateproject( projectId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); 
      if(response.body.query.pImage !== undefined){

        if(document.querySelector('[annotationname = pImage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = pImage]').setAttribute('data-image-base64',response.body.query.pImage.data);
        }
        else{
          document.querySelector('[annotationname = pImage]').src = response.body.query.pImage.data;
        }
        document.querySelector('[annotationname = pImage]').name = response.body.query.pImage.name;
      }
      document.querySelector('[annotationname = pTitle]').value = response.body.query.pTitle ;document.querySelector('[annotationname = pEnd]').value = response.body.query.pEnd ;document.querySelector('[annotationname = pWebsite]').value = response.body.query.pWebsite ;document.querySelector('[annotationname = pStart]').value = response.body.query.pStart ;document.querySelector('[annotationname = pDuration]').value = response.body.query.pDuration ;document.querySelector('[annotationname = pGA]').value = response.body.query.pGA ;initializearrayik5phk(response.body.query.pWorkpackage|| []) ; initializearrayikq3hg(response.body.query.pDeliverable|| []) ; document.querySelector('[annotationname = pAbstract]').value = response.body.query.pAbstract ;document.querySelector('[annotationname = pDescription]').value = response.body.query.pDescription ;{   location.href= '/homePage' ;}}});};window.onload = () => {let projectId = window.location.pathname.replace('/updateProject/','');apiProjectApi.getproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { document.querySelector('[annotationname = pTitle]').value = response.body.query.pTitle; } catch (e) { console.log(e) };try { 
      if(response.body.query.pImage !== undefined){
        if(document.querySelector('[annotationname = pImage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = pImage]').setAttribute('data-image-base64',response.body.query.pImage.data);
          let fileName = response.body.query.pImage.name;
          let file = new File([response.body.query.pImage.data], fileName,{lastModified:new Date().getTime()}, 'utf-8');
          let container = new DataTransfer();
          container.items.add(file);

          document.querySelector("[annotationname = pImage]").files = container.files;
        }
        else {
          document.querySelector('[annotationname = pImage]').src = response.body.query.pImage.data ;
        }
        document.querySelector('[annotationname = pImage]').name = response.body.query.pImage.name ;
      }
       } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pWebsite]').value = response.body.query.pWebsite; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pStart]').value = response.body.query.pStart; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pEnd]').value = response.body.query.pEnd; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pDuration]').value = response.body.query.pDuration; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pGA]').value = response.body.query.pGA; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pAbstract]').value = response.body.query.pAbstract; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pDescription]').value = response.body.query.pDescription; } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = pWorkpackage]').setAttribute('selected-element',response.body.query.pWorkpackage.wName);document.dispatchEvent(new Event("alignpWorkpackage"));
        const insideSubdocument = document.querySelector("[annotationname = 'pWorkpackage']");
        if (insideSubdocument !==null) {
          const tableData = response.body.query.pWorkpackage;
    initializearrayik5phk(tableData); 
 refreshULi10lnu();
    const tableDataElement = insideSubdocument.querySelectorAll("[dataitem='true']");
    tableData.forEach((data,index) => {
      if(tableDataElement.length < index) {
        return;
      }
       try {
      const attributeSubdocumentElement = tableDataElement[
        index
      ].querySelector("[annotationname = 'wName']");
      if (attributeSubdocumentElement !== null) {
        attributeSubdocumentElement.textContent = tableData[tableData.length - index -1].wName;
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
      if(response.body.query.pWorkpackage._id){
        map.set(
          document.querySelector(
            "[annotationname = 'pWorkpackage']"
          ).getAttribute("id"),
          response.body.query.pWorkpackage
        );
      }
     } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = pDeliverable]').setAttribute('selected-element',response.body.query.pDeliverable.dName);document.dispatchEvent(new Event("alignpDeliverable"));
        const insideSubdocument = document.querySelector("[annotationname = 'pDeliverable']");
        if (insideSubdocument !==null) {
          const tableData = response.body.query.pDeliverable;
    initializearrayikq3hg(tableData); 
 refreshULij2cs2();
    const tableDataElement = insideSubdocument.querySelectorAll("[dataitem='true']");
    tableData.forEach((data,index) => {
      if(tableDataElement.length < index) {
        return;
      }
       try {
      const attributeSubdocumentElement = tableDataElement[
        index
      ].querySelector("[annotationname = 'dName']");
      if (attributeSubdocumentElement !== null) {
        attributeSubdocumentElement.textContent = tableData[tableData.length - index -1].dName;
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
      if(response.body.query.pDeliverable._id){
        map.set(
          document.querySelector(
            "[annotationname = 'pDeliverable']"
          ).getAttribute("id"),
          response.body.query.pDeliverable
        );
      }
     } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = pEmployee]').setAttribute('selected-element',response.body.query.pEmployee.undefined);
        const insideSubdocument = document.querySelector("[annotationname = 'pEmployee']");
        if (insideSubdocument !==null) {
          const tableData = response.body.query.pEmployee;
    
    const tableDataElement = insideSubdocument.querySelectorAll("[dataitem='true']");
    tableData.forEach((data,index) => {
      if(tableDataElement.length < index) {
        return;
      }
      
      
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
      if(response.body.query.pEmployee._id){
        map.set(
          document.querySelector(
            "[annotationname = 'pEmployee']"
          ).getAttribute("id"),
          response.body.query.pEmployee
        );
      }
     } catch (e) { console.log(e) };window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));}});apiWorkpackageApi.getAllworkpackage((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i9slgj").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();
    if( data.length > subDataElements.length){
      for(let i = 0; i <=  data.length - subDataElements.length; i++){
        let parentNode = subDataElements[0].parentNode;
        let child = parentNode.childNodes[0].cloneNode(true);
        parentNode.appendChild(child);
        subDataElements.push(child);
      }
    }
    data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'wName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].wName;
        insideSubDataElement.value=data[data.length -i -1]._id;
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'wName'){
        subDataElements[i].textContent = data[data.length -i -1].wName;
        subDataElements[i].value=data[data.length -i -1]._id;
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      document.dispatchEvent(new Event("alignpWorkpackage"))
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});apiDeliverableApi.getAlldeliverable((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i6abzf").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();
    if( data.length > subDataElements.length){
      for(let i = 0; i <=  data.length - subDataElements.length; i++){
        let parentNode = subDataElements[0].parentNode;
        let child = parentNode.childNodes[0].cloneNode(true);
        parentNode.appendChild(child);
        subDataElements.push(child);
      }
    }
    data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'dName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].dName;
        insideSubDataElement.value=data[data.length -i -1]._id;
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'dName'){
        subDataElements[i].textContent = data[data.length -i -1].dName;
        subDataElements[i].value=data[data.length -i -1]._id;
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      document.dispatchEvent(new Event("alignpDeliverable"))
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};