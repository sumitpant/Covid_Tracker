import json from '../json.zip';
import JSZipUtils from "jszip-utils";
import JSZip from 'jszip';


 export const decompress=async()=>{

    let results=[];
    
    
    JSZipUtils.getBinaryContent(json,  async function(err, data) {
    //   let results=[]
        if(err) {
            throw err; 
        }
        let zip =JSZip(data);
      
         zip.loadAsync(data).then( async function (obj) {
          
           obj.forEach(async function (relativePath, zipEntry) {


                 let result = await zip.file(zipEntry.name).async("string");

                 results.push(JSON.parse(result));



             }
             

             );
            
            
        });
    });

}
