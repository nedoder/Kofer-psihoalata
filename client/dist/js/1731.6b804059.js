"use strict";(self["webpackChunkkofer_psihoalata"]=self["webpackChunkkofer_psihoalata"]||[]).push([[1731],{710:function(t,e,o){o.r(e),o.d(e,{default:function(){return b}});var a=o(6190),s=o(9582),i=o(4886),r=o(3863),l=o(4061),n=o(9223),d=o(4324),c=o(3687),u=function(){var t=this,e=t._self._c;return e(s.Z,[e(i.EB,[e("h1",{staticClass:"display-1"},[t._v(" Lista postova ")]),e(c.Z)],1),e(i.ZB,[e(r.Z,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,"footer-props":{"items-per-page-options":[20]},options:t.options,"server-items-length":t.totalNumberOfItems,dense:""},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.image",fn:function({item:o}){return[e("img",{staticStyle:{width:"50px",height:"50px","border-radius":"50%"},attrs:{src:t.$imagePath+o.image}})]}},{key:"item.show",fn:function({item:o}){return[e(d.Z,{staticClass:"mr-2",attrs:{small:"",color:"green"},on:{click:function(e){return t.showPost(o.id)}}},[t._v("mdi-eye")])]}},{key:"item.edit",fn:function({item:o}){return[e(d.Z,{staticClass:"mr-2",attrs:{small:"",color:"blue"},on:{click:function(e){return t.editPost(o.id)}}},[t._v("mdi-pencil")])]}},{key:"item.delete",fn:function({item:o}){return[[e("div",{staticClass:"text-center"},[[e(a.Z,{attrs:{icon:""},on:{click:function(e){return t.deleteItem(o.id)}}},[e(d.Z,{attrs:{small:"",color:"red"}},[t._v("mdi-delete")])],1)]],2)]]}}],null,!0)}),e(l.Z,{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(s.Z,[e(i.EB,[t._v(" Brisanje posta ")]),e(i.ZB,[t._v(" Da li ste sigurni da želite da obrišete ovaj post? ")]),e(n.Z),e(i.h7,[e(c.Z),e(a.Z,{attrs:{color:"info",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Odustani ")]),e(a.Z,{attrs:{color:"primary",text:""},on:{click:function(e){return t.deletePosts(t.id)}}},[t._v(" Obriši ")])],1)],1)],1)],1)],1)},h=[],p=o(3304),g={data:()=>({items:[],dialog:!1,totalNumberOfItems:0,options:{page:1,itemsPerPage:20},headers:[{text:"Slika",value:"image",type:"image",sortable:!1},{text:"Naslov",value:"title",align:"title",sortable:!0},{text:"Autor",value:"userId",sortable:!0},{text:"Kategorija",value:"categoryId",sortable:!0},{text:"Odobren",value:"showPost",sortable:!0},{text:"Kreiran",value:"createdAt",sortable:!0},{text:"Poslednje izmjene",value:"updatedAt",sortable:!0},{text:"Detalji",value:"show",sortable:!1},{text:"Izmijeni",value:"edit",sortable:!1},{text:"Obriši",value:"delete",sortable:!1}]}),watch:{options:{handler(){this.getDataFromApi()},deep:!0}},methods:{showPost(t){this.$router.push({path:`/post/show/${t}`,params:{id:t}})},editPost(t){this.$router.push({path:`/post/${t}/edit`,params:{id:t}})},deletePosts(t){p.Z.deletePost(t).then((t=>{console.log(t),window.location.reload()})).catch((t=>{console.log(t.message)}))},deleteItem(t){this.id=t,this.dialog=!0},getDataFromApi(){p.Z.getPostList(this.options.page).then((t=>{this.items=t.data.rows,this.totalNumberOfItems=t.data.count,this.items.forEach((t=>{t.createdAt=new Date(t.createdAt).toLocaleString(),t.updatedAt=new Date(t.updatedAt).toLocaleString(),null!==t.userId&&p.Z.getUser(t.userId).then((e=>{t.userId=e.data.username})).catch((t=>{console.log(t.response)})),null!==t.categoryId&&p.Z.getCategory(t.categoryId).then((e=>{t.categoryId=e.data.category})).catch((t=>{console.log(t.response)}))}))})).catch((t=>{console.log(t.response)}))}},mounted(){p.Z.getPostList(this.options.page).then((t=>{this.items=t.data.rows,this.totalNumberOfItems=t.data.count,this.items.forEach((t=>{t.createdAt=new Date(t.createdAt).toLocaleString(),t.updatedAt=new Date(t.updatedAt).toLocaleString(),null!==t.userId&&p.Z.getUser(t.userId).then((e=>{t.userId=e.data.username})).catch((t=>{console.log(t.response)})),null!==t.categoryId&&p.Z.getCategory(t.categoryId).then((e=>{t.categoryId=e.data.category})).catch((t=>{console.log(t.response)}))}))})).catch((t=>{console.log(t.response)}))}},m=g,f=o(1001),v=(0,f.Z)(m,u,h,!1,null,null,null),b=v.exports}}]);
//# sourceMappingURL=1731.6b804059.js.map