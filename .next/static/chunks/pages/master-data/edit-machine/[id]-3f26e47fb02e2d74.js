(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[561],{8839:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/master-data/edit-machine/[id]",function(){return t(8199)}])},8199:function(e,n,t){"use strict";t.r(n);var a=t(5893),r=t(196),s=t(7294),l=t(1163);n.default=function(){var e=(0,s.useState)([]),n=e[0],t=e[1],o=(0,s.useState)(0),c=o[0],i=o[1],d=(0,s.useState)("esb"),p=d[0],u=d[1],h=(0,s.useState)(""),x=h[0],g=h[1],m=(0,s.useState)(""),j=m[0],w=m[1],b=(0,s.useState)("Altholz A1-A3"),f=b[0],N=b[1],v=(0,s.useState)("normal"),y=v[0],S=v[1],C=(0,s.useState)(""),k=C[0],_=C[1],T=(0,s.useState)(0),M=T[0],V=T[1],F=(0,s.useState)(0),E=F[0],q=F[1],B=(0,s.useState)(0),P=B[0],A=B[1],D=(0,s.useState)(0),I=D[0],G=D[1],z=(0,s.useState)(0),W=z[0],H=z[1],O=(0,s.useState)(0),X=O[0],Z=O[1],K=(0,s.useState)(!1),L=K[0],R=K[1],J=(0,s.useState)(!1),Q=J[0],U=J[1],Y=(0,s.useState)("Automatisch"),$=Y[0],ee=Y[1],ne=(0,s.useState)("Plandatum V.1"),te=ne[0],ae=ne[1],re=(0,s.useState)("Wird bef\xfcllt (1)"),se=re[0],le=re[1],oe=(0,s.useState)("e-findo GmbH"),ce=oe[0],ie=oe[1],de={machine_id:0,machineType:"",machineName:"",group:"",waretype:"",quality:"",index:"",maxNetto:0,minContainer:0,maxContainer:0,averageThroughput:0,manualTara:"",minForFullStart:0,newFT111:"",automaticTara:"",fillingType:"",plandateCalculation:"",status:"",client:""};(0,s.useEffect)((function(){r.ZP.get("https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/waretypes").then((function(e){t(e.data.Items)})).catch((function(e){console.log(e.response)}))}));var pe=function(e){r.ZP.put("https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines",e).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},ue=(0,l.useRouter)().query;return(0,a.jsxs)("div",{id:"content-page",className:"mx-20 overflow-auto h-full",children:[(0,a.jsxs)("p",{className:"mb-7 text-3xl font-bold",children:["Maschinen ",ue.id,""!=x?" ("+x+")":""]}),(0,a.jsx)("div",{children:(0,a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),de.machine_id=c,de.machineType=p,de.machineName=x,de.group=j,de.waretype=f,de.quality=y,de.index=k,de.maxNetto=M,de.minContainer=E,de.maxContainer=P,de.averageThroughput=I,de.manualTara=W,de.minForFullStart=X,de.newFT111=L,de.automaticTara=Q,de.fillingType=$,de.plandateCalculation=te,de.status=se,de.client=ce,console.log(de),pe(de)},children:[(0,a.jsxs)("table",{className:"text-sm",children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"p-1 pl-0",children:"Maschinen ID"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsx)("input",{id:"machineID",className:"border rounded w-full pl-2.5 py-0.5",onChange:function(e){return i(parseInt(e.target.value))},required:!0,defaultValue:ue.id})}),(0,a.jsx)("td",{className:"p-1 pl-3",children:"Durchsatz Durchschnitt"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsx)("input",{className:"border rounded w-full pl-2.5 py-0.5",defaultValue:"0",onChange:function(e){return G(e.target.value)}})})]}),(0,a.jsxs)("tr",{className:"h-8",children:[(0,a.jsx)("td",{className:"p-1 pl-0",children:"Maschinentyp"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsxs)("select",{id:"machineType",className:"w-full pl-2.5 py-0.5 appearance-none border rounded bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')] bg-no-repeat bg-[length:15px] [background-position-x:95%] [background-position-y:5px]",onChange:function(e){return u(e.target.value)},children:[(0,a.jsx)("option",{children:"esb"}),(0,a.jsx)("option",{children:"bw"}),(0,a.jsx)("option",{children:"Silo"})]})}),(0,a.jsx)("td",{className:"p-1 pl-3",children:"Man. Tara (Maschine)"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsx)("input",{className:"border rounded w-full pl-2.5 py-0.5",defaultValue:"0",onChange:function(e){return H(e.target.value)}})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"p-1 pl-0 pr-12",children:"Machinenbezeichnung"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsx)("input",{id:"machineName",className:"border rounded w-full pl-2.5 py-0.5",required:!0,onChange:function(e){return g(e.target.value)}})}),(0,a.jsx)("td",{className:"p-1 pl-3",children:"Min. F\xfcllmenge f\xfcr F\xfcll-Start"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsx)("input",{className:"border rounded w-full pl-2.5 py-0.5",defaultValue:"0",onChange:function(e){return Z(e.target.value)}})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"p-1 pl-0",children:"Gruppierung"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsx)("input",{className:"border rounded w-full pl-2.5 py-0.5",onChange:function(e){return w(e.target.value)}})}),(0,a.jsx)("td",{className:"p-1 pl-3 pr-12",children:"Neue Berechnung FT-111 (automatisch)"}),(0,a.jsx)("td",{className:"p-1 pl-0.5",children:(0,a.jsx)("input",{type:"checkbox",onChange:function(e){return R(e.target.checked)}})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"p-1 pl-0",children:"Warentyp"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsx)("select",{className:"w-full pl-2.5 py-0.5 appearance-none border rounded bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')] bg-no-repeat bg-[length:15px] [background-position-x:95%] [background-position-y:5px]",onChange:function(e){return N(e.target.value)},children:n?n.sort((function(e,n){return e.name_waretype<n.name_waretype?-1:e.name_waretype>n.name_waretype?1:0})).map((function(e){return(0,a.jsx)("option",{children:e.name_waretype},e.waretype_id)})):""})}),(0,a.jsx)("td",{className:"p-1 pl-3",children:"Einmaliges Tarieren"}),(0,a.jsx)("td",{className:"p-1 pl-0.5",children:(0,a.jsx)("input",{type:"checkbox",onChange:function(e){return U(e.target.checked)}})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"p-1 pl-0",children:"Warenqualit\xe4t"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsxs)("select",{className:"w-full pl-2.5 py-0.5 appearance-none border rounded bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')] bg-no-repeat bg-[length:15px] [background-position-x:95%] [background-position-y:5px]",onChange:function(e){return S(e.target.value)},children:[(0,a.jsx)("option",{children:"normal"}),(0,a.jsx)("option",{children:"gebrochen"})]})}),(0,a.jsx)("td",{className:"p-1 pl-3",children:"Bef\xfcllart"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsxs)("select",{className:"w-full pl-2.5 py-0.5 appearance-none border rounded bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')] bg-no-repeat bg-[length:15px] [background-position-x:95%] [background-position-y:5px]",onChange:function(e){return ee(e.target.value)},children:[(0,a.jsx)("option",{children:"Automatisch"}),(0,a.jsx)("option",{children:"Manuell"})]})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"p-1 pl-0",children:"Index"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsxs)("select",{className:"w-full pl-2.5 py-0.5 appearance-none border rounded bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')] bg-no-repeat bg-[length:15px] [background-position-x:95%] [background-position-y:5px]",onChange:function(e){return _(e.target.value)},children:[(0,a.jsx)("option",{children:"- kein Index -"}),(0,a.jsx)("option",{children:"BDSV - Sorte 2/8 - Bundesweit"}),(0,a.jsx)("option",{children:"BDSV - Sorte 5 - Bundesweit"}),(0,a.jsx)("option",{children:"Bundesweit"}),(0,a.jsx)("option",{children:"Euwid V2A"}),(0,a.jsx)("option",{children:"LME HG"}),(0,a.jsx)("option",{children:"Marketpreis International Sorte 2"}),(0,a.jsx)("option",{children:"Nord-Ost"}),(0,a.jsx)("option",{children:"Sorte 5"}),(0,a.jsx)("option",{children:"S\xfcd"}),(0,a.jsx)("option",{children:"West"})]})}),(0,a.jsx)("td",{className:"p-1 pl-3",children:"Plandatum Berechnung"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsxs)("select",{className:"w-full pl-2.5 py-0.5 appearance-none border rounded bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')] bg-no-repeat bg-[length:15px] [background-position-x:95%] [background-position-y:5px]",onChange:function(e){return ae(e.target.value)},children:[(0,a.jsx)("option",{children:"Plandatum V.1"}),(0,a.jsx)("option",{children:"Plandatum V.2"})]})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"p-1 pl-0",children:"Max Netto"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsx)("input",{className:"border rounded w-full pl-2.5 py-0.5",defaultValue:"0",onChange:function(e){return V(e.target.value)}})}),(0,a.jsx)("td",{className:"p-1 pl-3",children:"Status"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsxs)("select",{className:"w-full pl-2.5 py-0.5 appearance-none border rounded bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')] bg-no-repeat bg-[length:15px] [background-position-x:95%] [background-position-y:5px]",onChange:function(e){return le(e.target.value)},children:[(0,a.jsx)("option",{children:"Wird bef\xfcllt (1)"}),(0,a.jsx)("option",{children:"kein Container (2)"}),(0,a.jsx)("option",{children:"Container tariert (3)"}),(0,a.jsx)("option",{children:"\xdcbergewicht (4)"}),(0,a.jsx)("option",{children:"Fertig (5)"}),(0,a.jsx)("option",{children:"Abholung (6)"}),(0,a.jsx)("option",{children:"Stillstand (7)"}),(0,a.jsx)("option",{children:"Containertausch (8)"})]})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"p-1 pl-0",children:"Min Container Gewicht"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsx)("input",{className:"border rounded w-full pl-2.5 py-0.5",defaultValue:"0",onChange:function(e){return q(e.target.value)}})}),(0,a.jsx)("td",{className:"p-1 pl-3",children:"Kunde"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsx)("select",{className:"w-full pl-2.5 py-0.5 appearance-none border rounded bg-[url('https://www.svgrepo.com/show/80156/down-arrow.svg')] bg-no-repeat bg-[length:15px] [background-position-x:95%] [background-position-y:5px]",onChange:function(e){return ie(e.target.value)},children:(0,a.jsx)("option",{children:"e-findo GmbH"})})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"p-1 pl-0",children:"Max Container Gewicht"}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsx)("input",{className:"border rounded w-full pl-2.5 py-0.5",defaultValue:"0",onChange:function(e){return A(e.target.value)}})})]}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{})}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{className:"p-1 pl-0",children:(0,a.jsx)("input",{className:"float-right border p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs",type:"submit",value:"Speichern"})})]})]}),(0,a.jsx)("button",{className:"mt-9 border p-1.5 px-3.5 font-bold border-accent-color-1 bg-accent-color-4 hover:bg-accent-color-5 sm:rounded-lg shadow-md text-xs",children:"Maschine entfernen"})]})})]})}}},function(e){e.O(0,[196,774,888,179],(function(){return n=8839,e(e.s=n);var n}));var n=e.O();_N_E=n}]);