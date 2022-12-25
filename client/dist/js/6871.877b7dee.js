"use strict";(self["webpackChunkkofer_psihoalata"]=self["webpackChunkkofer_psihoalata"]||[]).push([[6871],{8175:function(e,s,t){t.r(s),t.d(s,{default:function(){return k}});var r=t(7359),a=t(344),n=t(6190),i=t(9582),o=t(4886),l=t(266),u=t(5125),c=t(1713),d=t(7808),p=function(){var e=this,s=e._self._c;return e.currentUser?s(u.Z,{staticClass:"row text-center justify-center align-center fill-height",model:{value:e.isValid,callback:function(s){e.isValid=s},expression:"isValid"}},[s(c.Z,{attrs:{justify:"center"}},[s(l.Z,{attrs:{sm:"6"}},[s(i.Z,{attrs:{tile:""}},[s(o.ZB,[s(d.Z,{attrs:{filled:"",shaped:"",rules:[e=>e.length>1||"Morate unijeti ime"],label:"Ime"},model:{value:e.currentUser.firstName,callback:function(s){e.$set(e.currentUser,"firstName",s)},expression:"currentUser.firstName"}}),s(d.Z,{attrs:{filled:"",shaped:"",rules:[e=>e.length>1||"Morate unijeti prezime"],label:"Prezime"},model:{value:e.currentUser.lastName,callback:function(s){e.$set(e.currentUser,"lastName",s)},expression:"currentUser.lastName"}}),s(d.Z,{attrs:{filled:"",shaped:"",rules:[e=>e.length>0||"Morate unijeti korisničko ime",e.uniqueUsername],label:"Korisničko ime"},model:{value:e.currentUser.username,callback:function(s){e.$set(e.currentUser,"username",s)},expression:"currentUser.username"}}),s(d.Z,{attrs:{filled:"",shaped:"",label:"Nova lozinka",required:"","error-messages":e.errorPassword,rules:[e=>e.length>0||"Morate unijeti lozinku"],"append-icon":e.showPass?"mdi-eye":"mdi-eye-off",type:e.showPass?"text":"password"},on:{"click:append":function(s){e.showPass=!e.showPass}},model:{value:e.newpassword,callback:function(s){e.newpassword=s},expression:"newpassword"}}),s(d.Z,{attrs:{filled:"",shaped:"",label:"Potvrdite novu lozinku",required:"",rules:[e.passwordConfirmationRule,e.cannotEmpty],"error-messages":e.errorPassword,"append-icon":e.showRePass?"mdi-eye":"mdi-eye-off",type:e.showRePass?"text":"password"},on:{"click:append":function(s){e.showRePass=!e.showRePass}},model:{value:e.rePassword,callback:function(s){e.rePassword=s},expression:"rePassword"}}),s(a.Z,{attrs:{filled:"",shaped:"",items:e.roles,"item-text":"role","item-value":"id",disabled:e.isUpdating,chips:"","deletable-chips":"",label:"Privilegije","error-messages":e.matchError()},model:{value:e.currentUser.role,callback:function(s){e.$set(e.currentUser,"role",s)},expression:"currentUser.role"}}),e.error?s(r.Z,{attrs:{type:"error"}},[e._v(" "+e._s(e.error)+" ")]):e._e(),s(n.Z,{attrs:{disabled:!e.isValid,color:"primary"},on:{click:e.onSubmit}},[e._v("Izmijeni")])],1)],1)],1)],1)],1):e._e()},h=[],m=(t(2801),t(3304)),f={data:()=>({currentUser:null,isValid:!0,isUpdating:!1,showPass:!1,showRePass:!1,errorPassword:"",newpassword:"",rePassword:"",error:"",roles:[{role:"Adinistrator",id:1},{role:"Moderator",id:0}],items:[],users:[]}),computed:{passwordConfirmationRule(){return()=>this.newpassword===this.rePassword||"Lozinke se ne poklapaju"},cannotEmpty(){return()=>""!==this.newpassword||""!==this.rePassword||"Morate unijeti lozinku"},uniqueUsername(){return()=>!1===this.users.includes(this.currentUser.username)||"Korisničko ime već postoji"}},watch:{isUpdating(e){e&&setTimeout((()=>this.isUpdating=!1),3e3)}},methods:{onSubmit(){m.Z.editUser(this.$route.params.id,{firstName:this.currentUser.firstName,lastName:this.currentUser.lastName,username:this.currentUser.username,password:this.newpassword,role:this.currentUser.role}).then((e=>{console.log(e.data);let s=decodeURIComponent(escape(atob(localStorage.getItem("token").split(".")[1]))),t=JSON.parse(s),r=t.id;parseInt(this.$route.params.id)===r?(localStorage.removeItem("token"),this.$router.push({path:"/login"})):this.$router.push({path:"/users"})})).catch((e=>{this.error=e.response.data.message,console.log(e)}))},getUsers(e){m.Z.getUser(e).then((e=>{this.currentUser=e.data,m.Z.getUserList().then((e=>{this.items=e.data,this.items.forEach((e=>{e.username!==this.currentUser.username&&this.users.push(e.username)}))})).catch((e=>{this.error=e,console.log(e.message)}))})).catch((e=>{console.log(e)}))},matchError(){return null===this.currentUser.role?"Morate unijeti privilegije":""}},mounted(){this.getUsers(this.$route.params.id)}},g=f,w=t(1001),U=(0,w.Z)(g,p,h,!1,null,"0976b992",null),k=U.exports},1713:function(e,s,t){t(1884);var r=t(144),a=t(1767),n=t(5352);const i=["sm","md","lg","xl"],o=["start","end","center"];function l(e,s){return i.reduce(((t,r)=>(t[e+(0,n.jC)(r)]=s(),t)),{})}const u=e=>[...o,"baseline","stretch"].includes(e),c=l("align",(()=>({type:String,default:null,validator:u}))),d=e=>[...o,"space-between","space-around"].includes(e),p=l("justify",(()=>({type:String,default:null,validator:d}))),h=e=>[...o,"space-between","space-around","stretch"].includes(e),m=l("alignContent",(()=>({type:String,default:null,validator:h}))),f={align:Object.keys(c),justify:Object.keys(p),alignContent:Object.keys(m)},g={align:"align",justify:"justify",alignContent:"align-content"};function w(e,s,t){let r=g[e];if(null!=t){if(s){const t=s.replace(e,"");r+=`-${t}`}return r+=`-${t}`,r.toLowerCase()}}const U=new Map;s["Z"]=r.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u},...c,justify:{type:String,default:null,validator:d},...p,alignContent:{type:String,default:null,validator:h},...m},render(e,{props:s,data:t,children:r}){let n="";for(const a in s)n+=String(s[a]);let i=U.get(n);if(!i){let e;for(e in i=[],f)f[e].forEach((t=>{const r=s[t],a=w(e,t,r);a&&i.push(a)}));i.push({"no-gutters":s.noGutters,"row--dense":s.dense,[`align-${s.align}`]:s.align,[`justify-${s.justify}`]:s.justify,[`align-content-${s.alignContent}`]:s.alignContent}),U.set(n,i)}return e(s.tag,(0,a.ZP)(t,{staticClass:"row",class:i}),r)}})}}]);
//# sourceMappingURL=6871.877b7dee.js.map