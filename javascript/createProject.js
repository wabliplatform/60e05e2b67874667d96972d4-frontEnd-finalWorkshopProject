let apiWorkpackageApi = new TempApi.WorkpackageApi();import TempApi from '../src/index';let apiDeliverableApi = new TempApi.DeliverableApi();let apiProjectApi = new TempApi.ProjectApi();let project = new TempApi.Project();document.getElementById('icaj').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/homePage' ;}};document.getElementById('i2lyj').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/createWorkpackage' ;}};document.getElementById('i4jic').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/createEmployee' ;}};document.getElementById('ix1q7').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/createDeliverable' ;}};document.getElementById('i35mv3').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/viewEmployees' ;}};document.getElementById('itbh9i').onclick = (event) => {
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
    );document.addEventListener('alignpWorkpackage', function(e) {
  const advanceSelect = document.getElementById('i233ss');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});let arrayiz0j47 = [];
document.getElementById("i2vd9o").onclick = event => {
  event.preventDefault();
  const select = document.getElementById("ic09j9")
  arrayiz0j47.push({
      value: select.value,
      liValue: select.selectedOptions[0].textContent
  });
  select.value = "";
  select.selectedIndex = 0;
  refreshULikh0we();
};

function refreshULikh0we() {
let e=``;
for (let y=0; y<arrayiz0j47.length; y++)
 {
   e += `<li index='${y}' arrayvalue='${arrayiz0j47[y].value}'><p style="display: inline-block">${arrayiz0j47[y].liValue}</p><button class="btn pointer bi bi-trash delete-btn" style="display: inline-block;float: right;background-color: red;color: white;" index='${y}'>&nbsp;Delete</button></li>`;
 }
document.getElementById("ikh0we").innerHTML = e;
}

document.getElementById("ikh0we").addEventListener("click", event => {
  event.preventDefault();
  arrayiz0j47 = arrayiz0j47.filter(
    (item, index) => +event.target.getAttribute("index") !== index
  );
  refreshULikh0we();
});
function initializearrayiz0j47(data) {
  arrayiz0j47 = data.map(item => ({
    value: item._id,
    liValue: item['wName']
  }));
}
document.addEventListener('alignpWorkpackage', function(e) {
  const advanceSelect = document.getElementById('ic09j9');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.addEventListener('alignpDeliverable', function(e) {
  const advanceSelect = document.getElementById('idovhk');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});let arrayik5phk = [];
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
    liValue: item['dName']
  }));
}
document.addEventListener('alignpDeliverable', function(e) {
  const advanceSelect = document.getElementById('i19dcl');
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
    };window.onload = () => {apiWorkpackageApi.getAllworkpackage((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("itsq2w").querySelectorAll( "[dataitem='true']" )].filter(
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
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});apiDeliverableApi.getAlldeliverable((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i9slgj").querySelectorAll( "[dataitem='true']" )].filter(
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