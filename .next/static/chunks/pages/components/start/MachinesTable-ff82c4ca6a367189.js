(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{4845:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/start/MachinesTable",function(){return n(4081)}])},1261:function(e,t,n){"use strict";n.r(t);t.default=function(e){var t,n="bg-green-600";return 0==e&&(t="w-0"),e>0&&e<10&&(t="w-3"),e>=10&&e<25&&(t="w-1/5"),e>=25&&e<50&&(t="w-1/4"),e>=50&&e<75&&(t="w-1/2"),e>=75&&e<100&&(t="w-3/4",n="bg-red-600"),100==e&&(t="w-full"),"h-full "+t+" "+n}},4081:function(e,t,n){"use strict";n.r(t);var a=n(5893),i=n(1261),r=n(1664),s=n.n(r),d=[{type:"esb",id:"4712",max_netto:26500,material:"Eisensp\xe4ne, gebrochen ESB, gebrochen",load:79,plan_date:"17.10.2022 02:31",pickup_date:"1/1/2022 01:00",netto:5880},{type:"bw",id:"9001 CMS-A",max_netto:9e3,material:"Eisensp\xe4ne, normal",load:31,plan_date:"21/12/2022 02:26",pickup_date:"4/4/2022 01:00",netto:2760},{type:"bw",id:"9002 CMS-A",max_netto:9e3,material:"Eisensp\xe4ne, normal",load:22,plan_date:"noch keine F\xfcllung",pickup_date:"-",netto:1960},{type:"esb",id:"4711",max_netto:26500,material:"Eisensp\xe4ne, gebrochen ESB, gebrochen",load:0,plan_date:"nicht ermittelbar",pickup_date:"-",netto:120},{type:"esb",id:"4711",max_netto:26500,material:"Eisensp\xe4ne, gebrochen ESB, gebrochen",load:0,plan_date:"nicht ermittelbar",pickup_date:"-",netto:120},{type:"esb",id:"4711",max_netto:26500,material:"Eisensp\xe4ne, gebrochen ESB, gebrochen",load:0,plan_date:"nicht ermittelbar",pickup_date:"-",netto:120}];t.default=function(e){var t=e.setMachineID,n=e.setPickupDate;return(0,a.jsx)("tbody",{className:"bg-gray-50",children:d.map((function(e){return(0,a.jsxs)("tr",{className:"text-xs border-t",children:[(0,a.jsxs)("td",{children:[e.type,": ",(0,a.jsx)("span",{className:"underline",children:(0,a.jsx)(s(),{href:"/machines/"+e.id,children:e.id})}),(0,a.jsx)("br",{}),(0,a.jsx)("span",{children:e.max_netto})]}),(0,a.jsx)("td",{children:e.material}),(0,a.jsxs)("td",{className:"flex",children:[(0,a.jsx)("div",{className:"border border-black bg-white w-32 mr-1.5",children:(0,a.jsx)("div",{className:(0,i.default)(e.load)})}),e.load,"%"]}),(0,a.jsxs)("td",{children:[e.plan_date,(0,a.jsx)("br",{}),(0,a.jsxs)("span",{id:"pickup_date_"+e.id,className:"-"!=e.pickup_date?"flex underline":"flex",children:[e.pickup_date,(0,a.jsx)("button",{onClick:function(){t(e.id),n(new Date(e.pickup_date))},children:(0,a.jsx)("img",{src:"-"!=e.pickup_date?"/icon_fragezeichen 1.svg":""})})]})]}),(0,a.jsx)("td",{children:e.netto})]},e.id)}))})}}},function(e){e.O(0,[774,888,179],(function(){return t=4845,e(e.s=t);var t}));var t=e.O();_N_E=t}]);