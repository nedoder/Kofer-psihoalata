"use strict";(self["webpackChunkkofer_psihoalata"]=self["webpackChunkkofer_psihoalata"]||[]).push([[9552],{4596:function(t,e,s){s.r(e),s.d(e,{default:function(){return Z}});var i=s(7359),a=s(344),o=s(3423),r=s(6190),n=s(9582),c=s(4886),l=s(4127),h=s(266),d=s(5125),m=s(5495),p=s(6900),u=s(9708),g=s(6072),v=function(){var t=this,e=t._self._c;return e(d.Z,{staticClass:"row text-center justify-center align-center fill-height",model:{value:t.isValid,callback:function(e){t.isValid=e},expression:"isValid"}},[e(h.Z,{attrs:{sm:"6"}},[e(n.Z,{attrs:{tile:""}},[e(c.EB,[t._v("Kreiranje odgovora")]),e(c.ZB,[e(g.Z,{attrs:{filled:"",shaped:"",label:"Odgovor",rules:[t=>t.length>1||"Morate unijeti odgovor"]},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}}),e(a.Z,{attrs:{filled:"",shaped:"",items:t.post,disabled:t.isUpdating,"item-text":"title","item-value":"id",chips:"","deletable-chips":"",label:"Post","error-messages":t.matchPostError()},on:{change:t.displayComment},scopedSlots:t._u([{key:"selection",fn:function(s){return[e(l.Z,t._b({staticClass:"short",attrs:{"input-value":s.selected,close:""},on:{click:s.select,"click:close":function(e){t.removePost(),t.displayComments()}}},"v-chip",s.attrs,!1),[e(o.Z,{attrs:{left:""}},[e(m.Z,{attrs:{src:t.$imagePath+s.item.image}})],1),e("span",[t._v(" "+t._s(s.item.title)+" ")])],1)]}},{key:"item",fn:function(s){return[[e(p.Z,[e(m.Z,{attrs:{src:t.$imagePath+s.item.image}})],1),e(u.km,[e(u.V9,{domProps:{innerHTML:t._s(s.item.title)}})],1)]]}}]),model:{value:t.posts,callback:function(e){t.posts=e},expression:"posts"}}),e(a.Z,{attrs:{filled:"",shaped:"",items:t.comment,"item-text":"comment","item-value":"id",disabled:t.isUpdating,chips:"","deletable-chips":"",label:"Komentar","error-messages":t.matchCommentError()},on:{change:t.displayPost},scopedSlots:t._u([{key:"selection",fn:function(s){return[e(l.Z,t._b({staticClass:"short",attrs:{"input-value":s.selected,close:""},on:{click:s.select,"click:close":function(e){t.removeComment(),t.displayPosts()}}},"v-chip",s.attrs,!1),[e("span",[t._v(" "+t._s(s.item.comment)+" ")])])]}},{key:"item",fn:function(s){return[[e(u.km,[e(u.V9,{domProps:{innerHTML:t._s(s.item.comment)}})],1)]]}}]),model:{value:t.comments,callback:function(e){t.comments=e},expression:"comments"}}),t.error?e(i.Z,{attrs:{type:"error"}},[t._v(" "+t._s(t.error)+" ")]):t._e(),e(r.Z,{attrs:{disabled:!t.isValid,color:"primary"},on:{click:t.onSubmit}},[t._v("Kreiraj")])],1)],1)],1)],1)},S=[],y=(s(2801),s(3304)),f={data:()=>({isValid:!0,answer:"",isUpdating:!1,author:null,error:"",comment:[],comments:[],post:[],posts:[]}),watch:{isUpdating(t){t&&setTimeout((()=>this.isUpdating=!1),3e3)}},methods:{onSubmit(){y.Z.newAnswer({answer:this.answer,commentId:this.comments,approved:!0,author:this.author,postId:this.posts}).then((t=>{console.log(t),this.$router.push({path:"/answers/"})})).catch((t=>{this.error=t.response.data.error,console.log(t.message)}))},displayComment(){this.comment=[],y.Z.getPost(this.posts).then((t=>{t.data.Comments.forEach((t=>{this.comment.push(t)}))})).catch((t=>{console.log(t.response)}))},displayComments(){this.comment=[],y.Z.getCommentsList().then((t=>{this.comment=t.data})).catch((t=>{console.log(t.response)}))},displayPost(){this.post=[],y.Z.getComment(this.comments).then((t=>{this.post.push(t.data.Post)})).catch((t=>{console.log(t.response)}))},displayPosts(){this.post=[],y.Z.getPostsList().then((t=>{this.post=t.data})).catch((t=>{console.log(t.response)}))},removeComment(){this.comments=[]},removePost(){this.posts=[]},matchCommentError(){return 0===this.comments.length?"Morate odabrati komentar":""},matchPostError(){return 0===this.posts.length?"Morate odabrati post":""}},mounted(){y.Z.getCommentsList().then((t=>{this.comment=t.data})).catch((t=>{console.log(t.response)})),y.Z.getPostsAll().then((t=>{this.post=t.data})).catch((t=>{console.log(t.response)}));let t=decodeURIComponent(escape(atob(localStorage.getItem("token").split(".")[1]))),e=JSON.parse(t);this.author=e.name+" "+e.lname}},_=f,w=s(1001),b=(0,w.Z)(_,v,S,!1,null,"105f2caa",null),Z=b.exports},5495:function(t,e,s){s.d(e,{Z:function(){return p}});var i=s(6750),a=s(8846),o=s(7678),r=s(5352),n=(0,o.Z)(a.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},(0,r.z9)(this))}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=n,l=s(6669),h=s(1767),d=s(4101);const m="undefined"!==typeof window&&"IntersectionObserver"in window;var p=(0,o.Z)(c,l.Z).extend({name:"v-img",directives:{intersect:i.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const s=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[s]):s}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,s){if(!m||s||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,d.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const s=()=>{const{naturalHeight:i,naturalWidth:a}=t;i||a?(this.naturalWidth=a,this.calculatedAspectRatio=a/i):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(s,e)};s()},genContent(){const t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){const t=(0,r.z9)(this,"placeholder");if(t){const e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render(t){const e=c.options.render.call(this,t),s=(0,h.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:m?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,s,e.children)}})},6072:function(t,e,s){s.d(e,{Z:function(){return r}});var i=s(7808),a=s(7678);const o=(0,a.Z)(i.Z);var r=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...i.Z.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick((()=>{var e;t?this.calculateInputHeight():null===(e=this.$refs.input)||void 0===e||e.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,s=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(s,e)+"px"},genInput(){const t=i.Z.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){i.Z.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})}}]);
//# sourceMappingURL=9552.db2a138a.js.map