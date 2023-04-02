

function area(){
    window.location="area.html";
}
function area(){
    let ainput= document.getElementById('ainput');
    var aresult= document.getElementById('aresult');
    var ainputType = document.getElementById('ainput-type');
    var aresultType = document.getElementById('aresult-type');
    var ainputTypeValue,aresultTypeValue;
    
    ainput.addEventListener('keyup',myResult);
    ainputType.addEventListener("change",myResult);
    aresultType.addEventListener("change",myResult);
    
    ainputTypeValue =  ainputType.value;
    aresultTypeValue = aresultType.value;
    
    
    function myResult(){
        
        ainputTypeValue =  ainputType.value;
        aresultTypeValue = aresultType.value;
    
         if(ainputTypeValue==='sme'&& aresultTypeValue==='skm'){
            aresult.value= (Number(ainput.value)*1e+6);
         }
          else if(ainputTypeValue==='sme'&& aresultTypeValue==='sme'){
            aresult.value= Number(ainput.value);
         }
         else if(ainputTypeValue==='sme'&& aresultTypeValue==='smi'){
            aresult.value= (Number(ainput.value)*3.861e-7);
         }
    
    
    
         if(ainputTypeValue==='smi'&& aresultTypeValue==='sme'){
            aresult.value=(Number(ainput.value)*2.59e+6);
         }
          else if(ainputTypeValue==='smi'&& aresultTypeValue==='smi'){
            aresult.value= Number(ainput.value);
         }
         else if(ainputTypeValue==='smi'&& aresultTypeValue==='skm'){
            aresult.value= Number(ainput.value)*2.58999;
         }
        
    
         if(ainputTypeValue==='skm'&& aresultTypeValue==='smi'){
             aresult.value= Number(ainput.value)*0.386102;
        }
        else if(ainputTypeValue==='skm'&& aresultTypeValue==='sme'){
              aresult.value= Number(ainput.value)*1e+6;
         }
         else if(ainputTypeValue==='skm'&& aresultTypeValue==='skm'){
            aresult.value= Number(ainput.value);
         }
         
    }}