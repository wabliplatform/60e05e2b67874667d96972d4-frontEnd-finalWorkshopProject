let apiEmployeeApi = new TempApi.EmployeeApi();import TempApi from '../src/index';let apiProjectApi = new TempApi.ProjectApi();document.getElementById('i8nj').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/homePage' ;}};document.getElementById('i6sjj').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/createProject' ;}};document.getElementById('iq041').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/createWorkpackage' ;}};document.getElementById('i4ual').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/createDeliverable' ;}};document.getElementById('inokz').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/viewEmployees' ;}};document.getElementById('iyark').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/viewWorkpackages' ;}};document.getElementById('i63k3').onclick = (event) => {
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
document.addEventListener('aligneProject', function(e) {
  const advanceSelect = document.getElementById('i7ttv');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});let arrayi7iaf = [];
document.getElementById("i5zsp").onclick = event => {
  event.preventDefault();
  const select = document.getElementById("i1k2c")
  arrayi7iaf.push({
      value: select.value,
      liValue: select.selectedOptions[0].textContent
  });
  select.value = "";
  select.selectedIndex = 0;
  refreshULitv8a();
};

function refreshULitv8a() {
let e=``;
for (let y=0; y<arrayi7iaf.length; y++)
 {
   e += `<li index='${y}' arrayvalue='${arrayi7iaf[y].value}'><p style="display: inline-block">${arrayi7iaf[y].liValue}</p><button class="btn pointer bi bi-trash delete-btn" style="display: inline-block;float: right;background-color: red;color: white;" index='${y}'>&nbsp;Delete</button></li>`;
 }
document.getElementById("itv8a").innerHTML = e;
}

document.getElementById("itv8a").addEventListener("click", event => {
  event.preventDefault();
  arrayi7iaf = arrayi7iaf.filter(
    (item, index) => +event.target.getAttribute("index") !== index
  );
  refreshULitv8a();
});
function initializearrayi7iaf(data) {
  arrayi7iaf = data.map(item => ({
    value: item._id,
    liValue: item['pTitle']
  }));
}
document.getElementById('i1wf6').onclick = (event) => {
    event.preventDefault();
    let employeeId = window.location.pathname.replace('/updateEmployee/','');let employee = new TempApi.Employee();employee['eName'] = document.querySelector("[annotationname = 'eName']").value;employee['eSurname'] = document.querySelector("[annotationname = 'eSurname']").value;employee['eImage'] = document.querySelector("[annotationname = 'eImage']").value;employee['eProject'] = arrayi7iaf.map(item => item.value); let opts = {employee};apiEmployeeApi.updateemployee( employeeId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = eName]').value = response.body.query.eName ;document.querySelector('[annotationname = eSurname]').value = response.body.query.eSurname ;document.querySelector('[annotationname = eImage]').value = response.body.query.eImage ;initializearrayi7iaf(response.body.query.eProject|| []) ; {   location.href= '/viewEmployees' ;}}});};window.onload = () => {let employeeId = window.location.pathname.replace('/updateEmployee/','');apiEmployeeApi.getemployee( employeeId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { document.querySelector('[annotationname = eName]').value = response.body.query.eName; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = eSurname]').value = response.body.query.eSurname; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = eImage]').value = response.body.query.eImage; } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = eProject]').setAttribute('selected-element',response.body.query.eProject.pTitle);document.dispatchEvent(new Event("aligneProject"));
        const insideSubdocument = document.querySelector("[annotationname = 'eProject']");
        if (insideSubdocument !==null) {
          const tableData = response.body.query.eProject;
    initializearrayi7iaf(tableData); 
 refreshULitv8a();
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
      if(response.body.query.eProject._id){
        map.set(
          document.querySelector(
            "[annotationname = 'eProject']"
          ).getAttribute("id"),
          response.body.query.eProject
        );
      }
     } catch (e) { console.log(e) };window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));}});apiProjectApi.getAllproject((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i3ffa").querySelectorAll( "[dataitem='true']" )].filter(
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
        console.log('There are no inside data elements');
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};