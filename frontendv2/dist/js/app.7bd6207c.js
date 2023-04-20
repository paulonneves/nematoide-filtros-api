(function(){"use strict";var t={7479:function(t,e,a){var o=a(144),r=a(1096),n=a(9781),i=a(4192),s=a(5057),l=a(248),c=a(1908),u=a(1769),d=a(8228),m=a(8463),f=function(){var t=this,e=t._self._c;return e(r.Z,[e(n.Z,{staticClass:"d-flex",attrs:{height:"100%"}},[e(m.Z,{attrs:{permanent:"",color:"#AAB4AA",dark:""}},[e(c.Z,[e(u.km,[e(u.V9,{staticClass:"text-h6"},[t._v(" QuitandaLab ")]),e(u.oZ,[t._v(" Nematoide Photo Editor ")])],1)],1),e(i.Z),e(l.Z,{attrs:{dense:"",nav:""}},t._l(t.items,(function(a){return e("router-link",{key:a.title,staticClass:"route-link",attrs:{to:a.page}},[e(c.Z,{attrs:{link:""}},[e(d.Z,[e(s.Z,[t._v(t._s(a.icon))])],1),e(u.km,[e(u.V9,[t._v(t._s(a.title))])],1)],1)],1)})),1)],1),e("router-view")],1)],1)},p=[],h={name:"App",components:{},data:()=>({items:[{title:"Editor de Imagem",icon:"mdi-image-frame",page:"/editor"},{title:"Relatório",icon:"mdi-file-document",page:"/article"}]})},v=h,g=a(1001),Z=(0,g.Z)(v,f,p,!1,null,"0c8727f2",null),b=Z.exports,_=a(2250);o.ZP.use(_.Z);var k=new _.Z({}),x=a(8345),y=a(1828),C=a(5223),w=a(6035),P=a(9789),E=a(271),B=a(2469),j=a(5234),F=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("div",{staticClass:"button-group"},[e("div",{staticClass:"text-center"},[e(P.Z,{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:o}){return[e(y.Z,t._g(t._b({staticClass:"mb-10",attrs:{color:"#6EBE43",dark:"",large:""}},"v-btn",o,!1),a),[t._v(" Upload de Arquivo ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(n.Z,[e(C.h7,{staticClass:"grey lighten-2"},[e(j.Z),e(y.Z,{attrs:{icon:"",dark:"",color:"red"},on:{click:function(e){t.dialog=!1}}},[e(s.Z,[t._v("mdi-close")])],1)],1),e(C.EB,{staticClass:"text-h5 grey lighten-2 justify-center"},[t._v(" Upload de Imagem ")]),e(w.Z,[e(C.ZB,[t._v(" Clique no campo abaixo para procurar a imagem no seu computador ")])],1),e(i.Z),e(C.h7,[e(E.Z,{attrs:{accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"mdi-camera",label:"Avatar",solo:""},on:{change:t.Preview_image},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}},[t._v("Upload")])],1)],1)],1)],1),e(y.Z,{staticClass:"mb-10",attrs:{color:"#6EBE43",large:"",dark:""},on:{click:function(e){return t.increment()}}},[t._v("Acessar Pasta")])],1),t.file?e(w.Z,{staticClass:"d-flex justify-center"},[e(n.Z,{attrs:{elevation:"0",color:"transparent"}},[e(C.EB,[t._v("Imagem selecionada")]),e(C.h7,[e(B.Z,{staticClass:"rounded",attrs:{"lazy-src":"https://picsum.photos/id/11/10/6","max-width":"200","max-height":"200",src:t.url}})],1)],1)],1):t._e()],1)},O=[],A={name:"UploadPage",components:{},data(){return{dialog:!1,file:null,url:null}},methods:{Preview_image(){this.url=URL.createObjectURL(this.file),console.log(this.file)}}},R=A,U=(0,g.Z)(R,F,O,!1,null,"ac13f444",null),S=U.exports,T=a(9868),I=a(3333),q=a(6878),$=a(3165),D=a(6052),V=a(5838),z=function(){var t=this,e=t._self._c;return e(n.Z,{staticClass:"editor mx-auto",attrs:{width:"100%"}},[e(m.Z,{attrs:{permanent:"",color:"#F7F7F7"}},[e(c.Z,[e(u.km,[e(u.V9,{staticClass:"text-h6"},[e(s.Z,[t._v("mdi-tune")]),t._v("Filtros")],1),e(u.oZ,[t._v(" Filtro aplicado a imagem ")])],1)],1),e(i.Z),t._l(t.filterData,(function(a,o){return e("div",{key:o,staticClass:"item-list"},[e(c.Z,{attrs:{link:""},on:{click:function(e){return t.submitImage(a.name)}}},[e(d.Z,[e(s.Z,[t._v("mdi-"+t._s(a.icon))])],1),e(u.km,[e(u.V9,[t._v(t._s(a.name))])],1)],1)],1)}))],2),e(w.Z,{staticClass:"photo-layout"},[e(V.Z,{attrs:{dense:""}},[e($.Z,{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(I.Z,[t._v("Editor")]),e(I.Z,[t._v("Arquivo")])],1)],1),e(D.Z,{attrs:{width:"100%"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(q.Z,[e(n.Z,{attrs:{color:"#F7F7F7"}},[e(T.Z,{staticClass:"d-flex justify-center align-center",attrs:{color:"#F7F7F7",elevation:"0",height:"70vh",width:"100%",rounded:"true"}},[t.dataimage?e(B.Z,{staticClass:"rounded",attrs:{"lazy-src":"https://picsum.photos/id/11/10/6",src:t.dataimage,"max-height":"80%","max-width":"70%"}}):t.url?e(B.Z,{staticClass:"rounded",attrs:{"lazy-src":"https://picsum.photos/id/11/10/6",src:t.url,"max-height":"80%","max-width":"70%"}}):e(B.Z,{staticClass:"rounded",attrs:{"lazy-src":"https://picsum.photos/id/11/10/6",src:"https://picsum.photos/id/11/500/300","max-height":"70%","max-width":"50%"}})],1),e(C.h7,[t.dataimage?e(y.Z,{attrs:{block:"",dark:"",color:"#6EBE43",download:"image.jpg",href:t.dataimage}},[t._v("Salvar Imagem como PDF")]):t._e()],1)],1)],1),e(q.Z,[e(n.Z,{attrs:{elevation:"1",height:"70vh",width:"100%",rounded:"true"}},[e("div",{staticClass:"upload-tab"},[e("div",{staticClass:"button-group"},[e("div",{staticClass:"text-center"},[e(P.Z,{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:o}){return[e(y.Z,t._g(t._b({staticClass:"mb-10",attrs:{color:"#6EBE43",dark:"",large:""}},"v-btn",o,!1),a),[t._v(" Upload de Arquivo ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(n.Z,[e(C.h7,{staticClass:"grey lighten-2"},[e(j.Z),e(y.Z,{attrs:{icon:"",dark:"",color:"red"},on:{click:function(e){t.dialog=!1}}},[e(s.Z,[t._v("mdi-close")])],1)],1),e(C.EB,{staticClass:"text-h5 grey lighten-2 justify-center"},[t._v(" Upload de Imagem ")]),e(w.Z,[e(C.ZB,[t._v(" Clique no campo abaixo para procurar a imagem no seu computador ")])],1),e(i.Z),e(C.h7,[e(E.Z,{attrs:{accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"mdi-camera",label:"Avatar",solo:""},on:{change:t.Preview_image},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}},[t._v("Upload")])],1)],1)],1)],1),e(y.Z,{staticClass:"mb-10",attrs:{color:"#6EBE43",large:"",dark:""}},[t._v("Acessar Pasta")])],1),t.file?e(w.Z,{staticClass:"d-flex justify-center"},[e(n.Z,{attrs:{elevation:"0",color:"transparent"}},[e(C.EB,[t._v("Imagem selecionada")]),e(C.h7,[e(B.Z,{staticClass:"rounded",attrs:{"lazy-src":"https://picsum.photos/id/11/10/6","max-width":"200","max-height":"200",src:t.url}})],1)],1)],1):t._e()],1)])],1)],1)],1)],1)},L=[],G=a(6154),M={name:"EditorPage",components:{},data:()=>({tab:null,filterData:[{icon:"border-radius",name:"sobel"},{icon:"image-filter-tilt-shift",name:"roberts"},{icon:"image-auto-adjust",name:"lighten"},{icon:"blur",name:"blur"},{icon:"border-outside",name:"canny"}],dialog:!1,file:null,dataimage:null,url:null}),methods:{Preview_image(){this.url=URL.createObjectURL(this.file),this.dataimage=null,console.log(this.file)},submitImage(t){console.log("how");const{imageFileResponse:e}=G.Z.post("http://127.0.0.1:8000/upload?filtername="+t+"&base64_output=true",{file:this.file},{headers:{"Content-Type":"multipart/form-data"}}).then((t=>{this.dataimage=`data:image/jpeg;base64,${t.data}`}));console.log(e)}}},Q=M,H=(0,g.Z)(Q,z,L,!1,null,"9af22524",null),N=H.exports,J=a(4437),K=a(5294),W=a(5022),X=a(2059),Y=a(5251),tt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e(n.Z,{staticClass:"pa-10",attrs:{elevation:"0",width:"50%"}},[e(C.EB,[t._v("Relatório de Análise")]),e(K.Z,{attrs:{align:"center"}},[e(J.Z,{attrs:{cols:"12",md:"12"}},[e(Y.Z,{attrs:{counter:"25",filled:"",hint:"This field uses counter prop",label:"Quem está analisando as imagens?"},model:{value:t.form.save.author,callback:function(e){t.$set(t.form.save,"author",e)},expression:"form.save.author"}})],1),e(J.Z,{attrs:{cols:"12",md:"12"}},[e(W.Z,{attrs:{items:t.form.default.rating,hint:"This field uses counter prop",label:"Resultado da imagem processada",filled:""},model:{value:t.form.save.rating,callback:function(e){t.$set(t.form.save,"rating",e)},expression:"form.save.rating"}})],1),e(J.Z,{attrs:{cols:"12",md:"12"}},[e(X.Z,{attrs:{color:"#6EBE43",label:"Quantos nematoides há na imagem?",hint:"Be honest",min:"1",max:"100","thumb-label":""},model:{value:t.form.save.amount,callback:function(e){t.$set(t.form.save,"amount",e)},expression:"form.save.amount"}})],1),e(J.Z,{attrs:{cols:"12",md:"12"}},[e(W.Z,{attrs:{items:t.form.default.gender,hint:"This field uses counter prop",label:"Gêneros",filled:""},model:{value:t.form.save.gender,callback:function(e){t.$set(t.form.save,"gender",e)},expression:"form.save.gender"}})],1),e(J.Z,{attrs:{cols:"12",md:"12"}},[e(C.ZB,[t._v(t._s(t.form.save))])],1)],1),e(C.h7,[e(y.Z,{attrs:{block:"",dark:"",color:"#6EBE43"},on:{click:t.generateReport}},[t._v("Generate PDF")])],1)],1),e("div",[e("VueHtml2pdf",{ref:"html2Pdf",attrs:{"show-layout":!1,"float-layout":!0,"enable-download":!0,"preview-modal":!0,"paginate-elements-by-height":1400,filename:"myPDF","pdf-quality":2,"manual-pagination":!1,"pdf-format":"a4","pdf-orientation":"landscape","pdf-content-width":"800px"}},[e("section",{attrs:{slot:"pdf-content"},slot:"pdf-content"},[e(n.Z,{staticClass:"pa-10",attrs:{elevation:"0"}},[e(C.EB,[t._v("Relatório de Análise")]),e(C.ZB,[t._v("O presente autor dessa análise identificou que o filtro selecionado apresentou performance "+t._s(t.form.save.rating)+", Sendo possível identificar "+t._s(t.form.save.amount)+" nematoides.")]),e(C.ZB,[t._v("Foi percebido, também, o gênero "+t._s(t.form.save.gender)+".")]),e(C.ZB,[t._v("Assinado: "+t._s(t.form.save.author))])],1)],1)])],1)],1)},et=[],at=a(2074),ot={name:"ArticlePage",components:{VueHtml2pdf:at.Z},data(){return{form:{save:{author:null,amount:0,gender:null,rating:null},default:{gender:["Gênero 1","Gênero 2"],rating:["Bom","Ruim","Péssimo"]}}}},methods:{generateReport(){this.$refs.html2Pdf.generatePdf()}}},rt=ot,nt=(0,g.Z)(rt,tt,et,!1,null,"671bf620",null),it=nt.exports;o.ZP.use(x.ZP);const st=[{path:"/upload",name:"upload",component:S},{path:"/editor",name:"editor",component:N},{path:"/article",name:"article",component:it}],lt=new x.ZP({mode:"history",base:"/",routes:st});var ct=lt;o.ZP.config.productionTip=!1,new o.ZP({vuetify:k,router:ct,render:t=>t(b)}).$mount("#app")}},e={};function a(o){var r=e[o];if(void 0!==r)return r.exports;var n=e[o]={exports:{}};return t[o].call(n.exports,n,n.exports,a),n.exports}a.m=t,function(){a.amdD=function(){throw new Error("define cannot be used indirect")}}(),function(){a.amdO={}}(),function(){var t=[];a.O=function(e,o,r,n){if(!o){var i=1/0;for(u=0;u<t.length;u++){o=t[u][0],r=t[u][1],n=t[u][2];for(var s=!0,l=0;l<o.length;l++)(!1&n||i>=n)&&Object.keys(a.O).every((function(t){return a.O[t](o[l])}))?o.splice(l--,1):(s=!1,n<i&&(i=n));if(s){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[o,r,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,n,i=o[0],s=o[1],l=o[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(l)var u=l(a)}for(e&&e(o);c<i.length;c++)n=i[c],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(u)},o=self["webpackChunkfrontend2"]=self["webpackChunkfrontend2"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(7479)}));o=a.O(o)})();
//# sourceMappingURL=app.7bd6207c.js.map