"use strict";(self["webpackChunkkofer_psihoalata"]=self["webpackChunkkofer_psihoalata"]||[]).push([[4520],{1671:function(t,s,a){a.r(s),a.d(s,{default:function(){return _}});var i=function(){var t=this,s=t._self._c;return s("div",[s("header-component"),!1===t.loading?s("div",{staticClass:"support-page"},[s("h3",[t._v("Institucije")]),s("div",{staticClass:"support-wrap"},t._l(t.items,(function(t){return s("div",{key:t.id,staticClass:"support-card"},[s("support-card",{attrs:{items:t}})],1)})),0)]):t._e(),!1===t.loading&&t.totalPages>1?s("div",{staticClass:"pagination-wrap"},[s("ul",{staticClass:"pagination"},t._l(t.totalPages,(function(a){return s("li",{key:a},[s("a",{class:{activePagination:t.active_el==a},attrs:{href:"#"},on:{click:t.loadInstitutions}},[t._v(t._s(a))])])})),0)]):t._e(),!0===t.loading?s("div",{staticClass:"loading-support"},[s("img",{attrs:{src:a(2771),alt:"Loading cards"}})]):t._e(),s("footer-component")],1)},e=[],n=a(3304),o=a(6439),l=a(2485),r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"single-support"},[s("div",{staticClass:"single-institution"},[s("div",{staticClass:"single-institution-header"},[s("p",[t._v(t._s(t.items.name))]),s("p",[t._v(t._s(t.items.proffesion))]),s("p",[s("font-awesome-icon",{attrs:{icon:"location-dot"}}),t._v(t._s(t.items.location))],1)]),s("div",{staticClass:"single-institution-footer"},[s("a",{attrs:{href:"tel: "+t.items.phone,"aria-label":"Phone"}},[s("font-awesome-icon",{attrs:{icon:"phone"}})],1),s("a",{attrs:{href:"mailto: "+t.items.mail,"aria-label":"Mail"}},[s("font-awesome-icon",{attrs:{icon:"envelope"}})],1)])])])},c=[],u={name:"SupportCard",props:["items"]},p=u,d=a(1001),g=(0,d.Z)(p,r,c,!1,null,null,null),h=g.exports,m={name:"SupportPage",components:{HeaderComponent:o.Z,SupportCard:h,FooterComponent:l.Z},data:()=>({items:[],loading:!1,currentPage:1,itemsPerPage:20,resultCount:0,active_el:1}),computed:{totalPages:function(){return Math.ceil(this.resultCount/this.itemsPerPage)}},methods:{loadInstitutions(t){this.loading=!0,this.active_el=t.currentTarget.innerHTML,n.Z.getInstitutionList(t.currentTarget.innerHTML).then((t=>{this.items=t.data.rows,this.resultCount=t.data.count,console.log(t.data)})).catch((t=>{console.log(t.response)})).finally((()=>this.loading=!1))}},mounted(){this.loading=!0,n.Z.getInstitutionList(this.currentPage).then((t=>{this.items=t.data.rows,this.resultCount=t.data.count,console.log(t.data)})).catch((t=>{console.log(t.response)})).finally((()=>this.loading=!1))}},f=m,v=(0,d.Z)(f,i,e,!1,null,null,null),_=v.exports},2771:function(t,s,a){t.exports=a.p+"img/loading.4344ab10.webp"}}]);
//# sourceMappingURL=4520.f2a2c828.js.map