(this.webpackJsonpnorthwestlabs=this.webpackJsonpnorthwestlabs||[]).push([[0],{104:function(e,a,t){},105:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(29),c=t.n(r),m=(t(77),t(78),t(44),t(38)),i=t.n(m),s=t(55),o=t(42),u=t(56),p=t(57),g=t(70),E=t(71),d=t(58),h=t.n(d),y=l.a.createContext(),v=t(11),b=t(19),f=t(109),x=t(111),w=t(112),A=t(114),N=t(115),O=t(108),C=t(59),k=t.n(C);var j=function(e){return l.a.useContext(y),l.a.createElement(A.a,{bg:"primary",expand:"lg"},l.a.createElement(A.a.Brand,{href:"/covid-home"},l.a.createElement("img",{alt:"Site Icon",src:k.a}),"    ","COVID-19 Campaigns"),l.a.createElement(A.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(A.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(N.a,{className:"mr-auto"}),l.a.createElement(N.a,null,l.a.createElement(O.a,{title:"Welcome, New User",alignRight:!0,id:"basic-nav-dropdown"},l.a.createElement(O.a.Item,null,"My Account"),l.a.createElement(O.a.Divider,null),l.a.createElement(O.a.Item,{href:"#action/3.4"},"Logout")))))},I=t(14),B=t(28),G=t(22),P=t(67),D=t(39);var S=function(e){var a,t=l.a.useContext(y),n=l.a.useState(0),r=Object(B.a)(n,2),c=r[0],m=r[1],i=l.a.useState(0),s=Object(B.a)(i,2),o=s[0],u=s[1],p={},g={},E={},d=Object(I.a)(t.campaigns);try{for(d.s();!(a=d.n()).done;){var h=a.value;h.category in p?(p[h.category]=p[h.category]+1,1):(p[h.category]=1,1)}}catch(w){d.e(w)}finally{d.f()}var b,f=Object(I.a)(t.campaigns);try{for(f.s();!(b=f.n()).done;){var x=b.value;x.currencycode in g?g[x.currencycode]=g[x.currencycode]+1:g[x.currencycode]=1}}catch(w){f.e(w)}finally{f.f()}return E.True=1,E.False=0,l.a.createElement(N.a,{className:"flex-column"},l.a.createElement("div",null,l.a.createElement("h4",null,"Filter Search")),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(G.a,{as:D.a,style:{width:"90%"}},l.a.createElement(P.a,{variant:"primary",style:{width:"90%"}},l.a.createElement(v.b,{to:"/covid-home/",style:{color:"black"}},"All Categories")),l.a.createElement(G.a.Toggle,{split:!0,variant:"success",id:"dropdown-split-basic",style:{width:"10%"}}),l.a.createElement(G.a.Menu,null,Object.keys(p).map((function(e,a){return l.a.createElement(G.a.Item,{key:a,className:"nav-link"},l.a.createElement(v.b,{to:"/campaign-category/"+e,className:"nav-link"},l.a.createElement("i",null,e," (",p[e],")")))}))))),l.a.createElement("hr",{style:{border:"1px solid primary"}}),l.a.createElement("div",null,l.a.createElement(G.a,{as:D.a,style:{width:"90%"}},l.a.createElement(P.a,{variant:"primary",style:{width:"90%"}},l.a.createElement(v.b,{to:"/covid-home/",style:{color:"black"}},"All Currencies")),l.a.createElement(G.a.Toggle,{split:!0,variant:"success",id:"dropdown-split-basic",style:{width:"10%"}}),l.a.createElement(G.a.Menu,null,Object.keys(g).map((function(e,a){return l.a.createElement(G.a.Item,{key:a,className:"nav-link"},l.a.createElement(v.b,{to:"/campaign-currency/"+e,className:"nav-link"},l.a.createElement("i",null,e," (",g[e],")")))}))))),l.a.createElement("hr",{style:{border:"1px solid primary"}}),l.a.createElement("div",null,l.a.createElement(v.b,{to:"/campaign-charity/1",className:"nav-link btn btn-primary",style:{width:"90%",color:"black"}},"Valid Charities")),l.a.createElement("hr",{style:{border:"1px solid primary"}}),l.a.createElement("div",null,l.a.createElement(v.b,{to:"/campaign-goal/minGoal/"+c+"/maxGoal/"+o,className:"nav-link btn btn-primary",style:{width:"90%",marginBottom:"0px",paddingBottom:"0px",color:"black"}},"Apply Goal Range"),l.a.createElement("br",null),l.a.createElement("input",{onChange:function(e){return m(e.target.value)},placeholder:"Min",style:{width:"44%"}}),"-",l.a.createElement("input",{onChange:function(e){return u(e.target.value)},placeholder:"Max",style:{width:"44%"}})))};var T=function(e){return l.a.createElement("div",null,l.a.createElement("a",{className:"nav-link btn btn-primary",style:{width:"90%",marginBottom:"0px",color:"black"},href:"/index/"},"Predict Campaign Success"))};var U=function(e){return l.a.createElement("footer",null,l.a.createElement("div",{className:"text-center mt-5"},l.a.createElement("p",null,"\xa9 2020 COVID-19 Campaigns ")))};var F=function(e){var a,t=l.a.useContext(y),n=Object(b.g)("/campaign/:id"),r=null,c=Object(I.a)(t.campaigns);try{for(c.s();!(a=c.n()).done;){var m=a.value;""+m.id===n.params.id&&(r=m)}}catch(i){c.e(i)}finally{c.f()}return r?l.a.createElement("div",{className:"m-4"},l.a.createElement("div",{className:"float-right border rounded m-0 p-0",style:{width:"300px",height:"300px"}},l.a.createElement("img",{alt:r.name,src:r.campaign_image_url,style:{width:"300px",height:"300px"},className:"w-100"})),l.a.createElement("h1",null,r.title),l.a.createElement("h2",null,"$",r.url),l.a.createElement("p",null," ",r.description)):l.a.createElement("h2",null,"Campaign Not Found")},R=t(110),Z=t(117),L=t(116);var M=function(e){return l.a.createElement(L.a,{size:"lg",color:"secondary",style:{width:"100%"}},l.a.createElement(L.a.Img,{variant:"top",src:e.campaign.campaign_image_url}),l.a.createElement(L.a.Body,null,l.a.createElement(L.a.Title,null,e.campaign.title),l.a.createElement(L.a.Text,null,l.a.createElement(L.a.Subtitle,null,"Goal:$",e.campaign.goal),l.a.createElement("br",null),l.a.createElement(L.a.Subtitle,null,"Num Hearts:$",e.campaign.campaign_hearts),l.a.createElement("br",null),l.a.createElement(L.a.Subtitle,null,"Charity:$",e.campaign.charity_name),l.a.createElement("br",null),l.a.createElement(L.a.Subtitle,null,"Metrics:$",e.campaign.goal)),l.a.createElement(v.b,{to:"/campaign/"+e.campaign.id,className:"btn btn-primary position-absolute",style:{top:"5px",right:"10px"}},"Details")))};var V=function(e){var a=l.a.useContext(y),t=l.a.useState(0),n=Object(B.a)(t,2),r=n[0],c=n[1],m=0,i=[],s=[],o=Object(b.g)("/campaign-category/:name"),u=Object(b.f)("/campaign-goal/minGoal/:min/maxGoal/:max"),p=Object(b.g)("/campaign-currency/:name"),g=Object(b.g)("/campaign-charity/:name");if(null!=o){var E,d=Object(I.a)(a.campaigns);try{for(d.s();!(E=d.n()).done;){var h=E.value;h.category===o.params.name&&(i.push(h),m++)}}catch(L){d.e(L)}finally{d.f()}}else if(null!=u.min&&null!=u.max){var v,x=u.min,w=u.max,A=Object(I.a)(a.campaigns);try{for(A.s();!(v=A.n()).done;){var N=v.value;N.goal>=x&&N.goal<=w&&(i.push(N),m++)}}catch(L){A.e(L)}finally{A.f()}}else if(null!=g){var O,C=Object(I.a)(a.campaigns);try{for(C.s();!(O=C.n()).done;){var k=O.value;k.charity_valid==g.params.name&&(i.push(k),m++)}}catch(L){C.e(L)}finally{C.f()}}else if(null!=p){var j,G=Object(I.a)(a.campaigns);try{for(G.s();!(j=G.n()).done;){var P=j.value;P.currencycode===p.params.name&&(i.push(P),m++)}}catch(L){G.e(L)}finally{G.f()}}else{var D,S=Object(I.a)(a.campaigns);try{for(S.s();!(D=S.n()).done;){var T=D.value;i.push(T),m++}}catch(L){S.e(L)}finally{S.f()}}if(i.length<=6)for(var U=0;U<i.length;U++)s.push(i[U]);else{r<0&&c(0),r>i.length-6&&c(r-6);for(var F=r;F<r+6;F++)s.push(i[F])}return l.a.createElement("div",null,l.a.createElement(f.a,null,l.a.createElement("br",null),l.a.createElement("div",null,"Search returned ",m," results."),l.a.createElement("br",null)),l.a.createElement(f.a,null,l.a.createElement(R.a,null,s.map((function(e,a){return l.a.createElement(M,{key:ImageBitmapRenderingContext,campaign:e})})))),l.a.createElement(f.a,null,l.a.createElement("div",null,l.a.createElement(Z.a,{className:"float-right"},l.a.createElement(Z.a.Prev,{onClick:function(e){c(r-6)}},"Previous Page"),l.a.createElement(Z.a.Next,{onClick:function(e){c(r+6)}},"Next Page")))))};t(104);var X=function(e){return l.a.createElement(v.a,null,l.a.createElement(f.a,{fluid:!0,className:"p-0 min-vh-100 d-flex flex-column"},l.a.createElement(x.a,{noGutters:!0,className:"flex-grow-0 flex-shrink-0 shadow-sm"},l.a.createElement(w.a,{className:"px-0 py-0 bg-primary"},l.a.createElement(j,null))),l.a.createElement(x.a,{noGutters:!0,className:"flex-grow-1"},l.a.createElement(w.a,{md:"2",className:"px-3 py-4 shadow bg-secondary"},l.a.createElement(S,null)),l.a.createElement(w.a,{md:"8",className:"bg-white"},l.a.createElement(b.c,null,l.a.createElement(b.a,{path:"/campaign-details"},l.a.createElement(F,null)),l.a.createElement(b.a,{path:"/covid-home"},l.a.createElement(V,null)),l.a.createElement(b.a,{path:"/campaign/:id"},l.a.createElement(F,null)),l.a.createElement(b.a,{path:"/campaign-category/:name"},l.a.createElement(V,null)),l.a.createElement(b.a,{path:"/campaign-goal/minGoal/:min/maxGoal/:max"},l.a.createElement(V,null)),l.a.createElement(b.a,{path:"/campaign-currency/:name"},l.a.createElement(V,null)),l.a.createElement(b.a,{path:"/campaign-charity/:name"},l.a.createElement(V,null)),l.a.createElement(b.a,{path:"/"},l.a.createElement(V,null)))),l.a.createElement(w.a,{md:"2",className:"px-3 py-4 shadow bg-secondary"},l.a.createElement(T,null))),l.a.createElement(x.a,{noGutters:!0,className:"flex-grow-0 flex-shrink-0 shadow-sm"},l.a.createElement(w.a,{className:"px-0 py-0 bg-primary"},l.a.createElement(U,null)))))},Y=t(113),K=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).actions={},n.state={campaigns:null},n}return Object(p.a)(t,[{key:"render",value:function(){return this.state.campaigns?l.a.createElement(y.Provider,{value:Object(o.a)({},this.state,{},this.actions)},l.a.createElement(X,null)):l.a.createElement("div",null,l.a.createElement(Y.a,{animation:"border",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading...")))}},{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("http://localhost:8000/api/campaign");case 2:a=e.sent,this.setState(Object(o.a)({},this.state,{campaigns:a.data}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},44:function(e,a,t){},59:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEFElEQVRYR81XXWwUVRT+zszOtLst/aNUW4vV1ZYKxVgSI/68+EPBQLeBRGKQGNAYTKiYVB940CdN9AUTw4NpIhgx3a01CjHZoEZI0WBoZrG2aWHD6laTskXbRbstuzi7M9fcqR27s9POVivlPs797jnfnHPuud8h5Lm8PaFSpPVtEIRHATQzsDsIVC7HY4yA3wH8AoZ+JtJpVUwFo/t2TuZjmpxA3u6+BujCQRA9DcBtxcvxGKxGGJAC0A2Ib4fbt15ayMe8BGo6Q57CFewNEL0EQJrPiB2Bf7CUZsDhhITXY/tak3Y2bAl4u87VQxCPA7TOKUILEzBPD0Oj7Rdfbo1Y7eUQuDugNOuMvgKh0sn5hsoiSJMT+OEKLwGnReOk65svHGjrn4vMIjDz566zAFY5masvLcTJLTxADG3dZ/Dj1SmnI2CgcdLw8NxImARqe75zy5qk5BN27qnGI+OLJ9cCjMEX6MXYNK+7vNbwlFp5/2jHQ8YBk4DXrxwCUYc1PC21ZRhLqhi8mltD960sgjw5gYFfc1PQVFWGW4vdOBUdA7PwYqB3wu2tr5gEjKvGxCFrtXPn7z1yF1RdxwMnBpFQtSxTa0oLIU2OIxLPDn9JgYRv9rZAFgUcOBnC19ExCwV+O4QmfkWNCHj9ylEQ7bUG8N4KDz5+Yg0yGvDg54OYTmcTWF/ugZSYwPBvf2QdLZZd6N2zCS5BwO7PzmLIss/BDPgg3O57jowOp4FTzGkyHFgii9AZ0Hp7OT4diaNAFPBC4y3w1VVgdXGB4Xg0kUTw0mUc7f8J1zUNOxpXIxi5DIEIiT/TtoXBm5UqXa8mbyC0C0CXU/nIAmFPQxV211fhtiLZFh6bSiEw9DOODUSR1nQnk2ACPUPeLuV9CPS8E3qFJCK4Ze28zmfPcxLbu89gSrX/8yw/DEfIG1DOA7TBiUDH+hrsX1ftBDP2O0MRvNsXzgf7Pd3pVyaIaOVcNG8y19I6YknV/Ny7rcnMuZNlXhMtH50yYdXFbhTJLrtmFSevP6SBIMyieXvtebwRyYyGZ3sjSGU0yIKAE5vvcfKbtf/UJ99C1TS4XS4cadsIj0s0bkR/dtvWbwwB30Z4JDsCTL8JUrDcRXgTXMOlbkQjODYwsohGtNyteNkfI4PAh30NkG/0c5xuCrfvmHmO/46CrSDZVFuGKwsIEq4JBxcrSAiHwvt9r3K/2ZIsIykgZyXMD5qSDAw+/xJIMiMK/7MoBWgc84nS2VTUBZRmEfRlPsp4MbKcK2LBSZab9cAjQeLxfNKx5IPJLAlDpmekN//7aKYfnq5a9drozhkZbl3Owym/otK/G07JRW9dfDF3HJtLwpGAmZbOUClKsBXAYzPjOeoIqMgZz0Gn1WupYPRgfuP5X69HNNaGrVG4AAAAAElFTkSuQmCC"},72:function(e,a,t){e.exports=t(105)}},[[72,1,2]]]);
//# sourceMappingURL=main.403ca885.chunk.js.map