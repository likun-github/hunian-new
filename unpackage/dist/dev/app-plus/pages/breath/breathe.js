
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"container{ position: absolute; width: 100%; height: 100%; }\n.",[1],"cicle{ position: relative; width: ",[0,600],"; height: ",[0,600],"; }\n",],undefined,{path:"./pages/breath/breathe.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/breath/breathe.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      