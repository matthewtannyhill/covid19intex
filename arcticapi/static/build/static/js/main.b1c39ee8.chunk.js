(this.webpackJsonpnorthwestlabs=this.webpackJsonpnorthwestlabs||[]).push([[0],{105:function(e,a,t){},106:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(29),c=t.n(r),m=(t(78),t(79),t(45),t(39)),i=t.n(m),s=t(56),o=t(43),u=t(57),p=t(58),E=t(71),d=t(72),g=t(59),h=t.n(g),y=l.a.createContext(),b=t(11),f=t(19),v=t(109),w=t(110),x=t(111),A=t(114),N=t(115),C=t(108),O=t(60),k=t.n(O);var j=function(e){return l.a.createElement(A.a,{bg:"primary",expand:"lg"},l.a.createElement(A.a.Brand,{href:"/home"},l.a.createElement("img",{alt:"Site Icon",src:k.a}),"    ","COVID-19 Campaigns"),l.a.createElement(A.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(A.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(N.a,{className:"mr-auto"}),l.a.createElement(N.a,null,l.a.createElement(C.a,{title:"Welcome, New User",alignRight:!0,id:"basic-nav-dropdown"},l.a.createElement(C.a.Item,null,"My Account"),l.a.createElement(C.a.Divider,null),l.a.createElement(C.a.Item,{href:"#action/3.4"},"Logout")))))},B=t(14),I=t(28),G=t(22),P=t(68),D=t(40);var S=function(e){var a,t=l.a.useContext(y),n=l.a.useState(0),r=Object(I.a)(n,2),c=r[0],m=r[1],i=l.a.useState(0),s=Object(I.a)(i,2),o=s[0],u=s[1],p={},E={},d={},g=Object(B.a)(t.campaigns);try{for(g.s();!(a=g.n()).done;){var h=a.value;h.category in p?p[h.category]=p[h.category]+1:p[h.category]=1}}catch(x){g.e(x)}finally{g.f()}var f,v=Object(B.a)(t.campaigns);try{for(v.s();!(f=v.n()).done;){var w=f.value;w.currencycode in E?E[w.currencycode]=E[w.currencycode]+1:E[w.currencycode]=1}}catch(x){v.e(x)}finally{v.f()}return d.True=1,d.False=0,l.a.createElement(N.a,{className:"flex-column"},l.a.createElement("div",null,l.a.createElement("h4",null,"Filter Search")),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(G.a,{as:D.a,style:{width:"90%"}},l.a.createElement(P.a,{variant:"primary",style:{width:"90%"}},l.a.createElement(b.b,{to:"/home/",style:{color:"black"}},"All Categories")),l.a.createElement(G.a.Toggle,{split:!0,variant:"success",id:"dropdown-split-basic",style:{width:"10%"}}),l.a.createElement(G.a.Menu,null,Object.keys(p).map((function(e,a){return l.a.createElement(G.a.Item,{key:a,className:"nav-link"},l.a.createElement(b.b,{to:"/campaign-category/"+e,className:"nav-link"},l.a.createElement("i",null,e," (",p[e],")")))}))))),l.a.createElement("hr",{style:{border:"1px solid primary"}}),l.a.createElement("div",null,l.a.createElement(G.a,{as:D.a,style:{width:"90%"}},l.a.createElement(P.a,{variant:"primary",style:{width:"90%"}},l.a.createElement(b.b,{to:"/home/",style:{color:"black"}},"All Currencies")),l.a.createElement(G.a.Toggle,{split:!0,variant:"success",id:"dropdown-split-basic",style:{width:"10%"}}),l.a.createElement(G.a.Menu,null,Object.keys(E).map((function(e,a){return l.a.createElement(G.a.Item,{key:a,className:"nav-link"},l.a.createElement(b.b,{to:"/campaign-currency/"+e,className:"nav-link"},l.a.createElement("i",null,e," (",E[e],")")))}))))),l.a.createElement("hr",{style:{border:"1px solid primary"}}),l.a.createElement("div",null,l.a.createElement(b.b,{to:"/campaign-charity/1",className:"nav-link btn btn-primary",style:{width:"90%",color:"black"}},"Valid Charities")),l.a.createElement("hr",{style:{border:"1px solid primary"}}),l.a.createElement("div",null,l.a.createElement(b.b,{to:"/campaign-goal/minGoal/"+c+"/maxGoal/"+o,className:"nav-link btn btn-primary",style:{width:"90%",color:"black"}},"Apply Goal Range"),l.a.createElement("br",null),l.a.createElement("input",{onChange:function(e){return m(e.target.value)},placeholder:"Min",style:{width:"44%"}}),"-",l.a.createElement("input",{onChange:function(e){return u(e.target.value)},placeholder:"Max",style:{width:"44%"}})))},T=function(){return Object(n.useEffect)((function(){var e=document.createElement("a");e.setAttribute("class","twitter-timeline"),e.setAttribute("data-theme","dark"),e.setAttribute("data-tweet-limit","5"),e.setAttribute("data-chrome","noheader nofooter noborders"),e.setAttribute("href","https://twitter.com/AlrtCoronaVirus"),document.getElementsByClassName("twitter-embed")[0].appendChild(e);var a=document.createElement("script");a.setAttribute("src","https://platform.twitter.com/widgets.js"),document.getElementsByClassName("twitter-embed")[0].appendChild(a)}),[]),l.a.createElement("section",{className:"twitterContainer"},l.a.createElement("div",{className:"twitter-embed"}))};var F=function(e){return l.a.createElement("div",null,l.a.createElement("a",{className:"nav-link btn btn-primary",style:{width:"90%",marginBottom:"0px",color:"black"},href:"/index/"},"Predict Campaign Success"),l.a.createElement("br",null),l.a.createElement(T,null))};var R=function(e){return l.a.createElement("footer",null,l.a.createElement("div",{className:"text-center mt-5"},l.a.createElement("p",null,"\xa9 2020 COVID-19 Campaigns ")))},U=t(116),V=t(35);var Z=function(e){var a,t=l.a.useContext(y),n=Object(f.g)("/campaign/:id"),r=null,c=Object(B.a)(t.campaigns);try{for(c.s();!(a=c.n()).done;){var m=a.value;""+m.id===n.params.id&&(r=m)}}catch(i){c.e(i)}finally{c.f()}return r?l.a.createElement("div",{className:"m-4"},l.a.createElement(v.a,null,l.a.createElement("h1",null,r.title),l.a.createElement(w.a,{style:{height:"100%"}},l.a.createElement(x.a,{xs:8},l.a.createElement("div",{className:"float-right border rounded m-0 p-0",style:{width:"100%"}},l.a.createElement("img",{alt:r.name,src:r.campaign_image_url,style:{width:"100%"},className:"w-100"})),l.a.createElement("hr",{style:{color:"black",backgroundColor:"black",height:"5px"}}),l.a.createElement("p",null," ",r.category),l.a.createElement("hr",{style:{color:"black",backgroundColor:"black",height:"5px"}}),l.a.createElement("p",null," ",r.description)),l.a.createElement(x.a,{xs:4},l.a.createElement(U.a,{size:"lg",color:"secondary",style:{width:"100%"}},l.a.createElement(U.a.Body,null,l.a.createElement(U.a.Text,null,l.a.createElement(U.a.Subtitle,{className:"text-info"},"Overall Ranking: ",r.ranking),l.a.createElement("br",null),l.a.createElement(U.a.Subtitle,null,l.a.createElement(V.a,{variant:"info",now:(100*r.percent_fulfilled).toFixed(2),label:"".concat((100*r.percent_fulfilled).toFixed(2),"%"),style:{marginBottom:"5px"}}),"$",r.current_amount," raised of $",r.goal),l.a.createElement("br",null),l.a.createElement(U.a.Subtitle,null,l.a.createElement("div",null,l.a.createElement(w.a,null,l.a.createElement(x.a,null,l.a.createElement(U.a.Img,{alt:r.user_first_name,src:r.user_profile_url,style:{width:"100px",height:"100px"},className:"w-100"})),l.a.createElement(x.a,null,"Created by: ",r.user_first_name," "," "," ",r.user_last_name,"Days Active: ",r.days_active)))),l.a.createElement(P.a,{variant:"primary",href:r.url,style:{width:"100%"}},"Donate now"),l.a.createElement("br",null)))))))):l.a.createElement("h2",null,"Campaign Not Found")},L=t(112),X=t(117);var Y=function(e){return l.a.createElement(U.a,{size:"lg",color:"secondary",style:{width:"100%"}},l.a.createElement(U.a.Img,{variant:"top",src:e.campaign.campaign_image_url}),l.a.createElement(U.a.Body,null,l.a.createElement(U.a.Title,null,e.campaign.title),l.a.createElement("br",null),l.a.createElement(U.a.Text,null,l.a.createElement(U.a.Subtitle,null,e.campaign.description.length>150?"".concat(e.campaign.description.substring(0,150),"..."):e.campaign.description),l.a.createElement("br",null),l.a.createElement(U.a.Subtitle,{className:"text-info"},"Overall Ranking: ",e.campaign.ranking),l.a.createElement("br",null),l.a.createElement(U.a.Subtitle,null,l.a.createElement(V.a,{variant:"info",now:(100*e.campaign.percent_fulfilled).toFixed(2),label:"".concat((100*e.campaign.percent_fulfilled).toFixed(2),"%"),style:{marginBottom:"5px"}}),"$",e.campaign.current_amount," raised of $",e.campaign.goal)),l.a.createElement(b.b,{to:"/campaign/"+e.campaign.id,className:"btn btn-primary position-absolute",style:{top:"5px",right:"10px"}},"Details")))};var M=function(e){var a=l.a.useContext(y),t=l.a.useState(0),n=Object(I.a)(t,2),r=n[0],c=n[1],m=0,i=[],s=[],o=Object(f.g)("/campaign-category/:name"),u=Object(f.f)("/campaign-goal/minGoal/:min/maxGoal/:max"),p=Object(f.g)("/campaign-currency/:name"),E=Object(f.g)("/campaign-charity/:name");if(null!=o){var d,g=Object(B.a)(a.campaigns);try{for(g.s();!(d=g.n()).done;){var h=d.value;h.category===o.params.name&&(i.push(h),m++)}}catch(U){g.e(U)}finally{g.f()}}else if(null!=u.min&&null!=u.max){var b,w=u.min,x=u.max,A=Object(B.a)(a.campaigns);try{for(A.s();!(b=A.n()).done;){var N=b.value;N.goal>=w&&N.goal<=x&&(i.push(N),m++)}}catch(U){A.e(U)}finally{A.f()}}else if(null!=E){console.log("match_charity.params.name: ",E.params.name);var C,O=Object(B.a)(a.campaigns);try{for(O.s();!(C=O.n()).done;){var k=C.value;console.log("p.charity_valid: ",k.charity_valid),k.charity_valid==E.params.name&&(i.push(k),m++)}}catch(U){O.e(U)}finally{O.f()}}else if(null!=p){var j,G=Object(B.a)(a.campaigns);try{for(G.s();!(j=G.n()).done;){var P=j.value;P.currencycode===p.params.name&&(i.push(P),m++)}}catch(U){G.e(U)}finally{G.f()}}else{var D,S=Object(B.a)(a.campaigns);try{for(S.s();!(D=S.n()).done;){var T=D.value;i.push(T),m++}}catch(U){S.e(U)}finally{S.f()}}if(i.sort((function(e,a){return e.ranking-a.ranking})),i.length<=6)for(var F=0;F<i.length;F++)s.push(i[F]);else{r<0&&c(0),r>i.length-6&&c(r-6);for(var R=r;R<r+6;R++)s.push(i[R])}return l.a.createElement("div",null,l.a.createElement(v.a,null,l.a.createElement("br",null),l.a.createElement("div",null,"Search returned ",m," results."),l.a.createElement("br",null)),l.a.createElement(v.a,null,l.a.createElement(L.a,null,s.map((function(e,a){return l.a.createElement(Y,{key:ImageBitmapRenderingContext,campaign:e})})))),l.a.createElement(v.a,null,l.a.createElement("div",null,l.a.createElement(X.a,{className:"float-right"},l.a.createElement(X.a.Prev,{onClick:function(e){c(r-6)}},"Previous Page"),l.a.createElement(X.a.Next,{onClick:function(e){c(r+6)}},"Next Page")))))};t(105);var K=function(e){return l.a.createElement(b.a,null,l.a.createElement(v.a,{fluid:!0,className:"p-0 min-vh-100 d-flex flex-column"},l.a.createElement(w.a,{noGutters:!0,className:"flex-grow-0 flex-shrink-0 shadow-sm"},l.a.createElement(x.a,{className:"px-0 py-0 bg-primary"},l.a.createElement(j,null))),l.a.createElement(w.a,{noGutters:!0,className:"flex-grow-1"},l.a.createElement(x.a,{md:"2",className:"px-3 py-4 shadow bg-secondary"},l.a.createElement(S,null)),l.a.createElement(x.a,{md:"8",className:"bg-white"},l.a.createElement(f.c,null,l.a.createElement(f.a,{path:"/campaign-details"},l.a.createElement(Z,null)),l.a.createElement(f.a,{path:"/home"},l.a.createElement(M,null)),l.a.createElement(f.a,{path:"/campaign/:id"},l.a.createElement(Z,null)),l.a.createElement(f.a,{path:"/campaign-category/:name"},l.a.createElement(M,null)),l.a.createElement(f.a,{path:"/campaign-goal/minGoal/:min/maxGoal/:max"},l.a.createElement(M,null)),l.a.createElement(f.a,{path:"/campaign-currency/:name"},l.a.createElement(M,null)),l.a.createElement(f.a,{path:"/campaign-charity/:name"},l.a.createElement(M,null)),l.a.createElement(f.a,{path:"/"},l.a.createElement(M,null)))),l.a.createElement(x.a,{md:"2",className:"px-3 py-4 shadow bg-secondary"},l.a.createElement(F,null))),l.a.createElement(w.a,{noGutters:!0,className:"flex-grow-0 flex-shrink-0 shadow-sm"},l.a.createElement(x.a,{className:"px-0 py-0 bg-primary"},l.a.createElement(R,null)))))},_=t(113),z=function(e){Object(d.a)(t,e);var a=Object(E.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).actions={},n.state={campaigns:null},n}return Object(p.a)(t,[{key:"render",value:function(){return this.state.campaigns?l.a.createElement(y.Provider,{value:Object(o.a)({},this.state,{},this.actions)},l.a.createElement(K,null)):l.a.createElement("div",null,l.a.createElement(_.a,{animation:"border",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading...")))}},{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("http://localhost:8000/api/campaign");case 2:a=e.sent,this.setState(Object(o.a)({},this.state,{campaigns:a.data}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},45:function(e,a,t){},60:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEFElEQVRYR81XXWwUVRT+zszOtLst/aNUW4vV1ZYKxVgSI/68+EPBQLeBRGKQGNAYTKiYVB940CdN9AUTw4NpIhgx3a01CjHZoEZI0WBoZrG2aWHD6laTskXbRbstuzi7M9fcqR27s9POVivlPs797jnfnHPuud8h5Lm8PaFSpPVtEIRHATQzsDsIVC7HY4yA3wH8AoZ+JtJpVUwFo/t2TuZjmpxA3u6+BujCQRA9DcBtxcvxGKxGGJAC0A2Ib4fbt15ayMe8BGo6Q57CFewNEL0EQJrPiB2Bf7CUZsDhhITXY/tak3Y2bAl4u87VQxCPA7TOKUILEzBPD0Oj7Rdfbo1Y7eUQuDugNOuMvgKh0sn5hsoiSJMT+OEKLwGnReOk65svHGjrn4vMIjDz566zAFY5masvLcTJLTxADG3dZ/Dj1SmnI2CgcdLw8NxImARqe75zy5qk5BN27qnGI+OLJ9cCjMEX6MXYNK+7vNbwlFp5/2jHQ8YBk4DXrxwCUYc1PC21ZRhLqhi8mltD960sgjw5gYFfc1PQVFWGW4vdOBUdA7PwYqB3wu2tr5gEjKvGxCFrtXPn7z1yF1RdxwMnBpFQtSxTa0oLIU2OIxLPDn9JgYRv9rZAFgUcOBnC19ExCwV+O4QmfkWNCHj9ylEQ7bUG8N4KDz5+Yg0yGvDg54OYTmcTWF/ugZSYwPBvf2QdLZZd6N2zCS5BwO7PzmLIss/BDPgg3O57jowOp4FTzGkyHFgii9AZ0Hp7OT4diaNAFPBC4y3w1VVgdXGB4Xg0kUTw0mUc7f8J1zUNOxpXIxi5DIEIiT/TtoXBm5UqXa8mbyC0C0CXU/nIAmFPQxV211fhtiLZFh6bSiEw9DOODUSR1nQnk2ACPUPeLuV9CPS8E3qFJCK4Ze28zmfPcxLbu89gSrX/8yw/DEfIG1DOA7TBiUDH+hrsX1ftBDP2O0MRvNsXzgf7Pd3pVyaIaOVcNG8y19I6YknV/Ny7rcnMuZNlXhMtH50yYdXFbhTJLrtmFSevP6SBIMyieXvtebwRyYyGZ3sjSGU0yIKAE5vvcfKbtf/UJ99C1TS4XS4cadsIj0s0bkR/dtvWbwwB30Z4JDsCTL8JUrDcRXgTXMOlbkQjODYwsohGtNyteNkfI4PAh30NkG/0c5xuCrfvmHmO/46CrSDZVFuGKwsIEq4JBxcrSAiHwvt9r3K/2ZIsIykgZyXMD5qSDAw+/xJIMiMK/7MoBWgc84nS2VTUBZRmEfRlPsp4MbKcK2LBSZab9cAjQeLxfNKx5IPJLAlDpmekN//7aKYfnq5a9drozhkZbl3Owym/otK/G07JRW9dfDF3HJtLwpGAmZbOUClKsBXAYzPjOeoIqMgZz0Gn1WupYPRgfuP5X69HNNaGrVG4AAAAAElFTkSuQmCC"},73:function(e,a,t){e.exports=t(106)}},[[73,1,2]]]);
//# sourceMappingURL=main.b1c39ee8.chunk.js.map