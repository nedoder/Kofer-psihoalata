"use strict";(self["webpackChunkkofer_psihoalata"]=self["webpackChunkkofer_psihoalata"]||[]).push([[4398],{1273:function(e,t,i){i.r(t),i.d(t,{default:function(){return y}});var s=i(7359),l=i(6190),a=i(9582),n=i(4886),o=i(266),r=i(1625),h=i(5125),c=i(7808),u=function(){var e=this,t=e._self._c;return t(h.Z,{staticClass:"row text-center justify-center align-center fill-height",model:{value:e.isValid,callback:function(t){e.isValid=t},expression:"isValid"}},[t(o.Z,{attrs:{sm:"6"}},[t(a.Z,{attrs:{tile:""}},[t(n.EB,[e._v("Kreiranje kategorije")]),t(n.ZB,[e.url?t("img",{attrs:{height:"100px",width:"100px",src:e.url}}):e._e(),t(r.Z,{attrs:{filled:"",shaped:"",chips:"","prepend-icon":"","append-icon":"mdi-camera",label:"Slika",rules:[e=>!!e||"Slika je obavezna"],accept:"image/*",required:""},on:{change:e.onFileChange},model:{value:e.image,callback:function(t){e.image=t},expression:"image"}}),t(c.Z,{attrs:{filled:"",shaped:"",label:"Naziv",rules:[e=>e.length>1||"Morate unijeti naziv kategorije"]},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}}),e.error?t(s.Z,{attrs:{type:"error"}},[e._v(" "+e._s(e.error)+" ")]):e._e(),t(l.Z,{attrs:{disabled:!e.isValid,color:"primary"},on:{click:e.onSubmit}},[e._v("Kreiraj")])],1)],1)],1)],1)},p=[],d=i(3304),g={data:()=>({isValid:!0,image:null,category:"",isUpdating:!1,error:"",url:""}),watch:{isUpdating(e){e&&setTimeout((()=>this.isUpdating=!1),3e3)}},methods:{onSubmit(){let e=new FormData;this.image&&e.append("image",this.image,this.image.name),e.append("category",this.category),d.Z.newCategory(e).then((e=>{console.log(e),this.$router.push({path:"/category/"})})).catch((e=>{this.error=e.response.data.error,console.log(e.message)}))},onFileChange(e){this.image=e,console.log(e)}}},f=g,m=i(1001),v=(0,m.Z)(f,u,p,!1,null,"58c74ae4",null),y=v.exports},4127:function(e,t,i){i.d(t,{Z:function(){return d}});var s=i(7678),l=i(7394),a=i(2240),n=i(6878),o=i(3037),r=i(6669),h=i(1444),c=i(8860),u=i(4338),p=i(4101),d=(0,s.Z)(n.Z,u.Z,c.Z,r.Z,(0,o.d)("chipGroup"),(0,h.d)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...c.Z.options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(c.Z.options.computed.isClickable.call(this)||this.chipGroup)}},created(){const e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((([e,t])=>{this.$attrs.hasOwnProperty(e)&&(0,p.fK)(e,t,this)}))},methods:{click(e){this.$emit("click",e),this.chipGroup&&this.toggle()},genFilter(){const e=[];return this.isActive&&e.push(this.$createElement(a.Z,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l.Zq,e)},genClose(){return this.$createElement(a.Z,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:e=>{e.stopPropagation(),e.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(e){const t=[this.genContent()];let{tag:i,data:s}=this.generateRouteLink();s.attrs={...s.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex},s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);const l=this.textColor||this.outlined&&this.color;return e(i,this.setTextColor(l,s),t)}})},1625:function(e,t,i){i.d(t,{Z:function(){return h}});var s=i(7808),l=s.Z,a=i(4127),n=i(5352),o=i(4101),r=i(1767),h=l.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:e=>"boolean"===typeof e||[1e3,1024].includes(e)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:e=>(0,n.TI)(e).every((e=>null!=e&&"object"===typeof e))}},computed:{classes(){return{...l.options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const e=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,e);const t=this.internalArrayValue.reduce(((e,{size:t=0})=>e+t),0);return this.$vuetify.lang.t(this.counterSizeString,e,(0,n.XE)(t,1024===this.base))},internalArrayValue(){return(0,n.TI)(this.internalValue)},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},text(){return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((e=>{const{name:t="",size:i=0}=e,s=this.truncateText(t);return this.showSize?`${s} (${(0,n.XE)(i,1024===this.base)})`:s})):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(e){!0===e&&(0,o.N6)("readonly is not supported on <v-file-input>",this)},immediate:!0},value(e){const t=this.multiple?e:e?[e]:[];(0,n.vZ)(t,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map(((e,t)=>this.$createElement(a.Z,{props:{small:this.smallChips},on:{"click:close":()=>{const e=this.internalValue;e.splice(t,1),this.internalValue=e}}},[e]))):[]},genControl(){const e=l.options.methods.genControl.call(this);return this.hideInput&&(e.data.style=(0,r.y0)(e.data.style,{display:"none"})),e},genInput(){const e=l.options.methods.genInput.call(this);return e.data.attrs.multiple=this.multiple,delete e.data.domProps.value,delete e.data.on.input,e.data.on.change=this.onInput,[this.genSelections(),e]},genPrependSlot(){if(!this.prependIcon)return null;const e=this.genIcon("prepend",(()=>{this.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText(){const e=this.text.length;return e<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,e)]},genSelections(){const e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach(((t,i)=>{this.$scopedSlots.selection&&e.push(this.$scopedSlots.selection({text:this.text[i],file:t,index:i}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot(){const e=l.options.methods.genTextFieldSlot.call(this);return e.data.on={...e.data.on||{},click:()=>this.$refs.input.click()},e},onInput(e){const t=[...e.target.files||[]];this.internalValue=this.multiple?t:t[0],this.initialValue=this.internalValue},onKeyDown(e){this.$emit("keydown",e)},truncateText(e){if(e.length<Number(this.truncateLength))return e;const t=Math.floor((Number(this.truncateLength)-1)/2);return`${e.slice(0,t)}…${e.slice(e.length-t)}`}}})}}]);
//# sourceMappingURL=4398.f32f0df7.js.map