(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[607],{9723:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/machines/[id]",function(){return n(4626)}])},4626:function(e,t,n){"use strict";n.r(t);var a=n(5893),s=n(1163),r=n(7294),c=(n(8698),n(9198)),o=n.n(c),l=n(6154),i=n(381),d=n.n(i);t.default=function(){var e=(0,r.useState)(new Date),t=e[0],n=e[1],c=(0,r.useState)(new Date),i=c[0],m=c[1],h=(0,r.useState)(new Date),u=h[0],x=h[1],f=(0,r.useState)([]),g=f[0],p=f[1],b=(0,r.useState)([]),j=b[0],N=b[1];(0,r.useEffect)((function(){l.Z.get("https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/log-data").then((function(e){p(e.data.flat())})).catch((function(e){console.log(e.response)}));var e=new Date;e.setDate(i.getDate()+1),e.setHours(0,0,0,0),x(e),t.setHours(0,0,0,0),l.Z.get("https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines").then((function(e){N(e.data.Items.filter((function(e){return e.machine_id==v.id})))})).catch((function(e){console.log(e.response)}))}),[t,i]);var w,v=(0,s.useRouter)().query;void 0!==g&&(w=g.filter((function(e){return e.id==v.id})).filter((function(e){return new Date(e.timestamp)>d()().subtract(1,"h").toDate()&&new Date(e.timestamp)<d()().toDate()})).reduce((function(e,t){return e+=t.averageThroughput}),0)/g.filter((function(e){return e.id==v.id})).filter((function(e){return new Date(e.timestamp)>d()().subtract(1,"h").toDate()&&new Date(e.timestamp)<d()().toDate()})).length);return(0,a.jsxs)("div",{id:"content-page",className:"mx-10 p-10",children:[(0,a.jsx)("p",{className:"text-3xl font-bold",children:"\xdcbersicht"}),(0,a.jsx)("span",{className:"text-sm font-bold",children:"Status Maschine"}),(0,a.jsx)("div",{className:"text-sm flex",children:(0,a.jsxs)("div",{className:"flex space-x-9 mt-4 mb-2",children:[(0,a.jsxs)("div",{className:"flex space-x-2",children:[(0,a.jsx)("span",{className:"m-auto",children:"Von:"}),(0,a.jsx)(o(),{className:"shadow-md border text-ce,nter p-0.5 w-full",dateFormat:"yyyy/MM/dd",selected:t,onChange:function(e){return n(e)}})]}),(0,a.jsxs)("div",{className:"flex space-x-2",children:[(0,a.jsx)("span",{className:"m-auto",children:"Bis:"}),(0,a.jsx)(o(),{className:"shadow-md border text-center p-0.5 m-0",dateFormat:"yyyy/MM/dd",selected:i,onChange:function(e){return m(e)}})]}),(0,a.jsx)("button",{className:"p-1 px-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md border text-xs font-semibold",onClick:function(){l.Z.get("https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/log-data").then((function(e){p(e.data.flat())})).catch((function(e){console.log(e.response)}))},children:"Refresh"})]})}),(0,a.jsxs)("button",{className:"my-3 mr-3 p-1 px-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md border text-xs font-semibold",children:["Zeit seit Stellung: ",0!=j.length&&0!=j[0].timeOfContainerTara?"ca."+d()(j[0].timeOfContainerTara).fromNow():"ca. 0 Stunden"]}),(0,a.jsxs)("button",{className:"my-3 mr-3 p-1 px-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md border text-xs font-semibold",children:["F\xfcllzeit seit Stellung: ",0!=j.length&&0!=j[0].timeOfFillingStart?"ca."+d()(j[0].timeOfFillingStart).fromNow():"ca. 0 Stunden"]}),(0,a.jsxs)("button",{className:"my-3 mr-3 p-1 px-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md border text-xs font-semibold",children:["Stillstand seit Produktionszeit: ",0!=j.length?" ca. "+j[0].totalStandstill/36e5+" Stunden":""]}),(0,a.jsxs)("button",{className:"my-3 mr-3 p-1 px-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md border text-xs font-semibold",children:["Letzte Bef\xfcllung: ",0!=j.length&&j[0].lastFilling&&0!=j[0].lastFilling?d()(j[0].lastFilling).format("DD.MM.YYYY, HH:mm"):"ca. 0 Stunden"," ",0!=j.length&&0!=j[0].lastFilling&&j[0].lastFilling?"("+d()(j[0].lastFilling).fromNow()+")":""]}),(0,a.jsxs)("button",{className:"my-3 mr-3 p-1 px-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md border text-xs font-semibold",children:["Zeit seit F\xfcllstart: ",0!=j.length&&0!=j[0].firstFilling?"ca."+d()(j[0].firstFilling).fromNow():"ca. 0 Stunden"]}),(0,a.jsxs)("button",{className:"my-3 mr-3 p-1 px-3.5 border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md border text-xs font-semibold",children:["Geschwindigkeit letzte Stunde: ",0!=j.length&&0!=j[0].averageThroughput&&w?"ca. "+parseInt(w)+" kg/h":"ca. 0 kg/h"]}),(0,a.jsx)("div",{className:"shadow-md border h-72 overflow-auto mt-5",children:(0,a.jsxs)("table",{className:"flex-row w-full table-auto",children:[(0,a.jsx)("thead",{className:"sticky top-0 bg-white rounded-lg",children:(0,a.jsxs)("tr",{className:"text-xs text-gray-500 border-b text-left text-center",children:[(0,a.jsx)("th",{className:"font-normal",children:"Masch.-ID"}),(0,a.jsx)("th",{className:"font-normal",children:"Typ"}),(0,a.jsx)("th",{className:"font-normal",children:"Datum erfasst"}),(0,a.jsx)("th",{className:"font-normal",children:"Brutto"}),(0,a.jsx)("th",{className:"font-normal",children:"Tara (Log)"}),(0,a.jsx)("th",{className:"font-normal",children:"Tara (Masch)"}),(0,a.jsx)("th",{className:"font-normal",children:"Netto (Log)"}),(0,a.jsx)("th",{className:"font-normal",children:"Netto (Masch)"}),(0,a.jsx)("th",{className:"font-normal",children:"kg/h"}),(0,a.jsx)("th",{className:"font-normal",children:"Warenart"}),(0,a.jsx)("th",{className:"font-normal",children:"Netto"}),(0,a.jsx)("th",{className:"font-normal",children:"Positiv"}),(0,a.jsx)("th",{className:"font-normal",children:"\xdcbergew."}),(0,a.jsx)("th",{className:"font-normal",children:"Stabil"}),(0,a.jsx)("th",{className:"font-normal",children:"Print"}),(0,a.jsx)("th",{className:"font-normal",children:"Printausgabe"}),(0,a.jsx)("th",{className:"font-normal",children:"Status Maschine"})]})}),(0,a.jsx)("tbody",{className:"bg-gray-50 text-center",children:void 0!==g?g.filter((function(e){return e.machine_id==v.id})).filter((function(e){return e.timestamp>d()(t).unix()&&e.timestamp<d()(u).unix()})).sort((function(e,t){return new Date(t.timestamp)-new Date(e.timestamp)})).map((function(e){return(0,a.jsxs)("tr",{className:"text-xs border-t",children:[(0,a.jsx)("td",{children:e.machine_id}),(0,a.jsx)("td",{children:e.machineType}),(0,a.jsxs)("td",{children:[d().unix(e.timestamp).utc().format("DD.MM.YYYY"),",",d().unix(e.timestamp).utc().format(" HH:mm")]}),(0,a.jsxs)("td",{children:[parseInt(e.indicateWeight)+parseInt(e.tareWeight)," kg"]}),(0,a.jsxs)("td",{children:[parseInt(e.tareWeight)," kg"]}),(0,a.jsxs)("td",{children:[parseInt(e.tareWeight)," kg"]}),(0,a.jsxs)("td",{children:[parseInt(e.indicateWeight)," kg"]}),(0,a.jsxs)("td",{children:[parseInt(e.indicateWeight)," kg"]}),(0,a.jsx)("td",{children:e.averageThroughput?e.averageThroughput.toFixed(2):"0"}),(0,a.jsx)("td",{children:j?j[0].waretype:""}),(0,a.jsx)("td",{children:"true"==e.isNetWeight?"Ja":"Nein"}),(0,a.jsx)("td",{children:"true"==e.isPositiveWeight?"Ja":"Nein"}),(0,a.jsx)("td",{children:"true"==e.isOverweight?"Ja":"Nein"}),(0,a.jsx)("td",{children:"true"==e.isStable?"Ja":"Nein"}),(0,a.jsx)("td",{children:"true"==e.isPrintTriggered?"Ja":"Nein"}),(0,a.jsx)("td",{children:e.printContent}),(0,a.jsx)("td",{children:e.status})]},e.timestamp)})):""})]})})]})}},8698:function(){}},function(e){e.O(0,[885,198,696,774,888,179],(function(){return t=9723,e(e.s=t);var t}));var t=e.O();_N_E=t}]);