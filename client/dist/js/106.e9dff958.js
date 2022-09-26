"use strict";(self["webpackChunkkofer_psihoalata"]=self["webpackChunkkofer_psihoalata"]||[]).push([[106],{8106:function(t,e,i){i.r(e),i.d(e,{default:function(){return g}});var s=i(6190),o=i(9582),n=i(4886),a=i(3863),l=i(4061),r=i(9223),c=i(4324),d=i(3687),h=function(){var t=this,e=t._self._c;return e(o.Z,[e(n.EB,[e("h1",{staticClass:"display-1"},[t._v(" Lista institucija ")]),e(d.Z)],1),e(n.ZB,[e(a.Z,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,"footer-props":{"items-per-page-options":[20]},options:t.options,"server-items-length":t.totalNumberOfItems,dense:""},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.edit",fn:function({item:i}){return[e(c.Z,{staticClass:"mr-2",attrs:{small:"",color:"blue"},on:{click:function(e){return t.editInstitution(i.id)}}},[t._v("mdi-pencil")])]}},{key:"item.delete",fn:function({item:i}){return[[e("div",{staticClass:"text-center"},[[e(s.Z,{attrs:{icon:""},on:{click:function(e){return t.deleteItem(i.id)}}},[e(c.Z,{attrs:{small:"",color:"red"}},[t._v("mdi-delete")])],1)]],2)]]}}],null,!0)}),e(l.Z,{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(o.Z,[e(n.EB,[t._v(" Brisanje institucija ")]),e(n.ZB,[t._v(" Da li ste sigurni da želite da obrišete ovu instituciju? ")]),e(r.Z),e(n.h7,[e(d.Z),e(s.Z,{attrs:{color:"info",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Odustani ")]),e(s.Z,{attrs:{color:"primary",text:""},on:{click:function(e){return t.deleteInstitutions(t.id)}}},[t._v(" Obriši ")])],1)],1)],1)],1)],1)},u=[],v=i(3304),m={data:()=>({items:[],dialog:!1,totalNumberOfItems:0,options:{page:1,itemsPerPage:20},headers:[{text:"Naziv",value:"name",sortable:!0},{text:"Zanimanje",value:"profession",sortable:!0},{text:"Kontakt",value:"phone",sortable:!0},{text:"Email",value:"mail",sortable:!0},{text:"Lokacija",value:"location",sortable:!0},{text:"Izmijeni",value:"edit",sortable:!1},{text:"Obriši",value:"delete",sortable:!1}]}),watch:{options:{handler(){this.getDataFromApi()},deep:!0}},methods:{editInstitution(t){this.$router.push({path:`/institution/${t}/edit`,params:{id:t}})},deleteInstitutions(t){v.Z.deleteInstitution(t).then((t=>{console.log(t),window.location.reload()})).catch((t=>{console.log(t.message)}))},deleteItem(t){this.id=t,this.dialog=!0},getDataFromApi(){v.Z.getInstitutionList(this.options.page).then((t=>{this.items=t.data.rows,this.totalNumberOfItems=t.data.count,this.items.forEach((t=>{t.createdAt=new Date(t.createdAt).toLocaleString(),t.updatedAt=new Date(t.updatedAt).toLocaleString()}))})).catch((t=>{console.log(t.response)}))}},mounted(){v.Z.getInstitutionList(this.options.page).then((t=>{this.items=t.data.rows,this.totalNumberOfItems=t.data.count,this.items.forEach((t=>{t.createdAt=new Date(t.createdAt).toLocaleString(),t.updatedAt=new Date(t.updatedAt).toLocaleString()}))})).catch((t=>{console.log(t.response)}))}},p=m,y=i(1001),f=(0,y.Z)(p,h,u,!1,null,"0f02a41e",null),g=f.exports},4061:function(t,e,i){i.d(e,{Z:function(){return p}});var s=i(920),o=i(1452),n=i(908),a=i(2694),l=i(9351),r=i(6401),c=i(8472),d=i(5942),h=i(7678),u=i(4101),v=i(5352);const m=(0,h.Z)(n.Z,a.Z,l.Z,r.Z,c.Z,o.Z);var p=m.extend({name:"v-dialog",directives:{ClickOutside:d.Z},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(e=this.previousActiveElement)||void 0===e||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,u.Jk)("full-width",this)},beforeMount(){this.$nextTick((()=>{this.isBooted=this.isActive,this.isActive&&this.show()}))},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick((()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout((()=>this.animate=!1),150)}))},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):l.Z.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((()=>{this.$nextTick((()=>{var t,e;(null===(t=this.$refs.dialog)||void 0===t?void 0:t.contains(document.activeElement))||(this.previousActiveElement=document.activeElement,null===(e=this.$refs.dialog)||void 0===e||e.focus()),this.bind()}))}))},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===v.Do.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick((()=>t&&t.focus()))}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((t=>t.contains(e)))){const t=this.$refs.dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find((t=>!t.hasAttribute("disabled")));e&&e.focus()}},genContent(){return this.showLazyContent((()=>[this.$createElement(s.Z,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])]))},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:(0,v.kb)(this.maxWidth),width:(0,v.kb)(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},9351:function(t,e,i){i.d(e,{Z:function(){return h}});var s=i(6878),o=i(6669),n=i(1444),a=i(7678),l=(0,a.Z)(s.Z,o.Z,n.Z).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),r=l,c=i(5352),d=i(144),h=d.ZP.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{animationFrame:0,overlay:null}},watch:{hideOverlay(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const t=new r({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();const e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=(0,c.KK)(this.$el)),this.overlay.value=!0)})),!0},removeOverlay(t=!0){this.overlay&&((0,c.qh)(this.overlay.$el,"transitionend",(()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener(t){if("key"in t){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;const e=[c.Do.up,c.Do.pageup],i=[c.Do.down,c.Do.pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll(t,e){if(t.hasAttribute("data-app"))return!1;const i=e.shiftKey||e.deltaX?"x":"y",s="y"===i?e.deltaY:e.deltaX||e.deltaY;let o,n;"y"===i?(o=0===t.scrollTop,n=t.scrollTop+t.clientHeight===t.scrollHeight):(o=0===t.scrollLeft,n=t.scrollLeft+t.clientWidth===t.scrollWidth);const a=s<0,l=s>0;return!(o||!a)||(!(n||!l)||!(!o&&!n)&&this.shouldScroll(t.parentNode,e))},isInside(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath(t){const e=(0,c.iZ)(t);if("keydown"===t.type&&e[0]===document.body){const e=this.$refs.dialog,i=window.getSelection().anchorNode;return!(e&&this.hasScrollbar(e)&&this.isInside(i,e))||!this.shouldScroll(e,t)}for(let i=0;i<e.length;i++){const s=e[i];if(s===document)return!0;if(s===document.documentElement)return!0;if(s===this.$refs.content)return!0;if(this.hasScrollbar(s))return!this.shouldScroll(s,t)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):((0,c.lj)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})}}]);
//# sourceMappingURL=106.e9dff958.js.map