(window.webpackJsonp=window.webpackJsonp||[]).push([[2,8,9],{405:function(t,e,n){},406:function(t,e,n){},407:function(t,e,n){},409:function(t,e,n){"use strict";n.d(e,"a",(function(){return _})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return O})),n.d(e,"h",(function(){return a})),n.d(e,"f",(function(){return s})),n.d(e,"e",(function(){return T})),n.d(e,"g",(function(){return i})),n.d(e,"b",(function(){return S})),n.d(e,"l",(function(){return o})),n.d(e,"k",(function(){return N})),n.d(e,"i",(function(){return c})),n.d(e,"m",(function(){return u})),n.d(e,"j",(function(){return I}));var E=function(t){return"".concat("PLAYER","_").concat(t)},_=(E("CONSTRUCTED"),E("INIT")),r=(E("READY"),E("RESTORE"),E("SET_CHAPTERS_LIST"),E("NEXT_CHAPTER")),O=E("PREVIOUS_CHAPTER"),a=E("SET_CHAPTER"),s=(E("UPDATE_CHAPTER"),E("STEP_FORWARD"),E("STEP_BACKWARDS"),E("SHOW_COMPONENT_INFO"),E("SHOW_COMPONENT_SHOW_TITLE"),E("SHOW_COMPONENT_EPISODE_TITLE"),E("SHOW_COMPONENT_SUBTITLE"),E("SHOW_COMPONENT_INFO_POSTER"),E("SHOW_COMPONENT_CONTROLS_CHAPTERS"),E("SHOW_COMPONENT_CONTROLS_STEPPERS"),E("SHOW_COMPONENT_CONTROLS_BUTTON_LOADING"),E("SHOW_COMPONENT_CONTROLS_BUTTON_REPLAY"),E("SHOW_COMPONENT_CONTROLS_BUTTON_REMAINING"),E("SHOW_COMPONENT_CONTROLS_BUTTON_DURATION"),E("SHOW_COMPONENT_CONTROLS_BUTTON_RETRY"),E("SHOW_COMPONENT_CONTROLS_BUTTON_PLAYING"),E("SHOW_COMPONENT_CONTROLS_BUTTON_PAUSE"),E("SHOW_COMPONENT_PROGRESSBAR"),E("SHOW_COMPONENT_TAB"),E("SHOW_COMPONENT_VOLUME_SLIDER"),E("SHOW_COMPONENT_RATE_SLIDER"),E("SHOW_COMPONENT_CHANNELS"),E("SHOW_COMPONENT_CONTROLS_BUTTON"),E("HIDE_COMPONENT_INFO"),E("HIDE_COMPONENT_SHOW_TITLE"),E("HIDE_COMPONENT_EPISODE_TITLE"),E("HIDE_COMPONENT_SUBTITLE"),E("HIDE_COMPONENT_INFO_POSTER"),E("HIDE_COMPONENT_ERROR"),E("HIDE_COMPONENT_CONTROLS_CHAPTERS"),E("HIDE_COMPONENT_CONTROLS_STEPPERS"),E("HIDE_COMPONENT_CONTROLS_BUTTON"),E("HIDE_COMPONENT_PROGRESSBAR"),E("HIDE_COMPONENT_TAB"),E("HIDE_COMPONENT_VOLUME_SLIDER"),E("HIDE_COMPONENT_RATE_SLIDER"),E("HIDE_COMPONENT_CHANNELS"),E("SHOW_VISIBLE_COMPONENTS_TAB_INFO"),E("SHOW_VISIBLE_COMPONENTS_TAB_CHAPTERS"),E("SHOW_VISIBLE_COMPONENTS_TAB_FILES"),E("SHOW_VISIBLE_COMPONENTS_TAB_AUDIO"),E("SHOW_VISIBLE_COMPONENTS_TAB_SHARE"),E("SHOW_VISIBLE_COMPONENTS_TAB_TRANSCRIPTS"),E("SHOW_VISIBLE_COMPONENTS_TAB_PLAYLIST"),E("SHOW_VISIBLE_COMPONENTS_HEADER_POSTER"),E("SHOW_VISIBLE_COMPONENTS_HEADER_TITLE"),E("SHOW_VISIBLE_COMPONENTS_HEADER_EPISODE"),E("SHOW_VISIBLE_COMPONENTS_HEADER_SUBTITLE"),E("SHOW_VISIBLE_COMPONENTS_CONTROLS_STEPPER"),E("SHOW_VISIBLE_COMPONENTS_CONTROLS_CHAPTERS"),E("SHOW_VISIBLE_COMPONENTS_CONTROLS_PROGRESSBAR"),E("SHOW_SHARE_PLAYTIME"),E("HIDE_VISIBLE_COMPONENTS_TAB_INFO"),E("HIDE_VISIBLE_COMPONENTS_TAB_CHAPTERS"),E("HIDE_VISIBLE_COMPONENTS_TAB_FILES"),E("HIDE_VISIBLE_COMPONENTS_TAB_AUDIO"),E("HIDE_VISIBLE_COMPONENTS_TAB_SHARE"),E("HIDE_VISIBLE_COMPONENTS_TAB_TRANSCRIPTS"),E("HIDE_VISIBLE_COMPONENTS_TAB_PLAYLIST"),E("HIDE_VISIBLE_COMPONENTS_HEADER_POSTER"),E("HIDE_VISIBLE_COMPONENTS_HEADER_TITLE"),E("HIDE_VISIBLE_COMPONENTS_HEADER_EPISODE"),E("HIDE_VISIBLE_COMPONENTS_HEADER_SUBTITLE"),E("HIDE_VISIBLE_COMPONENTS_CONTROLS_STEPPER"),E("HIDE_VISIBLE_COMPONENTS_CONTROLS_CHAPTERS"),E("HIDE_VISIBLE_COMPONENTS_CONTROLS_PROGRESSBAR"),E("HIDE_SHARE_PLAYTIME"),E("BACKEND_ERROR"),E("NETWORK_EMPTY"),E("NETWORK_NO_SOURCE"),E("ERROR_MISSING_AUDIO_FILES"),E("ERROR_POSTER_LOAD"),E("SIMULATE_PLAYTIME"),E("ENABLE_GHOST_MODE"),E("DISABLE_GHOST_MODE"),E("REQUEST_PLAY")),T=(E("BACKEND_PLAY"),E("REQUEST_PAUSE")),i=(E("BACKEND_PAUSE"),E("REQUEST_RESTART")),S=(E("BACKEND_BUFFER"),E("STOP"),E("IDLE"),E("BACKEND_LOADING_START"),E("BACKEND_LOADING_END"),E("REQUEST_LOAD"),E("LOADED"),E("BACKEND_END"),E("MUTE")),o=E("UNMUTE"),N=E("SET_VOLUME"),c=E("SET_RATE"),u=(E("BACKEND_DURATION"),E("BACKEND_PLAYTIME"),E("REQUEST_PLAYTIME"),E("UPDATE_PLAYTIME")),I=(E("LOAD_QUANTILES"),E("SET_QUANTILE"),E("SET_RUNTIME"),E("SET_LANGUAGE"),E("SET_VERSION"),E("SET_MODE"),E("SELECT_CONTENT"),E("SELECT_CHANNEL"),E("SELECT_EMBED_SIZE"),E("TOGGLE_TAB"),E("SET_TABS"),E("SET_THEME"));E("SET_TRANSCRIPTS_TIMELINE"),E("UPDATE_TRANSCRIPTS"),E("TOGGLE_FOLLOW_TRANSCRIPTS"),E("SEARCH_TRANSCRIPTS"),E("SET_SEARCH_TRANSCRIPTS_RESULTS"),E("NEXT_SEARCH_RESULT"),E("PREVIOUS_SEARCH_RESULT"),E("RESET_SEARCH_TRANSCRIPTS"),E("SHOW_ERROR"),E("HIDE_ERROR"),E("RETRY_PLAY"),E("ERROR_CONFIG_MEDIA"),E("ERROR_CONFIG_MISSING"),E("KEY_UP"),E("KEY_DOWN"),E("NEXT_PLAYLIST_ENTRY"),E("SELECT_PLAYLIST_ENTRY"),E("MARK_PLAYLIST_ENTRY_ACTIVE"),E("FILE_HOVER"),E("FILE_SELECT")},413:function(t,e,n){"use strict";var E=n(405);n.n(E).a},415:function(t,e,n){"use strict";var E=n(406);n.n(E).a},417:function(t,e,n){"use strict";var E=n(407);n.n(E).a},418:function(t,e,n){},421:function(t,e,n){"use strict";n.r(e);n(412),n(14);var E=n(436),_={name:"json-editor",data:{value:{}},props:["json","height","mode"],methods:{onChange:function(t){try{this.value=JSON.parse(t),this.$emit("update",this.value)}catch(t){}}},watch:{json:function(){Object(E.a)(this.json,this.value)||this.editor.set(this.json)}},mounted:function(){var t=this;n.e(20).then(n.t.bind(null,439,7)).then((function(e){t.editor=new e.default(t.$el,{search:!1,onChangeText:t.onChange.bind(t),sortObjectKeys:!1,mode:t.mode||"code",statusBar:!1}),t.$emit("ready",t.editor),t.editor.set(t.json)}))},beforeDestroy:function(){this.editor&&this.editor.destroy(),this.editor=null}},r=(n(413),n(3)),O=Object(r.a)(_,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"editor-container",style:{height:this.height}})}),[],!1,null,null,null);e.default=O.exports},422:function(t,e,n){"use strict";n.r(e);n(229),n(14);var E=n(60),_=(n(127),n(62)),r={name:"PodloveWebPlayer",props:{episode:{type:[String,Object],default:function(){return null}},config:{type:[String,Object],default:function(){return null}},id:{type:String},variant:{type:String,default:null,validator:function(t){return["xl","l","m"].includes(t)}},template:{type:String,default:null}},mounted:function(){var t=this;return Object(_.a)(regeneratorRuntime.mark((function e(){var n,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.config).then((function(t){return t.json()}));case 2:n=e.sent,_=t.$site.base,window.podlovePlayer(t.$el,t.episode,Object(E.a)(Object(E.a)({},n),{},{base:_})).then((function(e){return t.$emit("ready",e),e})).then(window.registerExternalEvents(t.id));case 5:case"end":return e.stop()}}),e)})))()}},O=(n(415),n(3)),a=Object(O.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"player",attrs:{id:this.id,"data-variant":this.variant,"data-template":this.template}},[this._t("default")],2)}),[],!1,null,"feaed72c",null);e.default=a.exports},423:function(t,e,n){"use strict";n.r(e);n(90);var E={props:{name:{type:String},color:{type:String},active:{type:Boolean}},methods:{select:function(){this.$emit("select",this.name)}}},_=(n(417),n(3)),r=Object(_.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"token",class:{active:t.active},on:{click:function(e){return t.select()}}},[n("div",{staticClass:"preview",style:{background:t.color}}),n("div",{staticClass:"name"},[t._v(t._s(t.name))])])}),[],!1,null,"bdf4e228",null);e.default=r.exports},435:function(t,e,n){"use strict";var E=n(418);n.n(E).a},440:function(t,e,n){"use strict";n.r(e);n(92),n(89),n(93),n(127);var E=n(62),_=n(437),r=n(438),O=n(433),a=(n(229),n(232),n(434)),s=function(){var t=Object(E.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("string"==typeof e){t.next=2;break}return t.abrupt("return",e);case 2:return t.prev=2,t.next=5,Object(a.a)(e);case 5:if(200===(n=t.sent).status){t.next=8;break}return t.abrupt("return",null);case 8:if(n.headers.get("content-type").includes("application/json")){t.next=10;break}return t.abrupt("return",null);case 10:return t.abrupt("return",n.json());case 13:return t.prev=13,t.t0=t.catch(2),console.warn(t.t0),t.abrupt("return",null);case 17:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(e){return t.apply(this,arguments)}}(),T=n(409),i=n(422),S=n(421),o=n(423),N={props:["episode","config"],name:"ColorPicker",data:function(){return{store:null,initialized:!1,selected:"brand",tokens:{brand:null,brandDark:null,brandDarkest:null,brandLightest:null,shadeDark:null,shadeBase:null,contrast:null,alt:null}}},components:{picker:O.Sketch,PodloveWebPlayer:i.default,Token:o.default,JsonEditor:S.default},methods:{onReady:function(t){this.store=t},updateTokens:function(t){var e=this;Object.keys(t).forEach((function(n){e.tokens[n]=t[n]}))},setJson:function(t){var e=Object(_.a)({},["theme","tokens"],t);this.updateTokens(e)},token:function(t){var e=Object(r.a)("#fff",t,this.tokens);return e.hex8?e.hex8:e},select:function(t){this.selected=t},updatePlayer:function(){this.store&&this.store.dispatch({type:T.j,payload:{version:5,theme:{tokens:{brand:this.token("brand"),brandDark:this.token("brandDark"),brandDarkest:this.token("brandDarkest"),brandLightest:this.token("brandLightest"),shadeDark:this.token("shadeDark"),shadeBase:this.token("shadeBase"),contrast:this.token("contrast"),alt:this.token("alt")}}}})}},computed:{tokenList:function(){return Object.keys(this.tokens)},json:function(){return{theme:{tokens:{brand:this.token("brand"),brandDark:this.token("brandDark"),brandDarkest:this.token("brandDarkest"),brandLightest:this.token("brandLightest"),shadeDark:this.token("shadeDark"),shadeBase:this.token("shadeBase"),contrast:this.token("contrast"),alt:this.token("alt")}}}}},mounted:function(){var t=this;return Object(E.a)(regeneratorRuntime.mark((function e(){var n,E;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(t.config).then(Object(r.a)({tokens:{}},"theme"));case 2:n=e.sent,E=n.tokens,t.updateTokens(E),t.initialized=!0;case 6:case"end":return e.stop()}}),e)})))()},watch:{tokens:{deep:!0,handler:function(){this.updatePlayer()}}}},c=(n(435),n(3)),u=Object(c.a)(N,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("podlove-web-player",{attrs:{episode:t.episode,config:t.config},on:{ready:t.onReady}}),t._v(" "),t.initialized?n("ClientOnly",[n("h3",[t._v("Tokens")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"column"},t._l(t.tokenList,(function(e,E){return n("token",{key:E,staticClass:"token",attrs:{name:e,color:t.token(e),active:t.selected===e},on:{select:t.select}})})),1),t._v(" "),n("div",{staticClass:"column"},[n("picker",{staticClass:"picker",model:{value:t.tokens[t.selected],callback:function(e){t.$set(t.tokens,t.selected,e)},expression:"tokens[selected]"}})],1)]),t._v(" "),n("h4",[t._v("Json")]),t._v(" "),n("div",{staticClass:"editor"},[n("json-editor",{attrs:{json:t.json,height:"250px"},on:{update:t.setJson}})],1)]):t._e()],1)}),[],!1,null,"e01d4268",null);e.default=u.exports}}]);