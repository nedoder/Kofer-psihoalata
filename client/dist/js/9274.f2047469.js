"use strict";(self["webpackChunkkofer_psihoalata"]=self["webpackChunkkofer_psihoalata"]||[]).push([[9274],{1367:function(t,e,a){a.r(e),a.d(e,{default:function(){return v}});var n=a(344),i=a(6190),s=a(9582),r=a(4886),o=a(120),l=a(266),c=a(1625),u=a(5125),d=a(1713),g=a(7808),p=function(){var t=this,e=t._self._c;return t.currentPost?e(u.Z,{staticClass:"row text-center justify-center align-center fill-height",model:{value:t.isValid,callback:function(e){t.isValid=e},expression:"isValid"}},[e(d.Z,{attrs:{justify:"center"}},[e(l.Z,{attrs:{sm:"6"}},[e(s.Z,{staticClass:"mb-5 pb-5",attrs:{tile:""}},[e(r.ZB,{staticClass:"mb-5 pb-5"},[e(g.Z,{attrs:{filled:"",shaped:"",label:"Naziv",rules:[t=>t.length>1||"Morate unijeti naziv"]},model:{value:t.currentPost.title,callback:function(e){t.$set(t.currentPost,"title",e)},expression:"currentPost.title"}}),t.url?e("img",{attrs:{height:"100px",width:"100px",src:t.url}}):t._e(),t.url?t._e():e("img",{attrs:{height:"100px",width:"100px",right:"",src:t.$imagePath+t.currentPost.image}}),e(c.Z,{attrs:{chips:"",filled:"",shaped:"","append-icon":"mdi-camera","prepend-icon":"",label:"Slika",accept:"image/*"},on:{change:t.onFileChange},model:{value:t.image,callback:function(e){t.image=e},expression:"image"}}),e("vue-editor",{attrs:{"output-format":"html",editorToolbar:t.customToolbar},model:{value:t.currentPost.content,callback:function(e){t.$set(t.currentPost,"content",e)},expression:"currentPost.content"}}),e(n.Z,{attrs:{filled:"",shaped:"",items:t.category,disabled:t.isUpdating,"item-value":"id","item-text":"category",chips:"","deletable-chips":"",label:"Kategorija","error-messages":t.matchError()},model:{value:t.currentPost.categoryId,callback:function(e){t.$set(t.currentPost,"categoryId",e)},expression:"currentPost.categoryId"}}),e(o.Z,{attrs:{label:"Prikaži na stranici"},model:{value:t.currentPost.showPost,callback:function(e){t.$set(t.currentPost,"showPost",e)},expression:"currentPost.showPost"}}),e(i.Z,{attrs:{disabled:!t.isValid,color:"primary"},on:{click:t.onSubmit}},[t._v("Izmijeni")])],1)],1)],1)],1)],1):t._e()},h=[],f=a(2739),m=a(3304),b={components:{VueEditor:f.bR},data:()=>({category:[],currentPost:null,isValid:!0,image:[],url:null,isUpdating:!1,customToolbar:[[{header:[!1,4,5,6]}],["bold","italic","underline","strike"],[{list:"ordered"},{list:"bullet"}],[{align:""},{align:"center"},{align:"right"},{align:"justify"}],["blockquote"],["link","image"],[{color:[]},{background:[]}]]}),watch:{isUpdating(t){t&&setTimeout((()=>this.isUpdating=!1),3e3)}},methods:{onSubmit(){let t=new FormData;this.image&&t.append("image",this.image),t.append("title",this.currentPost.title),t.append("content",this.currentPost.content),t.append("categoryId",this.currentPost.categoryId),t.append("showPost",this.currentPost.showPost),m.Z.editPost(this.$route.params.id,t).then((t=>{console.log(t.data),this.$router.push({path:"/posts/"})})).catch((t=>{console.log(t)}))},getPosts(t){m.Z.getPost(t).then((t=>{this.currentPost=t.data,console.log(this.currentPost)})).catch((t=>{console.log(t)}))},getCategories(){m.Z.getCategoryList().then((t=>{this.category=t.data})).catch((t=>{console.log(t)}))},onFileChange(t){const e=t;this.url=e?URL.createObjectURL(e):null},matchError(){return null===this.currentPost.categoryId?"Morate odabrati kategoriju":""}},mounted(){this.getPosts(this.$route.params.id),this.getCategories()}},P=b,y=a(1001),k=(0,y.Z)(P,p,h,!1,null,"79e3b9f0",null),v=k.exports},1713:function(t,e,a){a(1884);var n=a(144),i=a(1767),s=a(5352);const r=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return r.reduce(((a,n)=>(a[t+(0,s.jC)(n)]=e(),a)),{})}const c=t=>[...o,"baseline","stretch"].includes(t),u=l("align",(()=>({type:String,default:null,validator:c}))),d=t=>[...o,"space-between","space-around"].includes(t),g=l("justify",(()=>({type:String,default:null,validator:d}))),p=t=>[...o,"space-between","space-around","stretch"].includes(t),h=l("alignContent",(()=>({type:String,default:null,validator:p}))),f={align:Object.keys(u),justify:Object.keys(g),alignContent:Object.keys(h)},m={align:"align",justify:"justify",alignContent:"align-content"};function b(t,e,a){let n=m[t];if(null!=a){if(e){const a=e.replace(t,"");n+=`-${a}`}return n+=`-${a}`,n.toLowerCase()}}const P=new Map;e["Z"]=n.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:d},...g,alignContent:{type:String,default:null,validator:p},...h},render(t,{props:e,data:a,children:n}){let s="";for(const i in e)s+=String(e[i]);let r=P.get(s);if(!r){let t;for(t in r=[],f)f[t].forEach((a=>{const n=e[a],i=b(t,a,n);i&&r.push(i)}));r.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),P.set(s,r)}return t(e.tag,(0,i.ZP)(a,{staticClass:"row",class:r}),n)}})}}]);
//# sourceMappingURL=9274.f2047469.js.map