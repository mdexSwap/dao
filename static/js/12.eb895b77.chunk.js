(this.webpackJsonpreact_imo=this.webpackJsonpreact_imo||[]).push([[12],{103:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"c",function(){return o}),n.d(t,"d",function(){return a}),n.d(t,"p",function(){return s}),n.d(t,"m",function(){return l}),n.d(t,"n",function(){return u}),n.d(t,"i",function(){return r}),n.d(t,"o",function(){return _}),n.d(t,"h",function(){return c}),n.d(t,"g",function(){return d}),n.d(t,"a",function(){return p}),n.d(t,"j",function(){return b}),n.d(t,"k",function(){return f}),n.d(t,"l",function(){return m}),n.d(t,"f",function(){return h}),n.d(t,"q",function(){return g}),n.d(t,"e",function(){return j}),n.d(t,"r",function(){return v}),n.p;var i=n.p+"static/media/detail_fail.08501123.svg",o=n.p+"static/media/detail_pass.d560e61f.svg",a=n.p+"static/media/direction.8d05c349.svg",s=n.p+"static/media/success.a8a4c08b.svg",r=n.p+"static/media/h5_pass.2ef51c2c.svg",c=n.p+"static/media/h5_fail.a76e06d7.svg",l=n.p+"static/media/prompt.b69c9826.svg",_=(n.p,n.p+"static/media/remove.c1ea15ab.svg"),u=n.p+"static/media/refuse.52d3e10e.svg",p=n.p+"static/media/close.d18efeba.svg",d=(n.p,n.p+"static/media/great.06dae3fc.svg"),b=n.p+"static/media/h5_pi.e2be8fd3.svg",f=n.p+"static/media/h5_so.a8e31910.svg",m=n.p+"static/media/h5_vi.f604f2e1.svg",h=n.p+"static/media/fail.704ffe19.svg",g=n.p+"static/media/tips.7ae6bd19.svg",j=n.p+"static/media/down.777dc1c7.svg",v=n.p+"static/media/up.14e75fa2.svg"},116:function(e,t,n){"use strict";var l=n(96),i=n(29),_=n(0),u=n(103),p=n(99),o=n(143),d=n.n(o),b=n(3);t.a=Object(i.b)("store")(Object(i.c)(function(e){var t=e.store,n=e.status,i=void 0!==n&&n,o=e.title,a=void 0===o?"":o,n=e.callback,s=void 0===n?null:n,o=e.children,n=void 0===o?Object(b.jsx)(b.Fragment,{}):o,e=Object(_.useState)(!1),o=Object(l.a)(e,2),e=o[0],r=o[1];Object(_.useEffect)(function(){r(i)},[i]),Object(_.useEffect)(function(){return p.a.addListener("closePop",c),function(){p.a.removeListener("closePop",c)}},[]);var c=function(){r(!i),t.config.isMobile&&t.config.setH5FootSatus(!0),s&&s()};return Object(b.jsx)("div",{className:d.a.popWrap,style:e?{}:{display:"none"},children:Object(b.jsxs)("div",{className:d.a.pop,children:[Object(b.jsxs)("section",{className:d.a.close,children:[Object(b.jsx)("span",{children:a}),Object(b.jsx)("img",{src:u.a,alt:"",onClick:function(){return c()}})]}),n]})})}))},133:function(e,t,n){"use strict";var i="object"==typeof Reflect?Reflect:null,c=i&&"function"==typeof i.apply?i.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)},o=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)},a=Number.isNaN||function(e){return e!=e};function s(){s.init.call(this)}e.exports=s,e.exports.once=function(o,a){return new Promise(function(e,t){function n(e){o.removeListener(a,i),t(e)}function i(){"function"==typeof o.removeListener&&o.removeListener("error",n),e([].slice.call(arguments))}m(o,a,i,{once:!0}),"error"===a||"function"==typeof o.on&&m(o,"error",n,{once:!0})})},(s.EventEmitter=s).prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var r=10;function l(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function _(e){return void 0===e._maxListeners?s.defaultMaxListeners:e._maxListeners}function u(e,t,n,i){var o,a;return l(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener||n),o=e._events),a=o[t]),void 0===a?(a=o[t]=n,++e._eventsCount):("function"==typeof a?a=o[t]=i?[n,a]:[a,n]:i?a.unshift(n):a.push(n),0<(n=_(e))&&a.length>n&&!a.warned&&(a.warned=!0,(n=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit")).name="MaxListenersExceededWarning",n.emitter=e,n.type=t,n.count=a.length,console&&console.warn)),e}function p(e,t,n){e={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},t=function(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}.bind(e);return t.listener=n,e.wrapFn=t}function d(e,t,n){e=e._events;if(void 0===e)return[];t=e[t];return void 0===t?[]:"function"==typeof t?n?[t.listener||t]:[t]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(t):f(t,t.length)}function b(e){var t=this._events;if(void 0!==t){e=t[e];if("function"==typeof e)return 1;if(void 0!==e)return e.length}return 0}function f(e,t){for(var n=new Array(t),i=0;i<t;++i)n[i]=e[i];return n}function m(n,i,o,a){if("function"==typeof n.on)a.once?n.once(i,o):n.on(i,o);else{if("function"!=typeof n.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof n);n.addEventListener(i,function e(t){a.once&&n.removeEventListener(i,e),o(t)})}}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return r},set:function(e){if("number"!=typeof e||e<0||a(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");r=e}}),s.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||a(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},s.prototype.getMaxListeners=function(){return _(this)},s.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i,o="error"===e,a=this._events;if(void 0!==a)o=o&&void 0===a.error;else if(!o)return!1;if(o){if((i=0<t.length?t[0]:i)instanceof Error)throw i;o=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw o.context=i,o}e=a[e];if(void 0===e)return!1;if("function"==typeof e)c(e,this,t);else for(var s=e.length,r=f(e,s),n=0;n<s;++n)c(r[n],this,t);return!0},s.prototype.on=s.prototype.addListener=function(e,t){return u(this,e,t,!1)},s.prototype.prependListener=function(e,t){return u(this,e,t,!0)},s.prototype.once=function(e,t){return l(t),this.on(e,p(this,e,t)),this},s.prototype.prependOnceListener=function(e,t){return l(t),this.prependListener(e,p(this,e,t)),this},s.prototype.removeListener=function(e,t){var n,i,o,a,s;if(l(t),void 0===(i=this._events))return this;if(void 0===(n=i[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,a=n.length-1;0<=a;a--)if(n[a]===t||n[a].listener===t){s=n[a].listener,o=a;break}if(o<0)return this;0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,o),1===n.length&&(i[e]=n[0]),void 0!==i.removeListener&&this.emit("removeListener",e,s||t)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){var t,n;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){for(var i,o=Object.keys(n),a=0;a<o.length;++a)"removeListener"!==(i=o[a])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(a=t.length-1;0<=a;a--)this.removeListener(e,t[a]);return this},s.prototype.listeners=function(e){return d(this,e,!0)},s.prototype.rawListeners=function(e){return d(this,e,!1)},s.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):b.call(e,t)},s.prototype.listenerCount=b,s.prototype.eventNames=function(){return 0<this._eventsCount?o(this._events):[]}},143:function(e,t,n){e.exports={start:"Pop_start__11jio",align:"Pop_align__3fUrP",align_center:"Pop_align_center__16hSA",align_between:"Pop_align_between__3bUlu",align_around:"Pop_align_around__3qxAD",popWrap:"Pop_popWrap__2At93",horizontal_between:"Pop_horizontal_between__r7N63",clamp:"Pop_clamp__2x0jD",clamp2:"Pop_clamp2__1qv37",clamp3:"Pop_clamp3__1kndf",pop:"Pop_pop__2K-RN",close:"Pop_close__fokld"}},152:function(e,t,n){"use strict";n(0);var i=n(29),o=n(31),a=n(103),s=n(164),r=n.n(s),c=n(3);t.a=Object(i.b)("store")(Object(i.c)(function(e){var t=e.store,n=e.param,i=t.config.chainName;return Object(c.jsxs)("div",{className:r.a.address,onClick:function(){var e;(e=n)&&window.open(Object(o.d)(e,i,"address"))},children:[Object(o.f)(n,4),Object(c.jsx)("img",{src:a.d,alt:""})]})}))},160:function(e,t,n){"use strict";n(0);var i=n(29),p=n(103),d=n(100),o=n(161),b=n.n(o),o=n(2),f=n(99),m=n(116),h=n(3);t.a=Object(o.h)(Object(i.b)("store")(Object(i.c)(function(e){var t=e.history,n=e.status,i=e.title,o=e.callback,a=e.store,s=e.option,r=e.kind,c=a.config,l=c.langTextList,_=c.lang,e=c.chainName,a=c.isMobile,c=s.tips,s=s.type,u=Object(d.c)({la:_,sk:e,tm:a}),l=l.Com;return Object(h.jsx)(m.a,{status:n,title:i,callback:o,children:Object(h.jsxs)("div",{className:b.a.main,children:[Object(h.jsx)("img",{src:"error"===s?p.f:p.p,alt:""}),c&&Object(h.jsx)("p",{children:c}),Object(h.jsx)("button",{className:"".concat(b.a.submit," ").concat(b.a["error"===s?"err":"suc"]),onClick:function(){"proposal"===r&&t.push(u.Motion),f.a.emit("closePop")},children:l.Know})]})})})))},161:function(e,t,n){e.exports={start:"OperateStatus_start__1nL3Q",align:"OperateStatus_align__2h28l",align_center:"OperateStatus_align_center__2Ipdl",align_between:"OperateStatus_align_between__25TU9",align_around:"OperateStatus_align_around__1BLfL",horizontal_between:"OperateStatus_horizontal_between__37VEN",clamp:"OperateStatus_clamp__17gB0",clamp2:"OperateStatus_clamp2__2N7MK",clamp3:"OperateStatus_clamp3__1ul0x",main:"OperateStatus_main__1ZWwJ",submit:"OperateStatus_submit__3W8EF",suc:"OperateStatus_suc__2p9Gj",err:"OperateStatus_err__1c7SX"}},164:function(e,t,n){e.exports={start:"Address_start__O-neP",align:"Address_align__do61v",align_center:"Address_align_center__27uPe",align_between:"Address_align_between__3lqJO",align_around:"Address_align_around__3DYKD",horizontal_between:"Address_horizontal_between__1KSXe",clamp:"Address_clamp__1FJrc",clamp2:"Address_clamp2__1RaBZ",clamp3:"Address_clamp3__IzbuR",address:"Address_address__2_yQH"}},208:function(e,t,n){"use strict";n(0);var i=n(29),r=n(31),o=n(209),c=n.n(o),l=n(99),_=n(116),u=n(3);t.a=Object(i.b)("store")(Object(i.c)(function(e){var n,t=e.status,i=e.title,o=e.snapotData,a=e.callback,s=e.store.config.langTextList,e=s.Pop.MyVoting,s=s.Com;return Object(u.jsx)(_.a,{status:t,title:i,callback:a,children:Object(u.jsxs)("div",{className:c.a.main,children:[Object(u.jsx)("p",{className:c.a.title,children:e.MyVoteRights}),Object(u.jsx)("div",{className:c.a.num,children:Object(r.e)(null==o?void 0:o.total_balance,0)}),Object(u.jsx)("p",{className:c.a.tips,dangerouslySetInnerHTML:{__html:e.Tips(null==o?void 0:o.snap_heco_block,null==o?void 0:o.snap_bsc_block)}}),Object(u.jsxs)("div",{className:c.a.composition,children:[Object(u.jsx)("h5",{children:e.VoElement}),(n=[],[{text:"MDX ".concat(e.Hold),val:null==o?void 0:o.mdx_balance},{text:"xMDX ".concat(e.Hold),val:null==o?void 0:o.xmdx_balance},{text:"".concat(e.IMOPledge),val:null==o?void 0:o.dao_balance}].forEach(function(e,t){n.push(Object(u.jsxs)("div",{children:[Object(u.jsxs)("span",{children:[e.text," :"]}),Object(u.jsx)("span",{children:Object(r.e)(e.val,0)})]},"compositionRnder".concat(t)))}),n)]}),Object(u.jsx)("button",{onClick:function(){l.a.emit("closePop")},children:s.Know})]})})}))},209:function(e,t,n){e.exports={start:"ViewVotingRights_start__3Z6-W",align:"ViewVotingRights_align__ZPtLU",align_center:"ViewVotingRights_align_center__2Utkx",align_between:"ViewVotingRights_align_between__2YQs_",main:"ViewVotingRights_main__31zM3",composition:"ViewVotingRights_composition__2Cb-d",align_around:"ViewVotingRights_align_around__2IZ1t",horizontal_between:"ViewVotingRights_horizontal_between__2ygEL",clamp:"ViewVotingRights_clamp__3R7iQ",clamp2:"ViewVotingRights_clamp2__3-D6E",clamp3:"ViewVotingRights_clamp3__22EZ0",title:"ViewVotingRights_title__wzAoA",num:"ViewVotingRights_num__2VHwJ",tips:"ViewVotingRights_tips__1KebW"}},488:function(e,t,n){e.exports={start:"SubmitProposal_start__1xFn3",align:"SubmitProposal_align__1QEd3",align_center:"SubmitProposal_align_center__2f1zj",align_between:"SubmitProposal_align_between__TQNMk",align_around:"SubmitProposal_align_around__PECWU",horizontal_between:"SubmitProposal_horizontal_between__1qqUc",clamp:"SubmitProposal_clamp__303h9",clamp2:"SubmitProposal_clamp2__YkDHt",clamp3:"SubmitProposal_clamp3__2PqzV",submit_proposal:"SubmitProposal_submit_proposal__-23ln",main:"SubmitProposal_main__3bl0k",bg:"SubmitProposal_bg__1pPYe",top:"SubmitProposal_top__2f5tT",left:"SubmitProposal_left__2ZtT7",right:"SubmitProposal_right__2GepN",middle:"SubmitProposal_middle__2sLm3",content:"SubmitProposal_content__2hbPG",top_bg:"SubmitProposal_top_bg__3Lr1p"}},489:function(e,t,n){e.exports={start:"Options_start__vQ3f_",align:"Options_align___xwUx",align_center:"Options_align_center__1V2pY",align_between:"Options_align_between__1dWwr",align_around:"Options_align_around__20EUa",horizontal_between:"Options_horizontal_between__tB28M",clamp:"Options_clamp__RowlN",clamp2:"Options_clamp2__6CeTZ",clamp3:"Options_clamp3__EWJ_y",options:"Options_options__u6IKv",active:"Options_active__37V-h"}},490:function(e,t,n){e.exports={start:"Form_start__15B0c",align:"Form_align__3LL3A",align_center:"Form_align_center__1bYL-",align_between:"Form_align_between__U_RiG",align_around:"Form_align_around__2crr4",horizontal_between:"Form_horizontal_between__2Bn-a",clamp:"Form_clamp__3Ui7U",clamp2:"Form_clamp2__3u1Ii",clamp3:"Form_clamp3__3W25e",form:"Form_form__zx6rt",content:"Form_content__qoYpO",plan:"Form_plan__2wQ5c",active:"Form_active__1P03O"}},491:function(e,t,n){e.exports={start:"Info_start__1odeQ",align:"Info_align__28rTR",align_center:"Info_align_center__IMGNU",align_between:"Info_align_between__1vBLa",info:"Info_info__3iSLP",sponsor:"Info_sponsor__D1rI8",align_around:"Info_align_around__9EawT",horizontal_between:"Info_horizontal_between__3m51D",clamp:"Info_clamp__2F7rT",clamp2:"Info_clamp2__1eNaX",clamp3:"Info_clamp3__2UbCT",title:"Info_title__1ZqBl",rule:"Info_rule__LbhlD",snapshot:"Info_snapshot__3qt1t",tips:"Info_tips__1Xp4Q",view:"Info_view__dzk_M",en:"Info_en__7kOPB"}},492:function(e,t,n){e.exports={start:"Top_start__1qBXD",align:"Top_align__1SFQI",align_center:"Top_align_center__GkM4l",align_between:"Top_align_between__1xz00",align_around:"Top_align_around__3W1dT",horizontal_between:"Top_horizontal_between__200jF",clamp:"Top_clamp__B0fnn",clamp2:"Top_clamp2__3-MeR",clamp3:"Top_clamp3__1nl2O",top:"Top_top__K2JLt",icon:"Top_icon__16qg5"}},510:function(e,t,n){"use strict";n.r(t);var g=n(0),j=n.n(g),i=n(29),o=n(124),a=n(123),s=n(488),r=n.n(s),c=n(125),s=n(18),v=n.n(s),O=n(30),x=n(96),w=n(99),y=n(160),L=n(108),_=n(37),u=n(17),p=n(103),s=n(489),d=n.n(s),P=n(3),S=Object(i.b)("store")(Object(i.c)(Object(g.forwardRef)(function(e){var t,n=e.store,i=e.oref,e=n.config.langTextList,n=Object(g.useState)({1:{text:"",show:!0},2:{text:"",show:!0},3:{text:"",show:!1},4:{text:"",show:!1},5:{text:"",show:!1}}),n=Object(x.a)(n,2),o=n[0],a=n[1],s=Object.keys(o).length,n=Object(g.useState)(2),n=Object(x.a)(n,2),r=n[0],c=n[1],l=e.Pop.MyVoting;return Object(g.useImperativeHandle)(i,function(){return{data:o}}),Object(P.jsxs)("div",{className:d.a.options,children:[(t=[],Object.keys(o).forEach(function(i,e){o[i].show&&t.push(Object(P.jsxs)("div",{children:[Object(P.jsx)("input",{maxLength:100,value:o[i].text,placeholder:"".concat(l.InputPlan).concat(i),onChange:function(e){var t,n;t=i,n=null==(e=e)||null===(n=e.target)||void 0===n?void 0:n.value,a(Object(u.a)(Object(u.a)({},o),{},Object(_.a)({},t,{text:n,show:!0})))}}),1<e&&Object(P.jsx)("img",{className:d.a.close,src:p.o,alt:"",onClick:function(){var e=i;c(r-1),a(Object(u.a)(Object(u.a)({},o),{},Object(_.a)({},e,{text:"",show:!1})))}})]},"optionsRender".concat(e)))}),t),Object(P.jsx)("button",{className:s<=r?"":d.a.active,onClick:function(){var e;r<s&&(c(r+1),e=Object.keys(o).find(function(e){return!1===o[e].show}),a(Object(u.a)(Object(u.a)({},o),{},Object(_.a)({},e,{text:"",show:!0}))))},disabled:s<=r,children:l.AddOption})]})}))),s=n(490),N=n.n(s),l=Object(i.b)("store")(Object(i.c)(function(e){var t=e.store,n=t.config,i=n.lang,o=n.langTextList,c=n.account,l=n.chainId,_=t.proposal.createPROPOSAL,e=Object(g.useState)(""),n=Object(x.a)(e,2),u=n[0],a=n[1],t=Object(g.useState)(""),e=Object(x.a)(t,2),p=e[0],s=e[1],n=Object(g.useState)(!1),t=Object(x.a)(n,2),d=t[0],b=t[1],e=Object(g.useState)("error"),n=Object(x.a)(e,2),t=n[0],f=n[1],m=Object(g.useRef)(),e=o.Pop.MyVoting,n=o.Pop.OperateStatus,o=o.Com,n={success:{tips:"",type:"success"},error:{tips:n.proposalErr,type:"error"}};Object(g.useEffect)(function(){return w.a.addListener("submitProposal",h),function(){w.a.removeListener("submitProposal",h)}},[m,u,p]);var r,h=Object(g.useCallback)((r=Object(O.a)(v.a.mark(function e(t,n){var i,o,a,s,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=m.current.data,e.next=4,Object(L.u)(c);case 4:o=e.sent,2<=(s=Object.keys(i).filter(function(e){return i[e].show&&!!i[e].text})).length&&u&&p&&(a=[],s.forEach(function(e){a.push(i[e].text)}),s={title:u,content:p,heco_snap_block:t,bsc_snap_block:n,proposal_options:a},r={timestamp:(new Date).getTime(),payload:s,type:"proposal",version:"1.1.1",mdex_chainid:Number(l)},o.signMessage(JSON.stringify(r)).then(function(e){_({address:c,message:JSON.stringify(r),sig:e}).then(function(e){0===e.code?f("success"):f("error"),b(!d)})}));case 7:case"end":return e.stop()}},e)})),function(e,t){return r.apply(this,arguments)}),[m,u,p]);return Object(P.jsxs)(j.a.Fragment,{children:[Object(P.jsxs)("div",{className:"".concat(N.a.form," ").concat(N.a[i]),children:[Object(P.jsxs)("div",{className:N.a.content,children:[Object(P.jsx)("p",{children:e.InputTitle}),Object(P.jsx)("input",{value:u,maxLength:100,onChange:function(e){var t;t=null==(e=e)||null===(t=e.target)||void 0===t?void 0:t.value,a(t)}}),Object(P.jsx)("p",{children:e.InputCon}),Object(P.jsx)("textarea",{value:p,maxLength:5e3,onChange:function(e){var t;t=null==(e=e)||null===(t=e.target)||void 0===t?void 0:t.value,s(t)}})]}),Object(P.jsx)(S,{oref:m})]}),d&&Object(P.jsx)(y.a,{callback:function(e){b(e)},status:d,title:"error"===t?o.ErrSub:o.SucSub,option:n[t],kind:"proposal"})]})})),b=n(208),f=n(152),s=n(491),m=n.n(s),h=Object(i.b)("store")(Object(i.c)(function(e){var t=e.store,n=t.config,e=n.lang,i=n.account,n=n.langTextList,o=t.proposal.getVoteRigt,t=Object(g.useState)(!1),t=Object(x.a)(t,2),a=t[0],s=t[1],t=Object(g.useState)({}),t=Object(x.a)(t,2),r=t[0],c=t[1],n=n.Pop.RmMes;return Object(g.useEffect)(function(){i&&o({address:i}).then(function(e){e&&0===e.code&&c(e.result)})},[i]),Object(P.jsxs)(j.a.Fragment,{children:[Object(P.jsxs)("div",{className:"".concat(m.a.info," ").concat(m.a[e]),children:[Object(P.jsx)("div",{className:m.a.title,children:n.Mes}),Object(P.jsxs)("div",{className:m.a.sponsor,children:[Object(P.jsxs)("span",{children:[n.Sponsor,"："]}),Object(P.jsx)(f.a,{param:i})]}),Object(P.jsx)("div",{className:m.a.rule,children:n.Tips1}),Object(P.jsxs)("div",{className:m.a.snapshot,children:["HECO ",n.Snapshot," :",Object(P.jsx)("span",{children:null!==(e=null==r?void 0:r.snap_heco_block)&&void 0!==e?e:"--"})]}),Object(P.jsxs)("div",{className:m.a.snapshot,children:["BSC ",n.Snapshot," :",Object(P.jsx)("span",{children:null!==(e=null==r?void 0:r.snap_bsc_block)&&void 0!==e?e:"--"})]}),Object(P.jsx)("button",{onClick:function(){w.a.emit("submitProposal",null==r?void 0:r.snap_heco_block,null==r?void 0:r.snap_bsc_block)},disabled:!i||(null==r?void 0:r.total_balance)<1e5,children:n.RmSubmit}),Object(P.jsx)("div",{className:m.a.tips,children:n.Tips2(1e5)}),Object(P.jsx)("div",{className:m.a.view,onClick:function(){s(!a)},children:n.View})]}),a&&i&&Object(P.jsx)(b.a,{callback:function(e){s(e)},status:a,title:n.View,snapotData:r})]})})),k=n(512),s=n(492),E=n.n(s),V=Object(i.b)("store")(Object(i.c)(function(e){var t=e.store.config,e=t.lang,t=t.langTextList.Com;return Object(P.jsxs)("div",{className:"".concat(E.a.top," ").concat(E.a[e]),onClick:function(){window.history.go(-1)},children:[Object(P.jsx)(k.a,{className:E.a.icon}),Object(P.jsx)("span",{children:t.Return})]})}));t.default=Object(i.b)("store")(Object(i.c)(function(e){var t=e.store.config,n=t.lang,e=t.isPC,t=t.account;return Object(g.useEffect)(function(){},[t]),Object(P.jsxs)("div",{className:"".concat(r.a.submit_proposal," ").concat(r.a[n]),children:[Object(P.jsx)("div",{className:"".concat(r.a.bg," ").concat(r.a.top)}),Object(P.jsx)("div",{className:"".concat(r.a.bg," ").concat(r.a.left)}),Object(P.jsx)("div",{className:"".concat(r.a.bg," ").concat(r.a.right)}),Object(P.jsx)("div",{className:"".concat(r.a.bg," ").concat(r.a.middle)}),Object(P.jsx)(c.a,{}),Object(P.jsxs)("div",{className:r.a.main,children:[Object(P.jsx)(V,{}),Object(P.jsxs)("div",{className:r.a.content,children:[Object(P.jsx)(l,{}),Object(P.jsx)(h,{})]})]}),e?Object(P.jsx)(o.a,{}):Object(P.jsx)(a.a,{})]})}))},99:function(e,t,n){"use strict";n=n(133);t.a=new n.EventEmitter}}]);