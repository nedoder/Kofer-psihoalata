(self["webpackChunkkofer_psihoalata"]=self["webpackChunkkofer_psihoalata"]||[]).push([[5429],{7492:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return I}});var i=s(7359),r=s(344),o=s(3423),a=s(6190),n=s(9582),c=s(4886),l=s(4127),h=s(266),m=s(5125),d=s(5495),u=s(6900),p=s(9708),g=s(6072),E=function(){var t=this,e=t._self._c;return e(m.Z,{staticClass:"row text-center justify-center align-center fill-height",model:{value:t.isValid,callback:function(e){t.isValid=e},expression:"isValid"}},[e(h.Z,{attrs:{sm:"6"}},[e(n.Z,{attrs:{tile:""}},[e(c.EB,[t._v("Kreiranje odgovora")]),e(c.ZB,[e(g.Z,{attrs:{filled:"",shaped:"",label:"Odgovor",rules:[t=>t.length>1||"Morate unijeti odgovor"]},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}}),e(r.Z,{attrs:{filled:"",shaped:"",items:t.post,disabled:t.isUpdating,"item-text":"title","item-value":"id",chips:"","deletable-chips":"",label:"Post","error-messages":t.matchPostError()},on:{change:t.displayComment},scopedSlots:t._u([{key:"selection",fn:function(s){return[e(l.Z,t._b({staticClass:"short",attrs:{"input-value":s.selected,close:""},on:{click:s.select,"click:close":function(e){t.removePost(),t.displayComments()}}},"v-chip",s.attrs,!1),[e(o.Z,{attrs:{left:""}},[e(d.Z,{attrs:{src:t.$imagePath+s.item.image}})],1),e("span",[t._v(" "+t._s(s.item.title)+" ")])],1)]}},{key:"item",fn:function(s){return[[e(u.Z,[e(d.Z,{attrs:{src:t.$imagePath+s.item.image}})],1),e(p.km,[e(p.V9,{domProps:{innerHTML:t._s(s.item.title)}})],1)]]}}]),model:{value:t.posts,callback:function(e){t.posts=e},expression:"posts"}}),e(r.Z,{attrs:{filled:"",shaped:"",items:t.comment,"item-text":"comment","item-value":"id",disabled:t.isUpdating,chips:"","deletable-chips":"",label:"Komentar","error-messages":t.matchCommentError()},on:{change:t.displayPost},scopedSlots:t._u([{key:"selection",fn:function(s){return[e(l.Z,t._b({staticClass:"short",attrs:{"input-value":s.selected,close:""},on:{click:s.select,"click:close":function(e){t.removeComment(),t.displayPosts()}}},"v-chip",s.attrs,!1),[e("span",[t._v(" "+t._s(s.item.comment)+" ")])])]}},{key:"item",fn:function(s){return[[e(p.km,[e(p.V9,{domProps:{innerHTML:t._s(s.item.comment)}})],1)]]}}]),model:{value:t.comments,callback:function(e){t.comments=e},expression:"comments"}}),t.error?e(i.Z,{attrs:{type:"error"}},[t._v(" "+t._s(t.error)+" ")]):t._e(),e(a.Z,{attrs:{disabled:!t.isValid,color:"primary"},on:{click:t.onSubmit}},[t._v("Kreiraj")])],1)],1)],1)],1)},_=[],v=(s(2801),s(3304)),R={data:()=>({isValid:!0,answer:"",isUpdating:!1,author:null,error:"",comment:[],comments:[],post:[],posts:[]}),watch:{isUpdating(t){t&&setTimeout((()=>this.isUpdating=!1),3e3)}},methods:{onSubmit(){v.Z.newAnswer({answer:this.answer,commentId:this.comments,approved:!0,author:this.author}).then((t=>{console.log(t),this.$router.push({path:"/answers/"})})).catch((t=>{this.error=t.response.data.error,console.log(t.message)}))},displayComment(){this.comment=[],v.Z.getPost(this.posts).then((t=>{t.data.Comments.forEach((t=>{this.comment.push(t)}))})).catch((t=>{console.log(t.response)}))},displayComments(){this.comment=[],v.Z.getCommentsList().then((t=>{this.comment=t.data})).catch((t=>{console.log(t.response)}))},displayPost(){this.post=[],v.Z.getComment(this.comments).then((t=>{this.post.push(t.data.Post)})).catch((t=>{console.log(t.response)}))},displayPosts(){this.post=[],v.Z.getPostsList().then((t=>{this.post=t.data})).catch((t=>{console.log(t.response)}))},removeComment(){this.comments=[]},removePost(){this.posts=[]},matchCommentError(){return 0===this.comments.length?"Morate odabrati komentar":""},matchPostError(){return 0===this.posts.length?"Morate odabrati post":""}},mounted(){v.Z.getCommentsList().then((t=>{this.comment=t.data})).catch((t=>{console.log(t.response)})),v.Z.getPostList().then((t=>{this.post=t.data})).catch((t=>{console.log(t.response)}));let t=decodeURIComponent(escape(atob(localStorage.getItem("token").split(".")[1]))),e=JSON.parse(t);this.author=e.name+" "+e.lname}},S=R,f=s(1001),y=(0,f.Z)(S,E,_,!1,null,"6043782f",null),I=y.exports},5787:function(t,e,s){var i=s(7976),r=TypeError;t.exports=function(t,e){if(i(e,t))return t;throw r("Incorrect invocation")}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},2801:function(t,e,s){"use strict";var i=s(2109),r=s(7854),o=s(5005),a=s(9114),n=s(3070).f,c=s(2597),l=s(5787),h=s(9587),m=s(6277),d=s(3678),u=s(7741),p=s(9781),g=s(1913),E="DOMException",_=o("Error"),v=o(E),R=function(){l(this,S);var t=arguments.length,e=m(t<1?void 0:arguments[0]),s=m(t<2?void 0:arguments[1],"Error"),i=new v(e,s),r=_(e);return r.name=E,n(i,"stack",a(1,u(r.stack,1))),h(i,this,R),i},S=R.prototype=v.prototype,f="stack"in _(E),y="stack"in new v(1,2),I=v&&p&&Object.getOwnPropertyDescriptor(r,E),w=!!I&&!(I.writable&&I.configurable),C=f&&!w&&!y;i({global:!0,constructor:!0,forced:g||C},{DOMException:C?R:v});var b=o(E),A=b.prototype;if(A.constructor!==b)for(var N in g||n(A,"constructor",a(1,b)),d)if(c(d,N)){var T=d[N],Z=T.s;c(b,Z)||n(b,Z,a(6,T.c))}},5495:function(t,e,s){"use strict";s.d(e,{Z:function(){return u}});var i=s(6750),r=s(8846),o=s(7678),a=s(5352),n=(0,o.Z)(r.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},(0,a.z9)(this))}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=n,l=s(6669),h=s(1767),m=s(4101);const d="undefined"!==typeof window&&"IntersectionObserver"in window;var u=(0,o.Z)(c,l.Z).extend({name:"v-img",directives:{intersect:i.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const s=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[s]):s}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,s){if(!d||s||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,m.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const s=()=>{const{naturalHeight:i,naturalWidth:r}=t;i||r?(this.naturalWidth=r,this.calculatedAspectRatio=r/i):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(s,e)};s()},genContent(){const t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){const t=(0,a.z9)(this,"placeholder");if(t){const e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render(t){const e=c.options.render.call(this,t),s=(0,h.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,s,e.children)}})},6072:function(t,e,s){"use strict";s.d(e,{Z:function(){return a}});var i=s(7808),r=s(7678);const o=(0,r.Z)(i.Z);var a=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...i.Z.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick((()=>{var e;t?this.calculateInputHeight():null===(e=this.$refs.input)||void 0===e||e.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,s=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(s,e)+"px"},genInput(){const t=i.Z.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){i.Z.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})}}]);
//# sourceMappingURL=5429.72137e3e.js.map