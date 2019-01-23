
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"clock{ color: #FFFFFF; position: absolute; width: ",[0,100],"; height: ",[0,60],"; left: ",[0,325],"; top:",[0,200],"; }\n.",[1],"title{ position: absolute; margin-top: ",[0,50],"; margin-left: ",[0,50],"; width: ",[0,100],"; height: ",[0,100],"; }\n.",[1],"container{ position: absolute; width: 100%; height: 100%; }\n.",[1],"cicle{ position: absolute; width: ",[0,500],"; height: ",[0,500],"; left: ",[0,120],"; top: ",[0,350],"; }\n",],undefined,{path:"./pages/breath/breathe.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/breath/breathe.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      