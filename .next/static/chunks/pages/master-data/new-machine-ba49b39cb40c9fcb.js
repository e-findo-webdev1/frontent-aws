(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[658],{6685:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/master-data/new-machine",function(){return t(3122)}])},3122:function(e,n,t){"use strict";t.r(n);var a=t(5893),r=t(196),s=t(7294);n.default=function(){var e=(0,s.useState)([]),n=e[0],t=e[1],l=(0,s.useState)(0),o=l[0],c=l[1],i=(0,s.useState)("esb"),p=i[0],d=i[1],u=(0,s.useState)(""),h=u[0],x=u[1],g=(0,s.useState)(""),m=g[0],j=g[1],w=(0,s.useState)("Altholz A1-A3"),b=w[0],f=w[1],N=(0,s.useState)("normal"),v=N[0],y=N[1],S=(0,s.useState)(""),C=S[0],k=S[1],_=(0,s.useState)(0),T=_[0],M=_[1],V=(0,s.useState)(0),F=V[0],E=V[1],B=(0,s.useState)(0),P=B[0],q=B[1],A=(0,s.useState)(0),D=A[0],I=A[1],G=(0,s.useState)(0),z=G[0],W=G[1],H=(0,s.useState)(0),O=H[0],X=H[1],Z=(0,s.useState)(!1),K=Z[0],L=Z[1],J=(0,s.useState)(!1),Q=J[0],R=J[1],U=(0,s.useState)("Automatisch"),Y=U[0],$=U[1],ee=(0,s.useState)("Plandatum V.1"),ne=ee[0],te=ee[1],ae=(0,s.useState)("Wird bef\xfcllt (1)"),re=ae[0],se=ae[1],le=(0,s.useState)("e-findo GmbH"),oe=le[0],ce=le[1],ie={machine_id:0,machineType:"",machineName:"",group:"",waretype:"",quality:"",index:"",maxNetto:0,minContainer:0,maxContainer:0,averageThroughput:0,manualTara:"",minForFullStart:0,newFT111:"",automaticTara:"",fillingType:"",plandateCalculation:"",status:"",client:""};(0,s.useEffect)((function(){r.ZP.get("https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes").then((function(e){t(e.data.Items)})).catch((function(e){console.log(e.response)}))}));var pe=function(e){r.ZP.put("https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines",e).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))};return(0,a.jsxs)("div",{id:"content-page",className:"mx-20 overflow-auto h-full",children:[(0,a.jsx)("p",{className:"mb-7 text-3xl font-bold",children:"Maschinen"}),(0,a.jsx)("div",{children:(0,a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),ie.machine_id=o,ie.machineType=p,ie.machineName=h,ie.group=m,ie.waretype=b,ie.quality=v,ie.index=C,ie.maxNetto=T,ie.minContainer=F,ie.maxContainer=P,ie.averageThroughput=D,ie.manualTara=z,ie.minForFullStart=O,ie.newFT111=K,ie.automaticTara=Q,ie.fillingType=Y,ie.plandateCalculation=ne,ie.status=re,ie.client=oe,console.log(ie),pe(ie)},children:[(0,a.jsxs)("table",{className:"text-sm",children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"p-1 pl-0",children:"Maschinen ID"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsx)("input",{id:"machineID",className:"border rounded w-full pl-2.5 py-0.5",onChange:function(e){return c(parseInt(e.target.value))},required:!0})}),(0,a.jsx)("td",{className:"p-1 pl-3",children:"Durchsatz Durchschnitt"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsx)("input",{className:"border rounded w-full pl-2.5 py-0.5",defaultValue:"0",onChange:function(e){return I(e.target.value)}})})]}),(0,a.jsxs)("tr",{className:"h-8",children:[(0,a.jsx)("td",{className:"p-1 pl-0",children:"Maschinentyp"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsxs)("select",{id:"machineType",className:"w-full pl-2.5 py-0.5 appearance-none border rounded bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')] bg-no-repeat bg-[length:15px] [background-position-x:95%] [background-position-y:5px]",onChange:function(e){return d(e.target.value)},children:[(0,a.jsx)("option",{children:"esb"}),(0,a.jsx)("option",{children:"bw"}),(0,a.jsx)("option",{children:"Silo"})]})}),(0,a.jsx)("td",{className:"p-1 pl-3",children:"Man. Tara (Maschine)"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsx)("input",{className:"border rounded w-full pl-2.5 py-0.5",defaultValue:"0",onChange:function(e){return W(e.target.value)}})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"p-1 pl-0 pr-12",children:"Machinenbezeichnung"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsx)("input",{id:"machineName",className:"border rounded w-full pl-2.5 py-0.5",required:!0,onChange:function(e){return x(e.target.value)}})}),(0,a.jsx)("td",{className:"p-1 pl-3",children:"Min. F\xfcllmenge f\xfcr F\xfcll-Start"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsx)("input",{className:"border rounded w-full pl-2.5 py-0.5",defaultValue:"0",onChange:function(e){return X(e.target.value)}})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"p-1 pl-0",children:"Gruppierung"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsx)("input",{className:"border rounded w-full pl-2.5 py-0.5",onChange:function(e){return j(e.target.value)}})}),(0,a.jsx)("td",{className:"p-1 pl-3 pr-12",children:"Neue Berechnung FT-111 (automatisch)"}),(0,a.jsx)("td",{className:"p-1 pl-0.5",children:(0,a.jsx)("input",{type:"checkbox",onChange:function(e){return L(e.target.checked)}})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"p-1 pl-0",children:"Warentyp"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsx)("select",{className:"w-full pl-2.5 py-0.5 appearance-none border rounded bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')] bg-no-repeat bg-[length:15px] [background-position-x:95%] [background-position-y:5px]",onChange:function(e){return f(e.target.value)},children:n?n.sort((function(e,n){return e.name_waretype<n.name_waretype?-1:e.name_waretype>n.name_waretype?1:0})).map((function(e){return(0,a.jsx)("option",{children:e.name_waretype},e.waretype_id)})):""})}),(0,a.jsx)("td",{className:"p-1 pl-3",children:"Einmaliges Tarieren"}),(0,a.jsx)("td",{className:"p-1 pl-0.5",children:(0,a.jsx)("input",{type:"checkbox",onChange:function(e){return R(e.target.checked)}})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"p-1 pl-0",children:"Warenqualit\xe4t"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsxs)("select",{className:"w-full pl-2.5 py-0.5 appearance-none border rounded bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')] bg-no-repeat bg-[length:15px] [background-position-x:95%] [background-position-y:5px]",onChange:function(e){return y(e.target.value)},children:[(0,a.jsx)("option",{children:"normal"}),(0,a.jsx)("option",{children:"gebrochen"})]})}),(0,a.jsx)("td",{className:"p-1 pl-3",children:"Bef\xfcllart"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsxs)("select",{className:"w-full pl-2.5 py-0.5 appearance-none border rounded bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')] bg-no-repeat bg-[length:15px] [background-position-x:95%] [background-position-y:5px]",onChange:function(e){return $(e.target.value)},children:[(0,a.jsx)("option",{children:"Automatisch"}),(0,a.jsx)("option",{children:"Manuell"})]})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"p-1 pl-0",children:"Index"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsxs)("select",{className:"w-full pl-2.5 py-0.5 appearance-none border rounded bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')] bg-no-repeat bg-[length:15px] [background-position-x:95%] [background-position-y:5px]",onChange:function(e){return k(e.target.value)},children:[(0,a.jsx)("option",{children:"- kein Index -"}),(0,a.jsx)("option",{children:"BDSV - Sorte 2/8 - Bundesweit"}),(0,a.jsx)("option",{children:"BDSV - Sorte 5 - Bundesweit"}),(0,a.jsx)("option",{children:"Bundesweit"}),(0,a.jsx)("option",{children:"Euwid V2A"}),(0,a.jsx)("option",{children:"LME HG"}),(0,a.jsx)("option",{children:"Marketpreis International Sorte 2"}),(0,a.jsx)("option",{children:"Nord-Ost"}),(0,a.jsx)("option",{children:"Sorte 5"}),(0,a.jsx)("option",{children:"S\xfcd"}),(0,a.jsx)("option",{children:"West"})]})}),(0,a.jsx)("td",{className:"p-1 pl-3",children:"Plandatum Berechnung"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsxs)("select",{className:"w-full pl-2.5 py-0.5 appearance-none border rounded bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')] bg-no-repeat bg-[length:15px] [background-position-x:95%] [background-position-y:5px]",onChange:function(e){return te(e.target.value)},children:[(0,a.jsx)("option",{children:"Plandatum V.1"}),(0,a.jsx)("option",{children:"Plandatum V.2"})]})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"p-1 pl-0",children:"Max Netto"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsx)("input",{className:"border rounded w-full pl-2.5 py-0.5",defaultValue:"0",onChange:function(e){return M(e.target.value)}})}),(0,a.jsx)("td",{className:"p-1 pl-3",children:"Status"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsxs)("select",{className:"w-full pl-2.5 py-0.5 appearance-none border rounded bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')] bg-no-repeat bg-[length:15px] [background-position-x:95%] [background-position-y:5px]",onChange:function(e){return se(e.target.value)},children:[(0,a.jsx)("option",{children:"Wird bef\xfcllt (1)"}),(0,a.jsx)("option",{children:"kein Container (2)"}),(0,a.jsx)("option",{children:"Container tariert (3)"}),(0,a.jsx)("option",{children:"\xdcbergewicht (4)"}),(0,a.jsx)("option",{children:"Fertig (5)"}),(0,a.jsx)("option",{children:"Abholung (6)"}),(0,a.jsx)("option",{children:"Stillstand (7)"}),(0,a.jsx)("option",{children:"Containertausch (8)"})]})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"p-1 pl-0",children:"Min Container Gewicht"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsx)("input",{className:"border rounded w-full pl-2.5 py-0.5",defaultValue:"0",onChange:function(e){return E(e.target.value)}})}),(0,a.jsx)("td",{className:"p-1 pl-3",children:"Kunde"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsx)("select",{className:"w-full pl-2.5 py-0.5 appearance-none border rounded bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')] bg-no-repeat bg-[length:15px] [background-position-x:95%] [background-position-y:5px]",onChange:function(e){return ce(e.target.value)},children:(0,a.jsx)("option",{children:"e-findo GmbH"})})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"p-1 pl-0",children:"Max Container Gewicht"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsx)("input",{className:"border rounded w-full pl-2.5 py-0.5",defaultValue:"0",onChange:function(e){return q(e.target.value)}})})]}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{})}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsx)("input",{className:"float-right border p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs",type:"submit",value:"Speichern"})})]})]}),(0,a.jsx)("button",{className:"mt-9 border p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs",children:"Maschine entfernen"})]})})]})}}},function(e){e.O(0,[196,774,888,179],(function(){return n=6685,e(e.s=n);var n}));var n=e.O();_N_E=n}]);