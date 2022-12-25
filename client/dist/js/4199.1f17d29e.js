"use strict";(self["webpackChunkkofer_psihoalata"]=self["webpackChunkkofer_psihoalata"]||[]).push([[4199],{4199:function(t,e,i){i.r(e),i.d(e,{default:function(){return y}});var a=i(344),s=i(6190),r=i(9582),o=i(4886),l=i(266),n=i(1625),c=i(5125),d=i(7808),u=function(){var t=this,e=t._self._c;return e(c.Z,{staticClass:"row text-center justify-center align-center fill-height",model:{value:t.isValid,callback:function(e){t.isValid=e},expression:"isValid"}},[e(l.Z,{attrs:{sm:"6"}},[e(r.Z,{staticClass:"mb-5 pb-5",attrs:{tile:""}},[e(o.EB,[t._v("Kreiranje posta")]),e(o.ZB,{staticClass:"mb-5 pb-5"},[e(d.Z,{attrs:{filled:"",shaped:"",label:"Naslov",rules:[t=>t.length>1||"Morate unijeti naziv"]},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t.url?e("img",{attrs:{height:"100px",width:"100px",src:t.url}}):t._e(),e(n.Z,{attrs:{filled:"",shaped:"",chips:"","prepend-icon":"","append-icon":"mdi-camera",label:"Slika",rules:[t=>!!t||"Slika je obavezna"],accept:"image/*",required:""},on:{change:t.onFileChange},model:{value:t.image,callback:function(e){t.image=e},expression:"image"}}),e("vue-editor",{attrs:{"output-format":"html",editorToolbar:t.customToolbar},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),e(a.Z,{attrs:{filled:"",shaped:"",items:t.category,"item-text":"category","item-value":"id",disabled:t.isUpdating,chips:"","deletable-chips":"",label:"Kategorija","error-messages":t.matchError()},model:{value:t.categories,callback:function(e){t.categories=e},expression:"categories"}}),e(s.Z,{attrs:{disabled:!t.isValid,color:"primary"},on:{click:t.onSubmit}},[t._v("Kreiraj")])],1)],1)],1)],1)},h=[],p=(i(2801),i(2739)),g=i(3304),f={name:"CreatePost",components:{VueEditor:p.bR},data:()=>({content:"",title:"",categories:[],category:[],image:null,url:"",show:!1,author:null,isValid:!0,isUpdating:!1,customToolbar:[[{header:[!1,4,5,6]}],["bold","italic","underline","strike"],[{list:"ordered"},{list:"bullet"}],[{align:""},{align:"center"},{align:"right"},{align:"justify"}],["blockquote"],["link","image"],[{color:[]},{background:[]}]]}),watch:{isUpdating(t){t&&setTimeout((()=>this.isUpdating=!1),3e3)}},methods:{onSubmit(){let t=new FormData;this.image&&t.append("image",this.image,this.image.name),this.categories&&t.append("categoryId",this.categories),t.append("title",this.title),t.append("content",this.content),t.append("userId",this.author),t.append("showPost",this.show),g.Z.newPost(t).then((t=>{console.log(t),this.$router.push({path:"/posts/"})})).catch((t=>{console.log(t.message)}))},onFileChange(t){this.image=t,console.log(t)},remove(t){const e=this.categories.indexOf(t.id);e>=0&&this.categories.splice(e,1)},matchError(){return null===this.categories?"Morate odabrati kategoriju":""}},mounted(){g.Z.getCategoryList().then((t=>{this.category=t.data})).catch((t=>{console.log(t.response)}));let t=JSON.parse(atob(localStorage.getItem("token").split(".")[1]));this.author=t.id}},m=f,b=i(1001),v=(0,b.Z)(m,u,h,!1,null,"46c5964d",null),y=v.exports},1884:function(){},5125:function(t,e,i){var a=i(7678),s=i(2500),r=i(4712);e["Z"]=(0,a.Z)(s.Z,(0,r.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(a=>{a&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))})):i.valid=e(t),i},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const i=this.watchers.find((t=>t._uid===e._uid));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},266:function(t,e,i){i(1884);var a=i(144),s=i(1767),r=i(5352);const o=["sm","md","lg","xl"],l=(()=>o.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),n=(()=>o.reduce(((t,e)=>(t["offset"+(0,r.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c=(()=>o.reduce(((t,e)=>(t["order"+(0,r.jC)(e)]={type:[String,Number],default:null},t)),{}))(),d={col:Object.keys(l),offset:Object.keys(n),order:Object.keys(c)};function u(t,e,i){let a=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");a+=`-${i}`}return"col"!==t||""!==i&&!0!==i?(a+=`-${i}`,a.toLowerCase()):a.toLowerCase()}}const h=new Map;e["Z"]=a.ZP.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...l,offset:{type:[String,Number],default:null},...n,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:a,parent:r}){let o="";for(const s in e)o+=String(e[s]);let l=h.get(o);if(!l){let t;for(t in l=[],d)d[t].forEach((i=>{const a=e[i],s=u(t,i,a);s&&l.push(s)}));const i=l.some((t=>t.startsWith("col-")));l.push({col:!i||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),h.set(o,l)}return t(e.tag,(0,s.ZP)(i,{class:l}),a)}})}}]);
//# sourceMappingURL=4199.1f17d29e.js.map