"use strict";(self["webpackChunkkofer_psihoalata"]=self["webpackChunkkofer_psihoalata"]||[]).push([[1149],{1149:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var s=a(9582),o=a(4886),i=a(3863),n=a(3687),r=function(){var t=this,e=t._self._c;return e(s.Z,[e(o.EB,[e("h1",{staticClass:"display-1"},[t._v(" Lista aktivnosti ")]),e(n.Z)],1),e(o.ZB,[e(i.Z,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,"footer-props":{"items-per-page-options":[20]},options:t.options,"server-items-length":t.totalNumberOfItems,dense:""},on:{"update:options":function(e){t.options=e}}})],1)],1)},l=[],c=a(3304),p={data:()=>({items:[],dialog:!1,totalNumberOfItems:0,options:{page:1,itemsPerPage:20},headers:[{text:"Aktivnost",value:"activity",sortable:!0},{text:"Kreiran",value:"createdAt",sortable:!0}]}),watch:{options:{handler(){this.getDataFromApi()},deep:!0}},methods:{getDataFromApi(){c.Z.getActivityList(this.options.page).then((t=>{this.items=t.data.rows,this.totalNumberOfItems=t.data.count,this.items.forEach((t=>{t.createdAt=new Date(t.createdAt).toLocaleString(),t.updatedAt=new Date(t.updatedAt).toLocaleString()}))})).catch((t=>{console.log(t.response)}))}},mounted(){c.Z.getActivityList(this.options.page).then((t=>{this.items=t.data.rows,this.totalNumberOfItems=t.data.count,this.items.forEach((t=>{t.createdAt=new Date(t.createdAt).toLocaleString(),t.updatedAt=new Date(t.updatedAt).toLocaleString()}))})).catch((t=>{console.log(t.response)}))}},d=p,h=a(1001),u=(0,h.Z)(d,r,l,!1,null,null,null),m=u.exports}}]);
//# sourceMappingURL=1149.851b25c7.js.map