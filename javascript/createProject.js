let apiDeliverableApi = new TempApi.DeliverableApi();import TempApi from '../src/index';let apiProjectApi = new TempApi.ProjectApi();let project = new TempApi.Project();document.getElementById('icaj').onclick = (event) => {
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
  const advanceSelect = document.getElementById('iixj6p');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});let arrayi7ygzt = [];
document.getElementById("ifrizw").onclick = event => {
  event.preventDefault();
  const select = document.getElementById("ifgcid")
  arrayi7ygzt.push({
      value: select.value,
      liValue: select.selectedOptions[0].textContent
  });
  select.value = "";
  select.selectedIndex = 0;
  refreshULiirs1l();
};

function refreshULiirs1l() {
let e=``;
for (let y=0; y<arrayi7ygzt.length; y++)
 {
   e += `<li index='${y}' arrayvalue='${arrayi7ygzt[y].value}'><p style="display: inline-block">${arrayi7ygzt[y].liValue}</p><button class="btn pointer bi bi-trash delete-btn" style="display: inline-block;float: right;background-color: red;color: white;" index='${y}'>&nbsp;Delete</button></li>`;
 }
document.getElementById("iirs1l").innerHTML = e;
}

document.getElementById("iirs1l").addEventListener("click", event => {
  event.preventDefault();
  arrayi7ygzt = arrayi7ygzt.filter(
    (item, index) => +event.target.getAttribute("index") !== index
  );
  refreshULiirs1l();
});
function initializearrayi7ygzt(data) {
  arrayi7ygzt = data.map(item => ({
    value: item._id,
    liValue: item['dName']
  }));
}
document.addEventListener('alignpDeliverable', function(e) {
  const advanceSelect = document.getElementById('ifgcid');
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
    project['pImage'] = {
        data: document.querySelector("[annotationname = 'pImage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'pImage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'pImage']").src,
        name: document.querySelector("[annotationname = 'pImage']").getAttribute("name")
      };
      project['pTitle'] = document.querySelector("[annotationname = 'pTitle']").value;project['pEnd'] = document.querySelector("[annotationname = 'pEnd']").value;project['pWebsite'] = document.querySelector("[annotationname = 'pWebsite']").value;project['pStart'] = document.querySelector("[annotationname = 'pStart']").value;project['pDuration'] = document.querySelector("[annotationname = 'pDuration']").value;project['pGA'] = document.querySelector("[annotationname = 'pGA']").value;project["pWorkpackage"] = [...document.querySelector("[annotationname = 'pWorkpackage']").querySelectorAll("[arrayvalue]")].map(li=> li.getAttribute('arrayvalue'));project["pDeliverable"] = [...document.querySelector("[annotationname = 'pDeliverable']").querySelectorAll("[arrayvalue]")].map(li=> li.getAttribute('arrayvalue'));project['pAbstract'] = document.querySelector("[annotationname = 'pAbstract']").value;project['pDescription'] = document.querySelector("[annotationname = 'pDescription']").value;apiProjectApi.createproject( project, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {   location.href= '/homePage' ;}}});};window.onload = () => {apiDeliverableApi.getAlldeliverable((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iff4pu").querySelectorAll( "[dataitem='true']" )].filter(
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