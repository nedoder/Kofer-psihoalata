"use strict";(self["webpackChunkkofer_psihoalata"]=self["webpackChunkkofer_psihoalata"]||[]).push([[9926],{4029:function(t,e,a){a.r(e),a.d(e,{default:function(){return v}});var s=a(6190),r=a(9582),n=a(4886),o=a(120),i=a(266),l=a(5125),u=a(6072),c=function(){var t=this,e=t._self._c;return t.currentAnswer?e(l.Z,{staticClass:"row text-center justify-center align-center fill-height",model:{value:t.isValid,callback:function(e){t.isValid=e},expression:"isValid"}},[e(i.Z,{attrs:{sm:"6"}},[e(r.Z,{attrs:{tile:""}},[e(n.EB,[t._v("Izmjena odgovora")]),e(n.ZB,[e(u.Z,{attrs:{filled:"",shaped:"",rules:[t=>t.length>1||"Morate unijeti odgovor"],label:"Odgovor"},model:{value:t.currentAnswer.answer,callback:function(e){t.$set(t.currentAnswer,"answer",e)},expression:"currentAnswer.answer"}}),e(o.Z,{attrs:{label:"Prikaži na stranici"},model:{value:t.currentAnswer.approved,callback:function(e){t.$set(t.currentAnswer,"approved",e)},expression:"currentAnswer.approved"}}),e(s.Z,{attrs:{disabled:!t.isValid,color:"primary"},on:{click:t.onSubmit}},[t._v("Izmijeni")])],1)],1)],1)],1):t._e()},h=[],p=a(3304),d={data:()=>({currentAnswer:null,isValid:!0,isUpdating:!1}),watch:{isUpdating(t){t&&setTimeout((()=>this.isUpdating=!1),3e3)}},methods:{onSubmit(){p.Z.editAnswer(this.$route.params.id,{answer:this.currentAnswer.answer,approved:this.currentAnswer.approved}).then((t=>{console.log(t.data),this.$router.push({path:"/answers/"})})).catch((t=>{console.log(t)}))},getAnswers(t){p.Z.getAnswer(t).then((t=>{this.currentAnswer=t.data})).catch((t=>{console.log(t)}))}},mounted(){this.getAnswers(this.$route.params.id)}},w=d,g=a(1001),m=(0,g.Z)(w,c,h,!1,null,"60484f1e",null),v=m.exports},6072:function(t,e,a){a.d(e,{Z:function(){return o}});var s=a(7808),r=a(7678);const n=(0,r.Z)(s.Z);var o=n.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...s.Z.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick((()=>{var e;t?this.calculateInputHeight():null===(e=this.$refs.input)||void 0===e||e.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"},genInput(){const t=s.Z.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){s.Z.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},6174:function(t,e,a){var s=a(144),r=a(5352);e["Z"]=s.ZP.extend({name:"comparable",props:{valueComparator:{type:Function,default:r.vZ}}})}}]);
//# sourceMappingURL=9926.f342c86c.js.map