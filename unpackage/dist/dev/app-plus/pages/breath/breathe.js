
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"container { position: absolute; width: 100%; height: 100%; }\n.",[1],"container wx-image { position: absolute; width: 100%; height: 100%; }\n.",[1],"title { position: relative; margin-top: ",[0,100],"; margin-left: ",[0,50],"; width: ",[0,150],"; height: ",[0,100],"; }\n@-webkit-keyframes circlechangge { 0% { -webkit-transform: scale(0.6); }\n30%, 60% { -webkit-transform: scale(1); }\n100% { -webkit-transform: scale(0.6); }\n}@keyframes circlechangge { 0% { -webkit-transform: scale(0.6); }\n30%, 60% { -webkit-transform: scale(1); }\n100% { -webkit-transform: scale(0.6); }\n}.",[1],"lopp { position: relative; width: ",[0,700],"; height: ",[0,700],"; margin-left: ",[0,25],"; -webkit-animation: circlechangge 10s infinite ; animation: circlechangge 10s infinite ; }\n@-webkit-keyframes fontchanghe { 0% { -webkit-transform: scale(0.6); }\n30%, 60% { -webkit-transform: scale(1); }\n100% { -webkit-transform: scale(0.6); }\n}@keyframes fontchanghe { 0% { -webkit-transform: scale(0.6); }\n30%, 60% { -webkit-transform: scale(1); }\n100% { -webkit-transform: scale(0.6); }\n}.",[1],"textsize { position: relative; width: ",[0,750],"; height: ",[0,50],"; text-align: center; margin-top: ",[0,-360],"; font-family: PingFangSC-Thin, sans-serif; color: #ffffff; -webkit-animation: fontchanghe 10s infinite ; animation: fontchanghe 10s infinite ; }\n.",[1],"btn1{ position: absolute; bottom: ",[0,200],"; width:",[0,240],"; height: ",[0,130],"; margin-left: ",[0,255],"; }\n.",[1],"btn2{ position: absolute; bottom: ",[0,200],"; width:",[0,178],"; height: ",[0,130],"; margin-left: ",[0,286],"; }\n",],undefined,{path:"./pages/breath/breathe.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/breath/breathe.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      