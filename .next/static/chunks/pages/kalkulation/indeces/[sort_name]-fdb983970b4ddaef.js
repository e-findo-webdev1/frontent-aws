(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6295],{3449:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kalkulation/indeces/[sort_name]",function(){return n(7585)}])},1551:function(e,t,n){"use strict";n.r(t),t.default=function(e){return encodeURIComponent(e).split("").map((function(e){return e.charCodeAt(0).toString(16)})).join("")}},7585:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(7294),c=n(6154),s=n(1664),a=n.n(s),l=n(1163),i=n(8422),d=n(1551);t.default=function(){var e=(0,l.useRouter)().query,t=(0,o.useState)({sort_name:"",description:"",indexgroup_name:""}),n=t[0],s=t[1],u=(0,o.useState)(),m=u[0],x=u[1],h=(0,o.useState)(),f=h[0],p=h[1];(0,o.useEffect)((function(){c.Z.get("https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/sorts").then((function(t){s(t.data.Items.filter((function(t){return t.sort_name==(0,i.default)(e.sort_name)}))[0])})).catch((function(e){console.log(e.response)})),c.Z.get("https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices").then((function(t){x(t.data.Items.filter((function(t){return t.price_matrix==(0,i.default)(e.sort_name)}))[0])})).catch((function(e){console.log(e.response)})),c.Z.get("https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines").then((function(e){p(e.data.Items)})).catch((function(e){console.log(e.response)}))}),[e]),console.log(f);return(0,r.jsxs)("div",{className:"px-20",children:[(0,r.jsx)(a(),{href:"/kalkulation/index-management/",children:(0,r.jsx)("button",{className:"float-right border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs",children:"\u2190 Zur\xfcck"})}),(0,r.jsx)("div",{className:"w-full flex float-right mt-5",children:(0,r.jsx)(a(),{href:"/kalkulation/indeces/new-index/"+e.sort_name,children:(0,r.jsxs)("button",{className:"float-right border ml-auto p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs",children:[" ",(0,r.jsx)("p",{children:"+ Neuer Index"})]})})}),(0,r.jsx)("p",{className:"text-lg font-bold mb-3",children:"Indexe zu der Sorte '"+n.indexgroup_name+" - "+n.sort_name+"'"}),(0,r.jsx)("div",{className:"mb-3 sm:rounded-lg shadow-md border overflow-auto max-h-full w-3/5 mt-3",children:(0,r.jsxs)("table",{className:"flex-row w-full table-fixed",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{className:"text-xs text-gray-500 border-b text-left",children:[(0,r.jsx)("th",{className:"font-normal",children:"Indexname"}),(0,r.jsx)("th",{className:"font-normal text-right",children:"Verkn\xfcpfte Maschinen"}),(0,r.jsx)("th",{})]})}),(0,r.jsx)("tbody",{className:"bg-gray-50",children:m?m.indeces.sort((function(e,t){return e<t?-1:e>t?1:0})).map((function(e){return(0,r.jsxs)("tr",{className:"bg-gray-50 text-xs border-b text-left",children:[(0,r.jsx)("td",{className:"underline",children:(0,r.jsx)(a(),{href:"/kalkulation/indeces/edit-index/"+(0,d.default)(m.price_matrix+" - "+e),children:e})}),(0,r.jsx)("td",{className:"text-right",children:f?f.filter((function(t){return t.index==e})).length:""}),(0,r.jsx)("td",{className:"text-right",children:(0,r.jsx)("button",{className:"p-2 font-bold text-xs border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md border",onClick:function(){!function(e){var t;t=m.indeces?m.indeces:[];var r=m.indeces.findIndex((function(e){return e==e}));t.splice(r,1),c.Z.put("https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/price-matrices",{price_matrix:n.sort_name,indexgroup_name:n.indexgroup_name,indeces:t}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}()},children:"Index l\xf6schen"})})]},e)})):""})]})})]})}}},function(e){e.O(0,[9774,2888,179],(function(){return t=3449,e(e.s=t);var t}));var t=e.O();_N_E=t}]);