(this.webpackJsonpVirtualDiamond=this.webpackJsonpVirtualDiamond||[]).push([[0],{27:function(e,t,a){e.exports=a(37)},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var r=a(12),n=a.n(r),o=a(0),i=a.n(o),c=a(3),s=a(1),l=a(6),f=a.n(l),m=a(11),u=a(16),d=a.n(u),h={sections:9,pages:8,zoom:75,paragraphs:[{offset:1,factor:1.75,header:"Deflationary",image:"/site/photo-1515036551567-bf1198cccc35.jpeg",aspect:1.51,text:"Virtual diamonds become more scarce as time passes by."},{offset:2,factor:2,header:"Passive staking",image:"/site/photo-1519608487953-e999c86e7455.jpeg",aspect:1.5,text:"Earn virtual diamonds simply by holding them in your wallet."},{offset:3,factor:2.25,header:"Locked liquidity",image:"/site/ph1.jpg",aspect:1.5037,text:"Initial liquidity has been locked here 0x29C0A4E6EA8DBB23013036FF7653."},{offset:4,factor:2,header:"Limited supply",image:"/site/ph3.jpg",aspect:.665,text:"It is impossible to mint new virtual diamonds."},{offset:5,factor:1.75,header:"Highly volatile",image:"/site/photo-1533577116850-9cc66cad8a9b.jpeg",aspect:1.55,text:"Initial liquidity allows this token to behave in a very volatile manner."},{offset:7,factor:1.05,header:"Get yours",image:"/site/photo-1548191265-cc70d3d45ba1.jpeg",aspect:1.77,text:"\ud83d\udc8e 0x29C0A4E6EA8DBB23013036FF7653 \ud83d\udc8e"}],stripes:[{offset:0,color:"#000",height:13},{offset:6.3,color:"#000",height:20}],diamonds:[{x:0,offset:.15,pos:new s.Vector3,scale:.6,factor:1.8},{x:2,offset:1.1,pos:new s.Vector3,scale:.8,factor:2.1},{x:-5,offset:2,pos:new s.Vector3,scale:.8,factor:2.5},{x:0,offset:3.2,pos:new s.Vector3,scale:.8,factor:1.75},{x:0,offset:4,pos:new s.Vector3,scale:.8,factor:2.5},{x:2,offset:5.5,pos:new s.Vector3,scale:1.25,factor:.85},{x:-5,offset:7,pos:new s.Vector3,scale:.8,factor:2},{x:0,offset:8,pos:new s.Vector3,scale:1.5,factor:6}],top:Object(o.createRef)()};function v(e){var t=e.children,a=e.size,r=void 0===a?1:a,n=e.left,l=e.right,u=e.top,v=e.bottom,p=e.color,g=void 0===p?"white":p,b=e.opacity,x=void 0===b?1:b,y=e.height,E=void 0===y?.01:y,w=(e.layers,e.font),j=void 0===w?"/site/MOONGET_Heavy.blob":w,O=Object(m.a)(e,["children","size","left","right","top","bottom","color","opacity","height","layers","font"]),M=Object(c.e)(s.FontLoader,j),N=d()((function(){return new Promise((function(e){return e(new s.TextBufferGeometry(t,{font:M,size:1,height:E,curveSegments:32}))}))}),[t]),k=Object(o.useCallback)((function(e){var t=new s.Vector3;e.geometry.computeBoundingBox(),e.geometry.boundingBox.getSize(t),e.position.x=n?0:l?-t.x:-t.x/2,e.position.y=u?0:v?-t.y:-t.y/2}),[n,l,u,v]),_=Object(o.useRef)(),D=h.top.current;return Object(c.d)((function(){_.current.shift=f()(_.current.shift,(h.top.current-D)/100,.1),D=h.top.current})),i.a.createElement("group",Object.assign({},O,{scale:[r,r,.1]}),i.a.createElement("mesh",{geometry:N,onUpdate:k,frustumCulled:!1},i.a.createElement("customMaterial",{ref:_,attach:"material",color:g,transparent:!0,opacity:x})))}var p=function(e){var t=e.text,a=e.size,r=void 0===a?1:a,n=e.lineHeight,o=void 0===n?1:n,c=e.position,s=void 0===c?[0,0,0]:c,l=Object(m.a)(e,["text","size","lineHeight","position"]);return t.split("\n").map((function(e,t){return i.a.createElement(v,Object.assign({key:t,size:r},l,{position:[s[0],s[1]-t*o,s[2]],children:e}))}))},g=a(4),b=a(25),x=a(5),y=a(9),E=a(7),w=a(8),j=function(e){function t(){return Object(x.a)(this,t),Object(y.a)(this,Object(E.a)(t).call(this,{vertexShader:"varying vec3 worldNormal;\n      void main() {\n        vec4 transformedNormal = vec4(normal, 0.);\n        vec4 transformedPosition = vec4(position, 1.0);\n        #ifdef USE_INSTANCING\n          transformedNormal = instanceMatrix * transformedNormal;\n          transformedPosition = instanceMatrix * transformedPosition;\n        #endif\n        worldNormal = normalize(modelViewMatrix * transformedNormal).xyz;\n        gl_Position = projectionMatrix * modelViewMatrix * transformedPosition;\n      }",fragmentShader:"varying vec3 worldNormal;\n      void main() {\n        gl_FragColor = vec4(worldNormal, 1.0);\n      }",side:s.BackSide}))}return Object(w.a)(t,e),t}(s.ShaderMaterial),O=function(e){function t(e){return Object(x.a)(this,t),Object(y.a)(this,Object(E.a)(t).call(this,{vertexShader:"varying vec3 worldNormal;\n      varying vec3 viewDirection;\n      void main() {\n        vec4 transformedNormal = vec4(normal, 0.);\n        vec4 transformedPosition = vec4(position, 1.0);\n        #ifdef USE_INSTANCING\n          transformedNormal = instanceMatrix * transformedNormal;\n          transformedPosition = instanceMatrix * transformedPosition;\n        #endif\n        worldNormal = normalize( modelViewMatrix * transformedNormal).xyz;\n        viewDirection = normalize((modelMatrix * vec4( position, 1.0)).xyz - cameraPosition);;\n        gl_Position = projectionMatrix * modelViewMatrix * transformedPosition;\n      }",fragmentShader:"uniform sampler2D envMap;\n      uniform sampler2D backfaceMap;\n      uniform vec2 resolution;\n      varying vec3 worldNormal;\n      varying vec3 viewDirection;\n      float fresnelFunc(vec3 viewDirection, vec3 worldNormal) {\n        return pow(1.05 + dot(viewDirection, worldNormal), 100.0);\n      }\n      void main() {\n        vec2 uv = gl_FragCoord.xy / resolution;\n        vec3 normal = worldNormal * (1.0 - 0.7) - texture2D(backfaceMap, uv).rgb * 0.7;\n        vec4 color = texture2D(envMap, uv += refract(viewDirection, normal, 1.0/1.5).xy);\n        //gl_FragColor = vec4(mix(color.rgb, vec3(0.15), fresnelFunc(viewDirection, normal)), 1.0);\n        gl_FragColor = vec4(mix(color.rgb, vec3(0.4), fresnelFunc(viewDirection, normal)), 1.0);\n      }",uniforms:{envMap:{value:e.envMap},backfaceMap:{value:e.backfaceMap},resolution:{value:e.resolution}}}))}return Object(w.a)(t,e),t}(s.ShaderMaterial),M=Object(o.createContext)(0);function N(e){var t=e.children,a=e.offset,r=e.factor,n=Object(m.a)(e,["children","offset","factor"]),s=k(),l=s.offset,u=s.sectionHeight,d=Object(o.useRef)();return a=void 0!==a?a:l,Object(c.d)((function(){var e=d.current.position.y,t=h.top.current;d.current.position.y=f()(e,t/h.zoom*r,.1)})),i.a.createElement(M.Provider,{value:a},i.a.createElement("group",Object.assign({},n,{position:[0,-u*a*r,0]}),i.a.createElement("group",{ref:d},t)))}function k(){var e=h.sections,t=h.pages,a=h.zoom,r=Object(c.f)(),n=r.size,i=r.viewport,s=Object(o.useContext)(M),l=i.width,f=i.height,m=l/a,u=f/a,d=n.width<700;return{viewport:i,offset:s,viewportWidth:l,viewportHeight:f,canvasWidth:m,canvasHeight:u,mobile:d,margin:m*(d?.2:.1),contentMaxWidth:m*(d?.8:.6),sectionHeight:u*((t-1)/(e-1)),offsetFactor:(s+1)/e}}var _=new s.Object3D;function D(){var e=Object(c.e)(b.a,"/site/diamond.glb");Object(o.useMemo)((function(){return e.scene.children[0].geometry.center()}),[]);var t=Object(c.f)(),a=t.size,r=t.gl,n=t.scene,l=t.camera,m=t.clock,u=k(),d=u.contentMaxWidth,v=u.sectionHeight,p=u.mobile,x=Object(o.useRef)(),y=r.getPixelRatio(),E=Object(o.useMemo)((function(){var e=new s.WebGLRenderTarget(a.width*y,a.height*y),t=new s.WebGLRenderTarget(a.width*y,a.height*y);return[e,t,new j,new O({envMap:e.texture,backfaceMap:t.texture,resolution:[a.width*y,a.height*y]})]}),[a,y]),w=Object(g.a)(E,4),M=w[0],N=w[1],D=w[2],z=w[3];return Object(c.d)((function(){h.diamonds.forEach((function(e,t){var a=m.getElapsedTime()/2,r=e.x,n=e.offset,o=e.scale,i=e.factor,c=d/35*o;e.pos.set(p?0:r,f()(e.pos.y,-v*n*i+h.top.current/h.zoom*i,.1),0),_.position.copy(e.pos),t===h.diamonds.length-1?_.rotation.set(0,a,0):_.rotation.set(a,a,a),_.scale.set(c,c,c),_.updateMatrix(),x.current.setMatrixAt(t,_.matrix),x.current.instanceMatrix.needsUpdate=!0})),r.autoClear=!1,l.layers.set(0),r.setRenderTarget(M),r.clearColor(),r.render(n,l),r.clearDepth(),l.layers.set(1),x.current.material=D,r.setRenderTarget(N),r.clearDepth(),r.render(n,l),l.layers.set(0),r.setRenderTarget(null),r.render(n,l),r.clearDepth(),l.layers.set(1),x.current.material=z,r.render(n,l)}),1),i.a.createElement("instancedMesh",{ref:x,layers:1,args:[null,null,h.diamonds.length],position:[0,0,50]},i.a.createElement("bufferGeometry",Object.assign({attach:"geometry"},e.__$[1].geometry)))}var z=a(26),F=function(e){function t(){return Object(x.a)(this,t),Object(y.a)(this,Object(E.a)(t).call(this,{vertexShader:"uniform float scale;\n      uniform float shift;\n      varying vec2 vUv;\n      void main() {\n        vec3 pos = position;\n        pos.y = pos.y + ((sin(uv.x * 3.1415926535897932384626433832795) * shift * 1.5) * 0.125);\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);\n      }",fragmentShader:"uniform sampler2D texture;\n      uniform float hasTexture;\n      uniform float shift;\n      uniform float scale;\n      uniform vec3 color;\n      uniform float opacity;\n      varying vec2 vUv;\n      void main() {\n        float angle = 1.55;\n        vec2 p = (vUv - vec2(0.5, 0.5)) * (1.0 - scale) + vec2(0.5, 0.5);\n        vec2 offset = shift / 4.0 * vec2(cos(angle), sin(angle));\n        vec4 cr = texture2D(texture, p + offset);\n        vec4 cga = texture2D(texture, p);\n        vec4 cb = texture2D(texture, p - offset);\n        if (hasTexture == 1.0) gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);\n        else gl_FragColor = vec4(color, opacity);\n      }",uniforms:{texture:{value:null},hasTexture:{value:0},scale:{value:0},shift:{value:0},opacity:{value:1},color:{value:new s.Color("white")}}}))}return Object(w.a)(t,e),Object(z.a)(t,[{key:"scale",set:function(e){this.uniforms.scale.value=e},get:function(){return this.uniforms.scale.value}},{key:"shift",set:function(e){this.uniforms.shift.value=e},get:function(){return this.uniforms.shift.value}},{key:"map",set:function(e){this.uniforms.hasTexture.value=!!e,this.uniforms.texture.value=e},get:function(){return this.uniforms.texture.value}},{key:"color",get:function(){return this.uniforms.color.value}},{key:"opacity",get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms&&(this.uniforms.opacity.value=e)}}]),t}(s.ShaderMaterial);Object(c.c)({CustomMaterial:F});var C=Object(o.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"white":a,n=e.shift,s=void 0===n?1:n,l=e.opacity,u=void 0===l?1:l,d=e.args,v=e.map,p=Object(m.a)(e,["color","shift","opacity","args","map"]),g=k(),b=g.viewportHeight,x=g.offsetFactor,y=Object(o.useRef)(),E=h.top.current;return Object(c.d)((function(){var e=h.pages,t=h.top;y.current.scale=f()(y.current.scale,x-t.current/((e-1)*b),.1),y.current.shift=f()(y.current.shift,(t.current-E)/s,.1),E=t.current})),i.a.createElement("mesh",Object.assign({ref:t},p),i.a.createElement("planeBufferGeometry",{attach:"geometry",args:d}),i.a.createElement("customMaterial",{ref:y,attach:"material",color:r,map:v,transparent:!0,opacity:u}))}));a(36);function V(){var e=Object(o.useRef)();return Object(c.d)((function(){return e.current.material.opacity=f()(e.current.material.opacity,0,.025)})),i.a.createElement(C,{ref:e,color:"#0e0e0f",position:[0,0,200],scale:[100,100,1]})}function S(e){var t=e.image,a=e.index,r=e.offset,n=e.factor,o=e.header,s=e.aspect,l=e.text,f=k(),m=f.contentMaxWidth,u=f.canvasWidth,d=f.margin,p=f.mobile,g=s<1&&!p?.65:1,b=(u-m*g-d)/2,x=m*h.zoom*g,y=!(a%2),E=a%2?"#D40749":"#2FE8C3";return i.a.createElement(N,{factor:n,offset:r},i.a.createElement("group",{position:[y?-b:b,0,0]},i.a.createElement(C,{map:t,args:[1,1,32,32],shift:75,size:g,aspect:s,scale:[m*g,m*g/s,1],frustumCulled:!1}),i.a.createElement(c.b,{style:{width:x/(p?1:2),textAlign:y?"left":"right"},position:[y||p?-m*g/2:0,-m*g/2/s-.4,1]},i.a.createElement("div",{tabIndex:a},l)),i.a.createElement(v,{left:y,right:!y,size:.04*m,color:E,top:!0,position:[(y?-m:m)*g/2,m*g/s/2+.5,-1]},o),i.a.createElement(N,{factor:.2},i.a.createElement(v,{opacity:.5,size:.1*m,color:"#1A1E2A",position:[(y?m:-m)/2*g,m*g/s/1.5,-10]},"0"+(a+1)))))}function P(){var e=Object(c.e)(s.TextureLoader,h.paragraphs.map((function(e){return e.image})));Object(o.useMemo)((function(){return e.forEach((function(e){return e.minFilter=s.LinearFilter}))}),[e]);var t=k(),a=t.contentMaxWidth,r=t.canvasWidth,n=t.canvasHeight,l=t.mobile;return i.a.createElement(i.a.Fragment,null,i.a.createElement(N,{factor:1,offset:0},i.a.createElement(N,{factor:1.2},i.a.createElement(v,{left:!0,size:.08*a,position:[-a/3.2,.5,-1],color:"#d40749"},"DIAMOND")),i.a.createElement(N,{factor:1},i.a.createElement(c.b,{position:[-a/3.2,.08*-a+.25,-1]},"In digital form.",l?i.a.createElement("br",null):" ","The diamond token has arrived."))),i.a.createElement(N,{factor:1.2,offset:5.7},i.a.createElement(p,{top:!0,left:!0,size:.15*a,lineHeight:a/5,position:[-a/2,0,-1],color:"#2fe8c3",text:"virtual\ndiamond"})),h.paragraphs.map((function(t,a){return i.a.createElement(S,Object.assign({key:a,index:a},t,{image:e[a]}))})),h.stripes.map((function(e,t){var a=e.offset,r=e.color,n=e.height;return i.a.createElement(N,{key:t,factor:-1.5,offset:a},i.a.createElement(C,{args:[50,n,32,32],shift:-4,color:r,rotation:[0,0,Math.PI/8],position:[0,0,-10]}))})),i.a.createElement(N,{factor:1.25,offset:8},i.a.createElement(c.b,{className:"bottom-left",position:[-r/2,-n/2,0]},"Virtual Diamond is a token in the blockchain.")))}n.a.render(i.a.createElement((function(){var e=Object(o.useRef)(),t=function(e){return h.top.current=e.target.scrollTop};return Object(o.useEffect)((function(){t({target:e.current})}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{className:"canvas",concurrent:!0,pixelRatio:1,orthographic:!0,camera:{zoom:h.zoom,position:[0,0,500]}},i.a.createElement(o.Suspense,{fallback:i.a.createElement(c.b,{center:!0,className:"loading",children:"Loading..."})},i.a.createElement(P,null),i.a.createElement(D,null),i.a.createElement(V,null))),i.a.createElement("div",{className:"scrollArea",ref:e,onScroll:t},new Array(h.sections).fill().map((function(e,t){return i.a.createElement("div",{key:t,id:"0"+t,style:{height:"".concat(h.pages/h.sections*100,"vh")}})}))),i.a.createElement("div",{className:"frame"},i.a.createElement("h1",{className:"frame__title"},"EVM token, Virtual Diamond 0x29C0A4E6EA8DBB23013036FF7653"),i.a.createElement("div",{className:"frame__links"},i.a.createElement("a",{className:"frame__link",href:"https://github.com/virtualdiamondtoken/"},"GitHub")),i.a.createElement("div",{className:"frame__nav"},i.a.createElement("a",{className:"frame__link",href:"#00",children:"intro"}),i.a.createElement("a",{className:"frame__link",href:"#01",children:"01"}),i.a.createElement("a",{className:"frame__link",href:"#02",children:"02"}),i.a.createElement("a",{className:"frame__link",href:"#03",children:"03"}),i.a.createElement("a",{className:"frame__link",href:"#04",children:"04"}),i.a.createElement("a",{className:"frame__link",href:"#05",children:"05"}),i.a.createElement("a",{className:"frame__link",href:"#07",children:"06"}))))}),null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.dba3e547.chunk.js.map