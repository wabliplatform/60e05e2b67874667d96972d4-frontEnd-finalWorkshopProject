let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';document.getElementById('icaj').onclick = (event) => {
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
    );document.getElementById('i7w1n').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/updateProject/','');let project = new TempApi.Project();project['pImage'] = {
        data: document.querySelector("[annotationname = 'pImage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'pImage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'pImage']").src,
        name: document.querySelector("[annotationname = 'pImage']").getAttribute("name")
      };project['pTitle'] = document.querySelector("[annotationname = 'pTitle']").value;project['pEnd'] = document.querySelector("[annotationname = 'pEnd']").value;project['pWebsite'] = document.querySelector("[annotationname = 'pWebsite']").value;project['pStart'] = document.querySelector("[annotationname = 'pStart']").value;project['pDuration'] = document.querySelector("[annotationname = 'pDuration']").value;project['pGA'] = document.querySelector("[annotationname = 'pGA']").value;project['pAbstract'] = document.querySelector("[annotationname = 'pAbstract']").value;project['pDescription'] = document.querySelector("[annotationname = 'pDescription']").value; let opts = {project};apiProjectApi.updateproject( projectId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); 
      if(response.body.query.pImage !== undefined){

        if(document.querySelector('[annotationname = pImage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = pImage]').setAttribute('data-image-base64',response.body.query.pImage.data);
        }
        else{
          document.querySelector('[annotationname = pImage]').src = response.body.query.pImage.data;
        }
        document.querySelector('[annotationname = pImage]').name = response.body.query.pImage.name;
      }
      document.querySelector('[annotationname = pTitle]').value = response.body.query.pTitle ;document.querySelector('[annotationname = pEnd]').value = response.body.query.pEnd ;document.querySelector('[annotationname = pWebsite]').value = response.body.query.pWebsite ;document.querySelector('[annotationname = pStart]').value = response.body.query.pStart ;document.querySelector('[annotationname = pDuration]').value = response.body.query.pDuration ;document.querySelector('[annotationname = pGA]').value = response.body.query.pGA ;document.querySelector('[annotationname = pAbstract]').value = response.body.query.pAbstract ;document.querySelector('[annotationname = pDescription]').value = response.body.query.pDescription ;}});};window.onload = () => {let projectId = window.location.pathname.replace('/updateProject/','');apiProjectApi.getproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { document.querySelector('[annotationname = pTitle]').value = response.body.query.pTitle; } catch (e) { console.log(e) };try { 
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
       } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pWebsite]').value = response.body.query.pWebsite; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pStart]').value = response.body.query.pStart; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pEnd]').value = response.body.query.pEnd; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pDuration]').value = response.body.query.pDuration; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pGA]').value = response.body.query.pGA; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pAbstract]').value = response.body.query.pAbstract; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pDescription]').value = response.body.query.pDescription; } catch (e) { console.log(e) };window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));}});};