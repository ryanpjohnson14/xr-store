!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){n(1),n(2),n(3),n(4)},function(e,t){THREE.OrbitControls=function(e,t){function n(){return 2*Math.PI/60/60*H.autoRotateSpeed}function o(){return Math.pow(.95,H.zoomSpeed)}function i(e){U.theta-=e}function a(e){U.phi-=e}function s(e){H.object instanceof THREE.PerspectiveCamera?F/=e:H.object instanceof THREE.OrthographicCamera?(H.object.zoom=Math.max(H.minZoom,Math.min(H.maxZoom,H.object.zoom*e)),H.object.updateProjectionMatrix(),Y=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),H.enableZoom=!1)}function r(e){H.object instanceof THREE.PerspectiveCamera?F*=e:H.object instanceof THREE.OrthographicCamera?(H.object.zoom=Math.max(H.minZoom,Math.min(H.maxZoom,H.object.zoom/e)),H.object.updateProjectionMatrix(),Y=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),H.enableZoom=!1)}function c(e){q.set(e.clientX,e.clientY)}function d(e){Q.set(e.clientX,e.clientY)}function l(e){K.set(e.clientX,e.clientY)}function u(e){X.set(e.clientX,e.clientY),W.subVectors(X,q);var t=H.domElement===document?H.domElement.body:H.domElement;i(2*Math.PI*W.x/t.clientWidth*H.rotateSpeed),a(2*Math.PI*W.y/t.clientHeight*H.rotateSpeed),q.copy(X),H.update()}function m(e){$.set(e.clientX,e.clientY),J.subVectors($,Q),J.y>0?s(o()):J.y<0&&r(o()),Q.copy($),H.update()}function h(e){_.set(e.clientX,e.clientY),G.subVectors(_,K),ne(G.x,G.y),K.copy(_),H.update()}function p(e){}function b(e){e.deltaY<0?r(o()):e.deltaY>0&&s(o()),H.update()}function E(e){switch(e.keyCode){case H.keys.UP:ne(0,H.keyPanSpeed),H.update();break;case H.keys.BOTTOM:ne(0,-H.keyPanSpeed),H.update();break;case H.keys.LEFT:ne(H.keyPanSpeed,0),H.update();break;case H.keys.RIGHT:ne(-H.keyPanSpeed,0),H.update()}}function g(e){q.set(e.touches[0].pageX,e.touches[0].pageY)}function y(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);Q.set(0,o)}function f(e){K.set(e.touches[0].pageX,e.touches[0].pageY)}function v(e){X.set(e.touches[0].pageX,e.touches[0].pageY),W.subVectors(X,q);var t=H.domElement===document?H.domElement.body:H.domElement;i(2*Math.PI*W.x/t.clientWidth*H.rotateSpeed),a(2*Math.PI*W.y/t.clientHeight*H.rotateSpeed),q.copy(X),H.update()}function R(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,i=Math.sqrt(t*t+n*n);$.set(0,i),J.subVectors($,Q),J.y>0?r(o()):J.y<0&&s(o()),Q.copy($),H.update()}function T(e){_.set(e.touches[0].pageX,e.touches[0].pageY),G.subVectors(_,K),ne(G.x,G.y),K.copy(_),H.update()}function C(e){}function S(e){if(H.enabled!==!1){if(e.preventDefault(),e.button===H.mouseButtons.ORBIT){if(H.enableRotate===!1)return;c(e),N=z.ROTATE}else if(e.button===H.mouseButtons.ZOOM){if(H.enableZoom===!1)return;d(e),N=z.DOLLY}else if(e.button===H.mouseButtons.PAN){if(H.enablePan===!1)return;l(e),N=z.PAN}N!==z.NONE&&(document.addEventListener("mousemove",A,!1),document.addEventListener("mouseup",I,!1),H.dispatchEvent(M))}}function A(e){if(H.enabled!==!1)if(e.preventDefault(),N===z.ROTATE){if(H.enableRotate===!1)return;u(e)}else if(N===z.DOLLY){if(H.enableZoom===!1)return;m(e)}else if(N===z.PAN){if(H.enablePan===!1)return;h(e)}}function I(e){H.enabled!==!1&&(p(e),document.removeEventListener("mousemove",A,!1),document.removeEventListener("mouseup",I,!1),H.dispatchEvent(j),N=z.NONE)}function O(e){H.enabled===!1||H.enableZoom===!1||N!==z.NONE&&N!==z.ROTATE||(e.preventDefault(),e.stopPropagation(),b(e),H.dispatchEvent(M),H.dispatchEvent(j))}function k(e){H.enabled!==!1&&H.enableKeys!==!1&&H.enablePan!==!1&&E(e)}function B(e){if(H.enabled!==!1){switch(e.touches.length){case 1:if(H.enableRotate===!1)return;g(e),N=z.TOUCH_ROTATE;break;case 2:if(H.enableZoom===!1)return;y(e),N=z.TOUCH_DOLLY;break;case 3:if(H.enablePan===!1)return;f(e),N=z.TOUCH_PAN;break;default:N=z.NONE}N!==z.NONE&&H.dispatchEvent(M)}}function L(e){if(H.enabled!==!1)switch(e.preventDefault(),e.stopPropagation(),e.touches.length){case 1:if(H.enableRotate===!1)return;if(N!==z.TOUCH_ROTATE)return;v(e);break;case 2:if(H.enableZoom===!1)return;if(N!==z.TOUCH_DOLLY)return;R(e);break;case 3:if(H.enablePan===!1)return;if(N!==z.TOUCH_PAN)return;T(e);break;default:N=z.NONE}}function w(e){H.enabled!==!1&&(C(e),H.dispatchEvent(j),N=z.NONE)}function x(e){e.preventDefault()}this.object=e,this.domElement=void 0!==t?t:document,this.enabled=!0,this.target=new THREE.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-(1/0),this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.25,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={ORBIT:THREE.MOUSE.LEFT,ZOOM:THREE.MOUSE.MIDDLE,PAN:THREE.MOUSE.RIGHT},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return V.phi},this.getAzimuthalAngle=function(){return V.theta},this.reset=function(){H.target.copy(H.target0),H.object.position.copy(H.position0),H.object.zoom=H.zoom0,H.object.updateProjectionMatrix(),H.dispatchEvent(P),H.update(),N=z.NONE},this.update=function(){var t=new THREE.Vector3,o=(new THREE.Quaternion).setFromUnitVectors(e.up,new THREE.Vector3(0,1,0)),a=o.clone().inverse(),s=new THREE.Vector3,r=new THREE.Quaternion;return function(){var e=H.object.position;return t.copy(e).sub(H.target),t.applyQuaternion(o),V.setFromVector3(t),H.autoRotate&&N===z.NONE&&i(n()),V.theta+=U.theta,V.phi+=U.phi,V.theta=Math.max(H.minAzimuthAngle,Math.min(H.maxAzimuthAngle,V.theta)),V.phi=Math.max(H.minPolarAngle,Math.min(H.maxPolarAngle,V.phi)),V.makeSafe(),V.radius*=F,V.radius=Math.max(H.minDistance,Math.min(H.maxDistance,V.radius)),H.target.add(Z),t.setFromSpherical(V),t.applyQuaternion(a),e.copy(H.target).add(t),H.object.lookAt(H.target),H.enableDamping===!0?(U.theta*=1-H.dampingFactor,U.phi*=1-H.dampingFactor):U.set(0,0,0),F=1,Z.set(0,0,0),!!(Y||s.distanceToSquared(H.object.position)>D||8*(1-r.dot(H.object.quaternion))>D)&&(H.dispatchEvent(P),s.copy(H.object.position),r.copy(H.object.quaternion),Y=!1,!0)}}(),this.dispose=function(){H.domElement.removeEventListener("contextmenu",x,!1),H.domElement.removeEventListener("mousedown",S,!1),H.domElement.removeEventListener("wheel",O,!1),H.domElement.removeEventListener("touchstart",B,!1),H.domElement.removeEventListener("touchend",w,!1),H.domElement.removeEventListener("touchmove",L,!1),document.removeEventListener("mousemove",A,!1),document.removeEventListener("mouseup",I,!1),window.removeEventListener("keydown",k,!1)};var H=this,P={type:"change"},M={type:"start"},j={type:"end"},z={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5},N=z.NONE,D=1e-6,V=new THREE.Spherical,U=new THREE.Spherical,F=1,Z=new THREE.Vector3,Y=!1,q=new THREE.Vector2,X=new THREE.Vector2,W=new THREE.Vector2,K=new THREE.Vector2,_=new THREE.Vector2,G=new THREE.Vector2,Q=new THREE.Vector2,$=new THREE.Vector2,J=new THREE.Vector2,ee=function(){var e=new THREE.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),Z.add(e)}}(),te=function(){var e=new THREE.Vector3;return function(t,n){e.setFromMatrixColumn(n,1),e.multiplyScalar(t),Z.add(e)}}(),ne=function(){var e=new THREE.Vector3;return function(t,n){var o=H.domElement===document?H.domElement.body:H.domElement;if(H.object instanceof THREE.PerspectiveCamera){var i=H.object.position;e.copy(i).sub(H.target);var a=e.length();a*=Math.tan(H.object.fov/2*Math.PI/180),ee(2*t*a/o.clientHeight,H.object.matrix),te(2*n*a/o.clientHeight,H.object.matrix)}else H.object instanceof THREE.OrthographicCamera?(ee(t*(H.object.right-H.object.left)/H.object.zoom/o.clientWidth,H.object.matrix),te(n*(H.object.top-H.object.bottom)/H.object.zoom/o.clientHeight,H.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),H.enablePan=!1)}}();H.domElement.addEventListener("contextmenu",x,!1),H.domElement.addEventListener("mousedown",S,!1),H.domElement.addEventListener("wheel",O,!1),H.domElement.addEventListener("touchstart",B,!1),H.domElement.addEventListener("touchend",w,!1),H.domElement.addEventListener("touchmove",L,!1),window.addEventListener("keydown",k,!1),this.update()},THREE.OrbitControls.prototype=Object.create(THREE.EventDispatcher.prototype),THREE.OrbitControls.prototype.constructor=THREE.OrbitControls,Object.defineProperties(THREE.OrbitControls.prototype,{center:{get:function(){return console.warn("THREE.OrbitControls: .center has been renamed to .target"),this.target}},noZoom:{get:function(){return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),!this.enableZoom},set:function(e){console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),this.enableZoom=!e}},noRotate:{get:function(){return console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),!this.enableRotate},set:function(e){console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),this.enableRotate=!e}},noPan:{get:function(){return console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),!this.enablePan},set:function(e){console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),this.enablePan=!e}},noKeys:{get:function(){return console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),!this.enableKeys},set:function(e){console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),this.enableKeys=!e}},staticMoving:{get:function(){return console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),!this.enableDamping},set:function(e){console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),this.enableDamping=!e}},dynamicDampingFactor:{get:function(){return console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor},set:function(e){console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor=e}}})},function(e,t){AFRAME.registerComponent("orbit-controls",{dependencies:["camera"],schema:{position:{default:{x:0,y:2,z:-2},type:"vec3"}},init:function(){var e=this.el.sceneEl,t=this.setupControls.bind(this);this.el.sceneEl.is("vr-mode")||this.el.setAttribute("position",this.data.position),e.canvas?t():e.addEventListener("render-target-loaded",t),this.onEnterVR=this.onEnterVR.bind(this),this.onExitVR=this.onExitVR.bind(this),e.addEventListener("enter-vr",this.onEnterVR),e.addEventListener("exit-vr",this.onExitVR)},onExitVR:function(){this.el.setAttribute("position",this.data.position),this.controls.enabled=!0},onEnterVR:function(){if(AFRAME.utils.device.checkHeadsetConnected()||this.el.sceneEl.isMobile){var e=this.el.getAttribute("position"),t=this.el.getObject3D("camera");this.controls.enabled=!1,t.position.set(0,0,0),t.rotation.set(0,0,0),this.el.sceneEl.isMobile||this.el.setAttribute("position",{x:e.x-this.data.position.x,y:e.y-this.data.position.y,z:e.z-this.data.position.z})}},tick:function(){this.controls.update()},setupControls:function(){var e=this.el.sceneEl.renderer,t=this.el.getObject3D("camera"),n=this.controls=new THREE.OrbitControls(t,e.domElement),o=this.el.getAttribute("position");n.target.setX(-o.x),n.target.setY(-o.y/1.75),n.target.setZ(-o.z),n.minPolarAngle=Math.PI/4,n.maxPolarAngle=Math.PI/2.1,n.enableZoom=!0,n.minDistance=1,n.maxDistance=3},play:function(){this.controls&&(this.controls.enabled=!0)},pause:function(){this.controls&&(this.controls.enabled=!1)},remove:function(){this.pause()}})},function(e,t){AFRAME.registerComponent("store-controls",{schema:{hand:{default:"left"}},init:function(){var e=this.el,t=this;e.addEventListener("scale",function(e){}),t.touchStarted=!1,e.addEventListener("startScale",function(){t.touchStarted=!0}),document.getElementById("acamera").setAttribute("orbit-controls","position","0 0.5 0")}})},function(e,t){AFRAME.registerSystem("store",{init:function(){var e={behaviours:{},mappings:{store:{common:{"grip.down":"undo","trigger.changed":"select"},"vive-controls":{"axis.move":"scale","trackpad.touchstart":"startScale","menu.down":"toggleMenu"},"daydream-controls":{"trackpad.changed":"scale","trackpad.down":"startScale","menu.down":"toggleMenu"},"oculus-touch-controls":{"axis.move":"scale","abutton.down":"toggleMenu","xbutton.down":"toggleMenu"},"windows-motion-controls":{"axis.move":"scale","menu.down":"toggleMenu"}}}};this.colorArr=[6736540,16406404,5092817],this.currentReality="magicWindow",this.el.sceneEl.setAttribute("vr-mode-ui",{enabled:!1}),this.el.sceneEl.addEventListener("realityChanged",this.realityChanged.bind(this)),this.addEvents();var t=this;this.sceneEl.addEventListener("loaded",function(){AFRAME.registerInputMappings(e),AFRAME.currentInputMapping="store",t.flatMaterials(),t.addStorePanel()})},realityChanged:function(e){e.detail!==this.currentReality&&(this.currentReality=e.detail,this.changeReality())},changeReality:function(){var e=document.getElementsByClassName("productOption");switch(this.currentReality){case"ar":document.getElementById("header").classList.add("ar"),document.getElementById("title").style.display="none",document.getElementById("visualSheet").classList.add("ar"),document.getElementById("content3D").classList.add("ar"),document.getElementById("productOptions").classList.add("ar");for(var t=0;t<e.length;t++)e[t].classList.add("ar");document.getElementById("brand").style.display="none",document.getElementById("productName").style.display="none",document.getElementById("price").style.display="none",document.getElementById("comments").style.display="none",document.getElementById("thumbs").classList.add("ar"),document.getElementById("buttonCart").classList.add("ar"),document.getElementById("container").classList.add("ar"),document.getElementById("footer").style.display="none";break;case"magicWindow":document.getElementById("header").classList.remove("ar"),document.getElementById("title").style.display="block",document.getElementById("visualSheet").classList.remove("ar"),document.getElementById("content3D").classList.remove("ar"),document.getElementById("productOptions").classList.remove("ar");for(var t=0;t<e.length;t++)e[t].classList.remove("ar");document.getElementById("brand").style.display="block",document.getElementById("productName").style.display="block",document.getElementById("price").style.display="block",document.getElementById("comments").style.display="block",document.getElementById("thumbs").classList.remove("ar"),document.getElementById("buttonCart").classList.remove("ar"),document.getElementById("container").classList.remove("ar"),document.getElementById("footer").style.display="block";break;case"vr":}},addEvents:function(){this.isAdded=!1,this.thumbSelected=2,this.shapeSelected=0,this.colorSelected=0,document.getElementById("thumb0").addEventListener("click",this.thumb0Clicked.bind(this)),document.getElementById("thumb1").addEventListener("click",this.thumb1Clicked.bind(this)),document.getElementById("thumb2").addEventListener("click",this.thumb2Clicked.bind(this)),document.getElementById("shape0").addEventListener("click",this.shape0Clicked.bind(this)),document.getElementById("shape1").addEventListener("click",this.shape1Clicked.bind(this)),document.getElementById("shape2").addEventListener("click",this.shape2Clicked.bind(this)),document.getElementById("color0").addEventListener("click",this.color0Clicked.bind(this)),document.getElementById("color1").addEventListener("click",this.color1Clicked.bind(this)),document.getElementById("color2").addEventListener("click",this.color2Clicked.bind(this)),this.buttonCartClicked=this.buttonCartClicked.bind(this),document.getElementById("buttonCart").addEventListener("click",this.buttonCartClicked)},thumb0Clicked:function(e){this.removeSelected(),document.getElementById("thumb0").classList.add("selected"),document.getElementsByTagName("a-scene")[0].style.display="none",document.getElementById("content3D").style.background="url(assets/images/product-"+this.shapeSelected+"-"+this.colorSelected+"-0.png) no-repeat center #ffffff",this.thumbSelected=0},thumb1Clicked:function(e){this.removeSelected(),document.getElementById("thumb1").classList.add("selected"),document.getElementsByTagName("a-scene")[0].style.display="none",document.getElementById("content3D").style.background="url(assets/images/product-"+this.shapeSelected+"-0-1.png) no-repeat center #ffffff",this.thumbSelected=1},thumb2Clicked:function(e){this.removeSelected(),document.getElementById("content3D").style.background="none",document.getElementsByTagName("a-scene")[0].style.display="block",document.getElementById("thumb2").classList.add("selected"),this.thumbSelected=2},removeSelected:function(){document.getElementById("thumb"+this.thumbSelected).classList.remove("selected")},shape0Clicked:function(e){this.changeShape(0)},shape1Clicked:function(e){this.changeShape(1)},shape2Clicked:function(e){this.changeShape(2)},changeShape:function(e){document.querySelector("#geo0").setAttribute("visible",!1),document.querySelector("#geo1").setAttribute("visible",!1),document.querySelector("#geo2").setAttribute("visible",!1),document.getElementById("shape"+this.shapeSelected).classList.remove("optionSelected"),this.shapeSelected=e,document.querySelector("#geo"+e).setAttribute("visible",!0),document.getElementById("shape"+e).classList.add("optionSelected"),this.updateThumbs()},color0Clicked:function(e){this.changeColor(0)},color1Clicked:function(e){this.changeColor(1)},color2Clicked:function(e){this.changeColor(2)},changeColor:function(e){document.getElementById("color"+this.colorSelected).classList.remove("optionSelected"),document.querySelector("#geo0").setAttribute("material","color",this.colorArr[e]),document.querySelector("#geo1").setAttribute("material","color",this.colorArr[e]),document.querySelector("#geo2").setAttribute("material","color",this.colorArr[e]),document.getElementById("color"+e).classList.add("optionSelected"),this.colorSelected=e,this.updateThumbs(),this.flatMaterials()},updateThumbs:function(){document.querySelector("#thumb0").querySelector("img").src="assets/images/thumbs-"+this.shapeSelected+"-"+this.colorSelected+"-0.png",document.querySelector("#thumb1").querySelector("img").src="assets/images/thumbs-"+this.shapeSelected+"-0-1.png",document.querySelector("#thumb2").querySelector("img").src="assets/images/thumbs-"+this.shapeSelected+"-"+this.colorSelected+"-2.png",0===this.thumbSelected?document.getElementById("content3D").style.background="url(assets/images/product-"+this.shapeSelected+"-"+this.colorSelected+"-0.png) no-repeat center #ffffff":1===this.thumbSelected&&(document.getElementById("content3D").style.background="url(assets/images/product-"+this.shapeSelected+"-0-1.png) no-repeat center #ffffff")},buttonCartClicked:function(){this.isAdded?(document.getElementById("cart").innerHTML="(0) Cart",document.getElementById("cart").style.color="#181818",document.getElementById("cart").style.fontWeight="normal",document.getElementById("buttonCart").innerHTML="Add to cart",document.getElementById("buttonCart").style.backgroundColor="#181818"):(document.getElementById("cart").innerHTML="(1) Cart",document.getElementById("cart").style.color="#b7374c",document.getElementById("cart").style.fontWeight="bolder",document.getElementById("buttonCart").innerHTML="Added!",document.getElementById("buttonCart").style.backgroundColor="#b7374c"),this.isAdded=!this.isAdded},flatMaterials:function(){document.querySelector("#geo0").getObject3D("mesh").material.flatShading=!0,document.querySelector("#geo2").getObject3D("mesh").material.flatShading=!0},addStorePanel:function(){var e=document.createElement("a-entity");e.setAttribute("id","storePanel"),e.setAttribute("position","-1.3 1.7 0.7"),e.setAttribute("rotation","0 160 0"),this.el.sceneEl.appendChild(e),this.addPlane({id:"main-vr",width:2,height:1.5,color:"white",parent:e}),this.addText({text:"Mozilla",id:"brand-vr",font:"OpenSans-Bold",size:2,color:"#181818",position:"0.15 0.55 0",parent:e}),this.addText({text:"Basic Mesh",id:"product-vr",font:"OpenSans-Regular",size:3,color:"#181818",position:"0.65 0.35 0",parent:e}),this.addText({text:"(0) Cart",id:"cart-vr",font:"OpenSans-Regular",size:1.8,color:"#181818",position:"1.5 0.4 0",parent:e}),this.addText({text:"Shape",id:"shape-vr",font:"OpenSans-Regular",size:1.8,color:"#181818",position:"0.06 0.2 0",parent:e}),this.addImage({id:"shape0-vr",src:"shape0",size:.25,position:"-0.75 0 0.01",collidable:!0,parent:e}),this.addImage({id:"shape1-vr",src:"shape1",size:.25,position:"-0.5 0 0.01",collidable:!0,parent:e}),this.addImage({id:"shape2-vr",src:"shape2",size:.25,position:"-0.25 0 0.01",collidable:!0,parent:e}),this.addPlane({id:"shapeBar-vr",width:.2,height:.01,position:"-0.75 -0.15 0.01",color:"#181818",parent:e}),this.addText({text:"Color",id:"color-vr",font:"OpenSans-Regular",size:1.8,color:"#181818",position:"1.06 0.2 0",parent:e}),this.addImage({id:"color0-vr",src:"color0",size:.25,position:"0.25 0 0.01",collidable:!0,parent:e}),this.addImage({id:"color1-vr",src:"color1",size:.25,position:"0.5 0 0.01",collidable:!0,parent:e}),this.addImage({id:"color2-vr",src:"color2",size:.25,position:"0.75 0 0.01",collidable:!0,parent:e}),this.addPlane({id:"colorBar-vr",width:.2,height:.01,position:"0.25 -0.15 0.01",color:"#181818",parent:e}),this.addText({text:"Price: $0.00 + Shipping & Import Fees",id:"price-vr",font:"OpenSans-Regular",size:1.2,color:"#181818",position:"-0.25 -0.3 0",parent:e}),this.addPlane({id:"colorBar-vr",width:.2,height:.01,position:"0.25 -0.15 0.01",color:"#181818",parent:e}),this.addButton({id:"addBtn-vr",text:"Add to cart",textColor:"#ffffff",width:.8,height:.2,color:"#181818",parent:e,position:"-0.45 -0.5 0.01",onclick:this.buttonCartClicked})},addPlane:function(e){var t=document.createElement("a-entity");t.setAttribute("geometry",{primitive:"plane",width:e.width,height:e.height}),t.setAttribute("position",e.position||"0 0 0"),t.setAttribute("material",{shader:"flat",transparent:!0,color:e.color,side:"double"}),e.collidable&&t.setAttribute("class","collidable"),e.parent.appendChild(t)},addText:function(e){var t=document.createElement("a-entity");t.setAttribute("text",{value:e.text,font:"assets/fonts/"+e.font+".json",align:e.align||"left",shader:"msdf",color:e.color}),t.setAttribute("id",e.id),t.setAttribute("scale",{x:e.size,y:e.size,z:e.size}),e.collidable&&t.setAttribute("class","collidable"),t.setAttribute("position",e.position||"0 0 0"),e.parent.appendChild(t)},addImage:function(e){var t=document.createElement("a-entity");t.setAttribute("id",e.id),t.setAttribute("geometry",{primitive:"plane",width:e.size,height:e.size}),t.setAttribute("material",{shader:"flat",transparent:!0,src:"assets/images/"+e.src+".png"}),e.collidable&&t.setAttribute("class","collidable"),t.setAttribute("position",e.position||"0 0 0"),e.parent.appendChild(t)},addButton:function(e){var t=document.createElement("a-entity");t.setAttribute("id",e.id),e.parent.appendChild(t),t.setAttribute("position",e.position||"0 0 0"),t.setAttribute("onclick",e.onclick),this.addPlane({id:e.id+"-bg",width:e.width,height:e.height,color:e.color,parent:t}),this.addText({text:e.text,id:e.id+"-text",font:"OpenSans-Bold",align:"center",position:"0 -0.05 0",size:1.4,color:e.textColor,parent:t})}})}]);