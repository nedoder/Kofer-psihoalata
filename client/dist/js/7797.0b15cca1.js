"use strict";(self["webpackChunkkofer_psihoalata"]=self["webpackChunkkofer_psihoalata"]||[]).push([[7797],{7797:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var i=a(344),o=a(6190),l=a(9582),s=a(4886),r=a(266),n=a(1625),c=a(5125),d=a(7808),u=function(){var e=this,t=e._self._c;return t(c.Z,{staticClass:"row text-center justify-center align-center fill-height",model:{value:e.isValid,callback:function(t){e.isValid=t},expression:"isValid"}},[t(r.Z,{attrs:{sm:"6"}},[t(l.Z,{attrs:{tile:""}},[t(s.EB,[e._v("Kreiranje posta")]),t(s.ZB,[t(d.Z,{attrs:{filled:"",shaped:"",label:"Naslov",rules:[e=>e.length>1||"Morate unijeti naziv"]},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),e.url?t("img",{attrs:{height:"100px",width:"100px",src:e.url}}):e._e(),t(n.Z,{attrs:{filled:"",shaped:"",chips:"","prepend-icon":"","append-icon":"mdi-camera",label:"Slika",rules:[e=>!!e||"Slika je obavezna"],accept:"image/*",required:""},on:{change:e.onFileChange},model:{value:e.image,callback:function(t){e.image=t},expression:"image"}}),t("vue-editor",{attrs:{"output-format":"html",editorToolbar:e.customToolbar},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),t(i.Z,{attrs:{filled:"",shaped:"",items:e.category,"item-text":"category","item-value":"id",disabled:e.isUpdating,chips:"","deletable-chips":"",label:"Kategorija","error-messages":e.matchError()},model:{value:e.categories,callback:function(t){e.categories=t},expression:"categories"}}),t(o.Z,{attrs:{disabled:!e.isValid,color:"primary"},on:{click:e.onSubmit}},[e._v("Kreiraj")])],1)],1)],1)],1)},g=[],h=(a(2801),a(2739)),p=a(3304),m={name:"CreatePost",components:{VueEditor:h.bR},data:()=>({content:"",title:"",categories:[],category:[],image:null,url:"",author:null,isValid:!0,isUpdating:!1,customToolbar:[[{header:[!1,2,3,4,5,6]}],["bold","italic","underline","strike"],[{list:"ordered"},{list:"bullet"}],[{align:""},{align:"center"},{align:"right"},{align:"justify"}],["blockquote"],["link","image"],[{color:[]},{background:[]}]]}),watch:{isUpdating(e){e&&setTimeout((()=>this.isUpdating=!1),3e3)}},methods:{onSubmit(){let e=new FormData;this.image&&e.append("image",this.image,this.image.name),this.categories&&e.append("categoryId",this.categories),e.append("title",this.title),e.append("content",this.content),e.append("userId",this.author),p.Z.newPost(e).then((e=>{console.log(e),this.$router.push({path:"/posts/"})})).catch((e=>{console.log(e.message)}))},onFileChange(e){this.image=e,console.log(e)},remove(e){const t=this.categories.indexOf(e.id);t>=0&&this.categories.splice(t,1)},matchError(){return null===this.categories?"Morate odabrati kategoriju":""}},mounted(){p.Z.getCategoryList().then((e=>{this.category=e.data})).catch((e=>{console.log(e.response)}));let e=JSON.parse(atob(localStorage.getItem("token").split(".")[1]));this.author=e.id}},b=m,f=a(1001),k=(0,f.Z)(b,u,g,!1,null,"b545a9e8",null),v=k.exports}}]);
//# sourceMappingURL=7797.0b15cca1.js.map