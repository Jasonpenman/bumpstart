(function(e){function t(t){for(var o,r,i=t[0],l=t[1],c=t[2],u=0,d=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(o=!1)}o&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},a={app:0},s=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("8a23"),a=n.n(o);a.a},"11d5":function(e,t,n){"use strict";var o=n("99e5"),a=n.n(o);a.a},"225f":function(e,t,n){"use strict";var o=n("63bd"),a=n.n(o);a.a},"506d":function(e,t,n){var o=n("e552").js,a=function(e){e=JSON.parse(e);var t="const express = require('express')\nconst app = express()\nconst port = ".concat(e.port,"\n\n");e.mongooseUrl&&(t+="const mongoose = require('mongoose')\n\n    mongoose.connect(\"".concat(e.mongooseUrl,'")\n.then(() => {\n  console.log(\'connected to databse\')\n})\n.catch(() => {\n  console.log("db connection failed")\n})\n')),e.accessControl&&(t+=" app.use((req, res, next) => {\n        res.setHeader('Access-Control-Allow-Origin', '*');\n        res.setHeader('Access-Control-Allow-Headers',\n         'Origin, X-Requested-With, Content-Type, Accept, Authorization');\n         ",e.gets.length&&(t+=" res.setHeader(\n           'Access-Control-Allow-Methods',\n           '".concat(e.gets,"');")),t+="     next();\n      })\n      "),e.endpoints&&e.endpoints.reverse().map((function(e){return t+='app.get("'+e.key+'",'+e.value+")\r\n"})),t+="\napp.listen(port, () => console.log('Example app listening on port ".concat(e.port,"!'))");try{var n=window.URL.createObjectURL(new Blob([o(t,{indent_size:2,space_in_empty_paren:!0})]),{type:"application/json"}),a=document.createElement("a");a.href=n,a.setAttribute("download","server.js"),document.body.appendChild(a),a.click()}catch(s){alert("An error occured/n"+s)}};e.exports=a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("dark")],1)},s=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-view-dashboard")])],1),n("v-list-item-content",[n("v-list-item-title",{on:{click:function(t){return e.$refs.expressComponent.clearStorage()}}},[e._v("Clear settings")])],1)],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-settings")])],1),n("v-list-item-content",[n("v-list-item-title",{on:{click:function(t){return e.$refs.expressComponent.buildData()}}},[e._v("Save State")])],1)],1)],1)],1),n("v-app-bar",{attrs:{app:"","clipped-left":""}},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",[e._v("BumpStart")]),n("v-col",{staticClass:"header-absolute-right"},[n("v-tooltip",{attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[n("v-btn",e._g({attrs:{icon:"",large:"",href:"https://github.com/Jasonpenman/bumpstart",target:"_blank"}},o),[n("v-icon",{attrs:{large:""}},[e._v("mdi-git")])],1)]}}])},[n("span",[e._v("Project github")])])],1)],1),n("v-content",[n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("express",{ref:"expressComponent"})],1)],1),n("v-footer",{attrs:{app:""}},[n("span",[e._v("© 2020")])])],1)},i=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"black lighten-5"},[n("h2",[e._v("Easy Express generator")]),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",[[n("v-col",[n("v-text-field",{attrs:{placeholder:e.options.value,label:"PORT"},on:{focus:function(t){return e.updateHelp(e.options.name)},blur:function(t){return e.updateHelp()},keyup:function(t){return e.updateHelp(e.options.name)}},model:{value:e.options.value,callback:function(t){e.$set(e.options,"value",t)},expression:"options.value"}})],1),n("v-col",[n("v-switch",{staticClass:"ma-2",attrs:{label:"Enable Access control to all origins"},on:{focus:function(t){return e.updateHelp("Access")},change:function(t){return e.updateHelp("Access")},mouseleave:function(t){return e.updateHelp()}},model:{value:e.accessControlAll,callback:function(t){e.accessControlAll=t},expression:"accessControlAll"}}),n("v-switch",{staticClass:"ma-2",attrs:{label:"Using mongoose?"},on:{mouseenter:function(t){return e.updateHelp()},focus:function(t){return e.updateHelp("mongoose")}},model:{value:e.useMongoose,callback:function(t){e.useMongoose=t},expression:"useMongoose"}}),n("transition",{attrs:{name:"bounce"}},[e.useMongoose?n("v-text-field",{attrs:{placeholder:"Paste your mongoose url",label:"Mongoose URL"},on:{focus:function(t){return e.updateHelp("mongoose")},blur:function(t){return e.updateHelp()},keyup:function(t){return e.updateHelp("mongoose")}},model:{value:e.mongooseUrl,callback:function(t){e.mongooseUrl=t},expression:"mongooseUrl"}}):e._e()],1)],1),n("transition",{attrs:{name:"bounce"}},[n("v-select",{staticClass:"pa-4",attrs:{items:e.serverGetList,label:"Allowed request types",multiple:"",hint:"","persistent-hint":""},on:{focus:function(t){return e.updateHelp("serverGetOptions")},blur:function(t){return e.updateHelp()},change:function(t){return e.updateHelp("serverGetOptions")}},model:{value:e.serverGetOptions,callback:function(t){e.serverGetOptions=t},expression:"serverGetOptions"}})],1),n("v-expansion-panels",{staticClass:"pa-4"},[n("h3",{staticClass:"text-left light"},[e._v("Endpoints "),n("v-btn",{staticClass:"float-right mb-4",attrs:{fab:"",dark:"",small:"",top:"",right:""},on:{click:function(t){e.dialog=!e.dialog}}},[n("v-icon",[e._v("mdi-plus")])],1)],1),e._l(e.endpoints,(function(t){return n("v-expansion-panel",{key:t.key,staticClass:"mb-2"},[n("v-expansion-panel-header",{staticClass:"text-left left"},[e._v(" "+e._s(t.key)+" ")]),n("v-expansion-panel-content",[n("code",{staticClass:"lang-bash",attrs:{spellcheck:"false",contenteditable:"true"},on:{blur:function(n){return e.updateEndpointValue(n,t.key)}}},[n("v-btn",{staticClass:"float-right ma-1",attrs:{fab:"",color:"red darken-4",small:"",outlined:"",top:"",right:""},on:{click:function(n){return e.removeEndpoint(t)}}},[n("v-icon",[e._v("mdi-minus")])],1),e._v(e._s(t.value))],1)])],1)}))],2)]],2),n("v-col",{staticClass:"pa-4"},[n("p",[e._v("Example code below")]),n("pre",{staticClass:"lang-bash prettyprint"},[e._v(e._s(e._f("tidy")(e.example))+" ")]),n("v-card-text",{staticClass:"mt-6 pa-4 dark-text"},[n("v-expansion-panels",[n("v-expansion-panel",{staticClass:"mb-2"},[n("v-expansion-panel-header",{staticClass:"text-left left"},[e._v(" Instructions ")]),n("v-expansion-panel-content",[n("v-card-text",{staticClass:"small-text"},[e._v("Enter your desired port"),n("br"),e._v(" Enable access control all origins adds changes to help prevent cors issues,"),n("br"),e._v(" Using mongoose adds the mongoose import and adds the connect function, just paste in your mongo.db url,"),n("br"),e._v(" Allowed request types sets up express to listen for each request type, toggle the ones you require,"),n("br"),e._v(" Click the "),n("v-btn",{staticClass:"tiny",attrs:{fab:"",dark:"",small:""}},[n("v-icon",{staticClass:"tiny"},[e._v("mdi-plus")])],1),e._v(" to add a new endpoint/route,"),n("br"),e._v(" clicking the endpoint then allows you to edit the code that runs when the endpoint is reached,"),n("br"),e._v(" Create express server will download your server.js file, add it to your project and run with node."),n("br"),n("br"),e._v(' Dont forget to run "npm i express" and if you are using mongoose run "npm i mongoose" in the project folder ')],1)],1)],1)],1),n("v-card-text",[e._v("BumpStart creates a simple express server form the details entered, you can add custom routes and edit the code each route uses. BumpStart only creates basic server.js files but is eneough to generate a starting point for your server and saves having to remember everything."),n("br"),e._v(" BumpStart was written in around a day as a quick example of my work.")]),n("v-card-text",[e._v("Jason Penman")])],1)],1)],1),n("v-btn",{staticClass:"ma-4",on:{click:function(t){return e.saveFile()}}},[e._v("Create express server")]),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-text",[n("v-text-field",{attrs:{label:"Endpoint name",autofocus:""},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.dialog=!1,e.addEndpoint()}},model:{value:e.newEndpointName,callback:function(t){e.newEndpointName=t},expression:"newEndpointName"}}),n("small",{staticClass:"grey--text"},[e._v("* Adds default example function, edit after saving")])],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.dialog=!1,e.addEndpoint()}}},[e._v("Save")])],1)],1)],1)],1)},c=[],p=(n("6762"),n("2fdb"),n("96cf"),n("3b8d")),u=(n("7514"),n("55dd"),n("a481"),n("506d")),d=n.n(u),v={name:"express",data:function(){return{dialog:!1,newEndpointName:"",options:{name:"PORT",value:"3000"},accessControlAll:!1,serverGetList:["GET","POST","PUT","PATCH","DELETE","OPTIONS"],serverGetOptions:["GET","POST","PUT","PATCH","DELETE","OPTIONS"],dbAddress:{DB:"your db addres goes here"},endpoints:[{key:"/",value:"(req, res) => {\n      res.status(200).send('Hello World!')}"}],defaultEndpointValue:"(req, res) => {\n      res.status(200).send('Hello World!')}",example:"",useMongoose:!1,mongooseUrl:"",finalData:{}}},props:{msg:String},filters:{tidy:function(e){return e?e.replace(/ +(?= )/g,""):""}},methods:{addEndpoint:function(){var e=this;return this.newEndpointName.indexOf("/")?this.newEndpointName="/"+this.newEndpointName:this.newEndpointName,this.newEndpointName&&!this.endpoints.some((function(t){return t.key===e.newEndpointName}))&&(this.endpoints.push({key:this.newEndpointName,value:this.defaultEndpointValue}),this.endpoints.sort((function(e,t){return e.key.localeCompare(t.key)}))),this.newEndpointName=""},removeEndpoint:function(e){this.endpoints=this.endpoints.filter((function(t){return t.key!==e.key}))},updateEndpointValue:function(e,t){this.endpoints.find((function(e){return e.key==t})).value=e.target.innerText},saveFile:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.buildData();case 2:d()(JSON.stringify(this.finalData));case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),updateHelp:function(e){switch(e){case"PORT":this.example="app.set('port', ".concat(this.options.value,");");break;case"mongoose":this.example='mongoose.connect("'.concat(this.mongooseUrl,'")\n                          .then(() => {\n                            console.log(\'connected to databse\');\n                          })\n                          .catch(() => {\n                            console.log("db connection failed");\n                          });');break;case"serverGetOptions":this.example=" res.setHeader(\n                           'Access-Control-Allow-Methods',\n                           ".concat(this.serverGetOptions.map((function(e){return'"'+e+'"'})),");\n                          ");break;case"Access":this.example="  // Allow access from anywhere\n                            res.setHeader('Access-Control-Allow-Origin', '*');\n                            res.setHeader('Access-Control-Allow-Headers',\n                          'Origin, X-Requested-With, Content-Type, Accept, Authorization');";break;default:this.example=""}},buildData:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t={},this.options.value&&(t.port=this.options.value),this.endpoints&&(t.endpoints=this.endpoints),this.useMongoose&&(t.mongooseUrl=this.mongooseUrl),this.serverGetOptions&&(t.gets=this.serverGetOptions),t.accessControl=this.accessControlAll,localStorage.setItem("server",JSON.stringify(t)),this.finalData=t;case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),reloadData:function(e){this.options.value=e.port,e.mongooseUrl&&(this.mongooseUrl=e.mongooseUrl),e.mongooseUrl&&(this.useMongoose=!0),e.endpoints&&(this.endpoints=e.endpoints),e.gets&&(this.serverGetOptions=e.gets),this.accessControlAll=e.accessControl},clearStorage:function(){localStorage.setItem("server",null)}},mounted:function(){localStorage.getItem("server").includes("port")&&this.reloadData(JSON.parse(localStorage.getItem("server")))}},f=v,m=(n("11d5"),n("2877")),h=n("6544"),g=n.n(h),b=n("8336"),x=n("b0af"),y=n("99d9"),w=n("62ad"),k=n("a523"),C=n("169a"),_=n("cd55"),E=n("49e2"),O=n("c865"),A=n("0393"),V=n("132d"),S=n("0fd9"),H=n("b974"),T=n("2fa4"),P=n("b73d"),j=n("8654"),N=Object(m["a"])(f,l,c,!1,null,"0dbb755b",null),U=N.exports;g()(N,{VBtn:b["a"],VCard:x["a"],VCardActions:y["a"],VCardText:y["b"],VCol:w["a"],VContainer:k["a"],VDialog:C["a"],VExpansionPanel:_["a"],VExpansionPanelContent:E["a"],VExpansionPanelHeader:O["a"],VExpansionPanels:A["a"],VIcon:V["a"],VRow:S["a"],VSelect:H["a"],VSpacer:T["a"],VSwitch:P["a"],VTextField:j["a"]});var G={components:{express:U},props:{source:String},data:function(){return{drawer:null}},created:function(){this.$vuetify.theme.dark=!0}},D=G,I=(n("225f"),n("7496")),M=n("40dc"),R=n("5bc1"),q=n("a75b"),L=n("553a"),B=n("8860"),J=n("da13"),$=n("1800"),F=n("5d23"),W=n("f774"),z=n("2a7f"),X=n("3a2f"),K=Object(m["a"])(D,r,i,!1,null,"3a38180e",null),Q=K.exports;g()(K,{VApp:I["a"],VAppBar:M["a"],VAppBarNavIcon:R["a"],VBtn:b["a"],VCol:w["a"],VContainer:k["a"],VContent:q["a"],VFooter:L["a"],VIcon:V["a"],VList:B["a"],VListItem:J["a"],VListItemAction:$["a"],VListItemContent:F["a"],VListItemTitle:F["b"],VNavigationDrawer:W["a"],VToolbarTitle:z["a"],VTooltip:X["a"]});var Y={name:"App",components:{dark:Q},data:function(){return{}}},Z=Y,ee=(n("034f"),Object(m["a"])(Z,a,s,!1,null,null,null)),te=ee.exports;g()(ee,{VApp:I["a"]});var ne=n("f309");o["a"].use(ne["a"]);var oe=new ne["a"]({});o["a"].config.productionTip=!1,new o["a"]({vuetify:oe,render:function(e){return e(te)}}).$mount("#app")},"63bd":function(e,t,n){},"8a23":function(e,t,n){},"99e5":function(e,t,n){}});
//# sourceMappingURL=app.5945c33c.js.map