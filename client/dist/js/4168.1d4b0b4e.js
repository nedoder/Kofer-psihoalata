"use strict";(self["webpackChunkkofer_psihoalata"]=self["webpackChunkkofer_psihoalata"]||[]).push([[4168,1731,9735,4364],{9588:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var s=a(998),o=a(9582),i=a(9256),r=function(){var t=this,e=t._self._c;return e(s.Z,[e(o.Z,{attrs:{"fill-height":""}},[e(i.Z,{attrs:{fluid:""}},[e("list-posts"),e("list-comments"),e("list-answers")],1)],1)],1)},n=[],l=a(710),d=a(1235),c=a(9887),u={components:{ListPosts:l["default"],ListComments:d["default"],ListAnswers:c["default"]}},m=u,p=a(1001),h=(0,p.Z)(m,r,n,!1,null,"39e6044b",null),f=h.exports},9887:function(t,e,a){a.r(e),a.d(e,{default:function(){return b}});var s=a(6190),o=a(9582),i=a(4886),r=a(3863),n=a(4061),l=a(9223),d=a(4324),c=a(3687),u=a(7808),m=function(){var t=this,e=t._self._c;return e(o.Z,[e(i.EB,[e("h1",{staticClass:"display-1"},[t._v(" Lista odgovora ")]),e(c.Z),e(u.Z,{attrs:{"append-icon":"mdi-magnify",label:"Pretraga","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e(i.ZB,[e(r.Z,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,search:t.search,"items-per-page":20,dense:""},scopedSlots:t._u([{key:"item.edit",fn:function({item:a}){return[e(d.Z,{staticClass:"mr-2",attrs:{small:"",color:"blue"},on:{click:function(e){return t.editAnswer(a.id)}}},[t._v("mdi-pencil")])]}},{key:"item.delete",fn:function({item:a}){return[[e("div",{staticClass:"text-center"},[[e(s.Z,{attrs:{icon:""},on:{click:function(e){return t.deleteItem(a.id)}}},[e(d.Z,{attrs:{small:"",color:"red"}},[t._v("mdi-delete")])],1)]],2)]]}}],null,!0)}),e(n.Z,{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(o.Z,[e(i.EB,[t._v(" Brisanje odgovora ")]),e(i.ZB,[t._v(" Da li ste sigurni da želite da obrišete ovaj odgovor? ")]),e(l.Z),e(i.h7,[e(c.Z),e(s.Z,{attrs:{color:"info",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Odustani ")]),e(s.Z,{attrs:{color:"primary",text:""},on:{click:function(e){return t.deleteAnswers(t.id)}}},[t._v(" Obriši ")])],1)],1)],1)],1)],1)},p=[],h=a(3304),f={data:()=>({items:[],dialog:!1,headers:[{text:"Odgovor",value:"answer",sortable:!0},{text:"Autor",value:"author",sortable:!0},{text:"Post",value:"Comment.Post.title",sortable:!0},{text:"Komentar",value:"Comment.comment",sortable:!0},{text:"Odobren",value:"approved",sortable:!0},{text:"Kreiran",value:"createdAt",sortable:!0},{text:"Poslednje izmjene",value:"updatedAt",sortable:!0},{text:"Izmijeni",value:"edit",sortable:!1},{text:"Obriši",value:"delete",sortable:!1}],search:""}),methods:{editAnswer(t){this.$router.push({path:`/answer/${t}/edit`,params:{id:t}})},deleteAnswers(t){h.Z.deleteAnswer(t).then((t=>{console.log(t),window.location.reload()})).catch((t=>{console.log(t.message)}))},deleteItem(t){this.id=t,this.dialog=!0}},mounted(){h.Z.getAnswersList().then((t=>{this.items=t.data,this.items.forEach((t=>{t.createdAt=new Date(t.createdAt).toLocaleString(),t.updatedAt=new Date(t.updatedAt).toLocaleString()}))})).catch((t=>{console.log(t.response)}))}},g=f,v=a(1001),Z=(0,v.Z)(g,m,p,!1,null,null,null),b=Z.exports},1235:function(t,e,a){a.r(e),a.d(e,{default:function(){return b}});var s=a(6190),o=a(9582),i=a(4886),r=a(3863),n=a(4061),l=a(9223),d=a(4324),c=a(3687),u=a(7808),m=function(){var t=this,e=t._self._c;return e(o.Z,[e(i.EB,[e("h1",{staticClass:"display-1"},[t._v(" Lista komentara ")]),e(c.Z),e(u.Z,{attrs:{"append-icon":"mdi-magnify",label:"Pretraga","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e(i.ZB,[e(r.Z,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,search:t.search,"items-per-page":20,dense:""},scopedSlots:t._u([{key:"item.edit",fn:function({item:a}){return[e(d.Z,{staticClass:"mr-2",attrs:{small:"",color:"blue"},on:{click:function(e){return t.editComment(a.id)}}},[t._v("mdi-pencil")])]}},{key:"item.delete",fn:function({item:a}){return[[e("div",{staticClass:"text-center"},[[e(s.Z,{attrs:{icon:""},on:{click:function(e){return t.deleteItem(a.id)}}},[e(d.Z,{attrs:{small:"",color:"red"}},[t._v("mdi-delete")])],1)]],2)]]}}],null,!0)}),e(n.Z,{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(o.Z,[e(i.EB,[t._v(" Brisanje komentara ")]),e(i.ZB,[t._v(" Da li ste sigurni da želite da obrišete ovaj komentar? ")]),e(l.Z),e(i.h7,[e(c.Z),e(s.Z,{attrs:{color:"info",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Odustani ")]),e(s.Z,{attrs:{color:"primary",text:""},on:{click:function(e){return t.deleteComments(t.id)}}},[t._v(" Obriši ")])],1)],1)],1)],1)],1)},p=[],h=a(3304),f={data:()=>({items:[],dialog:!1,headers:[{text:"Komentar",value:"comment",sortable:!0},{text:"Autor",value:"author",sortable:!0},{text:"Post",value:"Post.title",sortable:!0},{text:"Odobren",value:"approved",sortable:!0},{text:"Kreiran",value:"createdAt",sortable:!0},{text:"Poslednje izmjene",value:"updatedAt",sortable:!0},{text:"Izmijeni",value:"edit",sortable:!1},{text:"Obriši",value:"delete",sortable:!1}],search:""}),methods:{editComment(t){this.$router.push({path:`/comment/${t}/edit`,params:{id:t}})},deleteComments(t){h.Z.deleteComment(t).then((t=>{console.log(t),window.location.reload()})).catch((t=>{console.log(t.message)}))},deleteItem(t){this.id=t,this.dialog=!0}},mounted(){h.Z.getCommentsList().then((t=>{this.items=t.data,this.items.forEach((t=>{t.createdAt=new Date(t.createdAt).toLocaleString(),t.updatedAt=new Date(t.updatedAt).toLocaleString()})),console.log(this.items)})).catch((t=>{console.log(t.response)}))}},g=f,v=a(1001),Z=(0,v.Z)(g,m,p,!1,null,null,null),b=Z.exports},710:function(t,e,a){a.r(e),a.d(e,{default:function(){return Z}});var s=a(6190),o=a(9582),i=a(4886),r=a(3863),n=a(4061),l=a(9223),d=a(4324),c=a(3687),u=function(){var t=this,e=t._self._c;return e(o.Z,[e(i.EB,[e("h1",{staticClass:"display-1"},[t._v(" Lista postova ")]),e(c.Z)],1),e(i.ZB,[e(r.Z,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,"footer-props":{"items-per-page-options":[20]},options:t.options,"server-items-length":t.totalNumberOfItems,dense:""},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.image",fn:function({item:a}){return[e("img",{staticStyle:{width:"50px",height:"50px","border-radius":"50%"},attrs:{src:t.$imagePath+a.image}})]}},{key:"item.show",fn:function({item:a}){return[e(d.Z,{staticClass:"mr-2",attrs:{small:"",color:"green"},on:{click:function(e){return t.showPost(a.id)}}},[t._v("mdi-eye")])]}},{key:"item.edit",fn:function({item:a}){return[e(d.Z,{staticClass:"mr-2",attrs:{small:"",color:"blue"},on:{click:function(e){return t.editPost(a.id)}}},[t._v("mdi-pencil")])]}},{key:"item.delete",fn:function({item:a}){return[[e("div",{staticClass:"text-center"},[[e(s.Z,{attrs:{icon:""},on:{click:function(e){return t.deleteItem(a.id)}}},[e(d.Z,{attrs:{small:"",color:"red"}},[t._v("mdi-delete")])],1)]],2)]]}}],null,!0)}),e(n.Z,{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(o.Z,[e(i.EB,[t._v(" Brisanje posta ")]),e(i.ZB,[t._v(" Da li ste sigurni da želite da obrišete ovaj post? ")]),e(l.Z),e(i.h7,[e(c.Z),e(s.Z,{attrs:{color:"info",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Odustani ")]),e(s.Z,{attrs:{color:"primary",text:""},on:{click:function(e){return t.deletePosts(t.id)}}},[t._v(" Obriši ")])],1)],1)],1)],1)],1)},m=[],p=a(3304),h={data:()=>({items:[],dialog:!1,totalNumberOfItems:0,options:{page:1,itemsPerPage:20},headers:[{text:"Slika",value:"image",type:"image",sortable:!1},{text:"Naslov",value:"title",align:"title",sortable:!0},{text:"Autor",value:"userId",sortable:!0},{text:"Kategorija",value:"categoryId",sortable:!0},{text:"Odobren",value:"showPost",sortable:!0},{text:"Kreiran",value:"createdAt",sortable:!0},{text:"Poslednje izmjene",value:"updatedAt",sortable:!0},{text:"Detalji",value:"show",sortable:!1},{text:"Izmijeni",value:"edit",sortable:!1},{text:"Obriši",value:"delete",sortable:!1}]}),watch:{options:{handler(){this.getDataFromApi()},deep:!0}},methods:{showPost(t){this.$router.push({path:`/post/show/${t}`,params:{id:t}})},editPost(t){this.$router.push({path:`/post/${t}/edit`,params:{id:t}})},deletePosts(t){p.Z.deletePost(t).then((t=>{console.log(t),window.location.reload()})).catch((t=>{console.log(t.message)}))},deleteItem(t){this.id=t,this.dialog=!0},getDataFromApi(){p.Z.getPostList(this.options.page).then((t=>{this.items=t.data.rows,this.totalNumberOfItems=t.data.count,this.items.forEach((t=>{t.createdAt=new Date(t.createdAt).toLocaleString(),t.updatedAt=new Date(t.updatedAt).toLocaleString(),null!==t.userId&&p.Z.getUser(t.userId).then((e=>{t.userId=e.data.username})).catch((t=>{console.log(t.response)})),null!==t.categoryId&&p.Z.getCategory(t.categoryId).then((e=>{t.categoryId=e.data.category})).catch((t=>{console.log(t.response)}))}))})).catch((t=>{console.log(t.response)}))}},mounted(){p.Z.getPostList(this.options.page).then((t=>{this.items=t.data.rows,this.totalNumberOfItems=t.data.count,this.items.forEach((t=>{t.createdAt=new Date(t.createdAt).toLocaleString(),t.updatedAt=new Date(t.updatedAt).toLocaleString(),null!==t.userId&&p.Z.getUser(t.userId).then((e=>{t.userId=e.data.username})).catch((t=>{console.log(t.response)})),null!==t.categoryId&&p.Z.getCategory(t.categoryId).then((e=>{t.categoryId=e.data.category})).catch((t=>{console.log(t.response)}))}))})).catch((t=>{console.log(t.response)}))}},f=h,g=a(1001),v=(0,g.Z)(f,u,m,!1,null,null,null),Z=v.exports},1884:function(){},998:function(t,e,a){a.d(e,{Z:function(){return i}});a(1703);var s=a(6669),o=a(7678),i=(0,o.Z)(s.Z).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(t){const e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},9256:function(t,e,a){a(9027),a(1884);var s=a(7549),o=a(1767);e["Z"]=(0,s.Z)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:a,children:s}){let i;const{attrs:r}=a;return r&&(a.attrs={},i=Object.keys(r).filter((t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(a.domProps=a.domProps||{},a.domProps.id=e.id),t(e.tag,(0,o.ZP)(a,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(i||[])}),s)}})},7549:function(t,e,a){a.d(e,{Z:function(){return o}});var s=a(144);function o(t){return s.ZP.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:a,data:s,children:o}){s.staticClass=`${t} ${s.staticClass||""}`.trim();const{attrs:i}=s;if(i){s.attrs={};const t=Object.keys(i).filter((t=>{if("slot"===t)return!1;const e=i[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(s.staticClass+=` ${t.join(" ")}`)}return a.id&&(s.domProps=s.domProps||{},s.domProps.id=a.id),e(a.tag,s,o)}})}}}]);
//# sourceMappingURL=4168.1d4b0b4e.js.map