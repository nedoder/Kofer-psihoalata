"use strict";(self["webpackChunkkofer_psihoalata"]=self["webpackChunkkofer_psihoalata"]||[]).push([[8981],{2205:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var o=a(6190),n=a(9582),s=a(4886),i=a(120),r=a(266),l=a(5125),u=a(6072),c=function(){var t=this,e=t._self._c;return t.currentComment?e(l.Z,{staticClass:"row text-center justify-center align-center fill-height",model:{value:t.isValid,callback:function(e){t.isValid=e},expression:"isValid"}},[e(r.Z,{attrs:{sm:"6"}},[e(n.Z,{attrs:{tile:""}},[e(s.EB,[t._v("Izmjena komentara")]),e(s.ZB,[e(u.Z,{attrs:{filled:"",shaped:"",rules:[t=>t.length>1||"Morate unijeti komentar"],label:"Komentar"},model:{value:t.currentComment.comment,callback:function(e){t.$set(t.currentComment,"comment",e)},expression:"currentComment.comment"}}),e(i.Z,{attrs:{label:"Prikaži na stranici"},model:{value:t.currentComment.approved,callback:function(e){t.$set(t.currentComment,"approved",e)},expression:"currentComment.approved"}}),e(o.Z,{attrs:{disabled:!t.isValid,color:"primary"},on:{click:t.onSubmit}},[t._v("Izmijeni")])],1)],1)],1)],1):t._e()},m=[],h=a(3304),p={data:()=>({currentComment:null,isValid:!0,isUpdating:!1}),watch:{isUpdating(t){t&&setTimeout((()=>this.isUpdating=!1),3e3)}},methods:{onSubmit(){h.Z.editComment(this.$route.params.id,{comment:this.currentComment.comment,approved:this.currentComment.approved}).then((t=>{console.log(t.data),this.$router.push({path:"/comments/"})})).catch((t=>{console.log(t)}))},getComments(t){h.Z.getComment(t).then((t=>{this.currentComment=t.data})).catch((t=>{console.log(t)}))}},mounted(){this.getComments(this.$route.params.id)}},d=p,g=a(1001),v=(0,g.Z)(d,c,m,!1,null,"e80d171c",null),f=v.exports},6072:function(t,e,a){a.d(e,{Z:function(){return i}});var o=a(7808),n=a(7678);const s=(0,n.Z)(o.Z);var i=s.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...o.Z.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick((()=>{var e;t?this.calculateInputHeight():null===(e=this.$refs.input)||void 0===e||e.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"},genInput(){const t=o.Z.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){o.Z.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},6174:function(t,e,a){var o=a(144),n=a(5352);e["Z"]=o.ZP.extend({name:"comparable",props:{valueComparator:{type:Function,default:n.vZ}}})}}]);
//# sourceMappingURL=8981.59c59e97.js.map